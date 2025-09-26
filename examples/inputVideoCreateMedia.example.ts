import dotenv from "dotenv";
dotenv.config();
/**
 * Example usage of the @fastpix/fastpix-node SDK
 *
 * To run this example from the examples directory:
 * npm run build && npx tsx inputVideoCreateMedia.example.ts
 */

import { Fastpix } from "../dist/esm/index.js";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "secret-key",
  },
});

async function main() {
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

main().catch(console.error);
