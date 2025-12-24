# Custom2

User defined metadata. Only accessible once it is enabled in the organization settings.


## Example Usage

```typescript
import { Custom2 } from "@fastpix/fastpix-node/models";

let value: Custom2 = {
  custom: [
    {
      dimensionName: "custom_1",
      displayName: "email",
      value: "johndoe@gmail.com",
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `custom`                                 | [models.Custom1](../models/custom1.md)[] | :heavy_minus_sign:                       | A list of custom dimension objects.      |