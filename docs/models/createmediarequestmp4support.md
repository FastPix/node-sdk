# CreateMediaRequestMp4Support

"capped_4k": Generates an mp4 video file up to 4k resolution "audioOnly": Generates an m4a audio file of the media file "audioOnly,capped_4k": Generates both video and audio media files for offline viewing


## Example Usage

```typescript
import { CreateMediaRequestMp4Support } from "@fastpix/fastpix-node/models";

let value: CreateMediaRequestMp4Support = "capped_4k";
```

## Values

```typescript
"capped_4k" | "audioOnly" | "audioOnly,capped_4k"
```