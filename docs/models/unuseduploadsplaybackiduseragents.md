# UnusedUploadsPlaybackIdUserAgents

Restrictions based on the user agent (which is typically a string sent by browsers or bots identifying themselves).

## Example Usage

```typescript
import { UnusedUploadsPlaybackIdUserAgents } from "@fastpix/fastpix-node/models";

let value: UnusedUploadsPlaybackIdUserAgents = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `defaultPolicy`                                                         | [models.PolicyAction](../models/policyaction.md)                        | :heavy_minus_sign:                                                      | Policy action type                                                      |
| `allow`                                                                 | *string*[]                                                              | :heavy_minus_sign:                                                      | A list of specific user agents that are allowed to access the resource. |
| `deny`                                                                  | *string*[]                                                              | :heavy_minus_sign:                                                      | A list of specific user agents that are blocked.                        |