# Changelog

All notable changes to this project will be documented in this file.

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