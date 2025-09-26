# GetPublicPemUsingSigningKeyIdResponseDTO

Displays the result of the request.

## Example Usage

```typescript
import { GetPublicPemUsingSigningKeyIdResponseDTO } from "@fastpix/fastpix-node/models";

let value: GetPublicPemUsingSigningKeyIdResponseDTO = {
  success: true,
  data: {
    workspaceId: "fc9d9368-6ee5-4b16-ae50-880ab374bdc6",
    signingKeyId: "5ta85f64-5717-4562-b3fc-2c963f66afa6",
    publicKey: "-----BEGIN PUBLIC KEY-----\n"
      + "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvfUkdkrPIZGOAwMwrkQ9Jr6uNEsVQCgax8xHMSf4Ib3IwlE90M/wLJZGmSWcaAWzH4nSE5qh/fF4E4xHY0hYMS78Ve9GSV8mtLfzjcZ0agfmFO0B0/YVaXNKDGc3CUWAOoONZEMCA3wqLNSZ3yQhr/IZ4xVqBR0GLSYtFt2VNNAmgfAQkVLcZy+3V1ZaC49EgK4AoR51iwwv9DzRjZ/3rM8MSS9lEy0WQGXP/x+0k8hQvq482r/G32TSG00ZSKQDpRFieaFh6YRxMd/R0bhVAvTTO8STQa/M4PZGoBFqkPTpCw5uShtpe+Hm85vlHk/2qYx5NqIe4l+c/yo4w/ny/QIDAQAB\n"
      + "-----END PUBLIC KEY-----\n"
      + "",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                        | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | It demonstrates whether the request is successful or not.                                                        | true                                                                                                             |
| `data`                                                                                                           | [models.GetPublicPemUsingSigningKeyIdResponseDTOData](../models/getpublicpemusingsigningkeyidresponsedtodata.md) | :heavy_minus_sign:                                                                                               | Displays the result of the request.                                                                              |                                                                                                                  |