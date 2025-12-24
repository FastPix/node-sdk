# GetPlaybackIdUserAgents

## Example Usage

```typescript
import { GetPlaybackIdUserAgents } from "@fastpix/fastpix-node/models/operations";

let value: GetPlaybackIdUserAgents = {
  defaultPolicy: "deny",
  allow: [
    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
  ],
  deny: [
    "PostmanRuntime/7.29.0",
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `defaultPolicy`                                                                                                       | [operations.GetPlaybackIdUserAgentsDefaultPolicy](../../models/operations/getplaybackiduseragentsdefaultpolicy.md)    | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   | deny                                                                                                                  |
| `allow`                                                                                                               | *string*[]                                                                                                            | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   | [<br/>"Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36"<br/>] |
| `deny`                                                                                                                | *string*[]                                                                                                            | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   | [<br/>"PostmanRuntime/7.29.0"<br/>]                                                                                   |