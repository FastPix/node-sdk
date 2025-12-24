# ListErrorsData

Displays the result of the request.

## Example Usage

```typescript
import { ListErrorsData } from "@fastpix/fastpix-node/models/operations";

let value: ListErrorsData = {
  errors: [
    {
      percentage: 0.0222222222222222,
      notes: "An informative note",
      message:
        "com.fastpix.stats.sdk.h71.a - android.media.mediadrm$mediadrmstateexception: failed to handle key response: drm vendor-defined error: -2998",
      lastSeen: "2023-12-01T11:31:07.000Z",
      id: "5f8d0d55b54764421b7156c5",
      description: "ERROR_CODE_IO_NETWORK_CONNECTION_TIMEOUT",
      count: 4,
      code: "1003",
    },
  ],
  topErrors: [
    {
      percentage: 0.0222222222222222,
      uniqueViewersEffectedPercentage: 0.0122222222222222,
      notes: "An informative note",
      message:
        "com.fastpix.stats.sdk.h71.a - android.media.mediadrm$mediadrmstateexception: failed to handle key response: drm vendor-defined error: -2998",
      lastSeen: "2023-12-01T11:31:07.000Z",
      count: 4,
      code: "1003",
    },
  ],
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                                              | [models.ErrorDetails](../../models/errordetails.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                    | The endpoint retrieves a comprehensive list of errors that have occurred by providing detailed information about each error instance. |
| `topErrors`                                                                                                                           | [models.TopErrorDetails](../../models/toperrordetails.md)[]                                                                           | :heavy_minus_sign:                                                                                                                    | Retrieves a list of errors that have occurred most frequently in the system, ranked by their count of occurrences.                    |