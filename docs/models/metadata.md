# Metadata

Required when the playlist type is `smart`. Media created between `startDate` and `endDate` of `createdDate` is added. Optionally, you can include media based on `updatedDate`.

## Example Usage

```typescript
import { Metadata } from "@fastpix/fastpix-node/models";

let value: Metadata = {
  createdDate: {
    startDate: "2024-11-11",
    endDate: "2024-11-11",
  },
  updatedDate: {
    startDate: "2024-11-11",
    endDate: "2024-11-11",
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `createdDate`                              | [models.DateRange](../models/daterange.md) | :heavy_minus_sign:                         | Date range with start and end dates.       |
| `updatedDate`                              | [models.DateRange](../models/daterange.md) | :heavy_minus_sign:                         | Date range with start and end dates.       |