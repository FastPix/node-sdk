import dotenv from "dotenv";
dotenv.config();

/**
 * Common configuration for all samples
 * 
 * Set your credentials using environment variables:
 * - FASTPIX_USERNAME: Your FastPix access token
 * - FASTPIX_PASSWORD: Your FastPix secret key
 * 
 * Or update the values directly below (not recommended for production)
 */

export const config = {
  // Use environment variables if available, otherwise fallback to placeholder values
  username: process.env.FASTPIX_USERNAME || "your-access-token",
  password: process.env.FASTPIX_PASSWORD || "your-secret-key",
  
  // Sample video URL for testing
  sampleVideoUrl: "https://static.fastpix.io/sample.mp4",
  
  // Sample stream configuration
  sampleStreamName: "Sample Live Stream",
  sampleStreamDescription: "A sample live stream created via SDK",
  
  // Sample playlist configuration
  samplePlaylistName: "Sample Playlist",
  samplePlaylistDescription: "A sample playlist created via SDK",
};

/**
 * Helper function to validate configuration
 */
export function validateConfig(): void {
  if (config.username === "your-access-token" || config.password === "your-secret-key") {
    console.warn("⚠️  Warning: Using placeholder credentials. Please set FASTPIX_USERNAME and FASTPIX_PASSWORD environment variables.");
    console.log("   You can create a .env file in the samples directory with:");
    console.log("   FASTPIX_USERNAME=your-actual-token");
    console.log("   FASTPIX_PASSWORD=your-actual-secret");
  }
}

/**
 * Helper function to log API responses
 */
export function logResponse(operation: string, response: any): void {
  console.log(`\n✅ ${operation} completed successfully:`);
  console.log(JSON.stringify(response, null, 2));
}

/**
 * Helper function to log errors
 */
export function logError(operation: string, error: any): void {
  console.error(`\n❌ ${operation} failed:`);
  if (error instanceof Error) {
    console.error(`   Error: ${error.message}`);
    if (error.stack) {
      console.error(`   Stack: ${error.stack.split('\n').slice(0, 3).join('\n')}`);
    }
  } else {
    console.error(`   Error: ${JSON.stringify(error, null, 2)}`);
  }
}

/**
 * Helper function to check if an error is a specific FastPix error type
 */
export function isFastPixError(error: any): boolean {
  return error && typeof error === 'object' && 'statusCode' in error;
}

/**
 * Helper function to get user-friendly error message
 */
export function getErrorMessage(error: any): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (isFastPixError(error)) {
    return `HTTP ${error.statusCode}: ${error.message || 'Unknown error'}`;
  }
  return String(error);
}
