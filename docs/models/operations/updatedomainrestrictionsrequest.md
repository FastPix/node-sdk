# UpdateDomainRestrictionsRequest

## Example Usage

```typescript
import { UpdateDomainRestrictionsRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateDomainRestrictionsRequest = {
  mediaId: "your-media-id",
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
| `mediaId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | your-media-id                                                                             |
| `playbackId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | your-playback-id                                                                             |
| `body`                                                                                                           | [operations.UpdateDomainRestrictionsRequestBody](../../models/operations/updatedomainrestrictionsrequestbody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |