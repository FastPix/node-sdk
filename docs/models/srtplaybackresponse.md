# SrtPlaybackResponse

This object contains the livestream playback response details for SRT Protocol

## Example Usage

```typescript
import { SrtPlaybackResponse } from "@fastpix/fastpix-node/models";

let value: SrtPlaybackResponse = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `srtPlaybackStreamId`                                                                                                        | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | A unique identifier for the SRT playback stream. This ID is used to distinguish between different playback streams           |
| `srtPlaybackSecret`                                                                                                          | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | A playback secret used for securing the SRT playback stream. This ensures that only authorized users can access the playback |