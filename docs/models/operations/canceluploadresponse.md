# CancelUploadResponse

Upload cancelled successfully

## Example Usage

```typescript
import { CancelUploadResponse } from "@fastpix/fastpix-node/models/operations";

let value: CancelUploadResponse = {
  success: true,
  data: {
    uploadId: "beff5537-de85-42e1-a673-2a405cd94177",
    trial: false,
    status: "cancelled",
    url:
      "https://storage.googleapis.com/uploads-fp-asia/338acdeb-29d4-438b-a40c-1d4105134462/26b1a17d-4b0b-44f8-96b8-cc33cabc962e?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=fp-prod@fastpix-vms.iam.gserviceaccount.com/20250716/auto/storage/goog4_request&X-Goog-Date=20250716T132746Z&X-Goog-Expires=14400&X-Goog-SignedHeaders=host;x-goog-resumable&X-Goog-Signature=4eb42c38711d915f2b6792edacc48ed79bde9f02f829a084dfe09830e6d0e5ec50f2f3157964ed7e32d44b02e3967bf2e0ffeb7ca9335d65ae15b3ac33c7cb40ec710939c4a12202b749bdb4e3f7af8aba2746b41a642130280a372e4615e9773cea98f231388c9fde385f96142ffa901a900949e305c7d5b4c82590c3493aaf60ac5424d4f112fbf4120b7891adf9a7e17968328cd1128fe7b6f55447d15b562624a8e7539824d10e808a729906ac6fe8b2f561424f3e0db14eecad6e21f4f18513519a975c2c50e8304a5a723723e32aa9ac659d9b9875a85f29f007d57bb69c49b5ff9099e5a9834db7199e73ca01cf0dd85cae599203d3180fa27cfdd08d&upload_id=ABgVH88kcXwWvPOlER2G4UvAnrdQw80h_nfjMqwL-jFe6wpLvfBifpBtlnvPtN2BQQTOWggTpKAQ6uGHIJLDp1LHo2g1eePyfjqNi3oRiwxOBU8",
    timeout: 14400,
    corsOrigin: "*",
    maxResolution: "1080p",
    accessPolicy: "public",
    metadata: {
      "key1": "value1",
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `success`                                                         | *boolean*                                                         | :heavy_minus_sign:                                                | Demonstrates whether the request is successful or not.            | true                                                              |
| `data`                                                            | [models.MediaCancelResponse](../../models/mediacancelresponse.md) | :heavy_minus_sign:                                                | Response returned when an upload is cancelled.                    |                                                                   |