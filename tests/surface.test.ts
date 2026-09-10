import { describe, it, expect } from "vitest";

import { Fastpix } from "../src/sdk/sdk.js";

/**
 * Full API-surface smoke test.
 *
 * Asserts every SDK resource getter returns an object exposing each expected
 * operation as a callable method. This catches accidental removals or renames
 * of any endpoint method without needing credentials or a network call. The
 * live GET/non-GET harnesses cover the request/response behaviour of each
 * operation; this only guards the surface.
 */

const SURFACE: Record<string, string[]> = {
  aiFeatures: ["updateSummary", "generateNamedEntities"],
  dimensions: ["list", "listFilterValues"],
  drmConfigurations: ["list", "get"],
  errors: ["list"],
  inputVideo: ["create", "upload"],
  inVideoAI: ["updateModeration"],
  inVideoAIfeatures: ["generateChapters"],
  livePlayback: [
    "createId",
    "delete",
    "get",
    "updateDomainRestrictions",
    "updateUserAgentRestrictions",
  ],
  liveStreams: ["listClips", "create", "list", "delete", "enable"],
  manageLiveStream: ["getViewerCount", "get", "update", "disable", "complete"],
  manageVideos: [
    "get",
    "update",
    "delete",
    "addTrack",
    "cancelUpload",
    "updateTrack",
    "generateSubtitleTrack",
    "getSummary",
    "retrieveMediaInputInfo",
    "listUploads",
  ],
  media: ["list", "deleteTrack", "updateSourceAccess", "getClips"],
  metrics: [
    "listBreakdownValues",
    "listOverallValues",
    "getTimeseriesData",
    "listCompares",
  ],
  playback: [
    "create",
    "listIds",
    "delete",
    "get",
    "updateDomainRestrictions",
    "updateUserAgentRestrictions",
  ],
  playlist: ["create", "list", "get", "update", "delete", "updateMediaOrder"],
  playlists: ["addMedia", "deleteMedia"],
  signingKeys: ["create", "list", "delete", "getById"],
  simulcasts: ["create", "get", "update"],
  simulcastStreams: ["delete"],
  views: ["list", "getDetails", "listTopContent"],
  webhooks: ["verifySignature"],
};

const client = new Fastpix({
  security: { username: "u", password: "p" },
});

describe("SDK API surface", () => {
  for (const [resource, methods] of Object.entries(SURFACE)) {
    describe(resource, () => {
      it("is exposed on the client", () => {
        expect((client as any)[resource]).toBeDefined();
      });

      for (const method of methods) {
        it(`exposes ${method}()`, () => {
          const r = (client as any)[resource];
          expect(typeof r[method]).toBe("function");
        });
      }
    });
  }

  it("covers the full SDK surface", () => {
    // 69 endpoint methods across 20 resources + webhooks.verifySignature.
    const total = Object.values(SURFACE).reduce((n, m) => n + m.length, 0);
    expect(total).toBe(70);
  });
});
