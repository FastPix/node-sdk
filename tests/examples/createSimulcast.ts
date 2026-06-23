import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "1b92c0d6-5548-4642-b13e-4bb7d77dbaf4",
    password: "ff32012b-ec02-40ca-b0d4-711d81537e73",
  },
});

async function run() {
  const result = await fastpix.simulcasts.create({
    streamId: "8127e495da20e01a06341ac01081317a",
    body: {
      url: "rtmp://hyd01.contribute.live-video.net/app/",
      streamKey: "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
      metadata: {
        "livestream_name": "Tech-Connect Summit",
      },
    },
  });

  console.log(result);
}

run();