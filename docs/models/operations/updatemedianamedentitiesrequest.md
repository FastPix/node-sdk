# UpdateMediaNamedEntitiesRequest

## Example Usage

```typescript
import { UpdateMediaNamedEntitiesRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaNamedEntitiesRequest = {
  mediaId: "0cec3c88-c69d-4232-9b96-f0976327fa2d",
  requestBody: {
    namedEntities: true,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The unique identifier assigned to the media when created. The value should be a valid UUID.<br/>                 | 0cec3c88-c69d-4232-9b96-f0976327fa2d                                                                             |
| `requestBody`                                                                                                    | [operations.UpdateMediaNamedEntitiesRequestBody](../../models/operations/updatemedianamedentitiesrequestbody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              | {<br/>"namedEntities": true<br/>}                                                                                |