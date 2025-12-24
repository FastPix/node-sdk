# CreatePlaybackIdAccessRestrictions

Controls access based on domains and user agents. Defines a default policy (either "allow" or "deny") and provides lists for explicitly allowed or denied domains and user agents.

## Example Usage

```typescript
import { CreatePlaybackIdAccessRestrictions } from "@fastpix/fastpix-node/models";

let value: CreatePlaybackIdAccessRestrictions = {};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `domains`                                                                                                                                     | [models.CreatePlaybackIdDomains](../models/createplaybackiddomains.md)                                                                        | :heavy_minus_sign:                                                                                                                            | Restrictions based on the originating domain of a request (for example, whether requests from certain websites should be allowed or blocked). |
| `userAgents`                                                                                                                                  | [models.CreatePlaybackIdUserAgents](../models/createplaybackiduseragents.md)                                                                  | :heavy_minus_sign:                                                                                                                            | Restrictions based on the user agent (which is typically a string sent by browsers or bots identifying themselves).                           |