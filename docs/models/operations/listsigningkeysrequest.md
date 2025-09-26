# ListSigningKeysRequest

## Example Usage

```typescript
import { ListSigningKeysRequest } from "@fastpix/fastpix-node/models/operations";

let value: ListSigningKeysRequest = {
  limit: 25,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `limit`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | Limit specifies the maximum number of items to display per page.              | 25                                                                            |
| `offset`                                                                      | *number*                                                                      | :heavy_minus_sign:                                                            | It is used for pagination, indicating the starting point for fetching data.   | 1                                                                             |