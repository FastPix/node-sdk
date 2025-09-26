# UpdatePlaylistRequest

## Example Usage

```typescript
import { UpdatePlaylistRequest } from "@fastpix/fastpix-node/models";

let value: UpdatePlaylistRequest = {
  name: "updated name",
  description: "updated description",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `name`                               | *string*                             | :heavy_check_mark:                   | New name to the playlist.            |
| `description`                        | *string*                             | :heavy_check_mark:                   | Updated description to the playlist. |