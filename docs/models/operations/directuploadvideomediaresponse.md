# DirectUploadVideoMediaResponse

Direct upload created successfully

## Example Usage

```typescript
import { DirectUploadVideoMediaResponse } from "@fastpix/fastpix-node/models/operations";

let value: DirectUploadVideoMediaResponse = {
  success: true,
  data: {
    status: "waiting",
    url:
      "https://storage.googleapis.com/fastpix-uploads-us/8a5ab157-c586-458a-bb2e-caa8a8b76a19/4190bbde-4c34-41e4-b70e-90ba2aa0b79e?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=dev-staging-pub-sub%40fastpix-vms.iam.gserviceaccount.com%2F20250708%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250708T071545Z&X-Goog-Expires=14400&X-Goog-SignedHeaders=host%3Bx-goog-resumable&X-Goog-Signature=7be4a17c181b222f5f70e5156843585dc2a9769d61126d77c7b83413a97256cbb8214aa09a8977ce09c1023148ef0f1f42265ddc436df29e66e00e76fbbed13b01e01bc95d15aa65aef695ef7556a306fad5cdc8bf81049ac17e8e95dd95dc80bac3ca684c584dc7a23494f3b29c2dfe9c039a5152d66dddb603c20409d0fda685981b3dfe0f8e0f34fc983d444fce9bbe0dda750a3eb756d1e2887ffa1aef242f208b157988c5fc5f68aa574dd1ef401162f150bc8d5218156d9655c368b359ad5b12c96d2e69654d4da87f34c4df9f22613cdd88357c448aa1f340e11e482e53156bc18a256e4dcf2b37a0ee875c9c941f978ab660637acfc3ccddb37628e8",
    corsOrigin: "*",
    pushMediaSettings: {
      playbackIds: [
        {
          accessPolicy: "public",
          accessRestrictions: {
            domains: {
              defaultPolicy: "allow",
              allow: [],
              deny: [],
            },
            userAgents: {
              defaultPolicy: "allow",
              allow: [],
              deny: [],
            },
          },
        },
      ],
      metadata: {
        "key1": "value1",
      },
    },
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `success`                                              | *boolean*                                              | :heavy_minus_sign:                                     | Demonstrates whether the request is successful or not. | true                                                   |
| `data`                                                 | [models.DirectUpload](../../models/directupload.md)    | :heavy_minus_sign:                                     | Displays the result of the request.                    |                                                        |