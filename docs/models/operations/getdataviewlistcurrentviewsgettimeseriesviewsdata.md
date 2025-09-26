# GetDataViewlistCurrentViewsGetTimeseriesViewsData

## Example Usage

```typescript
import { GetDataViewlistCurrentViewsGetTimeseriesViewsData } from "@fastpix/fastpix-node/models/operations";

let value: GetDataViewlistCurrentViewsGetTimeseriesViewsData = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `intervalTime`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp for the interval (ISO 8601 format).                                             |
| `metricValue`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Reserved for future metric values (currently null).                                           |
| `numberOfViews`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of concurrent viewers at the given interval.                                           |