# UnusedUploadsPlaybackIdAccessRestrictions

Controls access based on domains and user agents. Defines a default policy (either "allow" or "deny") and provides lists for explicitly allowed or denied domains and user agents.

## Example Usage

```typescript
import { UnusedUploadsPlaybackIdAccessRestrictions } from "@fastpix/fastpix-node/models";

let value: UnusedUploadsPlaybackIdAccessRestrictions = {};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `domains`                                                                                                                                   | [models.UnusedUploadsPlaybackIdDomains](../models/unuseduploadsplaybackiddomains.md)                                                        | :heavy_minus_sign:                                                                                                                          | Restrictions based on the originating domain of a request (for example, whether requests from certain websites must be allowed or blocked). |
| `userAgents`                                                                                                                                | [models.UnusedUploadsPlaybackIdUserAgents](../models/unuseduploadsplaybackiduseragents.md)                                                  | :heavy_minus_sign:                                                                                                                          | Restrictions based on the user agent (which is typically a string sent by browsers or bots identifying themselves).                         |