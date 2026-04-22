import type { AfterSuccessContext, AfterSuccessHook } from "./types.js";

const OUTER_MAP: Record<string, string> = {
  pt: "player_playhead_time",
  e: "event_name",
  d: "event_details",
  vt: "viewer_time",
  et: "event_time",
};

const INNER_MAP: Record<string, string> = {
  br: "bitrate",
  h: "height",
  w: "width",
  cd: "codec",
  host: "hostName",
  txt: "text",
  c: "code",
  err: "error",
  t: "type",
  u: "url",
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function remapKeys(
  obj: Record<string, unknown>,
  map: Record<string, string>,
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    const mapped = map[k] ?? k;
    out[mapped] = v;
  }
  return out;
}

export class EventsFieldRemapHook implements AfterSuccessHook {
  async afterSuccess(
    hookCtx: AfterSuccessContext,
    response: Response,
  ): Promise<Response> {
    if (hookCtx.operationID !== "get_video_view_details") {
      return response;
    }
    if (response.status < 200 || response.status >= 300) {
      return response;
    }
    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return response;
    }

    const text = await response.clone().text();
    let body: unknown;
    try {
      body = JSON.parse(text);
    } catch {
      return response;
    }

    if (!isPlainObject(body)) {
      return response;
    }
    const data = body["data"];
    if (!isPlainObject(data)) {
      return response;
    }
    const events = data["events"];
    if (!Array.isArray(events)) {
      return response;
    }

    data["events"] = events.map((evt) => {
      if (!isPlainObject(evt)) {
        return evt;
      }
      const outer = remapKeys(evt, OUTER_MAP);
      const details = outer["event_details"];
      if (isPlainObject(details)) {
        outer["event_details"] = remapKeys(details, INNER_MAP);
      }
      return outer;
    });

    return new Response(JSON.stringify(body), {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  }
}
