import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "1b92c0d6-5548-4642-b13e-4bb7d77dbaf4",
    password: "ff32012b-ec02-40ca-b0d4-711d81537e73",
  },
});

async function run() {
  const result = await fastpix.manageVideos.update({
    mediaId: "ec15caea-94e7-4889-99c3-96cd82a7dd95",
    body: {
      metadata: {
        "user": "fastpix_admin",
      },
      title: "test title",
    },
  });

  console.log(result);
}

run();