# SimulcastRequest

## Example Usage

```typescript
import { SimulcastRequest } from "@fastpix/fastpix-node/models";

let value: SimulcastRequest = {
  url: "rtmp://hyd01.contribute.live-video.net/app/",
  streamKey: "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
  metadata: {
    "livestream_name": "Tech-Connect Summit",
  },
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                | Example                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                                                      | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The RTMPS hostname, combined with the application name, is crucial for connecting to third-party live streaming services and transmitting the live stream. | rtmp://hyd01.contribute.live-video.net/app/                                                                                                                |
| `streamKey`                                                                                                                                                | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | A unique stream key is generated for streaming, allowing the user to start streaming on any third-party platform using this key.                           | live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk                                                                                                             |
| `metadata`                                                                                                                                                 | Record<string, *string*>                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | You can search for videos with specific key-value pairs using metadata, when you tag a video in "key":"value" pairs.                                       | {<br/>"livestream_name": "Tech-Connect Summit"<br/>}                                                                                                       |