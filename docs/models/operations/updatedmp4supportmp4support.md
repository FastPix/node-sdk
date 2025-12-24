# UpdatedMp4SupportMp4Support

Determines the type of MP4 support for the media. - **none**: Disables MP4 support. - **capped_4k**: Enables MP4 downloads with resolutions up to 4K. - **audioOnly**: Provides an MP4 stream containing only the audio. - **audioOnly,capped_4k**: Enables both MP4 video downloads (up to 4K) and an audio-only stream.


## Example Usage

```typescript
import { UpdatedMp4SupportMp4Support } from "@fastpix/fastpix-node/models/operations";

let value: UpdatedMp4SupportMp4Support = "capped_4k";
```

## Values

```typescript
"none" | "capped_4k" | "audioOnly" | "audioOnly,capped_4k"
```