import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "1b92c0d6-5548-4642-b13e-4bb7d77dbaf4",
    password: "ff32012b-ec02-40ca-b0d4-711d81537e73",
  },
});

async function run() {
  const result = await fastpix.playlist.create({
    name: "playlist name",
    referenceId: "a7",
    type: "smart",
    description: "This is a playlist",
    playOrder: "createdDate ASC",
    limit: 20,
    metadata: {
      createdDate: {
        startDate: "2024-11-11",
        endDate: "2024-12-12",
      },
      updatedDate: {
        startDate: "2024-11-11",
        endDate: "2024-12-12",
      },
    },
  });

  console.log(result);
}

run();