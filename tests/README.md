# GET Endpoints Validation

This directory contains the GET endpoints validator script and generated reports.

## Quick Start

1. **Set environment variables:**
   ```bash
   export FASTPIX_USERNAME="your-username"
   export FASTPIX_PASSWORD="your-password"
   ```

2. **Run the validator:**
   ```bash
   npm run validate:get-endpoints
   ```

3. **View results:**
   - Full report: `GET_ENDPOINTS_OPENAPI_RESPONSE_VALIDATION_REPORT.md`
   - Fix suggestions: `GET_ENDPOINTS_OPENAPI_RESPONSE_FIX_SUGGESTIONS.md`
   - Artifacts: `artifacts/*.api.json` and `artifacts/*.sdk.json`

## Generated Files

### Reports
- **`GET_ENDPOINTS_OPENAPI_RESPONSE_VALIDATION_REPORT.md`** - Complete validation report with per-endpoint details
- **`GET_ENDPOINTS_OPENAPI_RESPONSE_FIX_SUGGESTIONS.md`** - Heuristic suggestions for fixing validation failures

### Artifacts
- **`artifacts/<operationId>.api.json`** - Raw API response JSON
- **`artifacts/<operationId>.sdk.json`** - SDK-parsed response JSON

## Fixtures

The script uses `get-endpoints-fixtures.json` to provide real IDs for path parameters. If missing, placeholder UUIDs are used.

<!-- BEGIN GET_ENDPOINTS_CONSOLIDATED -->
Last generated: 2025-12-22T12:42:02.944Z

- **Total GET endpoints**: 30
- **PASS**: 25
- **FAIL**: 5
- **SKIP**: 0

| Endpoint | OperationId | OpenAPI valid | SDK parse | Missing in SDK (present in API) | Missing in API (present in SDK) | Empty arrays omitted by SDK | Status |
|---|---|---:|---:|---|---|---|---|
| `/on-demand` | `list-media` | ❌ | ✅ | None | None | None | ❌ FAIL |
| `/on-demand/{livestreamId}/live-clips` | `list-live-clips` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/{mediaId}` | `get-media` | ❌ | ✅ | None | None | None | ❌ FAIL |
| `/on-demand/{mediaId}/summary` | `get-media-summary` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/{mediaId}/input-info` | `retrieveMediaInputInfo` | ❌ | ✅ | None | None | None | ❌ FAIL |
| `/on-demand/{mediaId}/playback-ids` | `list-playback-ids` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/uploads` | `list-uploads` | ✅ | ❌ | None | None | None | ❌ FAIL |
| `/on-demand/{mediaId}/media-clips` | `get-media-clips` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/playlists` | `get-all-playlists` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/playlists/{playlistId}` | `get-playlist-by-id` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/{mediaId}/playback-ids/{playbackId}` | `get-playback-id` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/drm-configurations` | `getDrmConfiguration` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/drm-configurations/{drmConfigurationId}` | `getDrmConfigurationById` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/live/streams` | `get-all-streams` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/live/streams/{streamId}/viewer-count` | `get-live-stream-viewer-count-by-id` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/live/streams/{streamId}` | `get-live-stream-by-id` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/live/streams/{streamId}/playback-ids/{playbackId}` | `get-live-stream-playback-id` | ✅ | ❌ | None | None | None | ❌ FAIL |
| `/live/streams/{streamId}/simulcast/{simulcastId}` | `get-specific-simulcast-of-stream` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/iam/signing-keys` | `list_signing_keys` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/iam/signing-keys/{signingKeyId}` | `get-signing_key_by_id` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/viewlist` | `list_video_views` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/viewlist/{viewId}` | `get_video_view_details` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/viewlist/top-content` | `list_by_top_content` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/dimensions` | `list_dimensions` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/dimensions/{dimensionsId}` | `list_filter_values_for_dimension` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/metrics/{metricId}/breakdown` | `list_breakdown_values` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/metrics/{metricId}/overall` | `list_overall_values` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/metrics/{metricId}/timeseries` | `get_timeseries_data` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/metrics/comparison` | `list_comparison_values` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/errors` | `list_errors` | ✅ | ✅ | None | None | None | ✅ PASS |

#### Missing fields (full lists)

- **list-media** (`/on-demand`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **list-live-clips** (`/on-demand/{livestreamId}/live-clips`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **get-media** (`/on-demand/{mediaId}`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **get-media-summary** (`/on-demand/{mediaId}/summary`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **retrieveMediaInputInfo** (`/on-demand/{mediaId}/input-info`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **list-playback-ids** (`/on-demand/{mediaId}/playback-ids`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **list-uploads** (`/on-demand/uploads`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **get-media-clips** (`/on-demand/{mediaId}/media-clips`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **get-all-playlists** (`/on-demand/playlists`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **get-playlist-by-id** (`/on-demand/playlists/{playlistId}`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **get-playback-id** (`/on-demand/{mediaId}/playback-ids/{playbackId}`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **getDrmConfiguration** (`/on-demand/drm-configurations`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **getDrmConfigurationById** (`/on-demand/drm-configurations/{drmConfigurationId}`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **get-all-streams** (`/live/streams`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **get-live-stream-viewer-count-by-id** (`/live/streams/{streamId}/viewer-count`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **get-live-stream-by-id** (`/live/streams/{streamId}`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **get-live-stream-playback-id** (`/live/streams/{streamId}/playback-ids/{playbackId}`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **get-specific-simulcast-of-stream** (`/live/streams/{streamId}/simulcast/{simulcastId}`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **list_signing_keys** (`/iam/signing-keys`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **get-signing_key_by_id** (`/iam/signing-keys/{signingKeyId}`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **list_video_views** (`/data/viewlist`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **get_video_view_details** (`/data/viewlist/{viewId}`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **list_by_top_content** (`/data/viewlist/top-content`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **list_dimensions** (`/data/dimensions`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **list_filter_values_for_dimension** (`/data/dimensions/{dimensionsId}`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **list_breakdown_values** (`/data/metrics/{metricId}/breakdown`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **list_overall_values** (`/data/metrics/{metricId}/overall`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **get_timeseries_data** (`/data/metrics/{metricId}/timeseries`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **list_comparison_values** (`/data/metrics/comparison`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None
- **list_errors** (`/data/errors`)
  - **Missing in SDK (present in API)**: None
  - **Missing in API (present in SDK)**: None
  - **Empty arrays omitted by SDK**: None
  - **Empty arrays omitted by API**: None

Full details: `tests/GET_ENDPOINTS_OPENAPI_RESPONSE_VALIDATION_REPORT.md`
<!-- END GET_ENDPOINTS_CONSOLIDATED -->

