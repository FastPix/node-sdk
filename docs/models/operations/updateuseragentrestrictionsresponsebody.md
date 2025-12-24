# UpdateUserAgentRestrictionsResponseBody

Successfully updated user-agent restrictions

## Example Usage

```typescript
import { UpdateUserAgentRestrictionsResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: UpdateUserAgentRestrictionsResponseBody = {
  success: true,
  data: {
    defaultPolicy: "allow",
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Shows the request status. Returns true for success and false for failure.                                | true                                                                                                     |
| `data`                                                                                                   | [operations.UpdateUserAgentRestrictionsData](../../models/operations/updateuseragentrestrictionsdata.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |