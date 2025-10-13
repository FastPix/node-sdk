# UpdateMediaNamedEntitiesResponse

Media details updated successfully with the named entity extraction feature enabled or disabled

## Example Usage

```typescript
import { UpdateMediaNamedEntitiesResponse } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaNamedEntitiesResponse = {
  success: true,
  data: {
    mediaId: "your-media-id",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `success`                                                             | *boolean*                                                             | :heavy_minus_sign:                                                    | Indicates if the request was successful or not.                       | true                                                                  |
| `data`                                                                | [models.NamedEntitiesResponse](../../models/namedentitiesresponse.md) | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |