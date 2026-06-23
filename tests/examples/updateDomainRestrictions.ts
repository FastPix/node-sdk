import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
     username: "1b92c0d6-5548-4642-b13e-4bb7d77dbaf4",
    password: "ff32012b-ec02-40ca-b0d4-711d81537e73",
  },
});

async function run() {
  const result = await fastpix.playback.updateDomainRestrictions({
    mediaId: "61c9584a-4a2a-4728-8101-55776c92d8c3",
    playbackId: "f43dd296-616a-4378-a096-6dde3e7b6342",
    body: {
      allow: [
        "yourdomain.com",
        "sampledomain.com",
      ],
      deny: [
        "yourworkdomain.com",
      ],
    },
  });

  console.log(result);
}

run();