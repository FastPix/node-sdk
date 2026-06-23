import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
     username: "1b92c0d6-5548-4642-b13e-4bb7d77dbaf4",
    password: "ff32012b-ec02-40ca-b0d4-711d81537e73",
  },
});

async function run() {
  const result = await fastpix.livePlayback.delete({
    streamId: "8127e495da20e01a06341ac01081317a",
    playbackId: "4f86badd-cf84-4af6-bf61-f0da5e503efb",
  });

  console.log(result);
}

run();