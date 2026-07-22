# Changelog

All notable changes to this project will be documented in this file.

## [3.0.0]

### Changed

- **BREAKING: `mp4Support` on media responses is now an array of renditions.**
  The API previously returned a single string (`"capped_4k"`) and now returns one
  object per generated rendition, each with its own status and dimensions.

  ```ts
  // before
  if (media.mp4Support === "capped_4k") { /* ... */ }

  // after
  const mp4 = media.mp4Support?.find((r) => r.type === "capped_4k");
  if (mp4?.status === "ready") { /* ... */ }
  ```

  Affected types: `Media`, `GetMediaResponse`, `GetAllMediaResponse`,
  `UpdateMedia`, `SourceAccessMedia`, `LiveMediaClips`.

  The `*Mp4Support` names are reused, but they now describe **one rendition
  object** (`type`, `status`, `height`, `width`, `ext`) rather than the old
  string enum, and the field holds an array of them. `height` and `width` are
  absent on `audioOnly` renditions. Code that imported e.g. `MediaMp4Support`
  as an enum will still resolve the name but no longer type-check.

  `type`, `status` and `ext` are typed as open enums —
  `*Mp4SupportType` (`capped_4k` / `audioOnly`), `*Mp4SupportStatus`
  (`preparing` / `ready` / `failed`) and `*Mp4SupportExt` (`mp4` / `m4a`).
  Being open, they narrow for autocomplete while still accepting values the
  API may add later, which surface as `Unrecognized<string>`.

  The **request** side is unchanged — enabling MP4 support still takes a single
  string (`none` / `capped_4k` / `audioOnly` / `audioOnly,capped_4k`) via
  `updateMp4Support` and the upload settings.

- **BREAKING: removed the response-side `mp4Support` enums.** `MediaMp4Support`,
  `GetMediaResponseMp4Support` and `GetAllMediaResponseMp4Support` described the
  old string response and no longer matched anything the API returns. The
  request-side enums (`CreateMediaRequestMp4Support`,
  `DirectUploadVideoMediaMp4Support`, `UpdatedMp4SupportMp4Support`) are
  unaffected.

### Added

- **`mp4Support` on `UpdateMedia`, `SourceAccessMedia` and `LiveMediaClips`**,
  which previously omitted the field entirely.

## [2.0.8]

### Fixed

- **Response validation no longer fails under zod ≥ 4.4.0.**
  zod `4.4.0` changed object parsing so that a missing optional key whose value
  schema is a `union` containing `undefined` was treated as required
  (`expected: "nonoptional"`). Because the SDK declared zod loosely
  (`^4.0.0`), fresh installs pulled `4.4.x` and threw
  `ResponseValidationError` on valid HTTP 200 responses that omitted optional
  fields (e.g. `summary`, `chapters`, `namedEntities`, `moderation` on media
  responses when those AI features are not enabled).
  - Root-cause fix: the internal `optional()` helper now wraps fields in
    `z.optional(...)`, so optional keys are treated as optional on **every** zod
    version (verified on 4.3.6 and 4.4.3).
  - Defense in depth: the `zod` dependency range is capped to
    `^3.25.65 || >=4.0.0 <4.4.0` so installs resolve to a known-good version
    automatically.
- **Webhook signing secret no longer logged.** Removed two debug `console.log`
  statements in `src/sdk/webhooks.ts` that printed the signing secret and raw
  payload.
- **Webhook module type resolution.** Added a `node:` types reference so
  `node:crypto`/`node:buffer` imports resolve in editors/type-checks.

### Changed

- **Dependency cleanup.** Removed the bogus `crypto` npm package (the deprecated
  registry stub — `node:crypto` is built in), removed the accidental
  self-dependency on `@fastpix/fastpix-node`, and moved `dotenv` to
  `devDependencies`. The published package now declares only `zod` as a runtime
  dependency.
- **SDK version bump: `2.0.7` → `2.0.8`** (`sdkVersion` constant and
  `User-Agent` header updated accordingly).

### Compatibility

- No changes to public types, method signatures, request/response models,
  default server URLs, hooks, or retry logic. No action required beyond updating
  the dependency.

## [2.0.7]

### Changed

- **SDK version bump: `2.0.6` → `2.0.7`.**
  A maintenance release that updates the SDK's internal version identifiers.
  It contains no functional, API, or behavioral changes and is fully
  backward compatible with `2.0.6`.

  Updated identifiers:
  - `sdkVersion` constant — now reports `2.0.7` (the internal identifiers were
    previously lagging at `2.0.5`; they are now aligned with the package version).
  - `User-Agent` header — outbound requests now identify as
    `fastpix-sdk/typescript 2.0.7`.

### Compatibility

- No changes to public types, method signatures, request/response models,
  default server URLs, hooks, or retry logic.
- No action required for existing integrations — update the dependency and
  rebuild.

## [2.0.6]

### ⚠️ Important — FastPix is migrating from `.io` to `.com`

All FastPix hosts and documentation links are moving to the `.com` TLD:

| Old (`.io`) | New (`.com`) |
|---|---|
| `api.fastpix.io` | `api.fastpix.com` |
| `stream.fastpix.io` | `stream.fastpix.com` |
| `images.fastpix.io` | `images.fastpix.com` |
| `dashboard.fastpix.io` | `dashboard.fastpix.com` |
| `www.fastpix.io` | `www.fastpix.com` |
| `docs.fastpix.io/...` | `fastpix.com/docs/...` |

The `.io` hosts continue to serve traffic during the transition, but **they are slated for deprecation soon** — please update any hard-coded references in your application as part of your next deploy. **We strongly recommend upgrading to this SDK release (or later) across every language you use** — every official FastPix SDK is being rolled out with the same migration.

What this means for users of `@fastpix/fastpix-node`:

- **If you rely on SDK defaults**, no code change is required. The default `serverURL` is `https://api.fastpix.com/v1/`, so bumping to `2.0.6` and running `npm install` is enough.
- **If you have an explicit `serverURL` override** (e.g. `new Fastpix({ serverURL: "https://api.fastpix.io/v1/" })`), change it to `https://api.fastpix.com/v1/`.
- **If you reference FastPix asset URLs directly** in your app (HLS playback URLs, image CDN, dashboard deep links), update those to the `.com` equivalents before `.io` is decommissioned.

All README and per-SDK doc links in this package have been updated to point at the new `https://fastpix.com/docs/...` URLs.

### Fixed (SDK ↔ API parity)

- `views.list` (`/data/viewlist`): added the previously-missing `errorId` field on each view entry, and stopped renaming `QoeScore` to `qoeScore` so the SDK output matches the API response byte-for-byte.
- `views.getDetails`: `data.fpSdk` / `data.fpSdkVersion` are no longer renamed to `fpSDK` / `fpSDKVersion` — the SDK now preserves the wire-format casing returned by the API.
- `media.list` (`/on-demand`): tracks now include `frameRate`, which was being silently dropped by the previous SDK build.
- `playback.create` (`/on-demand/{mediaId}/playback-ids`): response `data.resolution` is now correctly modelled as nullable — it is `null` when no resolution constraint was set at create time.
- `signingKeys.delete`: response shape now includes the optional `data.message` confirmation string the API has been returning.
- OpenAPI `tracks[].type` field for `VideoTrack` / `VideoTrackForGetAll` / `AudioTrack` / `SubtitleTrack` is now a proper `enum` (`video` / `audio` / `subtitle`) so language generators can discriminate the union correctly.
- OpenAPI `maxDuration.minimum` on live-stream schemas relaxed from `60` to `0` to reflect the API's "unbounded" sentinel value.

### Docs

- All README and per-service documentation pages updated from `docs.fastpix.io/...` and `docs.fastpix.com/...` to the new `https://fastpix.com/docs/...` URL structure.

## [2.0.5]
### Fixed
- Fixed `views.getDetails` `data.events[]` returning empty objects and emitting phantom `null` timestamps.
   
## [2.0.4]
### Fixed
- Fixed missing parameters in multiple API methods.
- Improved overall developer experience through more accurate typings.

## [2.0.3]
### Changed
- Updated npm authentication from Classic token to Granular token for improved security and fine-grained permissions.

## [2.0.2]
### Fixed
- Adjusted the code samples in the README.md
- Modified `getDrmConfiguration` method as a bug fix.

## [2.0.1]
### Changed
- Added keywords to `package.json` and updated the README.md redirection link.

## [2.0.0] - Major Feature Release
This release introduces a wide set of new APIs, significantly expanding the SDK’s capabilities across **On Demand**, **Live Stream**, **SigningKeys**, and **Video Data** domains.

### Media API
Extended functionality for managing media with advanced processing, playlist management, and DRM support:
- `updateMediaSummary` - Generate video summaries for quick insights
- `updateMediaChapters` - Automatically generate structured video chapters
- `updateMediaNamedEntities` - Extract named entities for video intelligence
- `updateMediaModeration` - Enable video moderation features for compliance
- `addMediaTrack` - Add audio/subtitle tracks
- `cancelUpload` - Cancel ongoing uploads gracefully
- `updateMediaTrack` - Update audio/subtitle tracks
- `deleteMediaTrack` - Remove audio/subtitle tracks
- `generateSubtitleTrack` - Auto-generate subtitles
- `updatedSourceAccess` - Update media source access permissions
- `updatedMp4Support` - Toggle MP4 support for a media
- `retrieveMediaInputInfo` - Fetch media input information
- `listUploads` - Retrieve all unused upload URLs
- `getMediaClips` - List clips of a media
- Playlist Management: 
  - `createAPlaylist`, `getAllPlaylists`, `getPlaylistById`, `updateAPlaylist`, `deleteAPlaylist`, `addMediaToPlaylist`, `changeMediaOrderInPlaylist`, `deleteMediaFromPlaylist`
- DRM Management:
  - `getDrmConfiguration`, `getDrmConfigurationById`

### Live API
Added fine-grained stream control:
- `enableLiveStream` - Enable a stream
- `disableLiveStream` - Disable a stream
- `completeLiveStream` - Mark a live stream as completed

### SigningKey API
Introduced secure signing key management:
- `createSigningKey` - Create signing keys for secure token usage
- `listSigningKeys` - List available signing keys
- `deleteSigningKey` - Revoke signing keys
- `getSigningKeyById` - Retrieve signing key details

### Data API
New analytics endpoints for tracking and measuring performance:
- `listVideoViews` - List video views
- `getVideoViewDetails` - Fetch detailed video view information
- `listByTopContent` - Discover top-performing content
- `getDataViewlistCurrentViewsGetTimeseriesViews` - Retrieve concurrent viewers timeseries
- `getDataViewlistCurrentViewsFilter` - Breakdown concurrent viewers by dimension
- `listDimensions` - List all available dimensions
- `listFilterValuesForDimension` - List filter values per dimension
- `listErrors` - Retrieve error logs
- `listBreakdownValues` - Get breakdown metrics
- `listOverallValues` - Get overall summary metrics
- `getTimeseriesData` - Access timeseries data
- `listComparisonValues` - Compare metrics across datasets

---

## [1.0.2] - Metadata Update
- Updated `package.json` with keywords related to FastPix Node.js API SDK for better discoverability.

## [1.0.1] - Documentation Update
- Improved `README.md` with clearer usage instructions and examples.

## [1.0.0] - Initial Release
- First release of the FastPix Node.js API SDK.  
- Provides a robust foundation for interacting with the FastPix API.  
  - **Media API**: Upload media, manage media assets (list, fetch, update, delete), and generate playback IDs.
  - **Live API**: Create, list, update, and delete live streams; generate and manage playback IDs; and simulcast to multiple platforms.