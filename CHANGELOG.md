# Changelog

All notable changes to this project will be documented in this file.

## [2.0.2]
- Adjusted the code samples in the README.md
- Modified `getDrmConfiguration` method as a bug fix.

## [2.0.1]
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
