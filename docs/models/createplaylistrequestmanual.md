# CreatePlaylistRequestManual

## Example Usage

```typescript
import { CreatePlaylistRequestManual } from "@fastpix/fastpix-node/models";

let value: CreatePlaylistRequestManual = {
  name: "Playlist name",
  referenceId: "your-reference-id",
  type: "manual",
  description: "This is a playlist",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `name`                                                  | *string*                                                | :heavy_check_mark:                                      | Name of the playlist.                                   | Playlist name                                           |
| `referenceId`                                           | *string*                                                | :heavy_check_mark:                                      | Unique string value assigned by user to the playlist.   | a1                                                      |
| `type`                                                  | *"manual"*                                              | :heavy_check_mark:                                      | Manual playlist type (no `playOrder`).                  | manual                                                  |
| `description`                                           | *string*                                                | :heavy_minus_sign:                                      | Description for a playlist (Optional).                  | This is a playlist                                      |
| `limit`                                                 | *number*                                                | :heavy_minus_sign:                                      | Optional parameter to limit no. of media in a playlist. |                                                         |