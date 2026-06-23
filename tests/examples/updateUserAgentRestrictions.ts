import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "1b92c0d6-5548-4642-b13e-4bb7d77dbaf4",
    password: "ff32012b-ec02-40ca-b0d4-711d81537e73",
  },
});

async function run() {
  const result = await fastpix.playback.updateUserAgentRestrictions({
   mediaId: "61c9584a-4a2a-4728-8101-55776c92d8c3",
    playbackId: "f43dd296-616a-4378-a096-6dde3e7b6342",
    body: {
      allow: [
        "Mozilla/55.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      ],
      deny: [
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/53745.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/537.36",
      ],
    },
  });

  console.log(result);
}

run();