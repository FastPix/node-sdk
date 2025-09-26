# GetSigningKeyByIdRequest

## Example Usage

```typescript
import { GetSigningKeyByIdRequest } from "@fastpix/fastpix-node/models/operations";

let value: GetSigningKeyByIdRequest = {
  signingKeyId: "5ta85f64-5717-4562-b3fc-2c963f66afa6",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `signingKeyId`                                                                                                           | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | When creating the signing key, FastPix assigns a universally unique identifier with a maximum length of 255 characters.  | 5ta85f64-5717-4562-b3fc-2c963f66afa6                                                                                     |