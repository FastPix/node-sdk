# PlaylistItem

## Example Usage

```typescript
import { PlaylistItem } from "@fastpix/fastpix-node/models";

let value: PlaylistItem = {
  id: "your-playlist-id",
  name: "playlist1",
  type: "smart",
  referenceId: "a111dfdfdafsdfe",
  createdAt: new Date("2025-05-12T12:55:24.368182Z"),
  mediaCount: 9,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | db6e860f-cb57-43dd-8acf-39c9effd5608                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | playlist1                                                                                     |
| `type`                                                                                        | [models.PlaylistItemType](../models/playlistitemtype.md)                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | smart                                                                                         |
| `referenceId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | a111dfdfdafsdfe                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2025-05-12T12:55:24.368182Z                                                                   |
| `mediaCount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 9                                                                                             |