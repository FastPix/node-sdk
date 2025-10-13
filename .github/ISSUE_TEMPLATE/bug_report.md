---
name: Bug Report
about: Report a bug or unexpected behavior in the FastPix Node SDK
title: '[BUG] '
labels: ['bug', 'needs-triage']
assignees: ''
---

# Bug Report

Thank you for taking the time to report a bug with the FastPix Node SDK. To help us resolve your issue quickly and efficiently, please provide the following information:

## Description
**Clear and concise description of the bug:**

<!-- Please provide a detailed description of what you're experiencing -->

## Environment Information

### System Details
- **Operating System:** [e.g., Windows 10, macOS 12.0, Ubuntu 20.04, etc.]
- **Node.js Version:** [e.g., 18.17.0, 20.5.0, etc.]
- **NPM Version:** [e.g., 9.6.7, 10.2.0, etc.]
- **Package Manager:** [e.g., npm, yarn, pnpm, bun]

### SDK Information
- **FastPix SDK Version:** [e.g., 2.0.1, 1.9.0, etc.]
- **TypeScript Version:** [e.g., 5.1.6, 4.9.5, etc.] (if applicable)
- **Framework:** [e.g., Express.js, Next.js, React, Vue, etc.] (if applicable)

## Reproduction Steps

1. **Setup Environment:**
   ```bash
   npm install @fastpix/fastpix-node@latest
   ```

2. **Code to Reproduce:**
   ```typescript
   // Please provide a minimal, reproducible example
   import { Fastpix } from '@fastpix/fastpix-node';
   
   const fastpix = new Fastpix({
     security: {
       username: 'your-access-token',
       password: 'your-secret-key',
     },
   });
   
   // Your code here that causes the issue
   ```

3. **Expected Behavior:**

    ```
    <!-- Describe what you expected to happen -->
    ```

4. **Actual Behavior:**

    ```
    <!-- Describe what actually happened -->
    ```

5. **Error Messages/Logs:**
   ```
   <!-- Paste any error messages, stack traces, or logs here -->
   ```

## Debugging Information

### Console Output
```
<!-- Paste the complete console output here -->
```

### Error Stack Traces
```javascript
// Complete stack trace for JavaScript/TypeScript errors
Error: FastPix API Error: 400 Bad Request
    at FastpixClient.request (/node_modules/@fastpix/fastpix-node/lib/client.js:45:12)
    at processTicksAndRejections (node:internal/process/task_queues.js:95:5)
    at async createMedia (/app/services/media.js:23:8)
    at async main (/app/index.js:15:3)
```

### Network Requests
```http
# Raw HTTP request (remove sensitive headers)
POST /v1/media HTTP/1.1
Host: api.fastpix.io
Authorization: Basic ***
Content-Type: application/json

{
  "inputs": [
    {
      "type": "video",
      "url": "https://example.com/video.mp4"
    }
  ],
  "accessPolicy": "public"
}
```

### Screenshots
<!-- If applicable, please attach screenshots that help explain your issue -->

## Additional Context

### Configuration
```typescript
// Please share your SDK configuration (remove sensitive information)
const fastpix = new Fastpix({
  serverURL: 'https://api.fastpix.io/v1/',
  security: {
    username: 'your',
    password: '***',
  },
  // Any other configuration options
});
```

### Workarounds
<!-- If you've found any workarounds, please describe them here -->

## Priority
Please indicate the priority of this bug:

- [ ] Critical (Blocks production use)
- [ ] High (Significant impact on functionality)
- [ ] Medium (Minor impact)
- [ ] Low (Nice to have)

## Checklist
Before submitting, please ensure:

- [ ] I have searched existing issues to avoid duplicates
- [ ] I have provided all required information
- [ ] I have tested with the latest SDK version
- [ ] I have removed any sensitive information
- [ ] I have provided a minimal reproduction case
- [ ] I have checked the documentation

---

**Thank you for helping improve the FastPix Node SDK! 🚀**
