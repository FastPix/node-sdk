import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "1b92c0d6-5548-4642-b13e-4bb7d77dbaf4",
    password: "ff32012b-ec02-40ca-b0d4-711d81537e73",
  },
});

async function run() {
  const result = await fastpix.signingKeys.delete({
    signingKeyId: "50937f15-b613-4ec5-9d29-40eefe9c5ca7",
  });

  console.log(result);
}

run();