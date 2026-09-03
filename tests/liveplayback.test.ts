import { describe, it, expect } from "vitest";

import { Fastpix } from "../src/sdk/sdk.js";
import { HTTPClient } from "../src/lib/http.js";
import {
  UpdateLiveStreamDomainRestrictionsRequest$outboundSchema,
  UpdateLiveStreamUserAgentRestrictionsRequest$outboundSchema,
} from "../src/models/operations/index.js";

type Captured = { method: string; url: string; contentType: string | null; body: any };

function clientCapturing(captured: Captured[]): Fastpix {
  const fetcher = async (req: Request): Promise<Response> => {
    captured.push({
      method: req.method,
      url: req.url,
      contentType: req.headers.get("content-type"),
      body: req.body ? JSON.parse(await req.clone().text()) : undefined,
    });
    return new Response(
      JSON.stringify({
        success: true,
        data: { defaultPolicy: "allow", allow: ["yourdomain.com"], deny: [] },
      }),
      { status: 200, headers: { "content-type": "application/json" } },
    );
  };
  return new Fastpix({
    security: { username: "u", password: "p" },
    serverURL: "https://api.example.test/v1/",
    httpClient: new HTTPClient({ fetcher }),
  });
}

describe("live playback restriction endpoints", () => {
  it("PATCHes the domains path with a flat body", async () => {
    const captured: Captured[] = [];
    const client = clientCapturing(captured);
    const res = await client.livePlayback.updateDomainRestrictions({
      streamId: "s1",
      playbackId: "p1",
      body: { defaultPolicy: "allow", allow: ["yourdomain.com"], deny: ["malicioussite.io"] },
    });

    expect(captured).toHaveLength(1);
    const c = captured[0]!;
    expect(c.method).toBe("PATCH");
    expect(c.url).toBe(
      "https://api.example.test/v1/live/streams/s1/playback-ids/p1/domains",
    );
    expect(c.contentType).toBe("application/json");
    expect(c.body).toEqual({
      defaultPolicy: "allow",
      allow: ["yourdomain.com"],
      deny: ["malicioussite.io"],
    });
    // response envelope parses
    expect((res as any).success).toBe(true);
    expect((res as any).data.allow).toEqual(["yourdomain.com"]);
  });

  it("PATCHes the user-agents path with a flat body", async () => {
    const captured: Captured[] = [];
    const client = clientCapturing(captured);
    await client.livePlayback.updateUserAgentRestrictions({
      streamId: "s1",
      playbackId: "p1",
      body: { defaultPolicy: "deny", allow: ["PostmanRuntime/7.29.0"] },
    });

    const c = captured[0]!;
    expect(c.method).toBe("PATCH");
    expect(c.url).toBe(
      "https://api.example.test/v1/live/streams/s1/playback-ids/p1/user-agents",
    );
    expect(c.body).toEqual({ defaultPolicy: "deny", allow: ["PostmanRuntime/7.29.0"] });
    expect("deny" in c.body).toBe(false);
  });

  it("defaults defaultPolicy to allow and omits unset lists", () => {
    const out = UpdateLiveStreamDomainRestrictionsRequest$outboundSchema.parse({
      streamId: "s1",
      playbackId: "p1",
      body: {},
    });
    expect(out.body.defaultPolicy).toBe("allow");
    expect("allow" in out.body).toBe(false);
    expect("deny" in out.body).toBe(false);
  });

  it("request carries streamId and playbackId, never mediaId", () => {
    const out = UpdateLiveStreamUserAgentRestrictionsRequest$outboundSchema.parse({
      streamId: "s1",
      playbackId: "p1",
      body: { defaultPolicy: "allow" },
    });
    expect(out.streamId).toBe("s1");
    expect(out.playbackId).toBe("p1");
    expect("mediaId" in out).toBe(false);
  });

  it("keeps the on-demand restriction methods on the playback resource", () => {
    const captured: Captured[] = [];
    const client = clientCapturing(captured);
    expect(typeof client.playback.updateDomainRestrictions).toBe("function");
    expect(typeof client.playback.updateUserAgentRestrictions).toBe("function");
  });
});
