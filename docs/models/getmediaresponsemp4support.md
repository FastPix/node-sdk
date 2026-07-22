# GetMediaResponseMp4Support

A single generated MP4 rendition returned by the API.

`mp4Support` comes back as an ARRAY of these renditions. The request side is unchanged —
enabling MP4 support still takes a single string (`none`, `capped_4k`, `audioOnly`, or
`audioOnly,capped_4k`).

## Example Usage

```typescript
import { GetMediaResponseMp4Support } from "@fastpix/fastpix-node/models";

let value: GetMediaResponseMp4Support = {
  type: "capped_4k",
  status: "ready",
  height: 1080,
  width: 1920,
  ext: "mp4",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| `type`                                                                                         | [models.GetMediaResponseMp4SupportType](../models/getmediaresponsemp4supporttype.md)           | :heavy_minus_sign:                                                                             | The MP4 rendition type. `capped_4k` is a downloadable MP4 video capped at 4K resolution, `audioOnly` is a downloadable m4a audio-only file. | capped_4k                                                                                      |
| `status`                                                                                       | [models.GetMediaResponseMp4SupportStatus](../models/getmediaresponsemp4supportstatus.md)       | :heavy_minus_sign:                                                                             | Generation status of this MP4 rendition.                                                       | ready                                                                                          |
| `height`                                                                                       | *number*                                                                                       | :heavy_minus_sign:                                                                             | Pixel height of the rendition. Omitted for the `audioOnly` type.                               | 1080                                                                                           |
| `width`                                                                                        | *number*                                                                                       | :heavy_minus_sign:                                                                             | Pixel width of the rendition. Omitted for the `audioOnly` type.                                | 1920                                                                                           |
| `ext`                                                                                          | [models.GetMediaResponseMp4SupportExt](../models/getmediaresponsemp4supportext.md)             | :heavy_minus_sign:                                                                             | File extension of the downloadable rendition.                                                  | mp4                                                                                            |
