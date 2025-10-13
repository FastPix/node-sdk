# FastPix Node.js SDK Samples

This directory contains comprehensive examples demonstrating how to use the FastPix Node.js SDK for various API operations. The samples are organized by functionality and include both basic and advanced usage patterns.

## 📁 Directory Structure

```
samples/
├── common/                    # Shared utilities and configuration
│   ├── config.ts             # Common configuration and helpers
│   └── setup.ts              # SDK setup and error handling utilities
├── media/                    # Media API samples
│   ├── input-video.ts        # Upload and create media
│   ├── manage-videos.ts      # Manage existing media
│   ├── playback.ts           # Playback ID management
│   └── playlist.ts           # Playlist operations
├── live/                     # Live streaming samples
│   ├── start-live-stream.ts  # Create live streams
│   ├── manage-live-stream.ts # Manage live streams
│   └── live-playback.ts      # Live playback management
├── analytics/                # Analytics and metrics samples
│   ├── views.ts              # Video views analytics
│   ├── metrics.ts            # Performance metrics
│   ├── dimensions.ts         # Data dimensions
│   └── errors.ts             # Error tracking
├── ai/                       # AI features samples
│   └── ai-features.ts        # AI-powered video features
├── security/                 # Security samples
│   ├── signing-keys.ts       # Signing key management
│   └── drm-configurations.ts # DRM configuration
├── env.example               # Environment variables template
└── README.md                 # This file
```

## 🚀 Quick Start

### 1. Prerequisites

- Node.js 18 or higher
- FastPix API credentials (Username and Password)

### 2. Setup

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Configure credentials**:
   ```bash
   # Copy the environment template
   cp samples/env.example samples/.env
   
   # Edit the .env file with your credentials
   nano samples/.env
   ```

3. **Build the SDK** (if not already built):
   ```bash
   npm run build
   ```

### 3. Run Samples

Navigate to the samples directory and run any sample:

```bash
cd samples

# Run a specific sample
npx tsx media/input-video.ts

# Or run all samples in a category
npx tsx media/*.ts
```

## 📚 Sample Categories

### Media API Samples

#### `media/input-video.ts`
- Create media from URL
- Upload media from device
- Configure media metadata

#### `media/manage-videos.ts`
- List all media
- Get media by ID
- Update media properties
- Add/update/delete tracks
- Generate subtitles
- Delete media

#### `media/playback.ts`
- Create playback IDs
- Get playback ID details
- Delete playback IDs

#### `media/playlist.ts`
- Create and manage playlists
- Add/remove/reorder media
- Update playlist settings

### Live Streaming Samples

#### `live/start-live-stream.ts`
- Create new live streams
- Configure stream settings
- Set privacy options

#### `live/manage-live-stream.ts`
- List and manage streams
- Enable/disable streams
- Get viewer statistics
- Update stream settings

#### `live/live-playback.ts`
- Create live playback IDs
- Manage live stream access
- Get playback details

### Analytics Samples

#### `analytics/views.ts`
- List video views
- Get view details
- Analyze top content
- Monitor concurrent viewers

#### `analytics/metrics.ts`
- Get performance metrics
- Analyze breakdown values
- Compare time periods
- Generate timeseries data

#### `analytics/dimensions.ts`
- List available dimensions
- Get filter values
- Explore data categories

#### `analytics/errors.ts`
- Track playback errors
- Analyze error patterns
- Monitor error trends

### AI Features Samples

#### `ai/ai-features.ts`
- Generate video summaries
- Create video chapters
- Extract named entities
- Enable content moderation

### Security Samples

#### `security/signing-keys.ts`
- Create signing key pairs
- Manage authentication keys
- Demonstrate JWT signing

#### `security/drm-configurations.ts`
- List DRM configurations
- Get DRM details
- Explore security options

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the samples directory:

```bash
# FastPix API credentials
FASTPIX_USERNAME=your-access-token
FASTPIX_PASSWORD=your-secret-key

# Optional: Enable debug logging
FASTPIX_DEBUG=false
```

### Common Configuration

The `common/config.ts` file provides:
- Centralized configuration management
- Environment variable handling
- Helper functions for logging
- Sample data constants

## 📝 Usage Patterns

### Basic Usage

```typescript
import { createFastpixClient, runSample } from "./common/setup.js";

async function mySample() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.inputVideo.createMedia({
    inputs: [{ type: "video", url: "https://example.com/video.mp4" }],
    accessPolicy: "public",
  });
  
  console.log(result);
}

runSample("My Sample", mySample);
```

### Error Handling

```typescript
import { logError } from "./common/config.js";

try {
  const result = await fastpix.someOperation();
  // Handle success
} catch (error) {
  logError("Operation failed", error);
}
```

### Advanced Usage

```typescript
// Custom retry configuration
const result = await fastpix.inputVideo.createMedia(
  { /* request data */ },
  {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  }
);
```

## 🛠️ Development

### Adding New Samples

1. Create a new TypeScript file in the appropriate category directory
2. Import the common utilities:
   ```typescript
   import { createFastpixClient, runSample } from "../common/setup.js";
   import { logResponse } from "../common/config.js";
   ```
3. Use the `runSample` helper for consistent error handling
4. Add descriptive comments and examples

### Best Practices

- Always use the common setup utilities
- Include error handling
- Add descriptive logging
- Clean up resources when appropriate
- Use meaningful variable names
- Include usage instructions in comments

## 🔍 Troubleshooting

### Common Issues

1. **Authentication Errors**: Verify your credentials in the `.env` file
2. **Build Errors**: Ensure the SDK is built with `npm run build`
3. **Import Errors**: Check that you're running from the samples directory
4. **API Errors**: Check the FastPix API documentation for endpoint requirements

### Error Handling

All samples include comprehensive error handling. For detailed information about error handling patterns and best practices, see:

- [Error Handling Guide](./ERROR_HANDLING.md) - Comprehensive error handling documentation
- [Common Error Scenarios](./ERROR_HANDLING.md#common-error-scenarios) - How to handle specific error types
- [Best Practices](./ERROR_HANDLING.md#best-practices) - Error handling best practices

### Debug Mode

Enable debug logging by setting `FASTPIX_DEBUG=true` in your `.env` file:

```bash
FASTPIX_DEBUG=true
```

### Getting Help

- Check the [FastPix API Documentation](https://docs.fastpix.io/)
- Review the [SDK Documentation](../README.md)
- See the [Error Handling Guide](./ERROR_HANDLING.md) for troubleshooting
- Contact support at support@fastpix.io

## 📄 License

These samples are provided under the same license as the FastPix Node.js SDK.
