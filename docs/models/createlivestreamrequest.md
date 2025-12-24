# CreateLiveStreamRequest

## Example Usage

```typescript
import { CreateLiveStreamRequest } from "@fastpix/fastpix-node/models";

let value: CreateLiveStreamRequest = {
  playbackSettings: {},
  inputMediaSettings: {
    metadata: {
      "livestream_name": "fastpix_livestream",
    },
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `playbackSettings`                                           | [models.PlaybackSettings](../models/playbacksettings.md)     | :heavy_check_mark:                                           | Displays the result of the playback settings.                |
| `inputMediaSettings`                                         | [models.InputMediaSettings](../models/inputmediasettings.md) | :heavy_check_mark:                                           | Contains configuration details for input media settings.     |