# GET Endpoints — OpenAPI Response Validation Report

Generated: 2026-06-22T14:13:08.253Z

## Summary

- **Total GET endpoints**: 30
- **PASS**: 25
- **FAIL**: 5
- **SKIP**: 0

## Consolidated report

| Endpoint | OperationId | OpenAPI valid | SDK parse | Missing in SDK (present in API) | Missing in API (present in SDK) | Empty arrays omitted by SDK | Status |
|---|---|---:|---:|---|---|---|---|
| `/on-demand` | `list-media` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/{livestreamId}/live-clips` | `list-live-clips` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/{mediaId}` | `get-media` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/{mediaId}/summary` | `get-media-summary` | ✅ | ❌ | None | None | None | ❌ FAIL |
| `/on-demand/{mediaId}/input-info` | `retrieveMediaInputInfo` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/{mediaId}/playback-ids` | `list-playback-ids` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/uploads` | `list-uploads` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/{mediaId}/media-clips` | `get-media-clips` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/playlists` | `get-all-playlists` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/playlists/{playlistId}` | `get-playlist-by-id` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/{mediaId}/playback-ids/{playbackId}` | `get-playback-id` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/on-demand/drm-configurations` | `getDrmConfiguration` | ✅ | ❌ | None | None | None | ❌ FAIL |
| `/on-demand/drm-configurations/{drmConfigurationId}` | `getDrmConfigurationById` | ✅ | ❌ | `error.fields`, `error.fields[]`, `error.fields[].field`, `error.fields[].message` | None | None | ❌ FAIL |
| `/live/streams` | `get-all-streams` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/live/streams/{streamId}/viewer-count` | `get-live-stream-viewer-count-by-id` | ✅ | ❌ | None | None | None | ❌ FAIL |
| `/live/streams/{streamId}` | `get-live-stream-by-id` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/live/streams/{streamId}/playback-ids/{playbackId}` | `get-live-stream-playback-id` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/live/streams/{streamId}/simulcast/{simulcastId}` | `get-specific-simulcast-of-stream` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/iam/signing-keys` | `list_signing_keys` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/iam/signing-keys/{signingKeyId}` | `get-signing_key_by_id` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/viewlist` | `list_video_views` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/viewlist/{viewId}` | `get_video_view_details` | ✅ | ✅ | `data.custom.Device`, `data.custom.Device[]`, `data.custom.Device[].dimensionName`, `data.custom.Device[].displayName`, `data.custom.Device[].value`, `data.events[].d`, `data.events[].d.br`, `data.events[].d.cd`, `data.events[].d.fps`, `data.events[].d.h`, `data.events[].d.w`, `data.events[].e`, `data.events[].pt`, `data.events[].vt` | None | None | ❌ FAIL |
| `/data/viewlist/top-content` | `list_by_top_content` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/dimensions` | `list_dimensions` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/dimensions/{dimensionsId}` | `list_filter_values_for_dimension` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/metrics/{metricId}/breakdown` | `list_breakdown_values` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/metrics/{metricId}/overall` | `list_overall_values` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/metrics/{metricId}/timeseries` | `get_timeseries_data` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/metrics/comparison` | `list_comparison_values` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/errors` | `list_errors` | ✅ | ✅ | None | None | None | ✅ PASS |

## Per-endpoint details (full missing parameter lists)

### list-media (`/on-demand`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/list-media.api.json`
- **SDK response file**: `tests/artifacts/list-media.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "thumbnail": "https://images.fastpix.com/aaed1c0c-4c05-41de-ad84-7e78d6b728d0/thumbnail.png",
      "id": "265b27a6-7edc-4046-ad0b-69d55206e469",
      "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
      "metadata": {
        "source": "sdk-validate"
      },
      "mediaQuality": "standard",
      "maxResolution": "720p",
      "sourceResolution": "1080",
      "status": "Ready",
      "sourceAccess": false,
      "playbackIds": [
        {
          "id": "6166f9c5-aefa-411a-93b5-4af5d86d6b3b",
          "accessPolicy": "public",
          "accessRestrictions": {
            "domains": {
              "defaultPolicy": "allow",
              "allow": [],
              "deny": []
            },
            "userAgents": {
              "defaultPolicy": "allow",
              "allow": [],
              "deny": []
            }
          }
        },
        {
          "id": "aaed1c0c-4c05-41de-ad84-7e78d6b728d0",
          "accessPolicy": "public",
          "accessRestrictions": {
            "domains": {
              "defaultPolicy": "allow",
              "allow": [],
              "deny": []
            },
            "userAgents": {
              "defaultPolicy": "allow",
              "allow": [],
              "deny": []
            }
          }
        }
      ],
      "tracks": [
        {
          "id": "47065d02-0e4d-486a-a9af-034d022ed345",
          "type": "audio",
          "status": "Ready",
          "languageCode": "it",
          "languageName": "Italian"
        },
        {
          "id": "cd43d9f3-840c-475e-a86c-5c376d238f2a",
          "type": "audio",
          "status": "Ready",
          "languageCode": "und",
          "languageName": "default"
        },
        {
          "id": "e0e01ca3-3120-4ad0-bc2e-cde35d5d8690",
          "type": "video",
          "width": 1920,
          "height": 1080,
          "frameRate": "60.000",
          "status": "Ready"
        }
      ],
      "generatedSubtitles": [],
      "isAudioOnly": false,
      "subtitleAvailable": false,
      "duration": "00:00:10",
      "aspectRatio": "16:9",
      "createdAt": "2026-06-22T14:12:10.114943Z",
      "updatedAt": "2026-06-22T14:12:41.529984Z"
    }
  ],
  "pagination": {
    "totalRecords": 208,
    "currentOffset": 1,
    "offsetCount": 208
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "thumbnail": "https://images.fastpix.com/aaed1c0c-4c05-41de-ad84-7e78d6b728d0/thumbnail.png",
      "id": "265b27a6-7edc-4046-ad0b-69d55206e469",
      "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
      "metadata": {
        "source": "sdk-validate"
      },
      "mediaQuality": "standard",
      "maxResolution": "720p",
      "sourceResolution": "1080",
      "status": "Ready",
      "sourceAccess": false,
      "playbackIds": [
        {
          "id": "6166f9c5-aefa-411a-93b5-4af5d86d6b3b",
          "accessPolicy": "public",
          "accessRestrictions": {
            "domains": {
              "defaultPolicy": "allow",
              "allow": [],
              "deny": []
            },
            "userAgents": {
              "defaultPolicy": "allow",
              "allow": [],
              "deny": []
            }
          }
        },
        {
          "id": "aaed1c0c-4c05-41de-ad84-7e78d6b728d0",
          "accessPolicy": "public",
          "accessRestrictions": {
            "domains": {
              "defaultPolicy": "allow",
              "allow": [],
              "deny": []
            },
            "userAgents": {
              "defaultPolicy": "allow",
              "allow": [],
              "deny": []
            }
          }
        }
      ],
      "tracks": [
        {
          "id": "47065d02-0e4d-486a-a9af-034d022ed345",
          "type": "audio",
          "status": "Ready",
          "languageName": "Italian",
          "languageCode": "it"
        },
        {
          "id": "cd43d9f3-840c-475e-a86c-5c376d238f2a",
          "type": "audio",
          "status": "Ready",
          "languageName": "default",
          "languageCode": "und"
        },
        {
          "id": "e0e01ca3-3120-4ad0-bc2e-cde35d5d8690",
          "type": "video",
          "width": 1920,
          "height": 1080,
          "frameRate": "60.000",
          "status": "Ready"
        }
      ],
      "generatedSubtitles": [],
      "isAudioOnly": false,
      "subtitleAvailable": false,
      "duration": "00:00:10",
      "aspectRatio": "16:9",
      "createdAt": "2026-06-22T14:12:10.114Z",
      "updatedAt": "2026-06-22T14:12:41.529Z"
    }
  ],
  "pagination": {
    "totalRecords": 208,
    "currentOffset": 1,
    "offsetCount": 208
  }
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### list-live-clips (`/on-demand/{livestreamId}/live-clips`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/list-live-clips.api.json`
- **SDK response file**: `tests/artifacts/list-live-clips.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "totalRecords": 0,
    "currentOffset": 1,
    "offsetCount": 0
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "totalRecords": 0,
    "currentOffset": 1,
    "offsetCount": 0
  }
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### get-media (`/on-demand/{mediaId}`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/get-media.api.json`
- **SDK response file**: `tests/artifacts/get-media.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": {
    "thumbnail": "https://images.fastpix.com/82af62f9-64e8-4fe6-b72b-1ccc42d9874e/thumbnail.png",
    "id": "836f8e89-b756-4d8a-9aaf-0ed949e43ec1",
    "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
    "metadata": {
      "source": "sdk-validate"
    },
    "mediaQuality": "standard",
    "maxResolution": "720p",
    "sourceResolution": "1080",
    "status": "Ready",
    "sourceAccess": false,
    "playbackIds": [
      {
        "id": "82af62f9-64e8-4fe6-b72b-1ccc42d9874e",
        "accessPolicy": "public",
        "accessRestrictions": {
          "domains": {
            "defaultPolicy": "allow",
            "allow": [],
            "deny": []
          },
          "userAgents": {
            "defaultPolicy": "allow",
            "allow": [],
            "deny": []
          }
        }
      },
      {
        "id": "b1808523-e3c7-493d-88a1-a2d24631d78c",
        "accessPolicy": "public",
        "accessRestrictions": {
          "domains": {
            "defaultPolicy": "allow",
            "allow": [],
            "deny": []
          },
          "userAgents": {
            "defaultPolicy": "allow",
            "allow": [],
            "deny": []
          }
        }
      }
    ],
    "tracks": [
      {
        "id": "0d7cf616-8f43-4372-9d7d-cef1b1cf0c58",
        "type": "video",
        "width": 1920,
        "height": 1080,
        "frameRate": "60.000",
        "status": "available"
      },
      {
        "id": "2f04f660-38a9-4c66-ae5c-7028e049f927",
        "type": "subtitle",
        "status": "available",
        "languageCode": "fr-FR",
        "languageName": "French"
      },
      {
        "id": "340ed9da-be97-4f04-b15b-6cc09f7a3b98",
        "type": "subtitle",
        "status": "available",
        "languageCode": "es-ES",
        "languageName": "Spanish"
      },
      {
        "id": "4e2082d8-9e25-4bcf-b57d-44040a601e50",
        "type": "subtitle",
        "status": "available",
        "languageCode": "de-DE",
        "languageName": "German"
      },
      {
        "id": "86f0def8-e85e-4468-8e44-f7c4b8bec30e",
        "type": "subtitle",
        "status": "available",
        "languageCode": "ja-JP",
        "languageName": "Japanese"
      },
      {
        "id": "987c4c7b-1a6a-4a7b-b394-3f53b76ece79",
        "type": "subtitle",
        "status": "available",
        "languageCode": "it-IT",
        "languageName": "Italian"
      },
      {
        "id": "bb81b65e-967b-4e3a-b15f-cb900bd33fc2",
        "type": "audio",
        "status": "available",
        "languageCode": "und",
        "languageName": "default"
      },
      {
        "id": "d0a11388-defb-41d6-8275-1d29964867d9",
        "type": "audio",
        "status": "available",
        "languageCode": "it",
        "languageName": "Italian"
      },
      {
        "id": "f02261c3-819d-4cf9-a3ea-3195d496d45b",
        "type": "subtitle",
        "status": "available",
        "languageCode": "ko-KR",
        "languageName": "Korean"
      }
    ],
    "generatedSubtitles": [
      {
        "status": "available",
        "url": "https://stream.fastpix.com/82af62f9-64e8-4fe6-b72b-1ccc42d9874e/text/2f04f660-38a9-4c66-ae5c-7028e049f927.vtt"
      },
      {
        "status": "available",
        "url": "https://stream.fastpix.com/82af62f9-64e8-4fe6-b72b-1ccc42d9874e/text/340ed9da-be97-4f04-b15b-6cc09f7a3b98.vtt"
      },
      {
        "status": "available",
        "url": "https://stream.fastpix.com/82af62f9-64e8-4fe6-b72b-1ccc42d9874e/text/4e2082d8-9e25-4bcf-b57d-44040a601e50.vtt"
      },
      {
        "status": "available",
        "url": "https://stream.fastpix.com/82af62f9-64e8-4fe6-b72b-1ccc42d9874e/text/86f0def8-e85e-4468-8e44-f7c4b8bec30e.vtt"
      },
      {
        "status": "available",
        "url": "https://stream.fastpix.com/82af62f9-64e8-4fe6-b72b-1ccc42d9874e/text/987c4c7b-1a6a-4a7b-b394-3f53b76ece79.vtt"
      },
      {
        "status": "available",
        "url": "h
... (truncated)
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "thumbnail": "https://images.fastpix.com/82af62f9-64e8-4fe6-b72b-1ccc42d9874e/thumbnail.png",
    "id": "836f8e89-b756-4d8a-9aaf-0ed949e43ec1",
    "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
    "metadata": {
      "source": "sdk-validate"
    },
    "mediaQuality": "standard",
    "maxResolution": "720p",
    "sourceResolution": "1080",
    "status": "Ready",
    "sourceAccess": false,
    "playbackIds": [
      {
        "id": "82af62f9-64e8-4fe6-b72b-1ccc42d9874e",
        "accessPolicy": "public",
        "accessRestrictions": {
          "domains": {
            "defaultPolicy": "allow",
            "allow": [],
            "deny": []
          },
          "userAgents": {
            "defaultPolicy": "allow",
            "allow": [],
            "deny": []
          }
        }
      },
      {
        "id": "b1808523-e3c7-493d-88a1-a2d24631d78c",
        "accessPolicy": "public",
        "accessRestrictions": {
          "domains": {
            "defaultPolicy": "allow",
            "allow": [],
            "deny": []
          },
          "userAgents": {
            "defaultPolicy": "allow",
            "allow": [],
            "deny": []
          }
        }
      }
    ],
    "tracks": [
      {
        "id": "0d7cf616-8f43-4372-9d7d-cef1b1cf0c58",
        "type": "video",
        "width": 1920,
        "height": 1080,
        "frameRate": "60.000",
        "status": "available"
      },
      {
        "id": "2f04f660-38a9-4c66-ae5c-7028e049f927",
        "type": "subtitle",
        "status": "available",
        "languageName": "French",
        "languageCode": "fr-FR"
      },
      {
        "id": "340ed9da-be97-4f04-b15b-6cc09f7a3b98",
        "type": "subtitle",
        "status": "available",
        "languageName": "Spanish",
        "languageCode": "es-ES"
      },
      {
        "id": "4e2082d8-9e25-4bcf-b57d-44040a601e50",
        "type": "subtitle",
        "status": "available",
        "languageName": "German",
        "languageCode": "de-DE"
      },
      {
        "id": "86f0def8-e85e-4468-8e44-f7c4b8bec30e",
        "type": "subtitle",
        "status": "available",
        "languageName": "Japanese",
        "languageCode": "ja-JP"
      },
      {
        "id": "987c4c7b-1a6a-4a7b-b394-3f53b76ece79",
        "type": "subtitle",
        "status": "available",
        "languageName": "Italian",
        "languageCode": "it-IT"
      },
      {
        "id": "bb81b65e-967b-4e3a-b15f-cb900bd33fc2",
        "type": "audio",
        "status": "available",
        "languageName": "default",
        "languageCode": "und"
      },
      {
        "id": "d0a11388-defb-41d6-8275-1d29964867d9",
        "type": "audio",
        "status": "available",
        "languageName": "Italian",
        "languageCode": "it"
      },
      {
        "id": "f02261c3-819d-4cf9-a3ea-3195d496d45b",
        "type": "subtitle",
        "status": "available",
        "languageName": "Korean",
        "languageCode": "ko-KR"
      }
    ],
    "generatedSubtitles": [
      {
        "status": "available",
        "url": "https://stream.fastpix.com/82af62f9-64e8-4fe6-b72b-1ccc42d9874e/text/2f04f660-38a9-4c66-ae5c-7028e049f927.vtt"
      },
      {
        "status": "available",
        "url": "https://stream.fastpix.com/82af62f9-64e8-4fe6-b72b-1ccc42d9874e/text/340ed9da-be97-4f04-b15b-6cc09f7a3b98.vtt"
      },
      {
        "status": "available",
        "url": "https://stream.fastpix.com/82af62f9-64e8-4fe6-b72b-1ccc42d9874e/text/4e2082d8-9e25-4bcf-b57d-44040a601e50.vtt"
      },
      {
        "status": "available",
        "url": "https://stream.fastpix.com/82af62f9-64e8-4fe6-b72b-1ccc42d9874e/text/86f0def8-e85e-4468-8e44-f7c4b8bec30e.vtt"
      },
      {
        "status": "available",
        "url": "https://stream.fastpix.com/82af62f9-64e8-4fe6-b72b-1ccc42d9874e/text/987c4c7b-1a6a-4a7b-b394-3f53b76ece79.vtt"
      },
      {
        "status": "available",
        "url": "h
... (truncated)
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### get-media-summary (`/on-demand/{mediaId}/summary`)

- **Status**: FAIL
- **OpenAPI valid**: yes
- **SDK parse**: failed
- **SDK parse error**: API error occurred: Status 400 Content-Type application/json;charset=UTF-8
Body: {"success":false,"error":{"code":400,"message":"Summary not enabled","description":"Summary is not enabled for the requested media"}}
- **API response file**: `tests/artifacts/get-media-summary.api.json`
- **SDK response file**: `tests/artifacts/get-media-summary.sdk.json`

**API response (preview)**

```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Summary not enabled",
    "description": "Summary is not enabled for the requested media"
  }
}
```

**SDK response (preview)**

```json
{
  "name": "FastpixDefaultError",
  "message": "API error occurred: Status 400 Content-Type application/json;charset=UTF-8\nBody: {\"success\":false,\"error\":{\"code\":400,\"message\":\"Summary not enabled\",\"description\":\"Summary is not enabled for the requested media\"}}",
  "stack": "FastpixDefaultError: API error occurred: Status 400 Content-Type application/json;charset=UTF-8\nBody: {\"success\":false,\"error\":{\"code\":400,\"message\":\"Summary not enabled\",\"description\":\"Summary is not enabled for the requested media\"}}\n    at matchFunc (/Users/sumasree/fp-nodejs/node-sdk/src/lib/matchers.ts:304:16)\n    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)\n    at async $do (/Users/sumasree/fp-nodejs/node-sdk/src/funcs/manageVideosGetSummary.ts:162:20)",
  "statusCode": 400,
  "contentType": "application/json;charset=UTF-8",
  "body": "{\"success\":false,\"error\":{\"code\":400,\"message\":\"Summary not enabled\",\"description\":\"Summary is not enabled for the requested media\"}}",
  "bodyJson": {
    "success": false,
    "error": {
      "code": 400,
      "message": "Summary not enabled",
      "description": "Summary is not enabled for the requested media"
    }
  },
  "headers": {
    "alt-svc": "h3=\":443\"; ma=86400",
    "cf-cache-status": "DYNAMIC",
    "cf-ray": "a0fbd9b08f585ef9-HYD",
    "content-length": "133",
    "content-type": "application/json;charset=UTF-8",
    "date": "Mon, 22 Jun 2026 14:12:52 GMT",
    "server": "cloudflare"
  },
  "url": "https://api.fastpix.com/v1/on-demand/836f8e89-b756-4d8a-9aaf-0ed949e43ec1/summary"
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### retrieveMediaInputInfo (`/on-demand/{mediaId}/input-info`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/retrieveMediaInputInfo.api.json`
- **SDK response file**: `tests/artifacts/retrieveMediaInputInfo.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": {
    "configuration": {
      "url": "https://static.fastpix.com/fp-sample-video.mp4"
    },
    "file": {
      "containerFormat": "mp4",
      "tracks": [
        {
          "id": "0d7cf616-8f43-4372-9d7d-cef1b1cf0c58",
          "type": "video",
          "width": 1920,
          "height": 1080,
          "frameRate": "60.000",
          "status": "available"
        },
        {
          "id": "2f04f660-38a9-4c66-ae5c-7028e049f927",
          "type": "subtitle",
          "status": "available",
          "languageCode": "fr-FR",
          "languageName": "French"
        },
        {
          "id": "340ed9da-be97-4f04-b15b-6cc09f7a3b98",
          "type": "subtitle",
          "status": "available",
          "languageCode": "es-ES",
          "languageName": "Spanish"
        },
        {
          "id": "4e2082d8-9e25-4bcf-b57d-44040a601e50",
          "type": "subtitle",
          "status": "available",
          "languageCode": "de-DE",
          "languageName": "German"
        },
        {
          "id": "86f0def8-e85e-4468-8e44-f7c4b8bec30e",
          "type": "subtitle",
          "status": "available",
          "languageCode": "ja-JP",
          "languageName": "Japanese"
        },
        {
          "id": "987c4c7b-1a6a-4a7b-b394-3f53b76ece79",
          "type": "subtitle",
          "status": "available",
          "languageCode": "it-IT",
          "languageName": "Italian"
        },
        {
          "id": "bb81b65e-967b-4e3a-b15f-cb900bd33fc2",
          "type": "audio",
          "status": "available",
          "languageCode": "und",
          "languageName": "default"
        },
        {
          "id": "d0a11388-defb-41d6-8275-1d29964867d9",
          "type": "audio",
          "status": "available",
          "languageCode": "it",
          "languageName": "Italian"
        },
        {
          "id": "f02261c3-819d-4cf9-a3ea-3195d496d45b",
          "type": "subtitle",
          "status": "available",
          "languageCode": "ko-KR",
          "languageName": "Korean"
        }
      ]
    }
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "configuration": {
      "url": "https://static.fastpix.com/fp-sample-video.mp4"
    },
    "file": {
      "containerFormat": "mp4",
      "tracks": [
        {
          "id": "0d7cf616-8f43-4372-9d7d-cef1b1cf0c58",
          "type": "video",
          "width": 1920,
          "height": 1080,
          "frameRate": "60.000",
          "status": "available"
        },
        {
          "id": "2f04f660-38a9-4c66-ae5c-7028e049f927",
          "type": "subtitle",
          "status": "available",
          "languageName": "French",
          "languageCode": "fr-FR"
        },
        {
          "id": "340ed9da-be97-4f04-b15b-6cc09f7a3b98",
          "type": "subtitle",
          "status": "available",
          "languageName": "Spanish",
          "languageCode": "es-ES"
        },
        {
          "id": "4e2082d8-9e25-4bcf-b57d-44040a601e50",
          "type": "subtitle",
          "status": "available",
          "languageName": "German",
          "languageCode": "de-DE"
        },
        {
          "id": "86f0def8-e85e-4468-8e44-f7c4b8bec30e",
          "type": "subtitle",
          "status": "available",
          "languageName": "Japanese",
          "languageCode": "ja-JP"
        },
        {
          "id": "987c4c7b-1a6a-4a7b-b394-3f53b76ece79",
          "type": "subtitle",
          "status": "available",
          "languageName": "Italian",
          "languageCode": "it-IT"
        },
        {
          "id": "bb81b65e-967b-4e3a-b15f-cb900bd33fc2",
          "type": "audio",
          "status": "available",
          "languageName": "default",
          "languageCode": "und"
        },
        {
          "id": "d0a11388-defb-41d6-8275-1d29964867d9",
          "type": "audio",
          "status": "available",
          "languageName": "Italian",
          "languageCode": "it"
        },
        {
          "id": "f02261c3-819d-4cf9-a3ea-3195d496d45b",
          "type": "subtitle",
          "status": "available",
          "languageName": "Korean",
          "languageCode": "ko-KR"
        }
      ]
    }
  }
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### list-playback-ids (`/on-demand/{mediaId}/playback-ids`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/list-playback-ids.api.json`
- **SDK response file**: `tests/artifacts/list-playback-ids.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "id": "82af62f9-64e8-4fe6-b72b-1ccc42d9874e",
      "accessPolicy": "public",
      "accessRestrictions": {
        "domains": {
          "defaultPolicy": "allow",
          "allow": [],
          "deny": []
        },
        "userAgents": {
          "defaultPolicy": "allow",
          "allow": [],
          "deny": []
        }
      }
    },
    {
      "id": "b1808523-e3c7-493d-88a1-a2d24631d78c",
      "accessPolicy": "public",
      "accessRestrictions": {
        "domains": {
          "defaultPolicy": "allow",
          "allow": [],
          "deny": []
        },
        "userAgents": {
          "defaultPolicy": "allow",
          "allow": [],
          "deny": []
        }
      }
    }
  ]
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "id": "82af62f9-64e8-4fe6-b72b-1ccc42d9874e",
      "accessPolicy": "public",
      "accessRestrictions": {
        "domains": {
          "defaultPolicy": "allow",
          "allow": [],
          "deny": []
        },
        "userAgents": {
          "defaultPolicy": "allow",
          "allow": [],
          "deny": []
        }
      }
    },
    {
      "id": "b1808523-e3c7-493d-88a1-a2d24631d78c",
      "accessPolicy": "public",
      "accessRestrictions": {
        "domains": {
          "defaultPolicy": "allow",
          "allow": [],
          "deny": []
        },
        "userAgents": {
          "defaultPolicy": "allow",
          "allow": [],
          "deny": []
        }
      }
    }
  ]
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### list-uploads (`/on-demand/uploads`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/list-uploads.api.json`
- **SDK response file**: `tests/artifacts/list-uploads.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "uploadId": "78ea4e7e-6915-4138-8e72-c36a0747dd87",
      "trial": false,
      "status": "waiting",
      "url": "https://storage.googleapis.com/fastpix-uploads-asia/fd9197bb-8cfa-4569-b046-a30fb95e2381/78ea4e7e-6915-4138-8e72-c36a0747dd87?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=dev-staging-pub-sub@fastpix-vms.iam.gserviceaccount.com/20260622/auto/storage/goog4_request&X-Goog-Date=20260622T141245Z&X-Goog-Expires=14400&X-Goog-SignedHeaders=host;x-goog-resumable&X-Goog-Signature=95007c245e588f7ca4f78e2f0a0a4e5f0b34bd0664f237394d3d81ccbe1598752510cc83fdc90f8b53a8ed1bb49b9360e66c5698c99775e8971bce032c58082e11bc95bc00f2af6c0ad5f0a505f5f3a53aace49344d9fad6883234dc88074f49166de9d9ad38e05729070ea933b0322a18b867bae7b06d358026f055e981e8a564fa2119b6461e0a47cffa679708c3ff58706cc0a3ef6665dd1c1bcb274643ee26348c7fff9763e93a9581775cbb36437a5dd176414b14ed38caa411bfe140fa528a3bfc8b1e97bf1e617fac2282d21f13fc03a1b74030306f84fee498f0b1e5eb9629d68a4b692e1575cd71ec1be2ec3d41e701070276c14469f6e22f6d229b&upload_id=AJ5rDhF_QCjka_hZFS11G6QSvk0NVYQRfmd23djITckLDRsazVAcZdSsqmh_mXZM0zh_y8v2IITbYsyxfOnwBuPhGAcF4P4pPozxh7Dbu658l8o",
      "timeout": 14400,
      "corsOrigin": "*",
      "pushMediaSettings": {
        "playbackIds": [
          {
            "accessPolicy": "public",
            "accessRestrictions": {
              "domains": {
                "defaultPolicy": "allow",
                "allow": [],
                "deny": []
              },
              "userAgents": {
                "defaultPolicy": "allow",
                "allow": [],
                "deny": []
              }
            }
          }
        ],
        "metadata": {
          "source": "sdk-validate"
        },
        "mediaQuality": "standard",
        "sourceAccess": false,
        "optimizeAudio": false
      }
    },
    {
      "uploadId": "333b14a4-d34d-4df9-9794-3b39dde2cf17",
      "trial": false,
      "status": "waiting",
      "url": "https://storage.googleapis.com/fastpix-uploads-asia/fd9197bb-8cfa-4569-b046-a30fb95e2381/333b14a4-d34d-4df9-9794-3b39dde2cf17?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=dev-staging-pub-sub@fastpix-vms.iam.gserviceaccount.com/20260622/auto/storage/goog4_request&X-Goog-Date=20260622T130958Z&X-Goog-Expires=14400&X-Goog-SignedHeaders=host;x-goog-resumable&X-Goog-Signature=56b5d868835a08a60605c8aa16340f187f7b6c4e4699ba1bfbcbeedafe9b61f6eac4bba2448622f0a843cc71f2c36dd5210395010db0001981b44a1887bc1c0ca4fcc8a0f2417b7b88988f51812e2eb1a07894eff36d4ec35ef8b9a8d1f385b319aec4cc39c1adaa2d660ebecd8e780f3a5f3a812e73a996dd70a3000bb7e0eddb797a876dfc70bed1e6b6950072a7bc3468e3a45760c44bff3ca5e69bbb0585b5980d05b6b5a01d45bc9f48cb55589c59a86978f620fa48a59d2cff638e1e993738dc1ad6b9dcc99717c2391dc6cda09ec2ded3f900ab803faae133531a61607f09749510605183b4cbda731a42121bbf828b65f2e33430eff05d0c0e1b772f&upload_id=AJ5rDhGnXt0lfnnUqB2_VV5Dh2SOvZ0YcRSk9vRoti6fLux9l4I7ajZFUwjN8120AdgR12INEKdQPBpcowk80cvuhWM7hk6JxSBzOqEJHkTTTw",
      "timeout": 14400,
      "corsOrigin": "*",
      "pushMediaSettings": {
        "playbackIds": [
          {
            "accessPolicy": "public",
            "accessRestrictions": {
              "domains": {
                "defaultPolicy": "allow",
                "allow": [],
                "deny": []
              },
              "userAgents": {
                "defaultPolicy": "allow",
                "allow": [],
                "deny": []
              }
            }
          }
        ],
        "metadata": {
          "source": "non-get-validator"
        },
        "mediaQuality": "standard",
        "sourceAccess": false,
        "optimizeAudio": false
      }
    },
    {
      "uploadId": "da1a38aa-cb15-481a-a22a-2da1ad5b61d4",
      "trial": false,
      "status": "waiting",
      "url": "https://storage.googleapis.com/fastpix-uploads-asia/fd9197bb-8cfa-4569-b046-a30fb95e2381/da1a38aa-cb15-481a-a22a-2da1ad5b61d4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-
... (truncated)
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "uploadId": "78ea4e7e-6915-4138-8e72-c36a0747dd87",
      "trial": false,
      "status": "waiting",
      "url": "https://storage.googleapis.com/fastpix-uploads-asia/fd9197bb-8cfa-4569-b046-a30fb95e2381/78ea4e7e-6915-4138-8e72-c36a0747dd87?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=dev-staging-pub-sub@fastpix-vms.iam.gserviceaccount.com/20260622/auto/storage/goog4_request&X-Goog-Date=20260622T141245Z&X-Goog-Expires=14400&X-Goog-SignedHeaders=host;x-goog-resumable&X-Goog-Signature=95007c245e588f7ca4f78e2f0a0a4e5f0b34bd0664f237394d3d81ccbe1598752510cc83fdc90f8b53a8ed1bb49b9360e66c5698c99775e8971bce032c58082e11bc95bc00f2af6c0ad5f0a505f5f3a53aace49344d9fad6883234dc88074f49166de9d9ad38e05729070ea933b0322a18b867bae7b06d358026f055e981e8a564fa2119b6461e0a47cffa679708c3ff58706cc0a3ef6665dd1c1bcb274643ee26348c7fff9763e93a9581775cbb36437a5dd176414b14ed38caa411bfe140fa528a3bfc8b1e97bf1e617fac2282d21f13fc03a1b74030306f84fee498f0b1e5eb9629d68a4b692e1575cd71ec1be2ec3d41e701070276c14469f6e22f6d229b&upload_id=AJ5rDhF_QCjka_hZFS11G6QSvk0NVYQRfmd23djITckLDRsazVAcZdSsqmh_mXZM0zh_y8v2IITbYsyxfOnwBuPhGAcF4P4pPozxh7Dbu658l8o",
      "timeout": 14400,
      "corsOrigin": "*",
      "pushMediaSettings": {
        "playbackIds": [
          {
            "accessPolicy": "public",
            "accessRestrictions": {
              "domains": {
                "defaultPolicy": "allow",
                "allow": [],
                "deny": []
              },
              "userAgents": {
                "defaultPolicy": "allow",
                "allow": [],
                "deny": []
              }
            }
          }
        ],
        "metadata": {
          "source": "sdk-validate"
        },
        "mediaQuality": "standard",
        "sourceAccess": false,
        "optimizeAudio": false
      }
    },
    {
      "uploadId": "333b14a4-d34d-4df9-9794-3b39dde2cf17",
      "trial": false,
      "status": "waiting",
      "url": "https://storage.googleapis.com/fastpix-uploads-asia/fd9197bb-8cfa-4569-b046-a30fb95e2381/333b14a4-d34d-4df9-9794-3b39dde2cf17?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=dev-staging-pub-sub@fastpix-vms.iam.gserviceaccount.com/20260622/auto/storage/goog4_request&X-Goog-Date=20260622T130958Z&X-Goog-Expires=14400&X-Goog-SignedHeaders=host;x-goog-resumable&X-Goog-Signature=56b5d868835a08a60605c8aa16340f187f7b6c4e4699ba1bfbcbeedafe9b61f6eac4bba2448622f0a843cc71f2c36dd5210395010db0001981b44a1887bc1c0ca4fcc8a0f2417b7b88988f51812e2eb1a07894eff36d4ec35ef8b9a8d1f385b319aec4cc39c1adaa2d660ebecd8e780f3a5f3a812e73a996dd70a3000bb7e0eddb797a876dfc70bed1e6b6950072a7bc3468e3a45760c44bff3ca5e69bbb0585b5980d05b6b5a01d45bc9f48cb55589c59a86978f620fa48a59d2cff638e1e993738dc1ad6b9dcc99717c2391dc6cda09ec2ded3f900ab803faae133531a61607f09749510605183b4cbda731a42121bbf828b65f2e33430eff05d0c0e1b772f&upload_id=AJ5rDhGnXt0lfnnUqB2_VV5Dh2SOvZ0YcRSk9vRoti6fLux9l4I7ajZFUwjN8120AdgR12INEKdQPBpcowk80cvuhWM7hk6JxSBzOqEJHkTTTw",
      "timeout": 14400,
      "corsOrigin": "*",
      "pushMediaSettings": {
        "playbackIds": [
          {
            "accessPolicy": "public",
            "accessRestrictions": {
              "domains": {
                "defaultPolicy": "allow",
                "allow": [],
                "deny": []
              },
              "userAgents": {
                "defaultPolicy": "allow",
                "allow": [],
                "deny": []
              }
            }
          }
        ],
        "metadata": {
          "source": "non-get-validator"
        },
        "mediaQuality": "standard",
        "sourceAccess": false,
        "optimizeAudio": false
      }
    },
    {
      "uploadId": "da1a38aa-cb15-481a-a22a-2da1ad5b61d4",
      "trial": false,
      "status": "waiting",
      "url": "https://storage.googleapis.com/fastpix-uploads-asia/fd9197bb-8cfa-4569-b046-a30fb95e2381/da1a38aa-cb15-481a-a22a-2da1ad5b61d4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-
... (truncated)
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### get-media-clips (`/on-demand/{mediaId}/media-clips`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/get-media-clips.api.json`
- **SDK response file**: `tests/artifacts/get-media-clips.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "totalRecords": 0,
    "currentOffset": 1,
    "offsetCount": 0
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "totalRecords": 0,
    "currentOffset": 1,
    "offsetCount": 0
  }
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### get-all-playlists (`/on-demand/playlists`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/get-all-playlists.api.json`
- **SDK response file**: `tests/artifacts/get-all-playlists.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "id": "f99d2d10-1597-4fae-9a06-a547869725d4",
      "name": "sdk validate playlist",
      "type": "manual",
      "referenceId": "sdkValidatemqpanhlh",
      "createdAt": "2026-06-22T14:11:37.479967Z",
      "mediaCount": 0
    },
    {
      "id": "65d18946-8fbf-4581-b6c2-77e170b18261",
      "name": "sdk-validate-playlist",
      "type": "manual",
      "referenceId": "sdkvalidate6142954751291",
      "createdAt": "2026-06-20T07:57:35.867572Z",
      "mediaCount": 0
    },
    {
      "id": "0e0e55a5-9526-46c5-82ba-e9c0ef0797af",
      "name": "sdk-validate-playlist",
      "type": "manual",
      "referenceId": "sdkvalidate1781940561",
      "createdAt": "2026-06-20T07:29:21.725059Z",
      "mediaCount": 0
    },
    {
      "id": "84b198f3-bd4b-4cec-8c0d-73f09ec84342",
      "name": "sdk-validate-playlist",
      "type": "manual",
      "referenceId": "sdkvalidate5795094411958",
      "createdAt": "2026-06-19T17:48:33.989494Z",
      "mediaCount": 0
    },
    {
      "id": "104bd544-92f4-4101-a897-3dfc6c2abc77",
      "name": "sdk-validate-playlist",
      "type": "manual",
      "referenceId": "sdkvalidate3188152353916",
      "createdAt": "2026-06-19T16:54:38.083842Z",
      "mediaCount": 0
    }
  ],
  "pagination": {
    "totalRecords": 41,
    "currentOffset": 1,
    "offsetCount": 9
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "id": "f99d2d10-1597-4fae-9a06-a547869725d4",
      "name": "sdk validate playlist",
      "type": "manual",
      "referenceId": "sdkValidatemqpanhlh",
      "createdAt": "2026-06-22T14:11:37.479Z",
      "mediaCount": 0
    },
    {
      "id": "65d18946-8fbf-4581-b6c2-77e170b18261",
      "name": "sdk-validate-playlist",
      "type": "manual",
      "referenceId": "sdkvalidate6142954751291",
      "createdAt": "2026-06-20T07:57:35.867Z",
      "mediaCount": 0
    },
    {
      "id": "0e0e55a5-9526-46c5-82ba-e9c0ef0797af",
      "name": "sdk-validate-playlist",
      "type": "manual",
      "referenceId": "sdkvalidate1781940561",
      "createdAt": "2026-06-20T07:29:21.725Z",
      "mediaCount": 0
    },
    {
      "id": "84b198f3-bd4b-4cec-8c0d-73f09ec84342",
      "name": "sdk-validate-playlist",
      "type": "manual",
      "referenceId": "sdkvalidate5795094411958",
      "createdAt": "2026-06-19T17:48:33.989Z",
      "mediaCount": 0
    },
    {
      "id": "104bd544-92f4-4101-a897-3dfc6c2abc77",
      "name": "sdk-validate-playlist",
      "type": "manual",
      "referenceId": "sdkvalidate3188152353916",
      "createdAt": "2026-06-19T16:54:38.083Z",
      "mediaCount": 0
    }
  ],
  "pagination": {
    "totalRecords": 41,
    "currentOffset": 1,
    "offsetCount": 9
  }
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### get-playlist-by-id (`/on-demand/playlists/{playlistId}`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/get-playlist-by-id.api.json`
- **SDK response file**: `tests/artifacts/get-playlist-by-id.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": {
    "id": "cfe5cee9-e5b9-45c9-be4b-f76f71b53c80",
    "name": "sdk validate playlist",
    "referenceId": "sdkValidatemq0uythe",
    "type": "manual",
    "description": "sdk validate",
    "mediaList": [
      {
        "createdAt": "2026-06-16T06:50:31.188979Z",
        "duration": "00:00:10",
        "id": "f404ddcd-c9a7-4582-acde-42c6ef303fdc",
        "sourceResolution": "1080",
        "status": "Ready",
        "thumbnail": "https://images.fastpix.com/b2dd4c78-84db-423b-af63-b749327d8b28/thumbnail.png"
      }
    ],
    "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
    "createdAt": "2026-06-05T11:46:04.069981Z",
    "updatedAt": "2026-06-16T08:57:35.681724Z",
    "mediaCount": 1
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "id": "cfe5cee9-e5b9-45c9-be4b-f76f71b53c80",
    "name": "sdk validate playlist",
    "referenceId": "sdkValidatemq0uythe",
    "type": "manual",
    "description": "sdk validate",
    "mediaList": [
      {
        "createdAt": "2026-06-16T06:50:31.188Z",
        "duration": "00:00:10",
        "id": "f404ddcd-c9a7-4582-acde-42c6ef303fdc",
        "sourceResolution": "1080",
        "status": "Ready",
        "thumbnail": "https://images.fastpix.com/b2dd4c78-84db-423b-af63-b749327d8b28/thumbnail.png"
      }
    ],
    "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
    "createdAt": "2026-06-05T11:46:04.069Z",
    "updatedAt": "2026-06-16T08:57:35.681Z",
    "mediaCount": 1
  }
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### get-playback-id (`/on-demand/{mediaId}/playback-ids/{playbackId}`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/get-playback-id.api.json`
- **SDK response file**: `tests/artifacts/get-playback-id.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": {
    "id": "82af62f9-64e8-4fe6-b72b-1ccc42d9874e",
    "accessPolicy": "public",
    "accessRestrictions": {
      "domains": {
        "defaultPolicy": "allow",
        "allow": [],
        "deny": []
      },
      "userAgents": {
        "defaultPolicy": "allow",
        "allow": [],
        "deny": []
      }
    }
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "id": "82af62f9-64e8-4fe6-b72b-1ccc42d9874e",
    "accessPolicy": "public",
    "accessRestrictions": {
      "domains": {
        "defaultPolicy": "allow",
        "allow": [],
        "deny": []
      },
      "userAgents": {
        "defaultPolicy": "allow",
        "allow": [],
        "deny": []
      }
    }
  }
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### getDrmConfiguration (`/on-demand/drm-configurations`)

- **Status**: FAIL
- **OpenAPI valid**: yes
- **SDK parse**: failed
- **SDK parse error**: API error occurred: Status 400 Content-Type application/json;charset=UTF-8
Body: {"success":false,"error":{"code":400,"message":"DRM ID does not exist","description":"The DRM configuration ID does not exist for the workspace."}}
- **API response file**: `tests/artifacts/getDrmConfiguration.api.json`
- **SDK response file**: `tests/artifacts/getDrmConfiguration.sdk.json`

**API response (preview)**

```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "DRM ID does not exist",
    "description": "The DRM configuration ID does not exist for the workspace."
  }
}
```

**SDK response (preview)**

```json
{
  "name": "FastpixDefaultError",
  "message": "API error occurred: Status 400 Content-Type application/json;charset=UTF-8\nBody: {\"success\":false,\"error\":{\"code\":400,\"message\":\"DRM ID does not exist\",\"description\":\"The DRM configuration ID does not exist for the workspace.\"}}",
  "stack": "FastpixDefaultError: API error occurred: Status 400 Content-Type application/json;charset=UTF-8\nBody: {\"success\":false,\"error\":{\"code\":400,\"message\":\"DRM ID does not exist\",\"description\":\"The DRM configuration ID does not exist for the workspace.\"}}\n    at matchFunc (/Users/sumasree/fp-nodejs/node-sdk/src/lib/matchers.ts:304:16)\n    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)\n    at async $do (/Users/sumasree/fp-nodejs/node-sdk/src/funcs/drmConfigurationsList.ts:169:20)",
  "statusCode": 400,
  "contentType": "application/json;charset=UTF-8",
  "body": "{\"success\":false,\"error\":{\"code\":400,\"message\":\"DRM ID does not exist\",\"description\":\"The DRM configuration ID does not exist for the workspace.\"}}",
  "bodyJson": {
    "success": false,
    "error": {
      "code": 400,
      "message": "DRM ID does not exist",
      "description": "The DRM configuration ID does not exist for the workspace."
    }
  },
  "headers": {
    "alt-svc": "h3=\":443\"; ma=86400",
    "cf-cache-status": "DYNAMIC",
    "cf-ray": "a0fbd9ce49745ef9-HYD",
    "content-length": "147",
    "content-type": "application/json;charset=UTF-8",
    "date": "Mon, 22 Jun 2026 14:12:56 GMT",
    "server": "cloudflare"
  },
  "url": "https://api.fastpix.com/v1/on-demand/drm-configurations?limit=10&offset=1"
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### getDrmConfigurationById (`/on-demand/drm-configurations/{drmConfigurationId}`)

- **Status**: FAIL
- **OpenAPI valid**: yes
- **SDK parse**: failed
- **SDK parse error**: API error occurred: Status 422 Content-Type application/json;charset=UTF-8
Body: {"success":false,"error":{"code":422,"message":"payload validation failed","fields":[{"field":"drmConfigurationId","message":"is invalid"}]}}
- **API response file**: `tests/artifacts/getDrmConfigurationById.api.json`
- **SDK response file**: `tests/artifacts/getDrmConfigurationById.sdk.json`

**API response (preview)**

```json
{
  "success": false,
  "error": {
    "code": 422,
    "message": "payload validation failed",
    "fields": [
      {
        "field": "drmConfigurationId",
        "message": "is invalid"
      }
    ]
  }
}
```

**SDK response (preview)**

```json
{
  "name": "FastpixDefaultError",
  "message": "API error occurred: Status 422 Content-Type application/json;charset=UTF-8\nBody: {\"success\":false,\"error\":{\"code\":422,\"message\":\"payload validation failed\",\"fields\":[{\"field\":\"drmConfigurationId\",\"message\":\"is invalid\"}]}}",
  "stack": "FastpixDefaultError: API error occurred: Status 422 Content-Type application/json;charset=UTF-8\nBody: {\"success\":false,\"error\":{\"code\":422,\"message\":\"payload validation failed\",\"fields\":[{\"field\":\"drmConfigurationId\",\"message\":\"is invalid\"}]}}\n    at matchFunc (/Users/sumasree/fp-nodejs/node-sdk/src/lib/matchers.ts:304:16)\n    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)\n    at async $do (/Users/sumasree/fp-nodejs/node-sdk/src/funcs/drmConfigurationsGet.ts:164:20)",
  "statusCode": 422,
  "contentType": "application/json;charset=UTF-8",
  "body": "{\"success\":false,\"error\":{\"code\":422,\"message\":\"payload validation failed\",\"fields\":[{\"field\":\"drmConfigurationId\",\"message\":\"is invalid\"}]}}",
  "bodyJson": {
    "success": false,
    "error": {
      "code": 422,
      "message": "payload validation failed",
      "fields": [
        {
          "field": "drmConfigurationId",
          "message": "is invalid"
        }
      ]
    }
  },
  "headers": {
    "alt-svc": "h3=\":443\"; ma=86400",
    "cf-cache-status": "DYNAMIC",
    "cf-ray": "a0fbd9d18e355ef9-HYD",
    "content-length": "141",
    "content-type": "application/json;charset=UTF-8",
    "date": "Mon, 22 Jun 2026 14:12:57 GMT",
    "server": "cloudflare"
  },
  "url": "https://api.fastpix.com/v1/on-demand/drm-configurations/your-drm-configuration-id"
}
```

**Missing in SDK (present in API) — 4**

- `error.fields`
- `error.fields[]`
- `error.fields[].field`
- `error.fields[].message`

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### get-all-streams (`/live/streams`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/get-all-streams.api.json`
- **SDK response file**: `tests/artifacts/get-all-streams.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "streamId": "0933bef2cae37474d536a86e95881f45",
      "streamKey": "e719f041bdd7d5f21cd3583c719cdd87k0933bef2cae37474d536a86e95881f45",
      "srtSecret": "9e2705ed339c4d54d34a8a5d824b8f7fk0933bef2cae37474d536a86e95881f45",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-06-22T14:12:09.749831Z",
      "reconnectWindow": 60,
      "enableRecording": true,
      "enableDvrMode": false,
      "mediaPolicy": "public",
      "metadata": {
        "name": "sdk-validate"
      },
      "lowLatency": false,
      "closedCaptions": false,
      "playbackIds": [
        {
          "id": "d66e5168-b57e-48bb-9f7a-5b1b48880941",
          "accessPolicy": "public"
        },
        {
          "id": "de3c3387-2ab0-4c43-bbe7-6db3109699f2",
          "accessPolicy": "public"
        }
      ],
      "simulcastResponses": [
        {
          "simulcastId": "9e54af81c930741d067e735955bd482a",
          "url": "rtmp://example.com/live",
          "streamKey": "sk-mqpaowod",
          "isEnabled": true
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "play0933bef2cae37474d536a86e95881f45",
        "srtPlaybackSecret": "3e3b42f90a2490796737e0d1bdc2dee5k0933bef2cae37474d536a86e95881f45"
      }
    },
    {
      "streamId": "83711bc24841a17a14b1596db787eb5b",
      "streamKey": "2aacf7c9c71850b2fdd8a53d2d9054b4k83711bc24841a17a14b1596db787eb5b",
      "srtSecret": "e01838b45f94b40d87ccf0f176d8767dk83711bc24841a17a14b1596db787eb5b",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-06-22T14:11:54.861939Z",
      "reconnectWindow": 60,
      "enableRecording": true,
      "enableDvrMode": false,
      "mediaPolicy": "public",
      "metadata": {
        "name": "sdk-validate"
      },
      "lowLatency": false,
      "closedCaptions": false,
      "playbackIds": [
        {
          "id": "4ed66c61-e3ae-4ffe-ae58-574783ded25b",
          "accessPolicy": "public"
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "play83711bc24841a17a14b1596db787eb5b",
        "srtPlaybackSecret": "1755e9fac51117fb002d9f6247ded266k83711bc24841a17a14b1596db787eb5b"
      }
    },
    {
      "streamId": "d6f0df064d3fc14ce94691e398d04ad9",
      "streamKey": "45eb8183a27bace53733ba2eff17418ckd6f0df064d3fc14ce94691e398d04ad9",
      "srtSecret": "c8de6933925251f19b34b65ad378bde2kd6f0df064d3fc14ce94691e398d04ad9",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-06-22T13:10:01.343527Z",
      "reconnectWindow": 60,
      "enableRecording": true,
      "enableDvrMode": false,
      "mediaPolicy": "public",
      "lowLatency": false,
      "closedCaptions": false,
      "playbackIds": [
        {
          "id": "7bfc098d-d0f3-4924-b22b-fe0977c90a39",
          "accessPolicy": "public"
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "playd6f0df064d3fc14ce94691e398d04ad9",
        "srtPlaybackSecret": "54dc4f9195da5d3f7541cc13c2a302b0kd6f0df064d3fc14ce94691e398d04ad9"
      }
    },
    {
      "streamId": "7da3e877b724e20d574f7ec91e32c58b",
      "streamKey": "ab396a1b8c9cbbe021e4167deaf6a0f2k7da3e877b724e20d574f7ec91e32c58b",
      "srtSecret": "366e9bb16fb28d9805158f9574d4fdabk7da3e877b724e20d574f7ec91e32c58b",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-06-22T13:03:54.692894Z",
      "reconnectWindow": 60,
      "enableRecording": true,
      "enableDvrMode": false,
      "mediaPolicy": "public",
      "lowLatency": false,
      "closedCaptions": false,
      "playbackIds": [
        {
          "id": "8566ed9e-1d37-4c5d-9d92-878358440f37",
          "accessPolicy": "public"
        }
      ],
      "srtPlaybackRespo
... (truncated)
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "streamId": "0933bef2cae37474d536a86e95881f45",
      "streamKey": "e719f041bdd7d5f21cd3583c719cdd87k0933bef2cae37474d536a86e95881f45",
      "srtSecret": "9e2705ed339c4d54d34a8a5d824b8f7fk0933bef2cae37474d536a86e95881f45",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-06-22T14:12:09.749Z",
      "reconnectWindow": 60,
      "enableRecording": true,
      "enableDvrMode": false,
      "mediaPolicy": "public",
      "metadata": {
        "name": "sdk-validate"
      },
      "lowLatency": false,
      "closedCaptions": false,
      "playbackIds": [
        {
          "id": "d66e5168-b57e-48bb-9f7a-5b1b48880941",
          "accessPolicy": "public"
        },
        {
          "id": "de3c3387-2ab0-4c43-bbe7-6db3109699f2",
          "accessPolicy": "public"
        }
      ],
      "simulcastResponses": [
        {
          "simulcastId": "9e54af81c930741d067e735955bd482a",
          "url": "rtmp://example.com/live",
          "streamKey": "sk-mqpaowod",
          "isEnabled": true
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "play0933bef2cae37474d536a86e95881f45",
        "srtPlaybackSecret": "3e3b42f90a2490796737e0d1bdc2dee5k0933bef2cae37474d536a86e95881f45"
      }
    },
    {
      "streamId": "83711bc24841a17a14b1596db787eb5b",
      "streamKey": "2aacf7c9c71850b2fdd8a53d2d9054b4k83711bc24841a17a14b1596db787eb5b",
      "srtSecret": "e01838b45f94b40d87ccf0f176d8767dk83711bc24841a17a14b1596db787eb5b",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-06-22T14:11:54.861Z",
      "reconnectWindow": 60,
      "enableRecording": true,
      "enableDvrMode": false,
      "mediaPolicy": "public",
      "metadata": {
        "name": "sdk-validate"
      },
      "lowLatency": false,
      "closedCaptions": false,
      "playbackIds": [
        {
          "id": "4ed66c61-e3ae-4ffe-ae58-574783ded25b",
          "accessPolicy": "public"
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "play83711bc24841a17a14b1596db787eb5b",
        "srtPlaybackSecret": "1755e9fac51117fb002d9f6247ded266k83711bc24841a17a14b1596db787eb5b"
      }
    },
    {
      "streamId": "d6f0df064d3fc14ce94691e398d04ad9",
      "streamKey": "45eb8183a27bace53733ba2eff17418ckd6f0df064d3fc14ce94691e398d04ad9",
      "srtSecret": "c8de6933925251f19b34b65ad378bde2kd6f0df064d3fc14ce94691e398d04ad9",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-06-22T13:10:01.343Z",
      "reconnectWindow": 60,
      "enableRecording": true,
      "enableDvrMode": false,
      "mediaPolicy": "public",
      "lowLatency": false,
      "closedCaptions": false,
      "playbackIds": [
        {
          "id": "7bfc098d-d0f3-4924-b22b-fe0977c90a39",
          "accessPolicy": "public"
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "playd6f0df064d3fc14ce94691e398d04ad9",
        "srtPlaybackSecret": "54dc4f9195da5d3f7541cc13c2a302b0kd6f0df064d3fc14ce94691e398d04ad9"
      }
    },
    {
      "streamId": "7da3e877b724e20d574f7ec91e32c58b",
      "streamKey": "ab396a1b8c9cbbe021e4167deaf6a0f2k7da3e877b724e20d574f7ec91e32c58b",
      "srtSecret": "366e9bb16fb28d9805158f9574d4fdabk7da3e877b724e20d574f7ec91e32c58b",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-06-22T13:03:54.692Z",
      "reconnectWindow": 60,
      "enableRecording": true,
      "enableDvrMode": false,
      "mediaPolicy": "public",
      "lowLatency": false,
      "closedCaptions": false,
      "playbackIds": [
        {
          "id": "8566ed9e-1d37-4c5d-9d92-878358440f37",
          "accessPolicy": "public"
        }
      ],
      "srtPlaybackResponse": {
    
... (truncated)
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### get-live-stream-viewer-count-by-id (`/live/streams/{streamId}/viewer-count`)

- **Status**: FAIL
- **OpenAPI valid**: yes
- **SDK parse**: failed
- **SDK parse error**: API error occurred: Status 404 Content-Type application/json;charset=UTF-8
Body: {"success":false,"error":{"code":404,"message":"stream details not found","description":"This error indicates that the stream details could not be found. Please contact support"}}
- **API response file**: `tests/artifacts/get-live-stream-viewer-count-by-id.api.json`
- **SDK response file**: `tests/artifacts/get-live-stream-viewer-count-by-id.sdk.json`

**API response (preview)**

```json
{
  "success": false,
  "error": {
    "code": 404,
    "message": "stream details not found",
    "description": "This error indicates that the stream details could not be found. Please contact support"
  }
}
```

**SDK response (preview)**

```json
{
  "name": "FastpixDefaultError",
  "message": "API error occurred: Status 404 Content-Type application/json;charset=UTF-8\nBody: {\"success\":false,\"error\":{\"code\":404,\"message\":\"stream details not found\",\"description\":\"This error indicates that the stream details could not be found. Please contact support\"}}",
  "stack": "FastpixDefaultError: API error occurred: Status 404 Content-Type application/json;charset=UTF-8\nBody: {\"success\":false,\"error\":{\"code\":404,\"message\":\"stream details not found\",\"description\":\"This error indicates that the stream details could not be found. Please contact support\"}}\n    at matchFunc (/Users/sumasree/fp-nodejs/node-sdk/src/lib/matchers.ts:304:16)\n    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)\n    at async $do (/Users/sumasree/fp-nodejs/node-sdk/src/funcs/manageLiveStreamGetViewerCount.ts:165:20)",
  "statusCode": 404,
  "contentType": "application/json;charset=UTF-8",
  "body": "{\"success\":false,\"error\":{\"code\":404,\"message\":\"stream details not found\",\"description\":\"This error indicates that the stream details could not be found. Please contact support\"}}",
  "bodyJson": {
    "success": false,
    "error": {
      "code": 404,
      "message": "stream details not found",
      "description": "This error indicates that the stream details could not be found. Please contact support"
    }
  },
  "headers": {
    "alt-svc": "h3=\":443\"; ma=86400",
    "cf-cache-status": "DYNAMIC",
    "cf-ray": "a0fbd9dadbdb5ef9-HYD",
    "content-encoding": "gzip",
    "content-type": "application/json;charset=UTF-8",
    "date": "Mon, 22 Jun 2026 14:12:59 GMT",
    "server": "cloudflare"
  },
  "url": "https://api.fastpix.com/v1/live/streams/5874e71e3738f1bc5f569874d43e99fa/viewer-count"
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### get-live-stream-by-id (`/live/streams/{streamId}`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/get-live-stream-by-id.api.json`
- **SDK response file**: `tests/artifacts/get-live-stream-by-id.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": {
    "streamId": "5874e71e3738f1bc5f569874d43e99fa",
    "streamKey": "5663784b36a278729a458c82225073e4k5874e71e3738f1bc5f569874d43e99fa",
    "srtSecret": "00ea44e51cbc3a4673c11df657ebb8cfk5874e71e3738f1bc5f569874d43e99fa",
    "trial": false,
    "status": "idle",
    "maxResolution": "1080p",
    "maxDuration": 0,
    "createdAt": "2026-06-05T11:46:06.734585Z",
    "reconnectWindow": 60,
    "enableRecording": true,
    "enableDvrMode": false,
    "mediaPolicy": "public",
    "metadata": {
      "name": "sdk-validate"
    },
    "lowLatency": false,
    "closedCaptions": false,
    "playbackIds": [
      {
        "id": "db91f971-101b-47d6-8901-efffc86a10e9",
        "accessPolicy": "public"
      },
      {
        "id": "ea5fc1b4-f06a-4c9c-944e-c28c05be634f",
        "accessPolicy": "public"
      }
    ],
    "simulcastResponses": [
      {
        "simulcastId": "2cf9a5aa4e5b70b4732397400524cdf6",
        "url": "rtmp://example.com/live",
        "streamKey": "sk-mq0uz5nr",
        "isEnabled": true
      },
      {
        "simulcastId": "8de51e8b2c420d89491b562b113d210f",
        "url": "rtmp://a.rtmp.youtube.com/live2",
        "streamKey": "test-dummy-key-1234",
        "isEnabled": true
      },
      {
        "simulcastId": "a958ea51fd25b06fbc0a917e51049340",
        "url": "rtmp://hyd01.contribute.live-video.net/app/",
        "streamKey": "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
        "isEnabled": true,
        "metadata": {
          "livestream_name": "Tech-Connect Summit"
        }
      },
      {
        "simulcastId": "b30c422d2b8297f8213c96696ad67a01",
        "url": "rtmp://hyd01.contribute.live-video.net/app/",
        "streamKey": "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
        "isEnabled": true,
        "metadata": {
          "livestream_name": "Tech-Connect Summit"
        }
      },
      {
        "simulcastId": "38c8cd25ae92797c8c9d2ae68705db79",
        "url": "rtmp://hyd01.contribute.live-video.net/app/",
        "streamKey": "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
        "isEnabled": true,
        "metadata": {
          "livestream_name": "Tech-Connect Summit"
        }
      },
      {
        "simulcastId": "b1ed4242738b92fa3df72d735cb739bb",
        "url": "rtmp://hyd01.contribute.live-video.net/app/",
        "streamKey": "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
        "isEnabled": true,
        "metadata": {
          "livestream_name": "Tech-Connect Summit"
        }
      }
    ],
    "srtPlaybackResponse": {
      "srtPlaybackStreamId": "play5874e71e3738f1bc5f569874d43e99fa",
      "srtPlaybackSecret": "44137e621630b240a3ad3860443066d9k5874e71e3738f1bc5f569874d43e99fa"
    }
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "streamId": "5874e71e3738f1bc5f569874d43e99fa",
    "streamKey": "5663784b36a278729a458c82225073e4k5874e71e3738f1bc5f569874d43e99fa",
    "srtSecret": "00ea44e51cbc3a4673c11df657ebb8cfk5874e71e3738f1bc5f569874d43e99fa",
    "trial": false,
    "status": "idle",
    "maxResolution": "1080p",
    "maxDuration": 0,
    "createdAt": "2026-06-05T11:46:06.734Z",
    "reconnectWindow": 60,
    "enableRecording": true,
    "enableDvrMode": false,
    "mediaPolicy": "public",
    "metadata": {
      "name": "sdk-validate"
    },
    "lowLatency": false,
    "closedCaptions": false,
    "playbackIds": [
      {
        "id": "db91f971-101b-47d6-8901-efffc86a10e9",
        "accessPolicy": "public"
      },
      {
        "id": "ea5fc1b4-f06a-4c9c-944e-c28c05be634f",
        "accessPolicy": "public"
      }
    ],
    "simulcastResponses": [
      {
        "simulcastId": "2cf9a5aa4e5b70b4732397400524cdf6",
        "url": "rtmp://example.com/live",
        "streamKey": "sk-mq0uz5nr",
        "isEnabled": true
      },
      {
        "simulcastId": "8de51e8b2c420d89491b562b113d210f",
        "url": "rtmp://a.rtmp.youtube.com/live2",
        "streamKey": "test-dummy-key-1234",
        "isEnabled": true
      },
      {
        "simulcastId": "a958ea51fd25b06fbc0a917e51049340",
        "url": "rtmp://hyd01.contribute.live-video.net/app/",
        "streamKey": "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
        "isEnabled": true,
        "metadata": {
          "livestream_name": "Tech-Connect Summit"
        }
      },
      {
        "simulcastId": "b30c422d2b8297f8213c96696ad67a01",
        "url": "rtmp://hyd01.contribute.live-video.net/app/",
        "streamKey": "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
        "isEnabled": true,
        "metadata": {
          "livestream_name": "Tech-Connect Summit"
        }
      },
      {
        "simulcastId": "38c8cd25ae92797c8c9d2ae68705db79",
        "url": "rtmp://hyd01.contribute.live-video.net/app/",
        "streamKey": "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
        "isEnabled": true,
        "metadata": {
          "livestream_name": "Tech-Connect Summit"
        }
      },
      {
        "simulcastId": "b1ed4242738b92fa3df72d735cb739bb",
        "url": "rtmp://hyd01.contribute.live-video.net/app/",
        "streamKey": "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
        "isEnabled": true,
        "metadata": {
          "livestream_name": "Tech-Connect Summit"
        }
      }
    ],
    "srtPlaybackResponse": {
      "srtPlaybackStreamId": "play5874e71e3738f1bc5f569874d43e99fa",
      "srtPlaybackSecret": "44137e621630b240a3ad3860443066d9k5874e71e3738f1bc5f569874d43e99fa"
    }
  }
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### get-live-stream-playback-id (`/live/streams/{streamId}/playback-ids/{playbackId}`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/get-live-stream-playback-id.api.json`
- **SDK response file**: `tests/artifacts/get-live-stream-playback-id.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": {
    "id": "db91f971-101b-47d6-8901-efffc86a10e9",
    "accessPolicy": "public"
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "id": "db91f971-101b-47d6-8901-efffc86a10e9",
    "accessPolicy": "public"
  }
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### get-specific-simulcast-of-stream (`/live/streams/{streamId}/simulcast/{simulcastId}`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/get-specific-simulcast-of-stream.api.json`
- **SDK response file**: `tests/artifacts/get-specific-simulcast-of-stream.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": {
    "simulcastId": "8de51e8b2c420d89491b562b113d210f",
    "url": "rtmp://a.rtmp.youtube.com/live2",
    "streamKey": "test-dummy-key-1234",
    "isEnabled": true
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "simulcastId": "8de51e8b2c420d89491b562b113d210f",
    "url": "rtmp://a.rtmp.youtube.com/live2",
    "streamKey": "test-dummy-key-1234",
    "isEnabled": true
  }
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### list_signing_keys (`/iam/signing-keys`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/list_signing_keys.api.json`
- **SDK response file**: `tests/artifacts/list_signing_keys.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "id": "1811c8b0-400d-4998-a525-aa3cf82ee5aa",
      "createdAt": "2026-06-22T14:11:36.700158Z"
    },
    {
      "id": "49522234-f70c-487d-b02d-4fa414b9da57",
      "createdAt": "2026-06-22T13:10:01.783048Z"
    },
    {
      "id": "423974cc-67c6-451d-8969-245a8895729d",
      "createdAt": "2026-06-22T13:03:55.630951Z"
    },
    {
      "id": "dbe7b70a-cddf-4bfb-9e48-87972d243aa3",
      "createdAt": "2026-06-20T07:57:33.304891Z"
    },
    {
      "id": "bcd3171b-ffa9-4481-9793-3b2e91a5c3ac",
      "createdAt": "2026-06-20T07:29:20.932704Z"
    }
  ],
  "pagination": {
    "totalRecords": 81,
    "currentOffset": 1,
    "offsetCount": 17
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "id": "1811c8b0-400d-4998-a525-aa3cf82ee5aa",
      "createdAt": "2026-06-22T14:11:36.700Z"
    },
    {
      "id": "49522234-f70c-487d-b02d-4fa414b9da57",
      "createdAt": "2026-06-22T13:10:01.783Z"
    },
    {
      "id": "423974cc-67c6-451d-8969-245a8895729d",
      "createdAt": "2026-06-22T13:03:55.630Z"
    },
    {
      "id": "dbe7b70a-cddf-4bfb-9e48-87972d243aa3",
      "createdAt": "2026-06-20T07:57:33.304Z"
    },
    {
      "id": "bcd3171b-ffa9-4481-9793-3b2e91a5c3ac",
      "createdAt": "2026-06-20T07:29:20.932Z"
    }
  ],
  "pagination": {
    "totalRecords": 81,
    "currentOffset": 1,
    "offsetCount": 17
  }
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### get-signing_key_by_id (`/iam/signing-keys/{signingKeyId}`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/get-signing_key_by_id.api.json`
- **SDK response file**: `tests/artifacts/get-signing_key_by_id.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": {
    "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
    "signingKeyId": "04cf0f41-fd03-4c14-a30a-26f201624061",
    "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs8Vl0agbiwg6upzJq17ospR6W/vtV5vrWBOdwBifAN1eF3mctq+e32iVZe8X1y3wpIJtlLdXksCOrL1i4wFpOHjZ+a2j+3xINK+9PQfTWV1Q2dBTgrbU4gJJKyW5YC1lXvncmOaQlBrKSyqinE8eGL74PibM2jfXz5jxPhd9j1+lidw0uM+BoYX/J2Q2jekDqEX2Om4bcaPl6MFJWRB+CwN1AXg5Mdxjm/fGd+AfSBzsEkLqjdswgoOd6M9YOI/YgGk8g89jL24uOKLNKQ+MUo+iuEbB24noJ6bJrbmKrU9om6+nPu8aWFrgDsJc8ApI6H9yAlytVdalTf2eXapr6QIDAQAB\n-----END PUBLIC KEY-----\n"
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
    "signingKeyId": "04cf0f41-fd03-4c14-a30a-26f201624061",
    "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs8Vl0agbiwg6upzJq17ospR6W/vtV5vrWBOdwBifAN1eF3mctq+e32iVZe8X1y3wpIJtlLdXksCOrL1i4wFpOHjZ+a2j+3xINK+9PQfTWV1Q2dBTgrbU4gJJKyW5YC1lXvncmOaQlBrKSyqinE8eGL74PibM2jfXz5jxPhd9j1+lidw0uM+BoYX/J2Q2jekDqEX2Om4bcaPl6MFJWRB+CwN1AXg5Mdxjm/fGd+AfSBzsEkLqjdswgoOd6M9YOI/YgGk8g89jL24uOKLNKQ+MUo+iuEbB24noJ6bJrbmKrU9om6+nPu8aWFrgDsJc8ApI6H9yAlytVdalTf2eXapr6QIDAQAB\n-----END PUBLIC KEY-----\n"
  }
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### list_video_views (`/data/viewlist`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/list_video_views.api.json`
- **SDK response file**: `tests/artifacts/list_video_views.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "totalRecords": 0,
    "currentOffset": 1,
    "offsetCount": 0
  },
  "timespan": [
    1782051181,
    1782137581
  ]
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "totalRecords": 0,
    "currentOffset": 1,
    "offsetCount": 0
  },
  "timespan": [
    1782051182,
    1782137582
  ]
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### get_video_view_details (`/data/viewlist/{viewId}`)

- **Status**: FAIL
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/get_video_view_details.api.json`
- **SDK response file**: `tests/artifacts/get_video_view_details.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": {
    "asnId": 18209,
    "asnName": "BRAS Pools - Secunderabad",
    "averageBitrate": 2890281,
    "avgDownscaling": 0.6824074,
    "avgRequestLatency": 155,
    "avgRequestThroughput": 196953269.0763052,
    "avgUpscaling": 0,
    "beaconDomain": "anlytix.io",
    "browserEngine": null,
    "browserName": "Chrome",
    "browserVersion": "Chrome 148",
    "bufferCount": 0,
    "bufferFill": 0,
    "bufferFrequency": 0,
    "bufferRatio": 0,
    "cdn": "fastpix.com",
    "city": "Hyderabad",
    "connectionType": null,
    "continent": "AS",
    "country": "IN",
    "countryCode": null,
    "custom": {
      "Device": [
        {
          "dimensionName": "custom_1",
          "displayName": "demo_demension",
          "value": null
        }
      ]
    },
    "deviceManufacturer": "Apple",
    "deviceModel": null,
    "deviceName": "Apple",
    "deviceType": "Desktop",
    "drmType": "none",
    "droppedFrameCount": 0,
    "errorCode": null,
    "errorContext": null,
    "errorId": null,
    "errorMessage": null,
    "exitBeforeVideoStart": false,
    "experimentName": null,
    "fpApiVersion": null,
    "fpEmbed": null,
    "fpEmbedVersion": null,
    "fpLiveStreamId": null,
    "fpPlaybackId": "2125094c-db43-4748-90e1-18539f2ccf98",
    "fpSdk": "fastpix-hls-monitoring",
    "fpSdkVersion": "1.0.5",
    "fpViewerId": "e4946cd5-0dcb-441b-8cbd-499d8cd426bc",
    "insertTimestamp": "2026-05-20T09:51:01.665Z",
    "ipAddress": "183.82.105.187",
    "jumpLatency": 0,
    "latitude": "17.38405",
    "liveStreamLatency": null,
    "longitude": "78.45636",
    "maxDownscaling": 0.6824074,
    "maxRequestLatency": 0,
    "maxUpscaling": 0,
    "mediaId": "a8c88240-8074-42e3-81cb-cb6a60f595c4",
    "osName": "MacOS",
    "osVersion": "MacOS 10.15.7",
    "pageContext": null,
    "pageLoadTime": 110,
    "playbackScore": 1,
    "playerAutoplayOn": true,
    "playerHeight": 343,
    "playerInitializationTime": 0,
    "playerInstanceId": "7855bc8d-88c6-491c-aeb4-f7020695ab95",
    "playerLanguage": "",
    "playerName": null,
    "playerPoster": "",
    "playerPreloadOn": true,
    "playerRemotePlayed": false,
    "playerResolution": "800x343",
    "playerSoftwareName": "fastpix-player-data-monitoring",
    "playerSoftwareVersion": "1.0.17",
    "playerSourceDomain": null,
    "playerSourceHeight": 1080,
    "playerSourceWidth": 1920,
    "playerVersion": null,
    "playerViewCount": 1,
    "playerWidth": 800,
    "propertyId": null,
    "qualityOfExperienceScore": 0.9999312671832044,
    "region": "Telangana",
    "renderQualityScore": 1,
    "sessionId": "b608d2e2-9495-40b4-951b-34541939c23a",
    "sign": "1",
    "stabilityScore": 1,
    "startupScore": 0.9997500624843788,
    "subPropertyId": null,
    "totalStartupTime": 112,
    "updatedTimestamp": "2026-05-20T09:52:47.556Z",
    "usedFullScreen": false,
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36",
    "videoContentType": "video",
    "videoDuration": null,
    "videoEncodingVariant": "none",
    "videoId": "video-id",
    "videoLanguage": "en",
    "videoProducer": "FastPix",
    "videoResolution": "1080X1920",
    "videoSeries": "Audio Track Switching Demo",
    "videoSourceDomain": "fastpix.com",
    "videoSourceDuration": 153879,
    "videoSourceHostname": "stream.fastpix.com",
    "videoSourceStreamType": "on-demand",
    "videoSourceType": "application/x-mpegurl",
    "videoSourceUrl": "https://stream.fastpix.com/2125094c-db43-4748-90e1-18539f2ccf98.m3u8",
    "videoStartupFailed": false,
    "videoStartupTime": 2,
    "videoTitle": "Audio Track Switching Demo",
    "videoVariantId": "video`",
    "videoVariantName": "English",
    "viewEnd": "2026-05-20T09:52:47.556Z",
    "viewHasAd": false,
    "viewHasError": false,
    "viewId": "5d4c6560-58d6-45f9-9f1e-5b95eb116adc",
    "viewMaxPlayheadPosition": 1342,
    "viewPageUrl": "http://127.0.0.1:5501
... (truncated)
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "asnId": 18209,
    "asnName": "BRAS Pools - Secunderabad",
    "averageBitrate": 2890281,
    "avgDownscaling": 0.6824074,
    "avgRequestLatency": 155,
    "avgRequestThroughput": 196953269.0763052,
    "avgUpscaling": 0,
    "beaconDomain": "anlytix.io",
    "browserEngine": null,
    "browserName": "Chrome",
    "browserVersion": "Chrome 148",
    "bufferCount": 0,
    "bufferFill": 0,
    "bufferFrequency": 0,
    "bufferRatio": 0,
    "cdn": "fastpix.com",
    "city": "Hyderabad",
    "connectionType": null,
    "continent": "AS",
    "country": "IN",
    "countryCode": null,
    "custom": {},
    "deviceManufacturer": "Apple",
    "deviceModel": null,
    "deviceName": "Apple",
    "deviceType": "Desktop",
    "drmType": "none",
    "droppedFrameCount": 0,
    "errorCode": null,
    "errorContext": null,
    "errorId": null,
    "errorMessage": null,
    "exitBeforeVideoStart": false,
    "experimentName": null,
    "fpApiVersion": null,
    "fpEmbed": null,
    "fpEmbedVersion": null,
    "fpLiveStreamId": null,
    "fpPlaybackId": "2125094c-db43-4748-90e1-18539f2ccf98",
    "fpSdk": "fastpix-hls-monitoring",
    "fpSdkVersion": "1.0.5",
    "fpViewerId": "e4946cd5-0dcb-441b-8cbd-499d8cd426bc",
    "insertTimestamp": "2026-05-20T09:51:01.665Z",
    "ipAddress": "183.82.105.187",
    "jumpLatency": 0,
    "latitude": "17.38405",
    "liveStreamLatency": null,
    "longitude": "78.45636",
    "maxDownscaling": 0.6824074,
    "maxRequestLatency": 0,
    "maxUpscaling": 0,
    "mediaId": "a8c88240-8074-42e3-81cb-cb6a60f595c4",
    "osName": "MacOS",
    "osVersion": "MacOS 10.15.7",
    "pageContext": null,
    "pageLoadTime": 110,
    "playbackScore": 1,
    "playerAutoplayOn": true,
    "playerHeight": 343,
    "playerInitializationTime": 0,
    "playerInstanceId": "7855bc8d-88c6-491c-aeb4-f7020695ab95",
    "playerLanguage": "",
    "playerName": null,
    "playerPoster": "",
    "playerPreloadOn": true,
    "playerRemotePlayed": false,
    "playerResolution": "800x343",
    "playerSoftwareName": "fastpix-player-data-monitoring",
    "playerSoftwareVersion": "1.0.17",
    "playerSourceDomain": null,
    "playerSourceHeight": 1080,
    "playerSourceWidth": 1920,
    "playerVersion": null,
    "playerViewCount": 1,
    "playerWidth": 800,
    "propertyId": null,
    "qualityOfExperienceScore": 0.9999312671832044,
    "region": "Telangana",
    "renderQualityScore": 1,
    "sessionId": "b608d2e2-9495-40b4-951b-34541939c23a",
    "sign": "1",
    "stabilityScore": 1,
    "startupScore": 0.9997500624843788,
    "subPropertyId": null,
    "totalStartupTime": 112,
    "updatedTimestamp": "2026-05-20T09:52:47.556Z",
    "usedFullScreen": false,
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36",
    "videoContentType": "video",
    "videoDuration": null,
    "videoEncodingVariant": "none",
    "videoId": "video-id",
    "videoLanguage": "en",
    "videoProducer": "FastPix",
    "videoResolution": "1080X1920",
    "videoSeries": "Audio Track Switching Demo",
    "videoSourceDomain": "fastpix.com",
    "videoSourceDuration": 153879,
    "videoSourceHostname": "stream.fastpix.com",
    "videoSourceStreamType": "on-demand",
    "videoSourceType": "application/x-mpegurl",
    "videoSourceUrl": "https://stream.fastpix.com/2125094c-db43-4748-90e1-18539f2ccf98.m3u8",
    "videoStartupFailed": false,
    "videoStartupTime": 2,
    "videoTitle": "Audio Track Switching Demo",
    "videoVariantId": "video`",
    "videoVariantName": "English",
    "viewEnd": "2026-05-20T09:52:47.556Z",
    "viewHasAd": false,
    "viewHasError": false,
    "viewId": "5d4c6560-58d6-45f9-9f1e-5b95eb116adc",
    "viewMaxPlayheadPosition": 1342,
    "viewPageUrl": "http://127.0.0.1:5501/demo/audio_subtitle_tracks.html",
    "viewPlayingTime": 1511,
    "viewSeekedCount": 0,
    "viewSeekedDuration": 0,
    "viewSessionId": null,
    "viewSt
... (truncated)
```

**Missing in SDK (present in API) — 14**

- `data.custom.Device`
- `data.custom.Device[]`
- `data.custom.Device[].dimensionName`
- `data.custom.Device[].displayName`
- `data.custom.Device[].value`
- `data.events[].d`
- `data.events[].d.br`
- `data.events[].d.cd`
- `data.events[].d.fps`
- `data.events[].d.h`
- `data.events[].d.w`
- `data.events[].e`
- `data.events[].pt`
- `data.events[].vt`

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### list_by_top_content (`/data/viewlist/top-content`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/list_by_top_content.api.json`
- **SDK response file**: `tests/artifacts/list_by_top_content.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": [],
  "timespan": [
    1782051183,
    1782137583
  ]
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [],
  "timespan": [
    1782051183,
    1782137583
  ]
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### list_dimensions (`/data/dimensions`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/list_dimensions.api.json`
- **SDK response file**: `tests/artifacts/list_dimensions.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": [
    "browser_name",
    "browser_version",
    "os_name",
    "os_version",
    "device_name",
    "device_model",
    "device_type",
    "device_manufacturer",
    "player_remote_played",
    "player_name",
    "player_version",
    "player_software_name",
    "player_software_version",
    "player_resolution",
    "fp_sdk",
    "fp_sdk_version",
    "player_autoplay_on",
    "player_preload_on",
    "video_title",
    "video_id",
    "video_series",
    "fp_playback_id",
    "fp_live_stream_id",
    "media_id",
    "video_source_stream_type",
    "video_source_type",
    "video_encoding_variant",
    "experiment_name",
    "sub_property_id",
    "drm_type",
    "asn_name",
    "cdn",
    "video_source_hostname",
    "connection_type",
    "view_session_id",
    "continent",
    "country",
    "region",
    "viewer_id",
    "error_code",
    "exit_before_video_start",
    "view_has_ad",
    "video_startup_failed",
    "video_content_type",
    "page_context",
    "playback_failed",
    "custom_1",
    "custom_2",
    "custom_3",
    "custom_4",
    "custom_5",
    "custom_6",
    "custom_7",
    "custom_8",
    "custom_9",
    "custom_10"
  ]
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    "browser_name",
    "browser_version",
    "os_name",
    "os_version",
    "device_name",
    "device_model",
    "device_type",
    "device_manufacturer",
    "player_remote_played",
    "player_name",
    "player_version",
    "player_software_name",
    "player_software_version",
    "player_resolution",
    "fp_sdk",
    "fp_sdk_version",
    "player_autoplay_on",
    "player_preload_on",
    "video_title",
    "video_id",
    "video_series",
    "fp_playback_id",
    "fp_live_stream_id",
    "media_id",
    "video_source_stream_type",
    "video_source_type",
    "video_encoding_variant",
    "experiment_name",
    "sub_property_id",
    "drm_type",
    "asn_name",
    "cdn",
    "video_source_hostname",
    "connection_type",
    "view_session_id",
    "continent",
    "country",
    "region",
    "viewer_id",
    "error_code",
    "exit_before_video_start",
    "view_has_ad",
    "video_startup_failed",
    "video_content_type",
    "page_context",
    "playback_failed",
    "custom_1",
    "custom_2",
    "custom_3",
    "custom_4",
    "custom_5",
    "custom_6",
    "custom_7",
    "custom_8",
    "custom_9",
    "custom_10"
  ]
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### list_filter_values_for_dimension (`/data/dimensions/{dimensionsId}`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/list_filter_values_for_dimension.api.json`
- **SDK response file**: `tests/artifacts/list_filter_values_for_dimension.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": [],
  "timespan": [
    1782051184,
    1782137584
  ]
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [],
  "timespan": [
    1782051184,
    1782137584
  ]
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### list_breakdown_values (`/data/metrics/{metricId}/breakdown`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/list_breakdown_values.api.json`
- **SDK response file**: `tests/artifacts/list_breakdown_values.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "metadata": {
    "aggregation": "view_end"
  },
  "data": [],
  "pagination": {
    "totalRecords": 0,
    "currentOffset": 1,
    "offsetCount": 0
  },
  "timespan": [
    1782051185,
    1782137585
  ]
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "metadata": {
    "aggregation": "view_end"
  },
  "data": [],
  "pagination": {
    "totalRecords": 0,
    "currentOffset": 1,
    "offsetCount": 0
  },
  "timespan": [
    1782051185,
    1782137585
  ]
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### list_overall_values (`/data/metrics/{metricId}/overall`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/list_overall_values.api.json`
- **SDK response file**: `tests/artifacts/list_overall_values.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "metadata": {
    "aggregation": "view_end"
  },
  "data": {
    "value": 0,
    "totalWatchTime": null,
    "totalViews": 0,
    "totalPlayTime": null,
    "uniqueViews": 0,
    "globalValue": null
  },
  "timespan": [
    1782051185,
    1782137585
  ]
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "metadata": {
    "aggregation": "view_end"
  },
  "data": {
    "value": 0,
    "totalWatchTime": null,
    "uniqueViews": 0,
    "totalViews": 0,
    "totalPlayTime": null,
    "globalValue": null
  },
  "timespan": [
    1782051186,
    1782137586
  ]
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### get_timeseries_data (`/data/metrics/{metricId}/timeseries`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/get_timeseries_data.api.json`
- **SDK response file**: `tests/artifacts/get_timeseries_data.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "metadata": {
    "granularity": "hour",
    "aggregation": "view_end"
  },
  "data": [],
  "timespan": [
    1782051186000,
    1782137586000
  ]
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "metadata": {
    "granularity": "hour",
    "aggregation": "view_end"
  },
  "data": [],
  "timespan": [
    1782051186000,
    1782137586000
  ]
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### list_comparison_values (`/data/metrics/comparison`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/list_comparison_values.api.json`
- **SDK response file**: `tests/artifacts/list_comparison_values.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "value": 0,
      "type": "number",
      "name": "Views",
      "metric": "views",
      "measurement": "count",
      "items": [
        {
          "value": 0,
          "type": "number",
          "name": "Unique Viewers",
          "metric": "unique_viewers",
          "measurement": "count",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Playing Time (total)",
          "metric": "playing_time",
          "measurement": "sum",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Playing Time (median)",
          "metric": "playing_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Playing Time (average)",
          "metric": "playing_time",
          "measurement": "avg",
          "items": null
        }
      ]
    },
    {
      "value": 0,
      "type": "number",
      "name": "Overall Score",
      "metric": "overall_score",
      "measurement": "avg",
      "items": null
    },
    {
      "value": 0,
      "type": "number",
      "name": "Playback Success Score",
      "metric": "playback_success_score",
      "measurement": "avg",
      "items": [
        {
          "value": 0,
          "type": "percentage",
          "name": "Playback Failure Percentage",
          "metric": "playback_failure_percentage",
          "measurement": null,
          "items": null
        },
        {
          "value": 0,
          "type": "percentage",
          "name": "Video Startup Failure Percentage",
          "metric": "video_startup_failure_percentage",
          "measurement": null,
          "items": null
        },
        {
          "value": 0,
          "type": "percentage",
          "name": "Exits Before Video Start",
          "metric": "exit_before_video_start",
          "measurement": null,
          "items": null
        }
      ]
    },
    {
      "value": 0,
      "type": "number",
      "name": "Startup Time Score",
      "metric": "startup_score",
      "measurement": null,
      "items": [
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Video Startup Time (median)",
          "metric": "video_startup_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Video Startup Time (95th percentile)",
          "metric": "video_startup_time",
          "measurement": "95th",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Player Startup Time (median)",
          "metric": "player_startup_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Player Startup Time (95th percentile)",
          "metric": "player_startup_time",
          "measurement": "95th",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Page Load Time (median)",
          "metric": "page_load_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Page Load Time (95th percentile)",
          "metric": "page_load_time",
          "measurement": "95th",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Total Startup Time (median)",
          "metric": "total_startup_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Total Startup Time (95th percentile)",
          "metric": "total_startup_t
... (truncated)
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "value": 0,
      "type": "number",
      "name": "Views",
      "metric": "views",
      "measurement": "count",
      "items": [
        {
          "value": 0,
          "type": "number",
          "name": "Unique Viewers",
          "metric": "unique_viewers",
          "measurement": "count",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Playing Time (total)",
          "metric": "playing_time",
          "measurement": "sum",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Playing Time (median)",
          "metric": "playing_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Playing Time (average)",
          "metric": "playing_time",
          "measurement": "avg",
          "items": null
        }
      ]
    },
    {
      "value": 0,
      "type": "number",
      "name": "Overall Score",
      "metric": "overall_score",
      "measurement": "avg",
      "items": null
    },
    {
      "value": 0,
      "type": "number",
      "name": "Playback Success Score",
      "metric": "playback_success_score",
      "measurement": "avg",
      "items": [
        {
          "value": 0,
          "type": "percentage",
          "name": "Playback Failure Percentage",
          "metric": "playback_failure_percentage",
          "measurement": null,
          "items": null
        },
        {
          "value": 0,
          "type": "percentage",
          "name": "Video Startup Failure Percentage",
          "metric": "video_startup_failure_percentage",
          "measurement": null,
          "items": null
        },
        {
          "value": 0,
          "type": "percentage",
          "name": "Exits Before Video Start",
          "metric": "exit_before_video_start",
          "measurement": null,
          "items": null
        }
      ]
    },
    {
      "value": 0,
      "type": "number",
      "name": "Startup Time Score",
      "metric": "startup_score",
      "measurement": null,
      "items": [
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Video Startup Time (median)",
          "metric": "video_startup_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Video Startup Time (95th percentile)",
          "metric": "video_startup_time",
          "measurement": "95th",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Player Startup Time (median)",
          "metric": "player_startup_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Player Startup Time (95th percentile)",
          "metric": "player_startup_time",
          "measurement": "95th",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Page Load Time (median)",
          "metric": "page_load_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Page Load Time (95th percentile)",
          "metric": "page_load_time",
          "measurement": "95th",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Total Startup Time (median)",
          "metric": "total_startup_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 0,
          "type": "milliseconds",
          "name": "Total Startup Time (95th percentile)",
          "metric": "total_startup_t
... (truncated)
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None

### list_errors (`/data/errors`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/list_errors.api.json`
- **SDK response file**: `tests/artifacts/list_errors.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": {
    "errors": [],
    "topErrors": []
  },
  "timespan": [
    1782051187,
    1782137587
  ]
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "errors": [],
    "topErrors": []
  },
  "timespan": [
    1782051188,
    1782137588
  ]
}
```

**Missing in SDK (present in API) — 0**

- None

**Missing in API (present in SDK) — 0**

- None

**Empty arrays omitted by SDK — 0**

- None

**Empty arrays omitted by API — 0**

- None
