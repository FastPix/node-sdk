# PlaylistCreatedSchemaMetadata

date range filter used when creating the smart playlist

## Example Usage

```typescript
import { PlaylistCreatedSchemaMetadata } from "@fastpix/fastpix-node/models";

let value: PlaylistCreatedSchemaMetadata = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `createdDate`                              | [models.DateRange](../models/daterange.md) | :heavy_minus_sign:                         | Date range with start and end dates.       |
| `updatedDate`                              | [models.DateRange](../models/daterange.md) | :heavy_minus_sign:                         | Date range with start and end dates.       |