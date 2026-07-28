# DeleteSigningKeyRequest

## Example Usage

```typescript
import { DeleteSigningKeyRequest } from "@fastpix/fastpix-node/models/operations";

let value: DeleteSigningKeyRequest = {
  signingKeyId: "your-signing-key-id",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `signingKeyId`                                                                                                          | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | When creating the signing key, FastPix assigns a universally unique identifier with a maximum length of 255 characters. | your-signing-key-id                                                                                    |