# DeleteSigningKeyRequest

## Example Usage

```typescript
import { DeleteSigningKeyRequest } from "@fastpix/fastpix-node/models/operations";

let value: DeleteSigningKeyRequest = {
  signingKeyId: "3ta85f64-5717-4562-b3fc-2c963f66afa6",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `signingKeyId`                                                                                                          | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | When creating the signing key, FastPix assigns a universally unique identifier with a maximum length of 255 characters. | 3ta85f64-5717-4562-b3fc-2c963f66afa6                                                                                    |