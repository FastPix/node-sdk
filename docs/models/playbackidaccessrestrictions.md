# PlaybackIdAccessRestrictions

Controls access based on domains and user agents. Defines a default policy (either "allow" or "deny") and provides lists for explicitly allowed or denied domains and user agents.

## Example Usage

```typescript
import { PlaybackIdAccessRestrictions } from "@fastpix/fastpix-node/models";

let value: PlaybackIdAccessRestrictions = {};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `domains`                                                                                                                              | [models.PlaybackIdDomains](../models/playbackiddomains.md)                                                                             | :heavy_minus_sign:                                                                                                                     | Restrictions based on the originating domain of a request (e.g., whether requests from certain websites should be allowed or blocked). |
| `userAgents`                                                                                                                           | [models.PlaybackIdUserAgents](../models/playbackiduseragents.md)                                                                       | :heavy_minus_sign:                                                                                                                     | Restrictions based on the user agent (which is typically a string sent by browsers or bots identifying themselves).                    |