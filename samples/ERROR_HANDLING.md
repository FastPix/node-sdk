# Error Handling Guide for FastPix Node.js SDK Samples

This guide explains how to properly handle errors when using the FastPix Node.js SDK and samples.

## Error Types

The FastPix SDK can throw several types of errors:

### 1. HTTP Client Errors
- `ConnectionError` - Unable to make request to server
- `RequestTimeoutError` - Request timed out
- `RequestAbortedError` - Request was aborted
- `InvalidRequestError` - Invalid request configuration
- `UnexpectedClientError` - Unexpected HTTP client error

### 2. FastPix API Errors
- `FastpixError` - Base class for all FastPix API errors
- `BadRequestError` - 400 Bad Request
- `UnauthorizedError` - 401 Unauthorized
- `ForbiddenError` - 403 Forbidden
- `NotFoundError` - 404 Not Found
- `ValidationErrorResponse` - 422 Validation Error
- And many more specific error types...

### 3. SDK Validation Errors
- `SDKValidationError` - Input validation failed
- `ResponseValidationError` - Response validation failed

## Error Handling Patterns

### Basic Error Handling

```typescript
import { createFastpixClient } from "./common/setup.js";
import { getErrorMessage } from "./common/config.js";

async function basicExample() {
  const fastpix = createFastpixClient();
  
  try {
    const result = await fastpix.inputVideo.createMedia({
      inputs: [{ type: "video", url: "https://example.com/video.mp4" }],
      accessPolicy: "public",
    });
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", getErrorMessage(error));
  }
}
```

### Specific Error Type Handling

```typescript
import { createFastpixClient } from "./common/setup.js";
import * as errors from "@fastpix/fastpix-node/models/errors";

async function specificErrorHandling() {
  const fastpix = createFastpixClient();
  
  try {
    const result = await fastpix.inputVideo.createMedia({
      inputs: [{ type: "video", url: "https://example.com/video.mp4" }],
      accessPolicy: "public",
    });
    console.log("Success:", result);
  } catch (error) {
    if (error instanceof errors.BadRequestError) {
      console.error("Bad request:", error.message);
      console.error("Status code:", error.statusCode);
    } else if (error instanceof errors.UnauthorizedError) {
      console.error("Unauthorized - check your credentials");
    } else if (error instanceof errors.ValidationErrorResponse) {
      console.error("Validation error:", error.data$);
    } else {
      console.error("Unexpected error:", getErrorMessage(error));
    }
  }
}
```

### Using the runSample Helper

The samples use a `runSample` helper that provides consistent error handling:

```typescript
import { runSample } from "./common/setup.js";

async function mySample() {
  const fastpix = createFastpixClient();
  
  // Your sample code here
  const result = await fastpix.someOperation();
  console.log(result);
}

// This will automatically handle errors and provide consistent logging
await runSample("My Sample", mySample);
```

## Common Error Scenarios

### 1. Authentication Errors

```typescript
// Check your credentials
if (config.username === "your-access-token") {
  console.error("Please set your FastPix credentials in the .env file");
  return;
}
```

### 2. Validation Errors

```typescript
try {
  const result = await fastpix.inputVideo.createMedia({
    inputs: [], // Empty inputs will cause validation error
    accessPolicy: "public",
  });
} catch (error) {
  if (error instanceof errors.ValidationErrorResponse) {
    console.error("Validation failed:", error.data$);
  }
}
```

### 3. Network Errors

```typescript
try {
  const result = await fastpix.someOperation();
} catch (error) {
  if (error instanceof ConnectionError) {
    console.error("Network error - check your internet connection");
  } else if (error instanceof RequestTimeoutError) {
    console.error("Request timed out - try again later");
  }
}
```

### 4. Resource Not Found

```typescript
try {
  const result = await fastpix.manageVideos.getMedia({
    mediaId: "non-existent-id",
  });
} catch (error) {
  if (error instanceof errors.MediaNotFoundError) {
    console.error("Media not found - check the media ID");
  }
}
```

## Best Practices

### 1. Always Handle Errors

```typescript
// ❌ Bad - unhandled errors
const result = await fastpix.someOperation();

// ✅ Good - proper error handling
try {
  const result = await fastpix.someOperation();
  console.log("Success:", result);
} catch (error) {
  console.error("Error:", getErrorMessage(error));
}
```

### 2. Use Specific Error Types

```typescript
// ❌ Bad - generic error handling
catch (error) {
  console.error("Something went wrong:", error);
}

// ✅ Good - specific error handling
catch (error) {
  if (error instanceof errors.BadRequestError) {
    console.error("Bad request:", error.message);
  } else if (error instanceof errors.UnauthorizedError) {
    console.error("Unauthorized - check credentials");
  } else {
    console.error("Unexpected error:", getErrorMessage(error));
  }
}
```

### 3. Provide Helpful Error Messages

```typescript
catch (error) {
  if (error instanceof errors.UnauthorizedError) {
    console.error("❌ Authentication failed");
    console.error("   Please check your FASTPIX_USERNAME and FASTPIX_PASSWORD");
    console.error("   Make sure they are set correctly in your .env file");
  }
}
```

### 4. Log Errors Appropriately

```typescript
catch (error) {
  // Log to console for debugging
  console.error("Operation failed:", getErrorMessage(error));
  
  // Log to file for production (example)
  // logger.error("API call failed", { error, operation: "createMedia" });
  
  // Don't expose sensitive information
  // console.error("Error:", error); // ❌ Might contain sensitive data
}
```

## Debugging Tips

### 1. Enable Debug Logging

```typescript
const fastpix = new Fastpix({
  security: { username: "...", password: "..." },
  debugLogger: console, // Enable debug logging
});
```

### 2. Check Error Details

```typescript
catch (error) {
  console.error("Error type:", error.constructor.name);
  console.error("Error message:", error.message);
  console.error("Status code:", error.statusCode);
  console.error("Headers:", error.headers);
  console.error("Body:", error.body);
}
```

### 3. Use Error Stack Traces

```typescript
catch (error) {
  if (error instanceof Error && error.stack) {
    console.error("Stack trace:", error.stack);
  }
}
```

## Sample Error Handling Examples

See the following sample files for real-world error handling examples:

- `samples/ai/ai-features.ts` - Handles AI feature errors gracefully
- `samples/comprehensive-example.ts` - Shows error handling in complex workflows
- `samples/analytics/dimensions.ts` - Handles dimension lookup errors
- `samples/common/setup.ts` - Provides consistent error handling utilities

## Troubleshooting Common Issues

### 1. "Invalid credentials" error
- Check your `.env` file has correct `FASTPIX_USERNAME` and `FASTPIX_PASSWORD`
- Verify credentials are valid in the FastPix dashboard

### 2. "Media not found" error
- Ensure the media ID exists
- Check if the media belongs to your account

### 3. "Validation failed" error
- Check required parameters are provided
- Verify parameter types and formats
- Look at the error details for specific validation issues

### 4. "Network error" or timeout
- Check your internet connection
- Verify the FastPix API is accessible
- Consider increasing timeout values

### 5. "Rate limit exceeded" error
- Implement exponential backoff
- Reduce request frequency
- Check your API usage limits

## Additional Resources

- [FastPix API Documentation](https://docs.fastpix.io/)
- [SDK Error Reference](../README.md#error-handling)
- [Sample Code Examples](./README.md)
