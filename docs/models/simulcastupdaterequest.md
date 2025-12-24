# SimulcastUpdateRequest

## Example Usage

```typescript
import { SimulcastUpdateRequest } from "@fastpix/fastpix-node/models";

let value: SimulcastUpdateRequest = {
  metadata: {
    "simulcast_name": "Tech today",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `isEnabled`                                                                                                          | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | When set to false, the simulcast is disabled for the specified stream.                                               | true                                                                                                                 |
| `metadata`                                                                                                           | Record<string, *string*>                                                                                             | :heavy_minus_sign:                                                                                                   | You can search for videos with specific key-value pairs using metadata, when you tag a video in "key":"value" pairs. | {<br/>"livestream_name": "Tech today"<br/>}                                                                          |