# InputMediaSettings

Contains configuration details for input media settings.

## Example Usage

```typescript
import { InputMediaSettings } from "@fastpix/fastpix-node/models";

let value: InputMediaSettings = {
  metadata: {
    "livestream_name": "fastpix_livestream",
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `maxResolution`                                                                                                   | [models.CreateLiveStreamRequestMaxResolution](../models/createlivestreamrequestmaxresolution.md)                  | :heavy_minus_sign:                                                                                                | Defines the maximum resolution for encoding, storage, and playback of the live stream.<br/>                       |                                                                                                                   |
| `reconnectWindow`                                                                                                 | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | Time period (in seconds) FastPix waits to reconnect before ending the stream when disconnected.<br/>              | 60                                                                                                                |
| `mediaPolicy`                                                                                                     | [models.BasicAccessPolicy](../models/basicaccesspolicy.md)                                                        | :heavy_minus_sign:                                                                                                | Basic access policy for media content                                                                             |                                                                                                                   |
| `metadata`                                                                                                        | Record<string, *string*>                                                                                          | :heavy_minus_sign:                                                                                                | Custom key–value pairs for tagging livestreams.  <br/>Allows up to 10 entries with a maximum of 255 characters each.<br/> | {<br/>"livestream_name": "fastpix_livestream"<br/>}                                                               |
| `enableDvrMode`                                                                                                   | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | Enables DVR (Digital Video Recorder) functionality, allowing viewers to pause, rewind, and resume live playback.<br/> |                                                                                                                   |