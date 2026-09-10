# UpdateLiveStreamDomainRestrictionsRequest

## Example Usage

```typescript
import { UpdateLiveStreamDomainRestrictionsRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateLiveStreamDomainRestrictionsRequest = {
  streamId: "your-stream-id",
  playbackId: "your-playback-id",
  body: {
    allow: [
      "yourdomain.com",
      "sampledomain.com",
    ],
    deny: [
      "yourworkdomain.com",
    ],
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `streamId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | your-stream-id                                                                             |
| `playbackId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | your-playback-id                                                                             |
| `body`                                                                                                           | [operations.UpdateLiveStreamDomainRestrictionsRequestBody](../../models/operations/updatelivestreamdomainrestrictionsrequestbody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |