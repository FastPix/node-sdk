<!-- Start SDK Example Usage [usage] -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.inputVideo.create({
    inputs: [
      {
        type: "video",
        url: "https://static.fastpix.io/fp-sample-video.mp4",
      },
    ],
    metadata: {
      "key1": "value1",
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->