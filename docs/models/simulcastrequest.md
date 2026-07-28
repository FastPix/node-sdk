# SimulcastRequest

## Example Usage

```typescript
import { SimulcastRequest } from "@fastpix/fastpix-node/models";

let value: SimulcastRequest = {
  url: "your-rtmp-url",
  streamKey: "your-stream-key",
  metadata: {
    "livestream_name": "Tech-Connect Summit",
  },
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                | Example                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                                                      | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The RTMPS hostname, combined with the application name, is crucial for connecting to third-party live streaming services and transmitting the live stream. | your-rtmp-url                                                                                                                |
| `streamKey`                                                                                                                                                | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | A unique stream key is generated for streaming, allowing the user to start streaming on any third-party platform using this key.                           | your-stream-key                                                                                                             |
| `metadata`                                                                                                                                                 | Record<string, *string*>                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | You can search for videos with specific key-value pairs using metadata, when you tag a video in "key":"value" pairs.                                       | {<br/>"livestream_name": "Tech-Connect Summit"<br/>}                                                                                                       |