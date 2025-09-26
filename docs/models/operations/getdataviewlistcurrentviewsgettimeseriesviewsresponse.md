# GetDataViewlistCurrentViewsGetTimeseriesViewsResponse

Successfully retrieved concurrent viewers timeseries.

## Example Usage

```typescript
import { GetDataViewlistCurrentViewsGetTimeseriesViewsResponse } from "@fastpix/fastpix-node/models/operations";

let value: GetDataViewlistCurrentViewsGetTimeseriesViewsResponse = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                                                      | *boolean*                                                                                                                                      | :heavy_minus_sign:                                                                                                                             | Indicates if the request was successful.                                                                                                       |
| `data`                                                                                                                                         | [operations.GetDataViewlistCurrentViewsGetTimeseriesViewsData](../../models/operations/getdataviewlistcurrentviewsgettimeseriesviewsdata.md)[] | :heavy_minus_sign:                                                                                                                             | Time series data for concurrent viewers.                                                                                                       |
| `timespan`                                                                                                                                     | *number*[]                                                                                                                                     | :heavy_minus_sign:                                                                                                                             | Start and end epoch timestamps (milliseconds) for the timeseries window.                                                                       |