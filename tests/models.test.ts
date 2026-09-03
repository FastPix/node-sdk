import { describe, it, expect } from "vitest";

import { GetAllMediaResponse$inboundSchema } from "../src/models/getallmediaresponse.js";
import { GetMediaDetailResponse$inboundSchema } from "../src/models/getmediadetailresponse.js";
import { LiveMediaClips$inboundSchema } from "../src/models/livemediaclips.js";
import { MediaClipResponseData$inboundSchema } from "../src/models/mediaclipresponse.js";
import { UpdateMedia$inboundSchema } from "../src/models/updatemedia.js";
import { SourceAccessMedia$inboundSchema } from "../src/models/sourceaccessmedia.js";
import { Media$inboundSchema } from "../src/models/media.js";
import { PlaylistByIdResponseMediaListItem$inboundSchema } from "../src/models/playlistbyidresponsemedialistitem.js";

const durationModels: Array<[string, { safeParse: (v: unknown) => any }]> = [
  ["GetAllMediaResponse", GetAllMediaResponse$inboundSchema],
  ["GetMediaDetailResponse", GetMediaDetailResponse$inboundSchema],
  ["LiveMediaClips", LiveMediaClips$inboundSchema],
  ["MediaClipResponseData", MediaClipResponseData$inboundSchema],
  ["UpdateMedia", UpdateMedia$inboundSchema],
  ["SourceAccessMedia", SourceAccessMedia$inboundSchema],
  ["Media", Media$inboundSchema],
  ["PlaylistByIdResponseMediaListItem", PlaylistByIdResponseMediaListItem$inboundSchema],
];

describe("media duration is a number of seconds", () => {
  for (const [name, schema] of durationModels) {
    describe(name, () => {
      it("parses fractional seconds as a number", () => {
        const r = schema.safeParse({ duration: 145.821315 });
        expect(r.success).toBe(true);
        expect(r.data.duration).toBe(145.821315);
        expect(typeof r.data.duration).toBe("number");
      });

      it("parses integer seconds as a number", () => {
        const r = schema.safeParse({ duration: 10 });
        expect(r.success).toBe(true);
        expect(r.data.duration).toBe(10);
      });

      it("treats absent duration as undefined", () => {
        const r = schema.safeParse({});
        expect(r.success).toBe(true);
        expect(r.data.duration).toBeUndefined();
      });

      it("rejects a legacy HH:MM:SS clock string", () => {
        const r = schema.safeParse({ duration: "00:02:25" });
        expect(r.success).toBe(false);
        const paths = r.error.issues.map((i: { path: Array<PropertyKey> }) => i.path.join("."));
        expect(paths).toContain("duration");
      });

      it("round-trips a numeric duration as JSON number", () => {
        const r = schema.safeParse({ duration: 145.82 });
        expect(r.success).toBe(true);
        const roundTripped = JSON.parse(JSON.stringify(r.data));
        expect(roundTripped.duration).toBe(145.82);
        expect(typeof roundTripped.duration).toBe("number");
      });
    });
  }
});

import {
  InputMediaSettings$outboundSchema,
  CreateLiveStreamRequest$outboundSchema,
} from "../src/models/createlivestreamrequest.js";

describe("enableRecording on live stream input settings", () => {
  it("omits enableRecording when not set", () => {
    const out = InputMediaSettings$outboundSchema.parse({});
    expect("enableRecording" in out).toBe(false);
  });

  it("serializes enableRecording false", () => {
    const out = InputMediaSettings$outboundSchema.parse({ enableRecording: false });
    expect(out.enableRecording).toBe(false);
  });

  it("round-trips enableRecording true", () => {
    const out = InputMediaSettings$outboundSchema.parse({ enableRecording: true });
    expect(out.enableRecording).toBe(true);
  });

  it("carries inputMediaSettings.enableRecording through the stream request", () => {
    const out = CreateLiveStreamRequest$outboundSchema.parse({
      playbackSettings: { accessPolicy: "public" },
      inputMediaSettings: { enableRecording: false },
    });
    expect(out.inputMediaSettings.enableRecording).toBe(false);
  });
});

import { PlaybackIdRequest$outboundSchema } from "../src/models/playbackidrequest.js";
import { PlaybackSettings$outboundSchema } from "../src/models/playbacksettings.js";
import { PlaybackIdSuccessResponseData$inboundSchema } from "../src/models/playbackidsuccessresponse.js";
import { PlaybackIdResponse$inboundSchema } from "../src/models/playbackidresponse.js";

const accessRestrictionsExample = {
  domains: { defaultPolicy: "deny", allow: ["example.com"], deny: [] },
  userAgents: { defaultPolicy: "allow", allow: [], deny: [] },
};

describe("accessRestrictions on live playback models (outbound)", () => {
  it("serializes accessRestrictions with exact wire aliases on playback-ID request", () => {
    const out = PlaybackIdRequest$outboundSchema.parse({
      accessPolicy: "public",
      accessRestrictions: accessRestrictionsExample,
    });
    expect(out.accessRestrictions.domains.defaultPolicy).toBe("deny");
    expect(out.accessRestrictions.domains.allow).toEqual(["example.com"]);
    expect(out.accessRestrictions.userAgents.defaultPolicy).toBe("allow");
    const json = JSON.parse(JSON.stringify(out));
    expect(json.accessRestrictions.userAgents).toBeDefined();
  });

  it("serializes accessRestrictions on playback settings", () => {
    const out = PlaybackSettings$outboundSchema.parse({
      accessPolicy: "public",
      accessRestrictions: accessRestrictionsExample,
    });
    expect(out.accessRestrictions.domains.allow).toEqual(["example.com"]);
  });

  it("omits accessRestrictions when unset", () => {
    const out = PlaybackIdRequest$outboundSchema.parse({ accessPolicy: "public" });
    expect("accessRestrictions" in out).toBe(false);
  });
});

describe("accessRestrictions on live playback models (inbound)", () => {
  it("parses accessRestrictions on playback-ID success response data", () => {
    const r = PlaybackIdSuccessResponseData$inboundSchema.safeParse({
      id: "p1",
      accessPolicy: "public",
      accessRestrictions: accessRestrictionsExample,
    });
    expect(r.success).toBe(true);
    expect(r.data.accessRestrictions.domains.defaultPolicy).toBe("deny");
    expect(r.data.accessRestrictions.userAgents.defaultPolicy).toBe("allow");
  });

  it("parses accessRestrictions on playback-ID response item", () => {
    const r = PlaybackIdResponse$inboundSchema.safeParse({
      id: "p1",
      accessRestrictions: accessRestrictionsExample,
    });
    expect(r.success).toBe(true);
    expect(r.data.accessRestrictions.domains.allow).toEqual(["example.com"]);
  });

  it("leaves accessRestrictions undefined when absent", () => {
    const r = PlaybackIdSuccessResponseData$inboundSchema.safeParse({ id: "p1" });
    expect(r.success).toBe(true);
    expect(r.data.accessRestrictions).toBeUndefined();
  });
});
