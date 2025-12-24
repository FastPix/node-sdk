# UpdateDomainRestrictionsResponseBody

Successfully updated domain restrictions

## Example Usage

```typescript
import { UpdateDomainRestrictionsResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: UpdateDomainRestrictionsResponseBody = {
  success: true,
  data: {
    defaultPolicy: "allow",
    allow: [
      "yourdomain.com",
      "yourworkdomain.com",
    ],
    deny: [
      "sampledomain.com",
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `success`                                                                                          | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Shows the request status. Returns true for success and false for failure.                          | true                                                                                               |
| `data`                                                                                             | [operations.UpdateDomainRestrictionsData](../../models/operations/updatedomainrestrictionsdata.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |