# ListErrorsResponseBody

Get filter/ dimension value details by dimension name.

## Example Usage

```typescript
import { ListErrorsResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: ListErrorsResponseBody = {
  success: true,
  data: {
    errors: [
      {
        percentage: 0.0222222222222222,
        notes: "An informative note on specific error",
        message:
          "com.fastpix.stats.sdk.h71.a - android.media.mediadrm$mediadrmstateexception: failed to handle key response: drm vendor-defined error: -2998",
        lastSeen: "2023-12-01T11:31:07Z",
        id: "9pa85f64-5717-4562-b3fc-2c963f66afa6",
        description: "a description for the specific error",
        count: 4,
        code: "1003",
      },
    ],
    topErrors: [
      {
        percentage: 0.0222222222222222,
        uniqueViewersEffectedPercentage: 0.0122222222222222,
        notes: "An informative note for a specific error",
        message:
          "com.fastpix.stats.sdk.h71.a - android.media.mediadrm$mediadrmstateexception: failed to handle key response: drm vendor-defined error: -2998",
        lastSeen: "2023-12-01T11:31:07Z",
        count: 4,
        code: "1003",
      },
    ],
  },
  timespan: [
    1610025789,
    1610025947,
  ],
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `success`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | Shows the request status. Returns true for success and false for failure.         |                                                                                   |
| `data`                                                                            | [operations.ListErrorsData](../../models/operations/listerrorsdata.md)            | :heavy_minus_sign:                                                                | Displays the result of the request.                                               |                                                                                   |
| `timespan`                                                                        | *number*[]                                                                        | :heavy_minus_sign:                                                                | The timespan from and to details displayed in the form of unix epoch timestamps.<br/> | {<br/>"availableValue": [<br/>1610025789,<br/>1610025947<br/>]<br/>}              |