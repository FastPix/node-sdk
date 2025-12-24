# UpdateDomainRestrictionsRequestBody

## Example Usage

```typescript
import { UpdateDomainRestrictionsRequestBody } from "@fastpix/fastpix-node/models/operations";

let value: UpdateDomainRestrictionsRequestBody = {
  allow: [
    "yourdomain.com",
    "sampledomain.com",
  ],
  deny: [
    "yourworkdomain.com",
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `defaultPolicy`                                                                                                      | [operations.UpdateDomainRestrictionsDefaultPolicy](../../models/operations/updatedomainrestrictionsdefaultpolicy.md) | :heavy_minus_sign:                                                                                                   | Specify the fallback behavior for domains that are not listed in the `allow` or `deny` lists.                        | allow                                                                                                                |
| `allow`                                                                                                              | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | List of domains explicitly allowed to play the media.                                                                | [<br/>"yourdomain.com",<br/>"sampledomain.com"<br/>]                                                                 |
| `deny`                                                                                                               | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | List of domains explicitly denied from accessing the media.                                                          | [<br/>"yourworkdomain.com"<br/>]                                                                                     |