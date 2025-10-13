import { Fastpix } from "../../dist/esm/index.js";
import { config, validateConfig } from "./config.js";

/**
 * Common setup function for all samples
 * Creates and configures the FastPix SDK instance
 */
export function createFastpixClient(): Fastpix {
  validateConfig();
  
  return new Fastpix({
    security: {
      username: config.username,
      password: config.password,
    },
  });
}

/**
 * Helper function to run samples with error handling
 */
export async function runSample(
  sampleName: string,
  sampleFunction: () => Promise<void>
): Promise<void> {
  try {
    console.log(`\n🚀 Running ${sampleName}...`);
    await sampleFunction();
    console.log(`\n✅ ${sampleName} completed successfully!`);
  } catch (error) {
    console.error(`\n❌ ${sampleName} failed:`);
    if (error instanceof Error) {
      console.error(`   Error: ${error.message}`);
      if (error.stack) {
        console.error(`   Stack: ${error.stack.split('\n').slice(0, 3).join('\n')}`);
      }
    } else {
      console.error(`   Error: ${JSON.stringify(error, null, 2)}`);
    }
    throw error;
  }
}
