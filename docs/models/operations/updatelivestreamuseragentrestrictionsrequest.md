# UpdateLiveStreamUserAgentRestrictionsRequest

## Example Usage

```typescript
import { UpdateLiveStreamUserAgentRestrictionsRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateLiveStreamUserAgentRestrictionsRequest = {
  streamId: "your-stream-id",
  playbackId: "your-playback-id",
  body: {
    allow: [
      "Mozilla/55.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    ],
    deny: [
      "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/53745.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/537.36",
    ],
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `streamId`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | your-stream-id                                                                                   |
| `playbackId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | your-playback-id                                                                                   |
| `body`                                                                                                                 | [operations.UpdateLiveStreamUserAgentRestrictionsRequestBody](../../models/operations/updatelivestreamuseragentrestrictionsrequestbody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |