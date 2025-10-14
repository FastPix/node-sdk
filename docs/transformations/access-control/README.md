# Access Control
(*accessControl*)

## Overview

### Available Operations

* [updateSourceAccess](#updatesourceaccess) - Control access permissions for media source

## updateSourceAccess

This endpoint allows you to control access permissions for a media source, determining who can view and access the content.

#### How it works
1. Send a PATCH request to this endpoint, replacing `<mediaId>` with the unique ID of the media.
2. Include the access policy settings in the request body (public, private, etc.).
3. The response will include the updated media data and confirmation of the access changes applied.

**Use case**: This is particularly useful when you need to change the visibility of content, implement content gating, or manage user access to specific media.

Related guide: <a href="https://docs.fastpix.io/docs/access-control">Access control</a>

### Example Usage

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.manageVideos.updateSourceAccess({
    mediaId: "your-media-id",
    accessPolicy: "private",
    allowedUsers: ["user1", "user2"],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageVideosUpdateSourceAccess } from "@fastpix/fastpix-node/funcs/manageVideosUpdateSourceAccess.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await manageVideosUpdateSourceAccess(fastpix, {
    mediaId: "your-media-id",
    accessPolicy: "private",
    allowedUsers: ["user1", "user2"],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosUpdateSourceAccess failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mediaId` | string | ✓ | The unique identifier of the media |
| `accessPolicy` | string | ✓ | Access policy (public, private, restricted) |
| `allowedUsers` | string[] | - | List of user IDs allowed to access the content |

### Response

**Promise<[models.MediaResponse](../../models/mediaresponse.md)>**

### Errors

| Error Type | Status Code | Content Type |
|-------------|-------------|--------------|
| errors.InvalidPermissionError | 401 | application/json |
| errors.ForbiddenError | 403 | application/json |
| errors.ValidationErrorResponse | 422 | application/json |
| errors.FastpixDefaultError | 4XX, 5XX | */* |

## Access Control Overview

### What is Access Control?

Access control allows you to manage who can view and access your media content, providing security and content gating capabilities.

### Access Policies

**Public Access:**
- Content is accessible to anyone
- No authentication required
- Suitable for marketing content and public videos

**Private Access:**
- Content requires authentication
- Only authenticated users can access
- Suitable for premium content and user-specific media

**Restricted Access:**
- Content is accessible to specific users only
- User-based access control
- Suitable for exclusive content and private sharing

### Use Cases

**Content Gating:**
- Implement paywalls for premium content
- Control access to exclusive content
- Manage user subscriptions

**Security:**
- Protect sensitive content
- Implement user-based permissions
- Control content distribution

**Business Logic:**
- Implement tiered access levels
- Manage content licensing
- Control content sharing

### Best Practices

1. **Use appropriate access levels** for different content types
2. **Implement user authentication** for private content
3. **Monitor access patterns** for security
4. **Provide clear access policies** to users
5. **Regularly review permissions** for security compliance
