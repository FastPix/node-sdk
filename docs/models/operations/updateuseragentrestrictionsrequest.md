# UpdateUserAgentRestrictionsRequest

## Example Usage

```typescript
import { UpdateUserAgentRestrictionsRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateUserAgentRestrictionsRequest = {
  mediaId: "5ebfa8f7-3ff1-4a35-8b1a-d3a16e22184c",
  playbackId: "0199deff-9aef-457e-9461-7a28afdf8773",
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
| `mediaId`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | 5ebfa8f7-3ff1-4a35-8b1a-d3a16e22184c                                                                                   |
| `playbackId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | 0199deff-9aef-457e-9461-7a28afdf8773                                                                                   |
| `body`                                                                                                                 | [operations.UpdateUserAgentRestrictionsRequestBody](../../models/operations/updateuseragentrestrictionsrequestbody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |