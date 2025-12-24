# ListByTopContentResponseBody

Get the list of Views

## Example Usage

```typescript
import { ListByTopContentResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: ListByTopContentResponseBody = {
  success: true,
  data: [
    {
      videoTitle: "Cycle",
      views: 44,
      uniqueViews: 40,
    },
  ],
  timespan: [
    1712910924,
    1713515724,
  ],
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `success`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | Shows the request status. Returns true for success and false for failure.         |                                                                                   |
| `data`                                                                            | [models.ViewsByTopContentDetails](../../models/viewsbytopcontentdetails.md)[]     | :heavy_minus_sign:                                                                | Displays the result of the request.                                               |                                                                                   |
| `timespan`                                                                        | *number*[]                                                                        | :heavy_minus_sign:                                                                | The timespan from and to details displayed in the form of unix epoch timestamps.<br/> | {<br/>"availableValue": [<br/>1610025789,<br/>1610025947<br/>]<br/>}              |