# GetSigningKeyByIdRequest

## Example Usage

```typescript
import { GetSigningKeyByIdRequest } from "@fastpix/fastpix-node/models/operations";

let value: GetSigningKeyByIdRequest = {
  signingKeyId: "your-signing-key-id",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `signingKeyId`                                                                                                           | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | When creating the signing key, FastPix assigns a universally unique identifier with a maximum length of 255 characters.  | your-signing-key-id                                                                                     |