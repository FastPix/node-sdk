<!-- Start SDK Example Usage [usage] -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "secret-key",
  },
});

async function run() {
  const result = await fastpix.inputVideo.createMedia({
    inputs: [
      {
        type: "video",
        url: "https://static.fastpix.io/sample.mp4",
      },
    ],
    metadata: {
      "key1": "value1",
    },
    accessPolicy: "public",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->