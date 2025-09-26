# GetDataViewlistCurrentViewsFilterResponse

Successfully retrieved concurrent viewers breakdown by the specified dimension.

## Example Usage

```typescript
import { GetDataViewlistCurrentViewsFilterResponse } from "@fastpix/fastpix-node/models/operations";

let value: GetDataViewlistCurrentViewsFilterResponse = {};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                              | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Indicates if the request was successful.                                                                               |
| `data`                                                                                                                 | [operations.GetDataViewlistCurrentViewsFilterData](../../models/operations/getdataviewlistcurrentviewsfilterdata.md)[] | :heavy_minus_sign:                                                                                                     | Breakdown of concurrent viewers by the specified dimension.                                                            |
| `timespan`                                                                                                             | *number*[]                                                                                                             | :heavy_minus_sign:                                                                                                     | Start and end epoch timestamps (milliseconds) for the timespan window.                                                 |