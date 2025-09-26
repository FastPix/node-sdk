# MediaClipResponse

## Example Usage

```typescript
import { MediaClipResponse } from "@fastpix/fastpix-node/models";

let value: MediaClipResponse = {
  success: true,
  data: [],
  pagination: {
    totalRecords: 4,
    currentOffset: 1,
    offsetCount: 4,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            | true                                                                           |
| `data`                                                                         | [models.MediaClipResponseData](../models/mediaclipresponsedata.md)[]           | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `pagination`                                                                   | [models.MediaClipResponsePagination](../models/mediaclipresponsepagination.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |