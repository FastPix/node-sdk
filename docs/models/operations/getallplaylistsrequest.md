# GetAllPlaylistsRequest

## Example Usage

```typescript
import { GetAllPlaylistsRequest } from "@fastpix/fastpix-node/models/operations";

let value: GetAllPlaylistsRequest = {
  limit: 1,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `limit`                                                                                 | *number*                                                                                | :heavy_minus_sign:                                                                      | The number of playlists to return (default is 10, max is 50).                           | 1                                                                                       |
| `offset`                                                                                | *number*                                                                                | :heavy_minus_sign:                                                                      | The page number to retrieve, starting from 1. Used for paginating the playlist results. | 1                                                                                       |