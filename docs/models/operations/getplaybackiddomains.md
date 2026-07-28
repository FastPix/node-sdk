# GetPlaybackIdDomains

## Example Usage

```typescript
import { GetPlaybackIdDomains } from "@fastpix/fastpix-node/models/operations";

let value: GetPlaybackIdDomains = {
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `defaultPolicy`                                                                                              | [operations.GetPlaybackIdDomainsDefaultPolicy](../../models/operations/getplaybackiddomainsdefaultpolicy.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | allow                                                                                                        |
| `allow`                                                                                                      | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | [<br/>"example.com",<br/>"trustedsite.org"<br/>]                                                             |
| `deny`                                                                                                       | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | [<br/>"malicioussite.io",<br/>"abc.net"<br/>]                                                                |