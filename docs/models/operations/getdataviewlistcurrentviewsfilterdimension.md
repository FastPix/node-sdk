# GetDataViewlistCurrentViewsFilterDimension

The dimension to group and breakdown the concurrent viewers data by.
This determines how the results will be categorized and aggregated.
Choose from geographic, content, technical, or behavioral dimensions.


## Example Usage

```typescript
import { GetDataViewlistCurrentViewsFilterDimension } from "@fastpix/fastpix-node/models/operations";

let value: GetDataViewlistCurrentViewsFilterDimension = "country";
```

## Values

```typescript
"country" | "region" | "asn_id" | "cdn" | "video_title" | "video_series" | "video_id" | "sub_property_id" | "video_source_stream_type" | "os_name" | "player_name" | "media_id" | "fp_playback_id" | "view_id"
```