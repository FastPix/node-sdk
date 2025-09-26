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
      id: "9pa85f64-5717-4562-b3fc-2c963f66afa6",
      description: "a description of the error",
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
      id: "9pa85f64-5717-4562-b3fc-2c963f66afa6",
      description: "a description of the error",
      count: 4,
      code: "1003",
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `errors`                                                                                                           | [models.ErrorDetails](../../models/errordetails.md)[]                                                              | :heavy_minus_sign:                                                                                                 | Retrieves a list of errors that have occurred in the system.                                                       |
| `topErrors`                                                                                                        | [models.TopErrorDetails](../../models/toperrordetails.md)[]                                                        | :heavy_minus_sign:                                                                                                 | Retrieves a list of errors that have occurred most frequently in the system, ranked by their count of occurrences. |