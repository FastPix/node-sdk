# ListByTopContentResponse

Get the list of Views

## Example Usage

```typescript
import { ListByTopContentResponse } from "@fastpix/fastpix-node/models/operations";

let value: ListByTopContentResponse = {
  success: true,
  data: [
    {
      videoTitle: "Cycle",
      views: 44,
      uniqueViews: 40,
    },
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `success`                                                                     | *boolean*                                                                     | :heavy_minus_sign:                                                            | It demonstrates whether the request is successful or not.                     |
| `data`                                                                        | [models.ViewsByTopContentDetails](../../models/viewsbytopcontentdetails.md)[] | :heavy_minus_sign:                                                            | Displays the result of the request.                                           |