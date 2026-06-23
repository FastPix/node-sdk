import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
     username: "1b92c0d6-5548-4642-b13e-4bb7d77dbaf4",
    password: "ff32012b-ec02-40ca-b0d4-711d81537e73",
  },
});

async function run() {
  const result = await fastpix.playlist.update({
    playlistId: "8c5ccb3c-9ec2-40a3-915e-070058e74f9f",
    body: {
      name: "updated name",
      description: "updated description",
    },
  });

  console.log(result);
}

run();