# GET Endpoints — OpenAPI Response Validation Report

Generated: 2026-06-08T07:04:15.881Z

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
      "id": "27229043-54e7-4f7b-98ab-14d91aa2bbc6",
      "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
      "metadata": {
        "source": "sdk-validate"
      },
      "mediaQuality": "standard",
      "maxResolution": "720p",
      "status": "Created",
      "sourceAccess": false,
      "playbackIds": [
        {
          "id": "bfe46630-6017-43a5-b728-27b600dc91ec",
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
      "tracks": [],
      "generatedSubtitles": [],
      "isAudioOnly": false,
      "subtitleAvailable": false,
      "duration": "00:00:00",
      "createdAt": "2026-06-08T07:03:49.363580Z",
      "updatedAt": "2026-06-08T07:03:49.363588Z",
      "sourceResolution": "1080p"
    }
  ],
  "pagination": {
    "totalRecords": 113,
    "currentOffset": 1,
    "offsetCount": 113
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "id": "27229043-54e7-4f7b-98ab-14d91aa2bbc6",
      "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
      "metadata": {
        "source": "sdk-validate"
      },
      "mediaQuality": "standard",
      "maxResolution": "720p",
      "sourceResolution": "1080p",
      "status": "Created",
      "sourceAccess": false,
      "playbackIds": [
        {
          "id": "bfe46630-6017-43a5-b728-27b600dc91ec",
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
      "tracks": [],
      "generatedSubtitles": [],
      "isAudioOnly": false,
      "subtitleAvailable": false,
      "duration": "00:00:00",
      "createdAt": "2026-06-08T07:03:49.363Z",
      "updatedAt": "2026-06-08T07:03:49.363Z"
    }
  ],
  "pagination": {
    "totalRecords": 113,
    "currentOffset": 1,
    "offsetCount": 113
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
      }
    ],
    "generatedSubtitles": [],
    "isAudioOnly": false,
    "subtitleAvailable": false,
    "duration": "00:00:10",
    "aspectRatio": "16:9",
    "createdAt": "2026-06-05T11:46:07.488133Z",
    "updatedAt": "2026-06-05T11:46:18.149930Z"
  }
}
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
      }
    ],
    "generatedSubtitles": [],
    "isAudioOnly": false,
    "subtitleAvailable": false,
    "duration": "00:00:10",
    "aspectRatio": "16:9",
    "createdAt": "2026-06-05T11:46:07.488Z",
    "updatedAt": "2026-06-05T11:46:18.149Z"
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
    "cf-ray": "a0860a210c25ab41-BOM",
    "content-length": "133",
    "content-type": "application/json;charset=UTF-8",
    "date": "Mon, 08 Jun 2026 07:03:56 GMT",
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
      "uploadId": "cab71c83-d921-4fe1-a260-ddf839d6d748",
      "trial": false,
      "status": "waiting",
      "url": "https://storage.googleapis.com/fastpix-uploads-asia/fd9197bb-8cfa-4569-b046-a30fb95e2381/cab71c83-d921-4fe1-a260-ddf839d6d748?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=dev-staging-pub-sub@fastpix-vms.iam.gserviceaccount.com/20260608/auto/storage/goog4_request&X-Goog-Date=20260608T054617Z&X-Goog-Expires=14400&X-Goog-SignedHeaders=host;x-goog-resumable&X-Goog-Signature=0f5979ab18ecc5b114feb853fc300a051e59a8ca98e7f99cb60988df13f69b4987a782e67cc5cd4ddb5fbd42ec914f3707e8ac29bfbfa0582a5962b5df5fed48429a65093e59bf71779366f61b90881f10f031c515cabf6f02d4bcffd1a749e978318e09e3aeeaf621cacbffba730154b2135a744afee780db257f7d9eb7e5d898f85de2dcd4e4943537c610aabeb060dfb4bc4a1d43a5570a8cfac7bb95c33db40911c4df31d3a6fd7c9e2f8853ea71f215fc6fbf61307f6a53e48d62a36b9b6873624c7928fc6b158cecf963d09f2edb25a8944525802aff4c44fffca7050697fcf4bb3dfd229a86b5a899e6901743dcb860a32a5cd103b520517e402025a3&upload_id=AJ5rDhGcgKk6jITuj_6MKAE3SneLe14fBMEoVt8R5_rZgVANRY54RUpxPkKPlWgzWW3A7cxdpoCfdktvaLM_Z6MDSIUgnFR8ZTkH5RhAKizRoBk",
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
      "uploadId": "cab71c83-d921-4fe1-a260-ddf839d6d748",
      "trial": false,
      "status": "waiting",
      "url": "https://storage.googleapis.com/fastpix-uploads-asia/fd9197bb-8cfa-4569-b046-a30fb95e2381/cab71c83-d921-4fe1-a260-ddf839d6d748?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=dev-staging-pub-sub@fastpix-vms.iam.gserviceaccount.com/20260608/auto/storage/goog4_request&X-Goog-Date=20260608T054617Z&X-Goog-Expires=14400&X-Goog-SignedHeaders=host;x-goog-resumable&X-Goog-Signature=0f5979ab18ecc5b114feb853fc300a051e59a8ca98e7f99cb60988df13f69b4987a782e67cc5cd4ddb5fbd42ec914f3707e8ac29bfbfa0582a5962b5df5fed48429a65093e59bf71779366f61b90881f10f031c515cabf6f02d4bcffd1a749e978318e09e3aeeaf621cacbffba730154b2135a744afee780db257f7d9eb7e5d898f85de2dcd4e4943537c610aabeb060dfb4bc4a1d43a5570a8cfac7bb95c33db40911c4df31d3a6fd7c9e2f8853ea71f215fc6fbf61307f6a53e48d62a36b9b6873624c7928fc6b158cecf963d09f2edb25a8944525802aff4c44fffca7050697fcf4bb3dfd229a86b5a899e6901743dcb860a32a5cd103b520517e402025a3&upload_id=AJ5rDhGcgKk6jITuj_6MKAE3SneLe14fBMEoVt8R5_rZgVANRY54RUpxPkKPlWgzWW3A7cxdpoCfdktvaLM_Z6MDSIUgnFR8ZTkH5RhAKizRoBk",
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
      "id": "86ef0d26-9573-4ba6-a785-7374af08ca03",
      "name": "sdk validate playlist",
      "type": "manual",
      "referenceId": "sdkValidatemq4v7css",
      "createdAt": "2026-06-08T07:03:46.943297Z",
      "mediaCount": 0
    },
    {
      "id": "e046613e-551b-4c2c-8834-2562fc3455ec",
      "name": "sdk validate playlist",
      "type": "manual",
      "referenceId": "sdkValidatemq4sf90y",
      "createdAt": "2026-06-08T05:45:56.795627Z",
      "mediaCount": 0
    },
    {
      "id": "cfe5cee9-e5b9-45c9-be4b-f76f71b53c80",
      "name": "sdk validate playlist",
      "type": "manual",
      "referenceId": "sdkValidatemq0uythe",
      "createdAt": "2026-06-05T11:46:04.069981Z",
      "mediaCount": 0
    },
    {
      "id": "b2cdf506-5051-471c-8561-eb522c7d6071",
      "name": "sdk validate playlist",
      "type": "manual",
      "referenceId": "sdkValidatemq0ol4zz",
      "createdAt": "2026-06-05T08:47:28.071848Z",
      "mediaCount": 0
    },
    {
      "id": "00bda787-d7ed-40a4-9764-ab238bf672b7",
      "name": "sdk-validate-playlist",
      "type": "manual",
      "referenceId": "sdkvalidate2847",
      "createdAt": "2026-06-04T04:46:54.134970Z",
      "mediaCount": 0
    }
  ],
  "pagination": {
    "totalRecords": 18,
    "currentOffset": 1,
    "offsetCount": 4
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "id": "86ef0d26-9573-4ba6-a785-7374af08ca03",
      "name": "sdk validate playlist",
      "type": "manual",
      "referenceId": "sdkValidatemq4v7css",
      "createdAt": "2026-06-08T07:03:46.943Z",
      "mediaCount": 0
    },
    {
      "id": "e046613e-551b-4c2c-8834-2562fc3455ec",
      "name": "sdk validate playlist",
      "type": "manual",
      "referenceId": "sdkValidatemq4sf90y",
      "createdAt": "2026-06-08T05:45:56.795Z",
      "mediaCount": 0
    },
    {
      "id": "cfe5cee9-e5b9-45c9-be4b-f76f71b53c80",
      "name": "sdk validate playlist",
      "type": "manual",
      "referenceId": "sdkValidatemq0uythe",
      "createdAt": "2026-06-05T11:46:04.069Z",
      "mediaCount": 0
    },
    {
      "id": "b2cdf506-5051-471c-8561-eb522c7d6071",
      "name": "sdk validate playlist",
      "type": "manual",
      "referenceId": "sdkValidatemq0ol4zz",
      "createdAt": "2026-06-05T08:47:28.071Z",
      "mediaCount": 0
    },
    {
      "id": "00bda787-d7ed-40a4-9764-ab238bf672b7",
      "name": "sdk-validate-playlist",
      "type": "manual",
      "referenceId": "sdkvalidate2847",
      "createdAt": "2026-06-04T04:46:54.134Z",
      "mediaCount": 0
    }
  ],
  "pagination": {
    "totalRecords": 18,
    "currentOffset": 1,
    "offsetCount": 4
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
    "mediaList": [],
    "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
    "createdAt": "2026-06-05T11:46:04.069981Z",
    "updatedAt": "2026-06-05T11:46:04.069981Z",
    "mediaCount": 0
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
    "mediaList": [],
    "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381",
    "createdAt": "2026-06-05T11:46:04.069Z",
    "updatedAt": "2026-06-05T11:46:04.069Z",
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
    "cf-ray": "a0860a438dc7ab41-BOM",
    "content-length": "147",
    "content-type": "application/json;charset=UTF-8",
    "date": "Mon, 08 Jun 2026 07:04:02 GMT",
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
    "cf-ray": "a0860a4778e5ab41-BOM",
    "content-length": "141",
    "content-type": "application/json;charset=UTF-8",
    "date": "Mon, 08 Jun 2026 07:04:02 GMT",
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
      "streamId": "9b58f07729da379874e5ee0cfc0e0aaf",
      "streamKey": "649a23983e5b1501945ff835391997a3k9b58f07729da379874e5ee0cfc0e0aaf",
      "srtSecret": "b1626967cb21f59213bef728aeac8c0fk9b58f07729da379874e5ee0cfc0e0aaf",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-06-08T07:03:48.858337Z",
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
          "id": "ef6236a1-05d4-428d-be74-2017180900a3",
          "accessPolicy": "public"
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "play9b58f07729da379874e5ee0cfc0e0aaf",
        "srtPlaybackSecret": "2470c60d52d4bfa12cb9b9b18d7524ebk9b58f07729da379874e5ee0cfc0e0aaf"
      }
    },
    {
      "streamId": "21023d5cae7e9aab6bdbcea8d6f2f504",
      "streamKey": "51ae2fed821fe7b99d27c6890331aae8k21023d5cae7e9aab6bdbcea8d6f2f504",
      "srtSecret": "046c49b66740c38a3c8577e634cfde16k21023d5cae7e9aab6bdbcea8d6f2f504",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-06-08T05:45:58.410112Z",
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
          "id": "07cd00a1-a5e0-405c-ba69-3fb847bde09d",
          "accessPolicy": "public"
        },
        {
          "id": "c2dbc995-2e1e-47d4-8a99-eb9145cce7a1",
          "accessPolicy": "public"
        }
      ],
      "simulcastResponses": [
        {
          "simulcastId": "ac9e04f6587d3bc388f4da8595b10ad5",
          "url": "rtmp://example.com/live",
          "streamKey": "sk-mq4sfoh8",
          "isEnabled": true
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "play21023d5cae7e9aab6bdbcea8d6f2f504",
        "srtPlaybackSecret": "1725fb57302d6cdb633d0dad7481488fk21023d5cae7e9aab6bdbcea8d6f2f504"
      }
    },
    {
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
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "play5874e71e3738f1bc5f569874d43e99fa",
        "srtPlaybackSecret": "44137e621630b240a3ad3860443066d9k5874e71e3738f1bc5f569874d43e99fa"
      }
    },
    {
      "streamId": "6a963e6e9ba7ce45951c28a765fa4b39",
      "streamKey": "c47d7ead4b9b93254ad3fedde86083f4k6a963e6e9b
... (truncated)
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "streamId": "9b58f07729da379874e5ee0cfc0e0aaf",
      "streamKey": "649a23983e5b1501945ff835391997a3k9b58f07729da379874e5ee0cfc0e0aaf",
      "srtSecret": "b1626967cb21f59213bef728aeac8c0fk9b58f07729da379874e5ee0cfc0e0aaf",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-06-08T07:03:48.858Z",
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
          "id": "ef6236a1-05d4-428d-be74-2017180900a3",
          "accessPolicy": "public"
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "play9b58f07729da379874e5ee0cfc0e0aaf",
        "srtPlaybackSecret": "2470c60d52d4bfa12cb9b9b18d7524ebk9b58f07729da379874e5ee0cfc0e0aaf"
      }
    },
    {
      "streamId": "21023d5cae7e9aab6bdbcea8d6f2f504",
      "streamKey": "51ae2fed821fe7b99d27c6890331aae8k21023d5cae7e9aab6bdbcea8d6f2f504",
      "srtSecret": "046c49b66740c38a3c8577e634cfde16k21023d5cae7e9aab6bdbcea8d6f2f504",
      "trial": false,
      "status": "idle",
      "maxResolution": "1080p",
      "maxDuration": 0,
      "createdAt": "2026-06-08T05:45:58.410Z",
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
          "id": "07cd00a1-a5e0-405c-ba69-3fb847bde09d",
          "accessPolicy": "public"
        },
        {
          "id": "c2dbc995-2e1e-47d4-8a99-eb9145cce7a1",
          "accessPolicy": "public"
        }
      ],
      "simulcastResponses": [
        {
          "simulcastId": "ac9e04f6587d3bc388f4da8595b10ad5",
          "url": "rtmp://example.com/live",
          "streamKey": "sk-mq4sfoh8",
          "isEnabled": true
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "play21023d5cae7e9aab6bdbcea8d6f2f504",
        "srtPlaybackSecret": "1725fb57302d6cdb633d0dad7481488fk21023d5cae7e9aab6bdbcea8d6f2f504"
      }
    },
    {
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
        }
      ],
      "srtPlaybackResponse": {
        "srtPlaybackStreamId": "play5874e71e3738f1bc5f569874d43e99fa",
        "srtPlaybackSecret": "44137e621630b240a3ad3860443066d9k5874e71e3738f1bc5f569874d43e99fa"
      }
    },
    {
      "streamId": "6a963e6e9ba7ce45951c28a765fa4b39",
      "streamKey": "c47d7ead4b9b93254ad3fedde86083f4k6a963e6e9ba7ce45951
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
    "cf-ray": "a0860a517f92ab41-BOM",
    "content-encoding": "gzip",
    "content-type": "application/json;charset=UTF-8",
    "date": "Mon, 08 Jun 2026 07:04:04 GMT",
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
      "id": "496d4ca6-d3fc-4fef-9460-1cd851db7c22",
      "createdAt": "2026-06-08T07:03:46.247843Z"
    },
    {
      "id": "48a3888d-950c-4fc5-9031-5dcaf8916e3b",
      "createdAt": "2026-06-08T05:45:56.108871Z"
    },
    {
      "id": "04cf0f41-fd03-4c14-a30a-26f201624061",
      "createdAt": "2026-06-05T11:46:03.378397Z"
    },
    {
      "id": "2dd486ac-b0ee-4ae0-ab1d-90e2f3504f5d",
      "createdAt": "2026-06-05T11:06:45.999861Z"
    },
    {
      "id": "5d4fc1f9-9845-4d70-9e35-54cea0a53464",
      "createdAt": "2026-06-05T11:06:00.509464Z"
    }
  ],
  "pagination": {
    "totalRecords": 48,
    "currentOffset": 1,
    "offsetCount": 10
  }
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [
    {
      "id": "496d4ca6-d3fc-4fef-9460-1cd851db7c22",
      "createdAt": "2026-06-08T07:03:46.247Z"
    },
    {
      "id": "48a3888d-950c-4fc5-9031-5dcaf8916e3b",
      "createdAt": "2026-06-08T05:45:56.108Z"
    },
    {
      "id": "04cf0f41-fd03-4c14-a30a-26f201624061",
      "createdAt": "2026-06-05T11:46:03.378Z"
    },
    {
      "id": "2dd486ac-b0ee-4ae0-ab1d-90e2f3504f5d",
      "createdAt": "2026-06-05T11:06:45.999Z"
    },
    {
      "id": "5d4fc1f9-9845-4d70-9e35-54cea0a53464",
      "createdAt": "2026-06-05T11:06:00.509Z"
    }
  ],
  "pagination": {
    "totalRecords": 48,
    "currentOffset": 1,
    "offsetCount": 10
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
    "signingKeyId": "04cf0f41-fd03-4c14-a30a-26f201624061",
    "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs8Vl0agbiwg6upzJq17ospR6W/vtV5vrWBOdwBifAN1eF3mctq+e32iVZe8X1y3wpIJtlLdXksCOrL1i4wFpOHjZ+a2j+3xINK+9PQfTWV1Q2dBTgrbU4gJJKyW5YC1lXvncmOaQlBrKSyqinE8eGL74PibM2jfXz5jxPhd9j1+lidw0uM+BoYX/J2Q2jekDqEX2Om4bcaPl6MFJWRB+CwN1AXg5Mdxjm/fGd+AfSBzsEkLqjdswgoOd6M9YOI/YgGk8g89jL24uOKLNKQ+MUo+iuEbB24noJ6bJrbmKrU9om6+nPu8aWFrgDsJc8ApI6H9yAlytVdalTf2eXapr6QIDAQAB\n-----END PUBLIC KEY-----\n",
    "workspaceId": "fd9197bb-8cfa-4569-b046-a30fb95e2381"
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
    1780815848,
    1780902248
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
    1780815848,
    1780902248
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
    1780815850,
    1780902250
  ]
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [],
  "timespan": [
    1780815850,
    1780902250
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
    1780815851,
    1780902251
  ]
}
```

**SDK response (preview)**

```json
{
  "success": true,
  "data": [],
  "timespan": [
    1780815851,
    1780902251
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
    1780815852,
    1780902252
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
    1780815852,
    1780902252
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
    1780815853,
    1780902253
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
    1780815853,
    1780902253
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
    1780815853000,
    1780902253000
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
    1780815854000,
    1780902254000
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
    1780815855,
    1780902255
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
    1780815855,
    1780902255
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
