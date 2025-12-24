# GetPlaybackIdResponseBody

Successfully retrieved playback ID details

## Example Usage

```typescript
import { GetPlaybackIdResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: GetPlaybackIdResponseBody = {
  success: true,
  data: {
    id: "54fd5e7e-3aa5-4817-b56d-44932f67f6c3",
    accessPolicy: "public",
    accessRestrictions: {
      domains: {
        defaultPolicy: "allow",
        allow: [
          "example.com",
          "trustedsite.org",
        ],
        deny: [
          "malicioussite.io",
          "abc.net",
        ],
      },
      userAgents: {
        defaultPolicy: "deny",
        allow: [
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
        ],
        deny: [
          "PostmanRuntime/7.29.0",
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `success`                                                                    | *boolean*                                                                    | :heavy_minus_sign:                                                           | Shows the request status. Returns true for success and false for failure.    | true                                                                         |
| `data`                                                                       | [operations.GetPlaybackIdData](../../models/operations/getplaybackiddata.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |