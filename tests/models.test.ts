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
