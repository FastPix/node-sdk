# SigningKeyWorkspaceDTO

## Example Usage

```typescript
import { SigningKeyWorkspaceDTO } from "@fastpix/fastpix-node/models";

let value: SigningKeyWorkspaceDTO = {
  id: "6fa85f64-5717-4562-b3fc-2c963f66ag5t",
  name: "development",
  workspaceType: "production",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | FastPix generates a unique identifier for each workspace.                                    | 6fa85f64-5717-4562-b3fc-2c963f66ag5t                                                         |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | Designated title for the workspace.                                                          | development                                                                                  |
| `workspaceType`                                                                              | *string*                                                                                     | :heavy_minus_sign:                                                                           | Describes the type of a workspace.  Possible value: QA, staging, production, or development. | production                                                                                   |