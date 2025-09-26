# CreateLiveStreamRequest

## Example Usage

```typescript
import { CreateLiveStreamRequest } from "@fastpix/fastpix-node/models";

let value: CreateLiveStreamRequest = {
  playbackSettings: {
    accessPolicy: "public",
  },
  inputMediaSettings: {
    mediaPolicy: "public",
    metadata: {
      "livestream_name": "fastpix_livestream",
    },
    enableDvrMode: true,
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `playbackSettings`                                           | [models.PlaybackSettings](../models/playbacksettings.md)     | :heavy_check_mark:                                           | Displays the result of the playback settings.                |
| `inputMediaSettings`                                         | [models.InputMediaSettings](../models/inputmediasettings.md) | :heavy_check_mark:                                           | Displays the result of the input Media settings.             |