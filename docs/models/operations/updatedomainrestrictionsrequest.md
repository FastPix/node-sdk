# UpdateDomainRestrictionsRequest

## Example Usage

```typescript
import { UpdateDomainRestrictionsRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateDomainRestrictionsRequest = {
  mediaId: "5ebfa8f7-3ff1-4a35-8b1a-d3a16e22184c",
  playbackId: "0199deff-9aef-457e-9461-7a28afdf8773",
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
| `mediaId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | 5ebfa8f7-3ff1-4a35-8b1a-d3a16e22184c                                                                             |
| `playbackId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | 0199deff-9aef-457e-9461-7a28afdf8773                                                                             |
| `body`                                                                                                           | [operations.UpdateDomainRestrictionsRequestBody](../../models/operations/updatedomainrestrictionsrequestbody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |