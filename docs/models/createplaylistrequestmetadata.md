# CreatePlaylistRequestMetadata

Required when playlist type is smart - media created between startDate and endDate of createdDate will be add, similarily updatedDate (Optional)

## Example Usage

```typescript
import { CreatePlaylistRequestMetadata } from "@fastpix/fastpix-node/models";

let value: CreatePlaylistRequestMetadata = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `createdDate`                              | [models.DateRange](../models/daterange.md) | :heavy_minus_sign:                         | Date range with start and end dates.       |
| `updatedDate`                              | [models.DateRange](../models/daterange.md) | :heavy_minus_sign:                         | Date range with start and end dates.       |