# GET Endpoints — OpenAPI Response Validation Report

Generated: 2026-05-20T12:30:19.618Z

## Summary

- **Total GET endpoints**: 30
- **PASS**: 26
- **FAIL**: 4
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
| `/live/streams/{streamId}/viewer-count` | `get-live-stream-viewer-count-by-id` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/live/streams/{streamId}` | `get-live-stream-by-id` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/live/streams/{streamId}/playback-ids/{playbackId}` | `get-live-stream-playback-id` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/live/streams/{streamId}/simulcast/{simulcastId}` | `get-specific-simulcast-of-stream` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/iam/signing-keys` | `list_signing_keys` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/iam/signing-keys/{signingKeyId}` | `get-signing_key_by_id` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/viewlist` | `list_video_views` | ✅ | ✅ | None | None | None | ✅ PASS |
| `/data/viewlist/{viewId}` | `get_video_view_details` | ✅ | ✅ | `data.events[].d`, `data.events[].d.br`, `data.events[].d.cd`, `data.events[].d.fps`, `data.events[].d.h`, `data.events[].d.w`, `data.events[].e`, `data.events[].pt`, `data.events[].vt` | None | None | ❌ FAIL |
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
      "thumbnail": "https://images.fastpix.com/2fc5474a-ec6c-4f05-841f-419e6119595f/thumbnail.png",
      "id": "2bf68fd8-fe56-46a2-b421-15ad76c016d9",
      "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
      "metadata": {
        "source": "non-get-validator"
      },
      "mediaQuality": "standard",
      "maxResolution": "720p",
      "sourceResolution": "1080",
      "status": "Ready",
      "sourceAccess": false,
      "playbackIds": [
        {
          "id": "2fc5474a-ec6c-4f05-841f-419e6119595f",
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
          "id": "35ee696d-4167-4b78-ac56-6a0346697ae4",
          "type": "video",
          "width": 1920,
          "height": 1080,
          "frameRate": "60.000",
          "status": "Ready"
        },
        {
          "id": "561c851f-fd04-4dd8-8bb1-aeba5da8bf14",
          "type": "audio",
          "status": "Ready",
          "languageCode": "und",
          "languageName": "default"
        }
      ],
      "generatedSubtitles": [],
      "isAudioOnly": false,
      "subtitleAvailable": false,
      "duration": "00:00:10",
      "aspectRatio": "16:9",
      "createdAt": "2026-05-20T10:09:56.609526Z",
      "updatedAt": "2026-05-20T10:10:07.018422Z"
    }
  ],
  "pagination": {
    "totalRecords": 15,
    "currentOffset": 1,
    "offsetCount": 15
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "thumbnail": "https://images.fastpix.com/2fc5474a-ec6c-4f05-841f-419e6119595f/thumbnail.png",
      "id": "2bf68fd8-fe56-46a2-b421-15ad76c016d9",
      "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
      "metadata": {
        "source": "non-get-validator"
      },
      "mediaQuality": "standard",
      "maxResolution": "720p",
      "sourceResolution": "1080",
      "status": "Ready",
      "sourceAccess": false,
      "playbackIds": [
        {
          "id": "2fc5474a-ec6c-4f05-841f-419e6119595f",
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
          "id": "35ee696d-4167-4b78-ac56-6a0346697ae4",
          "type": "video",
          "width": 1920,
          "height": 1080,
          "frameRate": "60.000",
          "status": "Ready"
        },
        {
          "id": "561c851f-fd04-4dd8-8bb1-aeba5da8bf14",
          "type": "audio",
          "status": "Ready",
          "languageName": "default",
          "languageCode": "und"
        }
      ],
      "generatedSubtitles": [],
      "isAudioOnly": false,
      "subtitleAvailable": false,
      "duration": "00:00:10",
      "aspectRatio": "16:9",
      "createdAt": "2026-05-20T10:09:56.609Z",
      "updatedAt": "2026-05-20T10:10:07.018Z"
    }
  ],
  "pagination": {
    "totalRecords": 15,
    "currentOffset": 1,
    "offsetCount": 15
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
    "thumbnail": "https://images.fastpix.com/fad6fa6b-c7bc-42aa-85f7-3105d71b5f98/thumbnail.png",
    "id": "66b74bdb-c868-4fc8-bc16-ad8e2dfcbc36",
    "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
    "metadata": {},
    "mediaQuality": "pro",
    "title": "720p_3min4sec_h264_",
    "maxResolution": "720p",
    "sourceResolution": "720",
    "status": "Ready",
    "sourceAccess": false,
    "playbackIds": [
      {
        "id": "fad6fa6b-c7bc-42aa-85f7-3105d71b5f98",
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
        "id": "d1e3ae30-f6ef-440d-8714-3a63bc89a84c",
        "type": "audio",
        "status": "available",
        "languageCode": "und",
        "languageName": "default"
      },
      {
        "id": "d521c8f0-73df-434c-99bf-e7ba6e537b94",
        "type": "video",
        "width": 1280,
        "height": 720,
        "frameRate": "24.000",
        "status": "available"
      }
    ],
    "generatedSubtitles": [],
    "isAudioOnly": false,
    "subtitleAvailable": false,
    "duration": "00:03:03",
    "aspectRatio": "16:9",
    "createdAt": "2026-05-20T09:06:43.064393Z",
    "updatedAt": "2026-05-20T09:06:49.921122Z"
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "thumbnail": "https://images.fastpix.com/fad6fa6b-c7bc-42aa-85f7-3105d71b5f98/thumbnail.png",
    "id": "66b74bdb-c868-4fc8-bc16-ad8e2dfcbc36",
    "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
    "metadata": {},
    "mediaQuality": "pro",
    "title": "720p_3min4sec_h264_",
    "maxResolution": "720p",
    "sourceResolution": "720",
    "status": "Ready",
    "sourceAccess": false,
    "playbackIds": [
      {
        "id": "fad6fa6b-c7bc-42aa-85f7-3105d71b5f98",
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
        "id": "d1e3ae30-f6ef-440d-8714-3a63bc89a84c",
        "type": "audio",
        "status": "available",
        "languageName": "default",
        "languageCode": "und"
      },
      {
        "id": "d521c8f0-73df-434c-99bf-e7ba6e537b94",
        "type": "video",
        "width": 1280,
        "height": 720,
        "frameRate": "24.000",
        "status": "available"
      }
    ],
    "generatedSubtitles": [],
    "isAudioOnly": false,
    "subtitleAvailable": false,
    "duration": "00:03:03",
    "aspectRatio": "16:9",
    "createdAt": "2026-05-20T09:06:43.064Z",
    "updatedAt": "2026-05-20T09:06:49.921Z"
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
  "stack": "FastpixDefaultError: API error occurred: Status 400 Content-Type application/json;charset=UTF-8\nBody: {\"success\":false,\"error\":{\"code\":400,\"message\":\"Summary not enabled\",\"description\":\"Summary is not enabled for the requested media\"}}\n    at matchFunc (/Users/sravanimaramreddy/Desktop/web-latest-claude/wowww/node-sdk/src/lib/matchers.ts:263:16)\n    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at async $do (/Users/sravanimaramreddy/Desktop/web-latest-claude/wowww/node-sdk/src/funcs/manageVideosGetSummary.ts:170:20)",
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
    "cf-cache-status": "DYNAMIC",
    "cf-ray": "9feb59a2d87db0aa-HYD",
    "connection": "keep-alive",
    "content-length": "133",
    "content-type": "application/json;charset=UTF-8",
    "date": "Wed, 20 May 2026 12:30:00 GMT",
    "server": "cloudflare"
  },
  "url": "https://api.fastpix.com/v1/on-demand/66b74bdb-c868-4fc8-bc16-ad8e2dfcbc36/summary"
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
      "url": "https://storage.googleapis.com/fastpix-uploads-asia/fd9197bb-8cfa-4569-b046-a30fb95e2381/66b74bdb-c868-4fc8-bc16-ad8e2dfcbc36?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=dev-staging-pub-sub%40fastpix-vms.iam.gserviceaccount.com%2F20260520%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260520T090626Z&X-Goog-Expires=14400&X-Goog-SignedHeaders=host%3Bx-goog-resumable&X-Goog-Signature=adeb7cbb6d80e8cc7a770ba13e974593f22ea01e88d210fb90e1370feaf05a662b81f29e0491a43971d197782b9fe8a9fc45f31a8d62c26b9828b6255e89ec25e3410091b48058d4c843d3204e91ad09d203664ac7deb8db238182602c72208f7063dd77548d5c1532809a91339647fd31e4176dc6a98b9ca950918c3869293847e3d33da7d49660ec7f341bcade847cdddc1e8342567173ee2d135ceef0fd79342b487bfe5425f503e6611ef643796b55e36137c284d65c4dcdce52a1e40d3f25ce6b0379a073f5a2c7e51ec73c5db7b514fa37e4df5de0f4b053ac6ff196d62eacd0e46938c1f5eefe513d35b22b1250ad07462b42da999f1ff23ce1bc9e04"
    },
    "file": {
      "containerFormat": "com%2F20260520%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260520T090626Z&X-Goog-Expires=14400&X-Goog-SignedHeaders=host%3Bx-goog-resumable&X-Goog-Signature=adeb7cbb6d80e8cc7a770ba13e974593f22ea01e88d210fb90e1370feaf05a662b81f29e0491a43971d197782b9fe8a9fc45f31a8d62c26b9828b6255e89ec25e3410091b48058d4c843d3204e91ad09d203664ac7deb8db238182602c72208f7063dd77548d5c1532809a91339647fd31e4176dc6a98b9ca950918c3869293847e3d33da7d49660ec7f341bcade847cdddc1e8342567173ee2d135ceef0fd79342b487bfe5425f503e6611ef643796b55e36137c284d65c4dcdce52a1e40d3f25ce6b0379a073f5a2c7e51ec73c5db7b514fa37e4df5de0f4b053ac6ff196d62eacd0e46938c1f5eefe513d35b22b1250ad07462b42da999f1ff23ce1bc9e04",
      "tracks": [
        {
          "id": "d1e3ae30-f6ef-440d-8714-3a63bc89a84c",
          "type": "audio",
          "status": "available",
          "languageCode": "und",
          "languageName": "default"
        },
        {
          "id": "d521c8f0-73df-434c-99bf-e7ba6e537b94",
          "type": "video",
          "width": 1280,
          "height": 720,
          "frameRate": "24.000",
          "status": "available"
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
      "url": "https://storage.googleapis.com/fastpix-uploads-asia/fd9197bb-8cfa-4569-b046-a30fb95e2381/66b74bdb-c868-4fc8-bc16-ad8e2dfcbc36?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=dev-staging-pub-sub%40fastpix-vms.iam.gserviceaccount.com%2F20260520%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260520T090626Z&X-Goog-Expires=14400&X-Goog-SignedHeaders=host%3Bx-goog-resumable&X-Goog-Signature=adeb7cbb6d80e8cc7a770ba13e974593f22ea01e88d210fb90e1370feaf05a662b81f29e0491a43971d197782b9fe8a9fc45f31a8d62c26b9828b6255e89ec25e3410091b48058d4c843d3204e91ad09d203664ac7deb8db238182602c72208f7063dd77548d5c1532809a91339647fd31e4176dc6a98b9ca950918c3869293847e3d33da7d49660ec7f341bcade847cdddc1e8342567173ee2d135ceef0fd79342b487bfe5425f503e6611ef643796b55e36137c284d65c4dcdce52a1e40d3f25ce6b0379a073f5a2c7e51ec73c5db7b514fa37e4df5de0f4b053ac6ff196d62eacd0e46938c1f5eefe513d35b22b1250ad07462b42da999f1ff23ce1bc9e04"
    },
    "file": {
      "containerFormat": "com%2F20260520%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260520T090626Z&X-Goog-Expires=14400&X-Goog-SignedHeaders=host%3Bx-goog-resumable&X-Goog-Signature=adeb7cbb6d80e8cc7a770ba13e974593f22ea01e88d210fb90e1370feaf05a662b81f29e0491a43971d197782b9fe8a9fc45f31a8d62c26b9828b6255e89ec25e3410091b48058d4c843d3204e91ad09d203664ac7deb8db238182602c72208f7063dd77548d5c1532809a91339647fd31e4176dc6a98b9ca950918c3869293847e3d33da7d49660ec7f341bcade847cdddc1e8342567173ee2d135ceef0fd79342b487bfe5425f503e6611ef643796b55e36137c284d65c4dcdce52a1e40d3f25ce6b0379a073f5a2c7e51ec73c5db7b514fa37e4df5de0f4b053ac6ff196d62eacd0e46938c1f5eefe513d35b22b1250ad07462b42da999f1ff23ce1bc9e04",
      "tracks": [
        {
          "id": "d1e3ae30-f6ef-440d-8714-3a63bc89a84c",
          "type": "audio",
          "status": "available",
          "languageName": "default",
          "languageCode": "und"
        },
        {
          "id": "d521c8f0-73df-434c-99bf-e7ba6e537b94",
          "type": "video",
          "width": 1280,
          "height": 720,
          "frameRate": "24.000",
          "status": "available"
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
      "id": "fad6fa6b-c7bc-42aa-85f7-3105d71b5f98",
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
      "id": "fad6fa6b-c7bc-42aa-85f7-3105d71b5f98",
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
      "uploadId": "21023d2b-5178-4e70-9f4d-1f5761b67763",
      "trial": false,
      "status": "waiting",
      "url": "https://storage.googleapis.com/fastpix-uploads-asia/fd9197bb-8cfa-4569-b046-a30fb95e2381/21023d2b-5178-4e70-9f4d-1f5761b67763?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=dev-staging-pub-sub@fastpix-vms.iam.gserviceaccount.com/20260520/auto/storage/goog4_request&X-Goog-Date=20260520T100957Z&X-Goog-Expires=14400&X-Goog-SignedHeaders=host;x-goog-resumable&X-Goog-Signature=0423a9c31293b9d57e6b150571e069b795398f96083f2be636a5165d17b810b116beee6ab5e392582f3ec710a020025ddbf9d01516710c4f826e9a25f4053af38d8a5bc97ca9db68909733f88db1e9aeb1751e0f48c1a5d500891d6d65e9a91e88700d686d3cde90e754fe443a1de872dd3783ddb8b10ba14535b605b691a56ccee83864cb6fd9cdda21d05a53a6d09ef0ebf0aaafdd12ea1cfcd9c744e04d964d11c4b1446d0b067510f3e92b72497611880e884e2ad4087204d06e7e8783dfc760b9237bb8da41365c7be8f8a7ac48fb53fec1a5ea880d0d7ced91d7638f2acf13b6ee6a3589ce1185a265ba58320c62091f83f4b2556e5613db323475e8b2&upload_id=AAVLpEgeiwaVC8vNa4fYFuquUvPqKqOFbVXgbrG2tRQ4nlDWZ6ZPcBsG257RlvapUgW3tbisc90pULQEubuQBpORE70IQIFADneDDboCs5ZgZfc",
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
    }
  ],
  "pagination": {
    "totalRecords": 1,
    "currentOffset": 1,
    "offsetCount": 1
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "uploadId": "21023d2b-5178-4e70-9f4d-1f5761b67763",
      "trial": false,
      "status": "waiting",
      "url": "https://storage.googleapis.com/fastpix-uploads-asia/fd9197bb-8cfa-4569-b046-a30fb95e2381/21023d2b-5178-4e70-9f4d-1f5761b67763?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=dev-staging-pub-sub@fastpix-vms.iam.gserviceaccount.com/20260520/auto/storage/goog4_request&X-Goog-Date=20260520T100957Z&X-Goog-Expires=14400&X-Goog-SignedHeaders=host;x-goog-resumable&X-Goog-Signature=0423a9c31293b9d57e6b150571e069b795398f96083f2be636a5165d17b810b116beee6ab5e392582f3ec710a020025ddbf9d01516710c4f826e9a25f4053af38d8a5bc97ca9db68909733f88db1e9aeb1751e0f48c1a5d500891d6d65e9a91e88700d686d3cde90e754fe443a1de872dd3783ddb8b10ba14535b605b691a56ccee83864cb6fd9cdda21d05a53a6d09ef0ebf0aaafdd12ea1cfcd9c744e04d964d11c4b1446d0b067510f3e92b72497611880e884e2ad4087204d06e7e8783dfc760b9237bb8da41365c7be8f8a7ac48fb53fec1a5ea880d0d7ced91d7638f2acf13b6ee6a3589ce1185a265ba58320c62091f83f4b2556e5613db323475e8b2&upload_id=AAVLpEgeiwaVC8vNa4fYFuquUvPqKqOFbVXgbrG2tRQ4nlDWZ6ZPcBsG257RlvapUgW3tbisc90pULQEubuQBpORE70IQIFADneDDboCs5ZgZfc",
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
    }
  ],
  "pagination": {
    "totalRecords": 1,
    "currentOffset": 1,
    "offsetCount": 1
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
      "id": "a7d637c0-de36-417a-9545-f84ae20c3344",
      "name": "Non-GET Validator Playlist",
      "type": "manual",
      "referenceId": "nonGetValidatorPlaylist",
      "createdAt": "2026-05-20T10:09:58.926778Z",
      "mediaCount": 0
    },
    {
      "id": "323a3ef5-7d80-4bbc-b5af-c86f6f0d44cd",
      "name": "srabanijhqdhguq",
      "type": "manual",
      "referenceId": "1234567890",
      "createdAt": "2026-05-20T09:48:18.605088Z",
      "mediaCount": 0
    }
  ],
  "pagination": {
    "totalRecords": 2,
    "currentOffset": 1,
    "offsetCount": 1
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "id": "a7d637c0-de36-417a-9545-f84ae20c3344",
      "name": "Non-GET Validator Playlist",
      "type": "manual",
      "referenceId": "nonGetValidatorPlaylist",
      "createdAt": "2026-05-20T10:09:58.926Z",
      "mediaCount": 0
    },
    {
      "id": "323a3ef5-7d80-4bbc-b5af-c86f6f0d44cd",
      "name": "srabanijhqdhguq",
      "type": "manual",
      "referenceId": "1234567890",
      "createdAt": "2026-05-20T09:48:18.605Z",
      "mediaCount": 0
    }
  ],
  "pagination": {
    "totalRecords": 2,
    "currentOffset": 1,
    "offsetCount": 1
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
    "id": "323a3ef5-7d80-4bbc-b5af-c86f6f0d44cd",
    "name": "srabanijhqdhguq",
    "referenceId": "1234567890",
    "type": "manual",
    "description": "aDFAS QDWFEWDVA",
    "mediaList": [],
    "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
    "createdAt": "2026-05-20T09:48:18.605088Z",
    "updatedAt": "2026-05-20T09:48:18.605088Z",
    "mediaCount": 0
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "id": "323a3ef5-7d80-4bbc-b5af-c86f6f0d44cd",
    "name": "srabanijhqdhguq",
    "referenceId": "1234567890",
    "type": "manual",
    "description": "aDFAS QDWFEWDVA",
    "mediaList": [],
    "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
    "createdAt": "2026-05-20T09:48:18.605Z",
    "updatedAt": "2026-05-20T09:48:18.605Z",
    "mediaCount": 0
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
    "id": "fad6fa6b-c7bc-42aa-85f7-3105d71b5f98",
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
    "id": "fad6fa6b-c7bc-42aa-85f7-3105d71b5f98",
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
  "stack": "FastpixDefaultError: API error occurred: Status 400 Content-Type application/json;charset=UTF-8\nBody: {\"success\":false,\"error\":{\"code\":400,\"message\":\"DRM ID does not exist\",\"description\":\"The DRM configuration ID does not exist for the workspace.\"}}\n    at matchFunc (/Users/sravanimaramreddy/Desktop/web-latest-claude/wowww/node-sdk/src/lib/matchers.ts:263:16)\n    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at async $do (/Users/sravanimaramreddy/Desktop/web-latest-claude/wowww/node-sdk/src/funcs/drmConfigurationsList.ts:173:20)",
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
    "cf-cache-status": "DYNAMIC",
    "cf-ray": "9feb59c2ab7cb089-HYD",
    "connection": "keep-alive",
    "content-length": "147",
    "content-type": "application/json;charset=UTF-8",
    "date": "Wed, 20 May 2026 12:30:05 GMT",
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
  "stack": "FastpixDefaultError: API error occurred: Status 422 Content-Type application/json;charset=UTF-8\nBody: {\"success\":false,\"error\":{\"code\":422,\"message\":\"payload validation failed\",\"fields\":[{\"field\":\"drmConfigurationId\",\"message\":\"is invalid\"}]}}\n    at matchFunc (/Users/sravanimaramreddy/Desktop/web-latest-claude/wowww/node-sdk/src/lib/matchers.ts:263:16)\n    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at async $do (/Users/sravanimaramreddy/Desktop/web-latest-claude/wowww/node-sdk/src/funcs/drmConfigurationsGet.ts:170:20)",
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
    "cf-cache-status": "DYNAMIC",
    "cf-ray": "9feb59c6ebd6b089-HYD",
    "connection": "keep-alive",
    "content-length": "141",
    "content-type": "application/json;charset=UTF-8",
    "date": "Wed, 20 May 2026 12:30:06 GMT",
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
      "streamId": "2e5ecebd2883279a1f67c19d8d99fa2a",
      "streamKey": "ea116d0bcebe016139226eaf30ed4525k2e5ecebd2883279a1f67c19d8d99fa2a",
      "srtSecret": "021eefe2e8376cbc40033acbb68adee3k2e5ecebd2883279a1f67c19d8d99fa2a",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-05-20T10:10:00.333884Z",
      "reconnectWindow": 60,
      "enableRecording": true,
      "enableDvrMode": false,
      "mediaPolicy": "public",
      "lowLatency": false,
      "closedCaptions": false,
      "playbackIds": [
        {
          "id": "6a019b0c-4794-404a-9bea-1e63cf741b02",
          "accessPolicy": "public"
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "play2e5ecebd2883279a1f67c19d8d99fa2a",
        "srtPlaybackSecret": "20e0d881b4c6a05f01278bf52d20c01dk2e5ecebd2883279a1f67c19d8d99fa2a"
      }
    },
    {
      "streamId": "04f2ff997551bfeb99db3e099e8e85c8",
      "streamKey": "e72eaef58b2c3d79a0c9e848797faeb7k04f2ff997551bfeb99db3e099e8e85c8",
      "srtSecret": "d2c92f912b717af780c030356246e4adk04f2ff997551bfeb99db3e099e8e85c8",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-05-20T09:48:32.763926Z",
      "reconnectWindow": 60,
      "enableRecording": true,
      "enableDvrMode": true,
      "mediaPolicy": "public",
      "metadata": {
        "name": "fastpix_livestream"
      },
      "lowLatency": false,
      "closedCaptions": false,
      "playbackIds": [
        {
          "id": "e3d28adb-df80-4a57-adf5-46522ffa3eff",
          "accessPolicy": "public"
        }
      ],
      "simulcastResponses": [
        {
          "simulcastId": "c0da2202b40efcc3dd25718c40aba9c8",
          "url": "rtmp://hyd01.contribute.live-video.net/app/",
          "streamKey": "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
          "isEnabled": true,
          "metadata": {
            "livestream_name": "Tech-Connect Summit"
          }
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "play04f2ff997551bfeb99db3e099e8e85c8",
        "srtPlaybackSecret": "261f28e903c7a3259fc1846f11bb304ek04f2ff997551bfeb99db3e099e8e85c8"
      }
    }
  ],
  "pagination": {
    "totalRecords": 2,
    "currentOffset": 1,
    "offsetCount": 1
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "streamId": "2e5ecebd2883279a1f67c19d8d99fa2a",
      "streamKey": "ea116d0bcebe016139226eaf30ed4525k2e5ecebd2883279a1f67c19d8d99fa2a",
      "srtSecret": "021eefe2e8376cbc40033acbb68adee3k2e5ecebd2883279a1f67c19d8d99fa2a",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-05-20T10:10:00.333Z",
      "reconnectWindow": 60,
      "enableRecording": true,
      "enableDvrMode": false,
      "mediaPolicy": "public",
      "lowLatency": false,
      "closedCaptions": false,
      "playbackIds": [
        {
          "id": "6a019b0c-4794-404a-9bea-1e63cf741b02",
          "accessPolicy": "public"
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "play2e5ecebd2883279a1f67c19d8d99fa2a",
        "srtPlaybackSecret": "20e0d881b4c6a05f01278bf52d20c01dk2e5ecebd2883279a1f67c19d8d99fa2a"
      }
    },
    {
      "streamId": "04f2ff997551bfeb99db3e099e8e85c8",
      "streamKey": "e72eaef58b2c3d79a0c9e848797faeb7k04f2ff997551bfeb99db3e099e8e85c8",
      "srtSecret": "d2c92f912b717af780c030356246e4adk04f2ff997551bfeb99db3e099e8e85c8",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-05-20T09:48:32.763Z",
      "reconnectWindow": 60,
      "enableRecording": true,
      "enableDvrMode": true,
      "mediaPolicy": "public",
      "metadata": {
        "name": "fastpix_livestream"
      },
      "lowLatency": false,
      "closedCaptions": false,
      "playbackIds": [
        {
          "id": "e3d28adb-df80-4a57-adf5-46522ffa3eff",
          "accessPolicy": "public"
        }
      ],
      "simulcastResponses": [
        {
          "simulcastId": "c0da2202b40efcc3dd25718c40aba9c8",
          "url": "rtmp://hyd01.contribute.live-video.net/app/",
          "streamKey": "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
          "isEnabled": true,
          "metadata": {
            "livestream_name": "Tech-Connect Summit"
          }
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "play04f2ff997551bfeb99db3e099e8e85c8",
        "srtPlaybackSecret": "261f28e903c7a3259fc1846f11bb304ek04f2ff997551bfeb99db3e099e8e85c8"
      }
    }
  ],
  "pagination": {
    "totalRecords": 2,
    "currentOffset": 1,
    "offsetCount": 1
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

### get-live-stream-viewer-count-by-id (`/live/streams/{streamId}/viewer-count`)

- **Status**: PASS
- **OpenAPI valid**: yes
- **SDK parse**: ok
- **API response file**: `tests/artifacts/get-live-stream-viewer-count-by-id.api.json`
- **SDK response file**: `tests/artifacts/get-live-stream-viewer-count-by-id.sdk.json`

**API response (preview)**

```json
{
  "success": true,
  "data": {
    "views": 0
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "views": 0
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
    "streamId": "04f2ff997551bfeb99db3e099e8e85c8",
    "streamKey": "e72eaef58b2c3d79a0c9e848797faeb7k04f2ff997551bfeb99db3e099e8e85c8",
    "srtSecret": "d2c92f912b717af780c030356246e4adk04f2ff997551bfeb99db3e099e8e85c8",
    "trial": false,
    "status": "idle",
    "maxResolution": "1080p",
    "maxDuration": 0,
    "createdAt": "2026-05-20T09:48:32.763926Z",
    "reconnectWindow": 60,
    "enableRecording": true,
    "enableDvrMode": true,
    "mediaPolicy": "public",
    "metadata": {
      "name": "fastpix_livestream"
    },
    "lowLatency": false,
    "closedCaptions": false,
    "playbackIds": [
      {
        "id": "e3d28adb-df80-4a57-adf5-46522ffa3eff",
        "accessPolicy": "public"
      }
    ],
    "simulcastResponses": [
      {
        "simulcastId": "c0da2202b40efcc3dd25718c40aba9c8",
        "url": "rtmp://hyd01.contribute.live-video.net/app/",
        "streamKey": "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
        "isEnabled": true,
        "metadata": {
          "livestream_name": "Tech-Connect Summit"
        }
      }
    ],
    "srtPlaybackResponse": {
      "srtPlaybackStreamId": "play04f2ff997551bfeb99db3e099e8e85c8",
      "srtPlaybackSecret": "261f28e903c7a3259fc1846f11bb304ek04f2ff997551bfeb99db3e099e8e85c8"
    }
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "streamId": "04f2ff997551bfeb99db3e099e8e85c8",
    "streamKey": "e72eaef58b2c3d79a0c9e848797faeb7k04f2ff997551bfeb99db3e099e8e85c8",
    "srtSecret": "d2c92f912b717af780c030356246e4adk04f2ff997551bfeb99db3e099e8e85c8",
    "trial": false,
    "status": "idle",
    "maxResolution": "1080p",
    "maxDuration": 0,
    "createdAt": "2026-05-20T09:48:32.763Z",
    "reconnectWindow": 60,
    "enableRecording": true,
    "enableDvrMode": true,
    "mediaPolicy": "public",
    "metadata": {
      "name": "fastpix_livestream"
    },
    "lowLatency": false,
    "closedCaptions": false,
    "playbackIds": [
      {
        "id": "e3d28adb-df80-4a57-adf5-46522ffa3eff",
        "accessPolicy": "public"
      }
    ],
    "simulcastResponses": [
      {
        "simulcastId": "c0da2202b40efcc3dd25718c40aba9c8",
        "url": "rtmp://hyd01.contribute.live-video.net/app/",
        "streamKey": "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
        "isEnabled": true,
        "metadata": {
          "livestream_name": "Tech-Connect Summit"
        }
      }
    ],
    "srtPlaybackResponse": {
      "srtPlaybackStreamId": "play04f2ff997551bfeb99db3e099e8e85c8",
      "srtPlaybackSecret": "261f28e903c7a3259fc1846f11bb304ek04f2ff997551bfeb99db3e099e8e85c8"
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
    "id": "e3d28adb-df80-4a57-adf5-46522ffa3eff",
    "accessPolicy": "public"
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "id": "e3d28adb-df80-4a57-adf5-46522ffa3eff",
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
    "simulcastId": "c0da2202b40efcc3dd25718c40aba9c8",
    "url": "rtmp://hyd01.contribute.live-video.net/app/",
    "streamKey": "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
    "isEnabled": true,
    "metadata": {
      "livestream_name": "Tech-Connect Summit"
    }
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "simulcastId": "c0da2202b40efcc3dd25718c40aba9c8",
    "url": "rtmp://hyd01.contribute.live-video.net/app/",
    "streamKey": "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
    "isEnabled": true,
    "metadata": {
      "livestream_name": "Tech-Connect Summit"
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
      "id": "f92cdbe4-8970-4523-996c-d4388aa4f958",
      "createdAt": "2026-05-20T10:10:01.090258Z"
    },
    {
      "id": "3186f963-75ea-4ad3-819f-6a6ad3caf6db",
      "createdAt": "2026-05-20T07:25:04.098908Z"
    },
    {
      "id": "7c1a1f5f-a009-43f2-8d9e-ad667ea19c88",
      "createdAt": "2026-05-20T06:15:54.106740Z"
    }
  ],
  "pagination": {
    "totalRecords": 3,
    "currentOffset": 1,
    "offsetCount": 1
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "id": "f92cdbe4-8970-4523-996c-d4388aa4f958",
      "createdAt": "2026-05-20T10:10:01.090Z"
    },
    {
      "id": "3186f963-75ea-4ad3-819f-6a6ad3caf6db",
      "createdAt": "2026-05-20T07:25:04.098Z"
    },
    {
      "id": "7c1a1f5f-a009-43f2-8d9e-ad667ea19c88",
      "createdAt": "2026-05-20T06:15:54.106Z"
    }
  ],
  "pagination": {
    "totalRecords": 3,
    "currentOffset": 1,
    "offsetCount": 1
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
    "signingKeyId": "3186f963-75ea-4ad3-819f-6a6ad3caf6db",
    "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4Nt1tlp1uBcwj6v/98h+NgbggC5rapRxze1WJefs4fCsvpuH/fLYOdnLUHn9WLw9j1E49/JxAUo8WCG5F1rSSPMSrR8Ng8z7A10Xg4DMq8QEXCAAWY1dxndf+1suzRKtAJ/Tl/OtxJdeRnwstfdKgpAr3xc+uB8D/Ywws7iqW3M8qGHK0pWALwF8zbOKVZqFQ6DQZk02sDxjfofivDr90fFOcYl+d5uaQ5zikFiYK1sL302Vs/bFygKjCpw4czn4vwR5pl23hNJBBqysibWLleXSteU0ciYuu2k6GgPWnq81E9+gQIagHNQJGQrD/fwtoco+Yw7uKitK0BDBL8dbZwIDAQAB\n-----END PUBLIC KEY-----\n"
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
    "signingKeyId": "3186f963-75ea-4ad3-819f-6a6ad3caf6db",
    "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4Nt1tlp1uBcwj6v/98h+NgbggC5rapRxze1WJefs4fCsvpuH/fLYOdnLUHn9WLw9j1E49/JxAUo8WCG5F1rSSPMSrR8Ng8z7A10Xg4DMq8QEXCAAWY1dxndf+1suzRKtAJ/Tl/OtxJdeRnwstfdKgpAr3xc+uB8D/Ywws7iqW3M8qGHK0pWALwF8zbOKVZqFQ6DQZk02sDxjfofivDr90fFOcYl+d5uaQ5zikFiYK1sL302Vs/bFygKjCpw4czn4vwR5pl23hNJBBqysibWLleXSteU0ciYuu2k6GgPWnq81E9+gQIagHNQJGQrD/fwtoco+Yw7uKitK0BDBL8dbZwIDAQAB\n-----END PUBLIC KEY-----\n"
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
  "data": [
    {
      "viewId": "dcf0ae08-16a7-4a8c-805d-993f309dbf96",
      "operatingSystem": "Android",
      "application": "Chrome",
      "viewStartTime": "2026-05-20T09:50:42.361",
      "viewEndTime": "2026-05-20T09:51:01.157",
      "videoTitle": "Audio Track Switching Demo",
      "errorCode": null,
      "errorMessage": null,
      "errorId": null,
      "country": "IN",
      "viewWatchTime": 17607,
      "QoeScore": 0.9998969136573785
    },
    {
      "viewId": "5d4c6560-58d6-45f9-9f1e-5b95eb116adc",
      "operatingSystem": "MacOS",
      "application": "Chrome",
      "viewStartTime": "2026-05-20T09:51:01.665",
      "viewEndTime": "2026-05-20T09:52:47.556",
      "videoTitle": "Audio Track Switching Demo",
      "errorCode": null,
      "errorMessage": null,
      "errorId": null,
      "country": "IN",
      "viewWatchTime": 1513,
      "QoeScore": 0.9999312671832044
    },
    {
      "viewId": "bc8406f3-2884-4793-a1e4-63688f8a771f",
      "operatingSystem": "MacOS",
      "application": "Chrome",
      "viewStartTime": "2026-05-20T09:52:55.195",
      "viewEndTime": "2026-05-20T09:53:18.107",
      "videoTitle": "Audio Track Switching Demo",
      "errorCode": null,
      "errorMessage": null,
      "errorId": null,
      "country": "IN",
      "viewWatchTime": 619,
      "QoeScore": 0.9999312671832044
    },
    {
      "viewId": "2bdb1132-baad-4d1c-a90e-d8469579dd6b",
      "operatingSystem": "MacOS",
      "application": "Chrome",
      "viewStartTime": "2026-05-20T09:53:18.648",
      "viewEndTime": "2026-05-20T09:53:35.966",
      "videoTitle": "Audio Track Switching Demo",
      "errorCode": null,
      "errorMessage": null,
      "errorId": null,
      "country": "IN",
      "viewWatchTime": 10114,
      "QoeScore": 0.9999312671832044
    },
    {
      "viewId": "3dd40d8c-4303-45dd-8745-cb1bd74f39db",
      "operatingSystem": "MacOS",
      "application": "Chrome",
      "viewStartTime": "2026-05-20T09:53:36.582",
      "viewEndTime": "2026-05-20T09:54:55.771",
      "videoTitle": "Audio Track Switching Demo",
      "errorCode": null,
      "errorMessage": null,
      "errorId": null,
      "country": "IN",
      "viewWatchTime": 499,
      "QoeScore": 0.9999312671832044
    }
  ],
  "pagination": {
    "totalRecords": 10,
    "currentOffset": 1,
    "offsetCount": 2
  },
  "timespan": [
    1779193812,
    1779280212
  ]
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "viewId": "dcf0ae08-16a7-4a8c-805d-993f309dbf96",
      "operatingSystem": "Android",
      "application": "Chrome",
      "viewStartTime": "2026-05-20T09:50:42.361",
      "viewEndTime": "2026-05-20T09:51:01.157",
      "videoTitle": "Audio Track Switching Demo",
      "errorCode": null,
      "errorMessage": null,
      "errorId": null,
      "country": "IN",
      "viewWatchTime": 17607,
      "QoeScore": 0.9998969136573785
    },
    {
      "viewId": "5d4c6560-58d6-45f9-9f1e-5b95eb116adc",
      "operatingSystem": "MacOS",
      "application": "Chrome",
      "viewStartTime": "2026-05-20T09:51:01.665",
      "viewEndTime": "2026-05-20T09:52:47.556",
      "videoTitle": "Audio Track Switching Demo",
      "errorCode": null,
      "errorMessage": null,
      "errorId": null,
      "country": "IN",
      "viewWatchTime": 1513,
      "QoeScore": 0.9999312671832044
    },
    {
      "viewId": "bc8406f3-2884-4793-a1e4-63688f8a771f",
      "operatingSystem": "MacOS",
      "application": "Chrome",
      "viewStartTime": "2026-05-20T09:52:55.195",
      "viewEndTime": "2026-05-20T09:53:18.107",
      "videoTitle": "Audio Track Switching Demo",
      "errorCode": null,
      "errorMessage": null,
      "errorId": null,
      "country": "IN",
      "viewWatchTime": 619,
      "QoeScore": 0.9999312671832044
    },
    {
      "viewId": "2bdb1132-baad-4d1c-a90e-d8469579dd6b",
      "operatingSystem": "MacOS",
      "application": "Chrome",
      "viewStartTime": "2026-05-20T09:53:18.648",
      "viewEndTime": "2026-05-20T09:53:35.966",
      "videoTitle": "Audio Track Switching Demo",
      "errorCode": null,
      "errorMessage": null,
      "errorId": null,
      "country": "IN",
      "viewWatchTime": 10114,
      "QoeScore": 0.9999312671832044
    },
    {
      "viewId": "3dd40d8c-4303-45dd-8745-cb1bd74f39db",
      "operatingSystem": "MacOS",
      "application": "Chrome",
      "viewStartTime": "2026-05-20T09:53:36.582",
      "viewEndTime": "2026-05-20T09:54:55.771",
      "videoTitle": "Audio Track Switching Demo",
      "errorCode": null,
      "errorMessage": null,
      "errorId": null,
      "country": "IN",
      "viewWatchTime": 499,
      "QoeScore": 0.9999312671832044
    }
  ],
  "pagination": {
    "totalRecords": 10,
    "currentOffset": 1,
    "offsetCount": 2
  },
  "timespan": [
    1779193813,
    1779280213
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
    "averageBitrate": 2883002.6100247726,
    "avgDownscaling": 0.7317475,
    "avgRequestLatency": 221,
    "avgRequestThroughput": 324375424.31761783,
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
    "deviceManufacturer": "Samsung",
    "deviceModel": null,
    "deviceName": "Samsung",
    "deviceType": "Mobile",
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
    "insertTimestamp": "2026-05-20T09:50:42.361Z",
    "ipAddress": "183.82.105.187",
    "jumpLatency": 98,
    "latitude": "17.38405",
    "liveStreamLatency": null,
    "longitude": "78.45636",
    "maxDownscaling": 0.80972224,
    "maxRequestLatency": 0,
    "maxUpscaling": 0,
    "mediaId": "a8c88240-8074-42e3-81cb-cb6a60f595c4",
    "osName": "Android",
    "osVersion": "Android 8.0.0",
    "pageContext": null,
    "pageLoadTime": 126,
    "playbackScore": 1,
    "playerAutoplayOn": true,
    "playerHeight": 343,
    "playerInitializationTime": 0,
    "playerInstanceId": "8cd062ee-6121-42d4-9fc4-4a9a8f3982cb",
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
    "qualityOfExperienceScore": 0.9998969136573785,
    "region": "Telangana",
    "renderQualityScore": 1,
    "sessionId": "b608d2e2-9495-40b4-951b-34541939c23a",
    "sign": "1",
    "stabilityScore": 1,
    "startupScore": 0.9996251405722854,
    "subPropertyId": null,
    "totalStartupTime": 129,
    "updatedTimestamp": "2026-05-20T09:51:01.157Z",
    "usedFullScreen": false,
    "userAgent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Mobile Safari/537.36",
    "videoContentType": "video",
    "videoDuration": null,
    "videoEncodingVariant": "none",
    "videoId": "video-id",
    "videoLanguage": "en",
    "videoProducer": "FastPix",
    "videoResolution": "1080X1920",
    "videoSeries": "Audio Track Switching Demo",
    "videoSourceDomain": "fastpix.com",
    "videoSourceDuration": 153751,
    "videoSourceHostname": "stream.fastpix.com",
    "videoSourceStreamType": "on-demand",
    "videoSourceType": "application/x-mpegurl",
    "videoSourceUrl": "https://stream.fastpix.com/2125094c-db43-4748-90e1-18539f2ccf98.m3u8",
    "videoStartupFailed": false,
    "videoStartupTime": 3,
    "videoTitle": "Audio Track Switching Demo",
    "videoVariantId": "video`",
    "videoVariantName": "English",
    "viewEnd": "2026-05-20T09:51:01.157Z",
    "viewHasAd": false,
    "viewHasError": false,
    "viewId": "dcf0ae08-16a7-4a8c-805d-993f309dbf96",
    "viewMaxPlayheadPosition": 153751,
    "viewPageUrl": "http://127.0.0.1:5501/demo/audio_subtitle_tracks.html",
    "viewPlayingTime": 17506,
    "viewSeekedCount": 1,
    "viewSeekedDuration": 98,
... (truncated)
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "asnId": 18209,
    "asnName": "BRAS Pools - Secunderabad",
    "averageBitrate": 2883002.6100247726,
    "avgDownscaling": 0.7317475,
    "avgRequestLatency": 221,
    "avgRequestThroughput": 324375424.31761783,
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
    "deviceManufacturer": "Samsung",
    "deviceModel": null,
    "deviceName": "Samsung",
    "deviceType": "Mobile",
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
    "insertTimestamp": "2026-05-20T09:50:42.361Z",
    "ipAddress": "183.82.105.187",
    "jumpLatency": 98,
    "latitude": "17.38405",
    "liveStreamLatency": null,
    "longitude": "78.45636",
    "maxDownscaling": 0.80972224,
    "maxRequestLatency": 0,
    "maxUpscaling": 0,
    "mediaId": "a8c88240-8074-42e3-81cb-cb6a60f595c4",
    "osName": "Android",
    "osVersion": "Android 8.0.0",
    "pageContext": null,
    "pageLoadTime": 126,
    "playbackScore": 1,
    "playerAutoplayOn": true,
    "playerHeight": 343,
    "playerInitializationTime": 0,
    "playerInstanceId": "8cd062ee-6121-42d4-9fc4-4a9a8f3982cb",
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
    "qualityOfExperienceScore": 0.9998969136573785,
    "region": "Telangana",
    "renderQualityScore": 1,
    "sessionId": "b608d2e2-9495-40b4-951b-34541939c23a",
    "sign": "1",
    "stabilityScore": 1,
    "startupScore": 0.9996251405722854,
    "subPropertyId": null,
    "totalStartupTime": 129,
    "updatedTimestamp": "2026-05-20T09:51:01.157Z",
    "usedFullScreen": false,
    "userAgent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Mobile Safari/537.36",
    "videoContentType": "video",
    "videoDuration": null,
    "videoEncodingVariant": "none",
    "videoId": "video-id",
    "videoLanguage": "en",
    "videoProducer": "FastPix",
    "videoResolution": "1080X1920",
    "videoSeries": "Audio Track Switching Demo",
    "videoSourceDomain": "fastpix.com",
    "videoSourceDuration": 153751,
    "videoSourceHostname": "stream.fastpix.com",
    "videoSourceStreamType": "on-demand",
    "videoSourceType": "application/x-mpegurl",
    "videoSourceUrl": "https://stream.fastpix.com/2125094c-db43-4748-90e1-18539f2ccf98.m3u8",
    "videoStartupFailed": false,
    "videoStartupTime": 3,
    "videoTitle": "Audio Track Switching Demo",
    "videoVariantId": "video`",
    "videoVariantName": "English",
    "viewEnd": "2026-05-20T09:51:01.157Z",
    "viewHasAd": false,
    "viewHasError": false,
    "viewId": "dcf0ae08-16a7-4a8c-805d-993f309dbf96",
    "viewMaxPlayheadPosition": 153751,
    "viewPageUrl": "http://127.0.0.1:5501/demo/audio_subtitle_tracks.html",
    "viewPlayingTime": 17506,
    "viewSeekedCount": 1,
    "viewSeekedDuration": 98,
... (truncated)
```

**Missing in SDK (present in API) — 9**

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
  "data": [
    {
      "videoTitle": "Audio Track Switching Demo",
      "views": 9,
      "uniqueViews": 1
    },
    {
      "videoTitle": "null",
      "views": 1,
      "uniqueViews": 1
    }
  ],
  "timespan": [
    1779193814,
    1779280214
  ]
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "videoTitle": "Audio Track Switching Demo",
      "views": 9,
      "uniqueViews": 1
    },
    {
      "videoTitle": "null",
      "views": 1,
      "uniqueViews": 1
    }
  ],
  "timespan": [
    1779193814,
    1779280214
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
  "data": [
    {
      "value": "Chrome",
      "uniqueCount": 2,
      "count": 10
    }
  ],
  "timespan": [
    1779193815,
    1779280215
  ]
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "value": "Chrome",
      "uniqueCount": 2,
      "count": 10
    }
  ],
  "timespan": [
    1779193816,
    1779280216
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
  "data": [
    {
      "views": 10,
      "value": 0.7999003730402684,
      "totalWatchTime": 69200,
      "totalPlayingTime": 32875,
      "field": "Chrome"
    }
  ],
  "pagination": {
    "totalRecords": 1,
    "currentOffset": 1,
    "offsetCount": 1
  },
  "timespan": [
    1779193816,
    1779280216
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
  "data": [
    {
      "views": 10,
      "value": 0.7999003730402684,
      "totalWatchTime": 69200,
      "totalPlayingTime": 32875,
      "field": "Chrome"
    }
  ],
  "pagination": {
    "totalRecords": 1,
    "currentOffset": 1,
    "offsetCount": 1
  },
  "timespan": [
    1779193816,
    1779280216
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
    "value": 0.7999003730402684,
    "totalWatchTime": 69200,
    "totalViews": 10,
    "totalPlayTime": 68039,
    "uniqueViews": 2,
    "globalValue": 0.7999003730402684
  },
  "timespan": [
    1779193817,
    1779280217
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
    "value": 0.7999003730402684,
    "totalWatchTime": 69200,
    "uniqueViews": 2,
    "totalViews": 10,
    "totalPlayTime": 68039,
    "globalValue": 0.7999003730402684
  },
  "timespan": [
    1779193817,
    1779280217
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
  "data": [
    {
      "intervalTime": "2026-05-20T09:00:00Z",
      "metricValue": 0.7999003730402684,
      "numberOfViews": 10
    }
  ],
  "timespan": [
    1779193817000,
    1779280217000
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
  "data": [
    {
      "intervalTime": "2026-05-20T09:00:00.000Z",
      "metricValue": 0.7999003730402684,
      "numberOfViews": 10
    }
  ],
  "timespan": [
    1779193818000,
    1779280218000
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
      "value": 10,
      "type": "number",
      "name": "Views",
      "metric": "views",
      "measurement": "count",
      "items": [
        {
          "value": 2,
          "type": "number",
          "name": "Unique Viewers",
          "metric": "unique_viewers",
          "measurement": "count",
          "items": null
        },
        {
          "value": 68039,
          "type": "milliseconds",
          "name": "Playing Time (total)",
          "metric": "playing_time",
          "measurement": "sum",
          "items": null
        },
        {
          "value": 1511,
          "type": "milliseconds",
          "name": "Playing Time (median)",
          "metric": "playing_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 7559.888888888889,
          "type": "milliseconds",
          "name": "Playing Time (average)",
          "metric": "playing_time",
          "measurement": "avg",
          "items": null
        }
      ]
    },
    {
      "value": 0.9998754663003355,
      "type": "number",
      "name": "Overall Score",
      "metric": "overall_score",
      "measurement": "avg",
      "items": null
    },
    {
      "value": 1,
      "type": "number",
      "name": "Playback Success Score",
      "metric": "playback_success_score",
      "measurement": "avg",
      "items": [
        {
          "value": 0.2,
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
      "value": 0.9995003296022185,
      "type": "number",
      "name": "Startup Time Score",
      "metric": "startup_score",
      "measurement": null,
      "items": [
        {
          "value": 3,
          "type": "milliseconds",
          "name": "Video Startup Time (median)",
          "metric": "video_startup_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 8,
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
          "value": 122,
          "type": "milliseconds",
          "name": "Page Load Time (median)",
          "metric": "page_load_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 425,
          "type": "milliseconds",
          "name": "Page Load Time (95th percentile)",
          "metric": "page_load_time",
          "measurement": "95th",
          "items": null
        },
        {
          "value": 128,
          "type": "milliseconds",
          "name": "Total Startup Time (median)",
          "metric": "total_startup_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 425,
          "type": "milliseconds",
          "name": "Total S
... (truncated)
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "value": 10,
      "type": "number",
      "name": "Views",
      "metric": "views",
      "measurement": "count",
      "items": [
        {
          "value": 2,
          "type": "number",
          "name": "Unique Viewers",
          "metric": "unique_viewers",
          "measurement": "count",
          "items": null
        },
        {
          "value": 68039,
          "type": "milliseconds",
          "name": "Playing Time (total)",
          "metric": "playing_time",
          "measurement": "sum",
          "items": null
        },
        {
          "value": 1511,
          "type": "milliseconds",
          "name": "Playing Time (median)",
          "metric": "playing_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 7559.888888888889,
          "type": "milliseconds",
          "name": "Playing Time (average)",
          "metric": "playing_time",
          "measurement": "avg",
          "items": null
        }
      ]
    },
    {
      "value": 0.9998754663003355,
      "type": "number",
      "name": "Overall Score",
      "metric": "overall_score",
      "measurement": "avg",
      "items": null
    },
    {
      "value": 1,
      "type": "number",
      "name": "Playback Success Score",
      "metric": "playback_success_score",
      "measurement": "avg",
      "items": [
        {
          "value": 0.2,
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
      "value": 0.9995003296022185,
      "type": "number",
      "name": "Startup Time Score",
      "metric": "startup_score",
      "measurement": null,
      "items": [
        {
          "value": 3,
          "type": "milliseconds",
          "name": "Video Startup Time (median)",
          "metric": "video_startup_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 8,
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
          "value": 122,
          "type": "milliseconds",
          "name": "Page Load Time (median)",
          "metric": "page_load_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 425,
          "type": "milliseconds",
          "name": "Page Load Time (95th percentile)",
          "metric": "page_load_time",
          "measurement": "95th",
          "items": null
        },
        {
          "value": 128,
          "type": "milliseconds",
          "name": "Total Startup Time (median)",
          "metric": "total_startup_time",
          "measurement": "median",
          "items": null
        },
        {
          "value": 425,
          "type": "milliseconds",
          "name": "Total S
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
    "errors": [
      {
        "percentage": 0.1,
        "notes": "",
        "message": "fragLoadError",
        "lastSeen": "2026-05-20 09:55:36.02",
        "id": "1",
        "description": "url: https://cdn.fastpix.com/1WjqqsDiTWvy2xax6rHOX9o9QN6dyYf14g%2F%2FBM0u3MwPTQl%2BRhB3iiGOD909h15oFXq8QeY6w%2FIa%2FqVFyxLLRN2wzYFYf0en2td4NeGAT9pSZaUXubTP13tqVN9EzUGkl%2BoyF4z3TaTg495ApHSz6O%2B6AV3GAuHkub3vqUC40ZqCHR5nEMen%2FTajyXZMHHkFbFIhkFpTyPjZeAwHj6%2BFYY5bSLS8qDAv2JoOjSKMb7gFgMo88I7U6kCgy0cb9%2FnsPAhbVudl%2F1PFKLdeNSNViU%2F9yQs%3D/text/English/4.vtt?cdn=cloudflare&expires=1781862930&signature=JkuZVtkP1%2Bf0a7LEuAJyby7uJrfg%2BwoKi%2BLe1RTFHKQ%3D\nerror: Error: HTTP Error 0",
        "count": 1,
        "code": "networkError"
      },
      {
        "percentage": 0.1,
        "notes": "",
        "message": "manifestLoadError",
        "lastSeen": "2026-05-20 09:54:56.561",
        "id": "1",
        "description": "url: https://stream.fastpix.com/2125094c-db43-4748-90e1-18539f2ccf98.m3u8\nerror: Error: A network error (status 0) occurred while loading manifest",
        "count": 1,
        "code": "networkError"
      }
    ],
    "topErrors": [
      {
        "percentage": 0.1,
        "uniqueViewersEffectedPercentage": 0.5,
        "notes": "",
        "message": "manifestLoadError",
        "lastSeen": "2026-05-20 09:54:56.561",
        "count": 1,
        "code": "networkError"
      },
      {
        "percentage": 0.1,
        "uniqueViewersEffectedPercentage": 0.5,
        "notes": "",
        "message": "fragLoadError",
        "lastSeen": "2026-05-20 09:55:36.02",
        "count": 1,
        "code": "networkError"
      }
    ]
  },
  "timespan": [
    1779193819,
    1779280219
  ]
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": {
    "errors": [
      {
        "percentage": 0.1,
        "notes": "",
        "message": "manifestLoadError",
        "lastSeen": "2026-05-20 09:54:56.561",
        "id": "1",
        "description": "url: https://stream.fastpix.com/2125094c-db43-4748-90e1-18539f2ccf98.m3u8\nerror: Error: A network error (status 0) occurred while loading manifest",
        "count": 1,
        "code": "networkError"
      },
      {
        "percentage": 0.1,
        "notes": "",
        "message": "fragLoadError",
        "lastSeen": "2026-05-20 09:55:36.02",
        "id": "1",
        "description": "url: https://cdn.fastpix.com/1WjqqsDiTWvy2xax6rHOX9o9QN6dyYf14g%2F%2FBM0u3MwPTQl%2BRhB3iiGOD909h15oFXq8QeY6w%2FIa%2FqVFyxLLRN2wzYFYf0en2td4NeGAT9pSZaUXubTP13tqVN9EzUGkl%2BoyF4z3TaTg495ApHSz6O%2B6AV3GAuHkub3vqUC40ZqCHR5nEMen%2FTajyXZMHHkFbFIhkFpTyPjZeAwHj6%2BFYY5bSLS8qDAv2JoOjSKMb7gFgMo88I7U6kCgy0cb9%2FnsPAhbVudl%2F1PFKLdeNSNViU%2F9yQs%3D/text/English/4.vtt?cdn=cloudflare&expires=1781862930&signature=JkuZVtkP1%2Bf0a7LEuAJyby7uJrfg%2BwoKi%2BLe1RTFHKQ%3D\nerror: Error: HTTP Error 0",
        "count": 1,
        "code": "networkError"
      }
    ],
    "topErrors": [
      {
        "percentage": 0.1,
        "uniqueViewersEffectedPercentage": 0.5,
        "notes": "",
        "message": "manifestLoadError",
        "lastSeen": "2026-05-20 09:54:56.561",
        "count": 1,
        "code": "networkError"
      },
      {
        "percentage": 0.1,
        "uniqueViewersEffectedPercentage": 0.5,
        "notes": "",
        "message": "fragLoadError",
        "lastSeen": "2026-05-20 09:55:36.02",
        "count": 1,
        "code": "networkError"
      }
    ]
  },
  "timespan": [
    1779193819,
    1779280219
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
