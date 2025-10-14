# Media Tracks
(*tracks*)

## Overview

### Available Operations

* [addMediaTrack](#addmediatrack) - Add audio or subtitle tracks to media
* [updateMediaTrack](#updatemediatrack) - Modify existing audio or subtitle tracks
* [deleteMediaTrack](#deletemediatrack) - Remove audio or subtitle tracks

## addMediaTrack

This endpoint allows you to add audio or subtitle tracks to an existing media file.

#### How it works
1. Send a POST request to this endpoint, replacing `<mediaId>` with the unique ID of the media.
2. Include the track information in the request body (language, type, etc.).
3. The response will include the updated media data and confirmation of the changes applied.

**Use case**: This is particularly useful when you want to add multiple language tracks or additional audio/subtitle options to your media.

Related guide: <a href="https://docs.fastpix.io/docs/manage-subtitle-tracks">Add tracks</a>

### Example Usage

#### Adding Audio Tracks

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

// Add English audio track
async function addEnglishAudio() {
  const result = await fastpix.manageVideos.addMediaTrack({
    mediaId: "your-media-id",
    language: "en",
    type: "audio",
    name: "English Audio Track",
    isDefault: true,
  });

  console.log("English audio track added:", result);
}

// Add Spanish audio track
async function addSpanishAudio() {
  const result = await fastpix.manageVideos.addMediaTrack({
    mediaId: "your-media-id",
    language: "es",
    type: "audio",
    name: "Spanish Audio Track",
    isDefault: false,
  });

  console.log("Spanish audio track added:", result);
}

// Add commentary track
async function addCommentaryTrack() {
  const result = await fastpix.manageVideos.addMediaTrack({
    mediaId: "your-media-id",
    language: "en",
    type: "audio",
    name: "Director's Commentary",
    isDefault: false,
  });

  console.log("Commentary track added:", result);
}

// Run all examples
async function run() {
  await addEnglishAudio();
  await addSpanishAudio();
  await addCommentaryTrack();
}

run();
```

#### Adding Subtitle Tracks

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

// Add English subtitles
async function addEnglishSubtitles() {
  const result = await fastpix.manageVideos.addMediaTrack({
    mediaId: "your-media-id",
    language: "en",
    type: "subtitle",
    name: "English Subtitles",
    isDefault: true,
  });

  console.log("English subtitles added:", result);
}

// Add Spanish subtitles
async function addSpanishSubtitles() {
  const result = await fastpix.manageVideos.addMediaTrack({
    mediaId: "your-media-id",
    language: "es",
    type: "subtitle",
    name: "Spanish Subtitles",
    isDefault: false,
  });

  console.log("Spanish subtitles added:", result);
}

// Add SDH (Subtitles for Deaf and Hard of Hearing)
async function addSDHSubtitles() {
  const result = await fastpix.manageVideos.addMediaTrack({
    mediaId: "your-media-id",
    language: "en",
    type: "subtitle",
    name: "English SDH",
    isDefault: false,
  });

  console.log("SDH subtitles added:", result);
}

// Add forced subtitles for foreign language content
async function addForcedSubtitles() {
  const result = await fastpix.manageVideos.addMediaTrack({
    mediaId: "your-media-id",
    language: "en",
    type: "subtitle",
    name: "Forced English Subtitles",
    isDefault: false,
    isForced: true,
  });

  console.log("Forced subtitles added:", result);
}

// Run all examples
async function run() {
  await addEnglishSubtitles();
  await addSpanishSubtitles();
  await addSDHSubtitles();
  await addForcedSubtitles();
}

run();
```

## updateMediaTrack

This endpoint allows you to modify existing audio or subtitle tracks for a media file.

#### How it works
1. Send a PATCH request to this endpoint, replacing `<mediaId>` and `<trackId>` with the appropriate IDs.
2. Include the updated track information in the request body.
3. The response will include the updated media data and confirmation of the changes applied.

**Use case**: This is useful when you need to update track metadata, change language settings, or modify track properties.

Related guide: <a href="https://docs.fastpix.io/docs/update-tracks">Update tracks</a>

### Example Usage

#### Updating Audio Tracks

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

// Update audio track language
async function updateAudioLanguage() {
  const result = await fastpix.manageVideos.updateMediaTrack({
    mediaId: "your-media-id",
    trackId: "audio-track-id",
    language: "es", // Change from English to Spanish
    name: "Spanish Audio Track",
  });

  console.log("Audio track language updated:", result);
}

// Update audio track name and make it default
async function updateAudioTrackName() {
  const result = await fastpix.manageVideos.updateMediaTrack({
    mediaId: "your-media-id",
    trackId: "audio-track-id",
    name: "Enhanced English Audio",
    isDefault: true,
  });

  console.log("Audio track name updated:", result);
}

// Update commentary track
async function updateCommentaryTrack() {
  const result = await fastpix.manageVideos.updateMediaTrack({
    mediaId: "your-media-id",
    trackId: "commentary-track-id",
    name: "Director's Commentary - Extended",
    language: "en",
  });

  console.log("Commentary track updated:", result);
}

// Run all examples
async function run() {
  await updateAudioLanguage();
  await updateAudioTrackName();
  await updateCommentaryTrack();
}

run();
```

#### Updating Subtitle Tracks

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

// Update subtitle language
async function updateSubtitleLanguage() {
  const result = await fastpix.manageVideos.updateMediaTrack({
    mediaId: "your-media-id",
    trackId: "subtitle-track-id",
    language: "fr", // Change from English to French
    name: "French Subtitles",
  });

  console.log("Subtitle language updated:", result);
}

// Update subtitle name and make it default
async function updateSubtitleName() {
  const result = await fastpix.manageVideos.updateMediaTrack({
    mediaId: "your-media-id",
    trackId: "subtitle-track-id",
    name: "Enhanced English Subtitles",
    isDefault: true,
  });

  console.log("Subtitle name updated:", result);
}

// Update SDH subtitles
async function updateSDHSubtitles() {
  const result = await fastpix.manageVideos.updateMediaTrack({
    mediaId: "your-media-id",
    trackId: "sdh-track-id",
    name: "English SDH - Updated",
    language: "en",
    isDefault: false,
  });

  console.log("SDH subtitles updated:", result);
}

// Update forced subtitles
async function updateForcedSubtitles() {
  const result = await fastpix.manageVideos.updateMediaTrack({
    mediaId: "your-media-id",
    trackId: "forced-track-id",
    name: "Forced English Subtitles - Updated",
    language: "en",
    isForced: true,
  });

  console.log("Forced subtitles updated:", result);
}

// Run all examples
async function run() {
  await updateSubtitleLanguage();
  await updateSubtitleName();
  await updateSDHSubtitles();
  await updateForcedSubtitles();
}

run();
```

## deleteMediaTrack

This endpoint allows you to remove audio or subtitle tracks from a media file.

#### How it works
1. Send a DELETE request to this endpoint, replacing `<mediaId>` and `<trackId>` with the appropriate IDs.
2. The response will include the updated media data and confirmation of the track removal.

**Use case**: This is useful when you need to remove outdated tracks, clean up unused language options, or simplify your media structure.

Related guide: <a href="https://docs.fastpix.io/docs/delete-tracks">Delete tracks</a>

### Example Usage

#### Deleting Audio Tracks

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

// Delete specific audio track
async function deleteAudioTrack() {
  const result = await fastpix.manageVideos.deleteMediaTrack({
    mediaId: "your-media-id",
    trackId: "audio-track-id",
  });

  console.log("Audio track deleted:", result);
}

// Delete commentary track
async function deleteCommentaryTrack() {
  const result = await fastpix.manageVideos.deleteMediaTrack({
    mediaId: "your-media-id",
    trackId: "commentary-track-id",
  });

  console.log("Commentary track deleted:", result);
}

// Delete multiple audio tracks
async function deleteMultipleAudioTracks() {
  const trackIds = ["audio-track-1", "audio-track-2", "audio-track-3"];
  
  for (const trackId of trackIds) {
    const result = await fastpix.manageVideos.deleteMediaTrack({
      mediaId: "your-media-id",
      trackId: trackId,
    });
    
    console.log(`Track ${trackId} deleted:`, result);
  }
}

// Run all examples
async function run() {
  await deleteAudioTrack();
  await deleteCommentaryTrack();
  await deleteMultipleAudioTracks();
}

run();
```

#### Deleting Subtitle Tracks

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

// Delete specific subtitle track
async function deleteSubtitleTrack() {
  const result = await fastpix.manageVideos.deleteMediaTrack({
    mediaId: "your-media-id",
    trackId: "subtitle-track-id",
  });

  console.log("Subtitle track deleted:", result);
}

// Delete SDH subtitles
async function deleteSDHSubtitles() {
  const result = await fastpix.manageVideos.deleteMediaTrack({
    mediaId: "your-media-id",
    trackId: "sdh-track-id",
  });

  console.log("SDH subtitles deleted:", result);
}

// Delete forced subtitles
async function deleteForcedSubtitles() {
  const result = await fastpix.manageVideos.deleteMediaTrack({
    mediaId: "your-media-id",
    trackId: "forced-track-id",
  });

  console.log("Forced subtitles deleted:", result);
}

// Delete multiple subtitle tracks
async function deleteMultipleSubtitleTracks() {
  const trackIds = ["subtitle-track-1", "subtitle-track-2", "subtitle-track-3"];
  
  for (const trackId of trackIds) {
    const result = await fastpix.manageVideos.deleteMediaTrack({
      mediaId: "your-media-id",
      trackId: trackId,
    });
    
    console.log(`Subtitle track ${trackId} deleted:`, result);
  }
}

// Run all examples
async function run() {
  await deleteSubtitleTrack();
  await deleteSDHSubtitles();
  await deleteForcedSubtitles();
  await deleteMultipleSubtitleTracks();
}

run();
```

## Media Tracks Overview

### What are Media Tracks?

Media tracks are additional audio or subtitle streams that can be added to your video content to provide multiple language options or accessibility features.

### Types of Tracks

**Audio Tracks:**
- Multiple language audio streams
- Commentary tracks
- Music-only tracks
- Sound effects tracks

**Subtitle Tracks:**
- Closed captions
- Subtitles in multiple languages
- SDH (Subtitles for Deaf and Hard of Hearing)
- Forced subtitles for foreign language content

### Use Cases

**International Content:**
- Add multiple language audio tracks
- Provide subtitles in different languages
- Support global audiences

**Accessibility:**
- Add closed captions for hearing-impaired users
- Provide audio descriptions
- Support assistive technologies

**Content Enhancement:**
- Add commentary tracks
- Include director's commentary
- Provide educational content overlays

### Best Practices

1. **Use consistent naming** for track identification
2. **Provide multiple language options** for international content
3. **Include accessibility tracks** for all public content
4. **Test track playback** across different devices
5. **Organize tracks logically** by language and type

## Real-World Examples

### Complete International Content Setup

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

// Complete setup for international content
async function setupInternationalContent() {
  const mediaId = "your-media-id";
  
  // Add multiple audio tracks
  const audioTracks = [
    { language: "en", name: "English Audio", isDefault: true },
    { language: "es", name: "Spanish Audio", isDefault: false },
    { language: "fr", name: "French Audio", isDefault: false },
    { language: "de", name: "German Audio", isDefault: false },
  ];
  
  for (const track of audioTracks) {
    await fastpix.manageVideos.addMediaTrack({
      mediaId,
      language: track.language,
      type: "audio",
      name: track.name,
      isDefault: track.isDefault,
    });
    
    console.log(`Added ${track.name}`);
  }
  
  // Add multiple subtitle tracks
  const subtitleTracks = [
    { language: "en", name: "English Subtitles", isDefault: true },
    { language: "es", name: "Spanish Subtitles", isDefault: false },
    { language: "fr", name: "French Subtitles", isDefault: false },
    { language: "de", name: "German Subtitles", isDefault: false },
    { language: "en", name: "English SDH", isDefault: false },
  ];
  
  for (const track of subtitleTracks) {
    await fastpix.manageVideos.addMediaTrack({
      mediaId,
      language: track.language,
      type: "subtitle",
      name: track.name,
      isDefault: track.isDefault,
    });
    
    console.log(`Added ${track.name}`);
  }
  
  console.log("International content setup complete!");
}

// Educational content with commentary
async function setupEducationalContent() {
  const mediaId = "your-media-id";
  
  // Add main audio track
  await fastpix.manageVideos.addMediaTrack({
    mediaId,
    language: "en",
    type: "audio",
    name: "Main Audio",
    isDefault: true,
  });
  
  // Add instructor commentary
  await fastpix.manageVideos.addMediaTrack({
    mediaId,
    language: "en",
    type: "audio",
    name: "Instructor Commentary",
    isDefault: false,
  });
  
  // Add subtitles for accessibility
  await fastpix.manageVideos.addMediaTrack({
    mediaId,
    language: "en",
    type: "subtitle",
    name: "English Subtitles",
    isDefault: true,
  });
  
  // Add SDH for hearing impaired
  await fastpix.manageVideos.addMediaTrack({
    mediaId,
    language: "en",
    type: "subtitle",
    name: "English SDH",
    isDefault: false,
  });
  
  console.log("Educational content setup complete!");
}

// Run examples
async function run() {
  await setupInternationalContent();
  await setupEducationalContent();
}

run();
```

### Track Management Workflow

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

// Complete track management workflow
async function trackManagementWorkflow() {
  const mediaId = "your-media-id";
  
  // 1. Add initial tracks
  console.log("Step 1: Adding initial tracks...");
  
  const englishAudio = await fastpix.manageVideos.addMediaTrack({
    mediaId,
    language: "en",
    type: "audio",
    name: "English Audio",
    isDefault: true,
  });
  
  const englishSubtitles = await fastpix.manageVideos.addMediaTrack({
    mediaId,
    language: "en",
    type: "subtitle",
    name: "English Subtitles",
    isDefault: true,
  });
  
  console.log("Initial tracks added");
  
  // 2. Update track names
  console.log("Step 2: Updating track names...");
  
  await fastpix.manageVideos.updateMediaTrack({
    mediaId,
    trackId: englishAudio.trackId,
    name: "Enhanced English Audio",
  });
  
  await fastpix.manageVideos.updateMediaTrack({
    mediaId,
    trackId: englishSubtitles.trackId,
    name: "Enhanced English Subtitles",
  });
  
  console.log("Track names updated");
  
  // 3. Add additional language tracks
  console.log("Step 3: Adding additional language tracks...");
  
  const spanishAudio = await fastpix.manageVideos.addMediaTrack({
    mediaId,
    language: "es",
    type: "audio",
    name: "Spanish Audio",
    isDefault: false,
  });
  
  const spanishSubtitles = await fastpix.manageVideos.addMediaTrack({
    mediaId,
    language: "es",
    type: "subtitle",
    name: "Spanish Subtitles",
    isDefault: false,
  });
  
  console.log("Additional language tracks added");
  
  // 4. Clean up unused tracks (if needed)
  console.log("Step 4: Cleaning up unused tracks...");
  
  // Example: Remove a specific track
  // await fastpix.manageVideos.deleteMediaTrack({
  //   mediaId,
  //   trackId: "unused-track-id",
  // });
  
  console.log("Track management workflow complete!");
}

// Run workflow
trackManagementWorkflow();
```

## Track Operations Summary

### Available Operations

| Operation | Method | Endpoint | Description |
|-----------|--------|----------|-------------|
| **addMediaTrack** | POST | `/on-demand/{mediaId}/tracks` | Add audio or subtitle tracks to media |
| **updateMediaTrack** | PATCH | `/on-demand/{mediaId}/tracks/{trackId}` | Modify existing audio or subtitle tracks |
| **deleteMediaTrack** | DELETE | `/on-demand/{mediaId}/tracks/{trackId}` | Remove audio or subtitle tracks |

### Track Parameters

| Parameter | Type | Required | Description | Example Values |
|-----------|------|----------|-------------|----------------|
| **mediaId** | string | ✓ | Unique identifier of the media | `"fc733e3f-2fba-4c3d-9388-2511dc50d15f"` |
| **trackId** | string | ✓ | Unique identifier of the track (for update/delete) | `"track-123-456"` |
| **language** | string | ✓ | Language code for the track | `"en"`, `"es"`, `"fr"`, `"de"` |
| **type** | string | ✓ | Type of track (audio or subtitle) | `"audio"`, `"subtitle"` |
| **name** | string | ✓ | Display name for the track | `"English Audio"`, `"Spanish Subtitles"` |
| **isDefault** | boolean | - | Whether this track is the default | `true`, `false` |
| **isForced** | boolean | - | Whether subtitles are forced (subtitle tracks only) | `true`, `false` |

### Track Types and Use Cases

| Track Type | Language | Name Example | Use Case | isDefault |
|------------|----------|--------------|----------|-----------|
| **Audio** | `"en"` | `"English Audio"` | Primary language audio | `true` |
| **Audio** | `"es"` | `"Spanish Audio"` | Secondary language audio | `false` |
| **Audio** | `"en"` | `"Director's Commentary"` | Special content audio | `false` |
| **Subtitle** | `"en"` | `"English Subtitles"` | Primary language subtitles | `true` |
| **Subtitle** | `"es"` | `"Spanish Subtitles"` | Secondary language subtitles | `false` |
| **Subtitle** | `"en"` | `"English SDH"` | Accessibility subtitles | `false` |
| **Subtitle** | `"en"` | `"Forced English Subtitles"` | Foreign language content | `false` |

### Language Codes (BCP 47 Standard)

> **Note:** All language codes follow the BCP 47 standard (RFC 5646) for international language tag identification. This ensures compatibility with web standards and international accessibility requirements.

| Language | BCP 47 Code | Audio Track | Subtitle Track | Region Variants |
|----------|-------------|-------------|----------------|-----------------|
| **English** | `"en"` | ✅ | ✅ | `"en-US"`, `"en-GB"`, `"en-AU"` |
| **Spanish** | `"es"` | ✅ | ✅ | `"es-ES"`, `"es-MX"`, `"es-AR"` |
| **French** | `"fr"` | ✅ | ✅ | `"fr-FR"`, `"fr-CA"`, `"fr-BE"` |
| **German** | `"de"` | ✅ | ✅ | `"de-DE"`, `"de-AT"`, `"de-CH"` |
| **Italian** | `"it"` | ✅ | ✅ | `"it-IT"`, `"it-CH"` |
| **Portuguese** | `"pt"` | ✅ | ✅ | `"pt-PT"`, `"pt-BR"` |
| **Chinese (Simplified)** | `"zh-CN"` | ✅ | ✅ | `"zh-Hans"` |
| **Chinese (Traditional)** | `"zh-TW"` | ✅ | ✅ | `"zh-Hant"` |
| **Japanese** | `"ja"` | ✅ | ✅ | `"ja-JP"` |
| **Korean** | `"ko"` | ✅ | ✅ | `"ko-KR"` |
| **Arabic** | `"ar"` | ✅ | ✅ | `"ar-SA"`, `"ar-EG"`, `"ar-AE"` |
| **Russian** | `"ru"` | ✅ | ✅ | `"ru-RU"` |
| **Dutch** | `"nl"` | ✅ | ✅ | `"nl-NL"`, `"nl-BE"` |
| **Swedish** | `"sv"` | ✅ | ✅ | `"sv-SE"` |
| **Norwegian** | `"no"` | ✅ | ✅ | `"no-NO"`, `"nb-NO"` |
| **Danish** | `"da"` | ✅ | ✅ | `"da-DK"` |
| **Finnish** | `"fi"` | ✅ | ✅ | `"fi-FI"` |
| **Polish** | `"pl"` | ✅ | ✅ | `"pl-PL"` |
| **Czech** | `"cs"` | ✅ | ✅ | `"cs-CZ"` |
| **Hungarian** | `"hu"` | ✅ | ✅ | `"hu-HU"` |
| **Greek** | `"el"` | ✅ | ✅ | `"el-GR"` |
| **Turkish** | `"tr"` | ✅ | ✅ | `"tr-TR"` |
| **Hebrew** | `"he"` | ✅ | ✅ | `"he-IL"` |
| **Hindi** | `"hi"` | ✅ | ✅ | `"hi-IN"` |
| **Thai** | `"th"` | ✅ | ✅ | `"th-TH"` |
| **Vietnamese** | `"vi"` | ✅ | ✅ | `"vi-VN"` |
| **Indonesian** | `"id"` | ✅ | ✅ | `"id-ID"` |
| **Malay** | `"ms"` | ✅ | ✅ | `"ms-MY"` |
| **Tagalog** | `"tl"` | ✅ | ✅ | `"tl-PH"` |

### Response Codes

| Status Code | Description | When It Occurs |
|-------------|-------------|----------------|
| **200** | Success | Track operation completed successfully |
| **201** | Created | New track added successfully |
| **400** | Bad Request | Invalid parameters or request format |
| **401** | Unauthorized | Invalid or missing authentication |
| **403** | Forbidden | Insufficient permissions |
| **404** | Not Found | Media or track not found |
| **422** | Validation Error | Invalid track data or constraints |

### Best Practices Summary

| Practice | Description | Example |
|----------|-------------|---------|
| **Consistent Naming** | Use clear, descriptive names | `"English Audio"` vs `"Track 1"` |
| **Default Tracks** | Set primary language as default | `isDefault: true` for main language |
| **Accessibility** | Include SDH and forced subtitles | `"English SDH"`, `"Forced English"` |
| **International Support** | Provide multiple language options | English, Spanish, French, German |
| **Track Organization** | Group by language and type | Audio tracks first, then subtitles |
| **Testing** | Verify playback across devices | Test on mobile, desktop, TV |

## Quick Reference Table

### Complete Track Operations Overview

| Operation | Method | Purpose | Required Parameters | Optional Parameters | Example Use Case |
|-----------|--------|---------|-------------------|-------------------|------------------|
| **addMediaTrack** | POST | Add new audio/subtitle track | `mediaId`, `language`, `type`, `name` | `isDefault`, `isForced` | Add Spanish audio track |
| **updateMediaTrack** | PATCH | Modify existing track | `mediaId`, `trackId` | `language`, `name`, `isDefault`, `isForced` | Change track language |
| **deleteMediaTrack** | DELETE | Remove track | `mediaId`, `trackId` | - | Remove unused track |

### Track Configuration Examples (BCP 47 Standard)

| Track Type | BCP 47 Code | Name | isDefault | isForced | Use Case |
|------------|-------------|------|-----------|----------|----------|
| **Audio** | `"en-US"` | `"English (US) Audio"` | `true` | - | Primary language |
| **Audio** | `"es-ES"` | `"Spanish (Spain) Audio"` | `false` | - | Secondary language |
| **Audio** | `"en-US"` | `"Director's Commentary"` | `false` | - | Special content |
| **Subtitle** | `"en-US"` | `"English (US) Subtitles"` | `true` | `false` | Primary subtitles |
| **Subtitle** | `"es-ES"` | `"Spanish (Spain) Subtitles"` | `false` | `false` | Secondary subtitles |
| **Subtitle** | `"en-US"` | `"English SDH"` | `false` | `false` | Accessibility |
| **Subtitle** | `"en-US"` | `"Forced English"` | `false` | `true` | Foreign content |
| **Audio** | `"fr-FR"` | `"French (France) Audio"` | `false` | - | International content |
| **Subtitle** | `"zh-CN"` | `"Chinese (Simplified) Subtitles"` | `false` | `false` | Asian markets |
| **Subtitle** | `"ar-SA"` | `"Arabic (Saudi) Subtitles"` | `false` | `false` | Middle East |

### Common Workflows

| Workflow | Steps | Example |
|----------|-------|---------|
| **International Setup** | Add multiple language tracks | English + Spanish + French |
| **Accessibility Setup** | Add SDH and forced subtitles | English SDH + Forced English |
| **Educational Content** | Add commentary + subtitles | Main audio + Commentary + Subtitles |
| **Content Cleanup** | Remove unused tracks | Delete old language tracks |

### Error Handling Guide

| Error Code | Meaning | Solution |
|------------|---------|----------|
| **400** | Bad Request | Check parameter format |
| **401** | Unauthorized | Verify credentials |
| **403** | Forbidden | Check permissions |
| **404** | Not Found | Verify media/track ID |
| **422** | Validation Error | Check track constraints |
