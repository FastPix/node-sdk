# UpdateMediaNamedEntitiesResponse

Media details updated successfully with the named entity extraction feature enabled or disabled

## Example Usage

```typescript
import { UpdateMediaNamedEntitiesResponse } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaNamedEntitiesResponse = {
  success: true,
  data: {
    mediaId: "c695988b-ff84-42ae-bb21-10f284fedb0e",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `success`                                                             | *boolean*                                                             | :heavy_minus_sign:                                                    | Indicates if the request was successful or not.                       | true                                                                  |
| `data`                                                                | [models.NamedEntitiesResponse](../../models/namedentitiesresponse.md) | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |