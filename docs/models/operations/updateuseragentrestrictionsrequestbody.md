# UpdateUserAgentRestrictionsRequestBody

## Example Usage

```typescript
import { UpdateUserAgentRestrictionsRequestBody } from "@fastpix/fastpix-node/models/operations";

let value: UpdateUserAgentRestrictionsRequestBody = {
  allow: [
    "Mozilla/55.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
  ],
  deny: [
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/53745.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/537.36",
  ],
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 | Example                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultPolicy`                                                                                                                             | [operations.UpdateUserAgentRestrictionsDefaultPolicy](../../models/operations/updateuseragentrestrictionsdefaultpolicy.md)                  | :heavy_minus_sign:                                                                                                                          | The default behavior when a user-agent is not listed in `allow` or `deny`.                                                                  | allow                                                                                                                                       |
| `allow`                                                                                                                                     | *string*[]                                                                                                                                  | :heavy_minus_sign:                                                                                                                          | List of user-agent substrings explicitly allowed.                                                                                           | [<br/>"Mozilla/55.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"<br/>]        |
| `deny`                                                                                                                                      | *string*[]                                                                                                                                  | :heavy_minus_sign:                                                                                                                          | List of user-agent substrings explicitly denied.                                                                                            | [<br/>"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/53745.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/537.36"<br/>] |