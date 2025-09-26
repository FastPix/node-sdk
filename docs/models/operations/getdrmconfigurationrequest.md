# GetDrmConfigurationRequest

## Example Usage

```typescript
import { GetDrmConfigurationRequest } from "@fastpix/fastpix-node/models/operations";

let value: GetDrmConfigurationRequest = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `offset`                                                                         | *number*                                                                         | :heavy_minus_sign:                                                               | Offset determines the starting point for data retrieval within a paginated list. | 1                                                                                |
| `limit`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | Limit specifies the maximum number of items to display per page.                 | 10                                                                               |