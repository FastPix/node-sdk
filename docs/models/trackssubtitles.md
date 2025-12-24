# TracksSubtitles

## Example Usage

```typescript
import { TracksSubtitles } from "@fastpix/fastpix-node/models";

let value: TracksSubtitles = {
  status: "preparing",
  url: "https://stream.fastpix.io/subtitles/abc123.vtt",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `status`                                                        | *string*                                                        | :heavy_minus_sign:                                              | Current status of the generated subtitle track.                 | preparing                                                       |
| `url`                                                           | *string*                                                        | :heavy_minus_sign:                                              | URL of the generated subtitle file (VTT). Null while preparing. | https://stream.fastpix.io/subtitles/abc123.vtt                  |