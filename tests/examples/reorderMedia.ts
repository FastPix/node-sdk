import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "1b92c0d6-5548-4642-b13e-4bb7d77dbaf4",
    password: "ff32012b-ec02-40ca-b0d4-711d81537e73",
  },
});

async function run() {
  const result = await fastpix.playlist.updateMediaOrder({
    playlistId: "8c5ccb3c-9ec2-40a3-915e-070058e74f9f",
    body: {
      mediaIds: [
         "4cbd1bbc-9c9c-42fe-9e2a-c96e60caf701",
        "8063b4d6-a3c1-4934-8084-8bfae5fcfa90",
        "ec15caea-94e7-4889-99c3-96cd82a7dd95"
      ],
    },
  });

  console.log(result);
}

run();