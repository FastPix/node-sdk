# UpdateDomainRestrictionsData

## Example Usage

```typescript
import { UpdateDomainRestrictionsData } from "@fastpix/fastpix-node/models/operations";

let value: UpdateDomainRestrictionsData = {
  defaultPolicy: "allow",
  allow: [
    "yourdomain.com",
    "yourworkdomain.com",
  ],
  deny: [
    "sampledomain.com",
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `defaultPolicy`                                                                           | *string*                                                                                  | :heavy_minus_sign:                                                                        | Specify the fallback behavior for domains that are not listed in the allow or deny lists. | allow                                                                                     |
| `allow`                                                                                   | *string*[]                                                                                | :heavy_minus_sign:                                                                        | List of domains explicitly allowed to play the media.                                     | [<br/>"yourdomain.com",<br/>"yourworkdomain.com"<br/>]                                    |
| `deny`                                                                                    | *string*[]                                                                                | :heavy_minus_sign:                                                                        | List of domains explicitly denied from accessing the media.                               | [<br/>"sampledomain.com"<br/>]                                                            |