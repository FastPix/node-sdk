# UpdateMediaNamedEntitiesRequest

## Example Usage

```typescript
import { UpdateMediaNamedEntitiesRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaNamedEntitiesRequest = {
  mediaId: "your-media-id",
  body: {
    namedEntities: true,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The unique identifier assigned to the media when created. The value must be a valid UUID.<br/>                   | your-media-id                                                                             |
| `body`                                                                                                           | [operations.UpdateMediaNamedEntitiesRequestBody](../../models/operations/updatemedianamedentitiesrequestbody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              | {<br/>"namedEntities": true<br/>}                                                                                |