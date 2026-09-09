import { describe, it, expect } from "vitest";

import { Fastpix } from "../src/sdk/sdk.js";
import { HTTPClient } from "../src/lib/http.js";
import { FastpixDefaultError } from "../src/models/errors/fastpixdefaulterror.js";

/**
 * The async paths must actually raise on error responses (the Python sync found
 * async 4XX/5XX silently returning null when the raise helper wasn't awaited).
 * Node is async-only; these assert a 4XX and a 5XX both reject with the typed
 * default error. 5XX is retried by default, so retries are disabled to reach the
 * raise deterministically.
 */

function clientReturning(status: number, body: unknown): Fastpix {
  const fetcher = async () =>
    new Response(JSON.stringify(body), {
      status,
      headers: { "content-type": "application/json" },
    });
  return new Fastpix({
    security: { username: "u", password: "p" },
    serverURL: "https://x.test/v1/",
    httpClient: new HTTPClient({ fetcher }),
  });
}

const noRetries = { retries: { strategy: "none" as const } };

describe("async error paths raise typed errors", () => {
  it("updateDomainRestrictions rejects on 4XX", async () => {
    const c = clientReturning(403, {
      success: false,
      error: { code: 403, message: "forbidden" },
    });
    await expect(
      c.livePlayback.updateDomainRestrictions({
        streamId: "s",
        playbackId: "p",
        body: { defaultPolicy: "allow" },
      }),
    ).rejects.toBeInstanceOf(FastpixDefaultError);
  });

  it("updateDomainRestrictions rejects on 5XX", async () => {
    const c = clientReturning(500, { success: false });
    await expect(
      c.livePlayback.updateDomainRestrictions(
        { streamId: "s", playbackId: "p", body: { defaultPolicy: "allow" } },
        noRetries,
      ),
    ).rejects.toBeInstanceOf(FastpixDefaultError);
  });

  it("updateUserAgentRestrictions rejects on 4XX", async () => {
    const c = clientReturning(401, {
      success: false,
      error: { code: 401, message: "unauthorized" },
    });
    await expect(
      c.livePlayback.updateUserAgentRestrictions({
        streamId: "s",
        playbackId: "p",
        body: { defaultPolicy: "deny" },
      }),
    ).rejects.toBeInstanceOf(FastpixDefaultError);
  });

  it("the on-demand pair still raises on 4XX (parity)", async () => {
    const c = clientReturning(403, {
      success: false,
      error: { code: 403, message: "forbidden" },
    });
    await expect(
      c.playback.updateDomainRestrictions({
        mediaId: "m",
        playbackId: "p",
        body: { defaultPolicy: "allow" },
      }),
    ).rejects.toBeInstanceOf(FastpixDefaultError);
  });
});
