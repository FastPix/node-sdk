# ListPlaybackIdsDomains

## Example Usage

```typescript
import { ListPlaybackIdsDomains } from "@fastpix/fastpix-node/models/operations";

let value: ListPlaybackIdsDomains = {
  defaultPolicy: "allow",
  allow: [
    "example.com",
    "trustedsite.org",
  ],
  deny: [
    "malicioussite.io",
    "abc.net",
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `defaultPolicy`                                                                                                  | [operations.ListPlaybackIdsDomainsDefaultPolicy](../../models/operations/listplaybackidsdomainsdefaultpolicy.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | allow                                                                                                            |
| `allow`                                                                                                          | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | [<br/>"example.com",<br/>"trustedsite.org"<br/>]                                                                 |
| `deny`                                                                                                           | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | [<br/>"malicioussite.io",<br/>"abc.net"<br/>]                                                                    |