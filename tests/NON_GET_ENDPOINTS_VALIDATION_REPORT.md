# Non-GET endpoints validation report (Node SDK)

Generated: 2026-05-20T12:54:31.524Z

## Summary

- **Total**: 38
- **PASS**: 37
- **FAIL**: 1
- **SKIP**: 0

## Captured resources

- `signingKeyId`: b7158b65-302d-4fbd-9c48-503ca92bdd25
- `playlistId`: 67fef841-2857-4e90-95d9-698858af1353
- `streamId`: 91b8484250e5a1ed03fd4e100b807082
- `mediaId`: 3123e275-3f7f-4abf-9655-7a8f5a7dbc61
- `mediaPlaybackId`: 446315bf-11a7-44d2-92ef-a0c56808d2d0
- `createdPlaybackId`: ca3fb5ce-b9de-432c-80b9-e332569c735c
- `trackId`: 58ccc04e-dbbc-4ed2-bc04-f128106034a2
- `streamPlaybackId`: 43751449-62d6-42e4-8153-783e28c31ed1
- `simulcastId`: 7a8dbfb4d61657cc90a6b31d81a7eb9b
- `uploadId`: 3fc1d54b-aa88-41df-bcf9-0cf7b66e75dd

## Consolidated

| Phase | Method | OperationId | HTTP | OpenAPI valid | SDK | Missing in SDK | Missing in API | Status |
|---|---|---|---:|:--:|:--:|---|---|:--:|
| CREATE | POST | `create_signing_key` | 201 | ✅ | ✅ | None | None | ✅ PASS |
| CREATE | POST | `create-a-playlist` | 201 | ✅ | ✅ | None | None | ✅ PASS |
| CREATE | POST | `create-new-stream` | 201 | ✅ | ✅ | None | None | ✅ PASS |
| CREATE | POST | `create-media` | 201 | ✅ | ✅ | None | None | ✅ PASS |
| CREATE | POST | `create-media-playback-id` | 201 | ✅ | ✅ | None | None | ✅ PASS |
| CREATE | POST | `Add-media-track` | 201 | ✅ | ✅ | None | None | ✅ PASS |
| CREATE | POST | `create-playbackId-of-stream` | 201 | ✅ | ✅ | None | None | ✅ PASS |
| CREATE | POST | `create-simulcast-of-stream` | 201 | ✅ | ✅ | None | None | ✅ PASS |
| CREATE | POST | `direct-upload-video-media` | 201 | ✅ | ✅ | None | None | ✅ PASS |
| CREATE | POST | `Generate-subtitle-track` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PATCH | `updated-media` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PATCH | `updated-source-access` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PATCH | `updated-mp4Support` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PATCH | `update-media-summary` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PATCH | `update-media-chapters` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PATCH | `update-media-named-entities` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PATCH | `update-media-moderation` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PATCH | `update-media-track` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PATCH | `update-domain-restrictions` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PATCH | `update-user-agent-restrictions` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PUT | `update-a-playlist` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PATCH | `add-media-to-playlist` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PUT | `change-media-order-in-playlist` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PATCH | `update-live-stream` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PUT | `update-specific-simulcast-of-stream` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PUT | `disable-live-stream` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PUT | `enable-live-stream` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| UPDATE | PUT | `complete-live-stream` | 400 | — | ❌ | None | None | ❌ FAIL |
| UPDATE | PUT | `cancel-upload` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| DELETE | DELETE | `delete-media-from-playlist` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| DELETE | DELETE | `delete-a-playlist` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| DELETE | DELETE | `delete-media-track` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| DELETE | DELETE | `delete-media-playback-id` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| DELETE | DELETE | `delete-simulcast-of-stream` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| DELETE | DELETE | `delete-playbackId-of-stream` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| DELETE | DELETE | `delete-live-stream` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| DELETE | DELETE | `delete-media` | 200 | ✅ | ✅ | None | None | ✅ PASS |
| DELETE | DELETE | `delete_signing_key` | 200 | ✅ | ✅ | None | None | ✅ PASS |

## Per-operation

### create_signing_key (`POST /iam/signing-keys`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `b7158b65-302d-4fbd-9c48-503ca92bdd25`

### create-a-playlist (`POST /on-demand/playlists`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `67fef841-2857-4e90-95d9-698858af1353`

### create-new-stream (`POST /live/streams`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `91b8484250e5a1ed03fd4e100b807082`

### create-media (`POST /on-demand`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `3123e275-3f7f-4abf-9655-7a8f5a7dbc61`

### create-media-playback-id (`POST /on-demand/{mediaId}/playback-ids`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `ca3fb5ce-b9de-432c-80b9-e332569c735c`

### Add-media-track (`POST /on-demand/{mediaId}/tracks`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `58ccc04e-dbbc-4ed2-bc04-f128106034a2`

### create-playbackId-of-stream (`POST /live/streams/{streamId}/playback-ids`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `43751449-62d6-42e4-8153-783e28c31ed1`

### create-simulcast-of-stream (`POST /live/streams/{streamId}/simulcast`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `7a8dbfb4d61657cc90a6b31d81a7eb9b`

### direct-upload-video-media (`POST /on-demand/upload`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `3fc1d54b-aa88-41df-bcf9-0cf7b66e75dd`

### Generate-subtitle-track (`POST /on-demand/{mediaId}/tracks/{trackId}/generate-subtitles`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 200

### updated-media (`PATCH /on-demand/{mediaId}`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### updated-source-access (`PATCH /on-demand/{mediaId}/source-access`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### updated-mp4Support (`PATCH /on-demand/{mediaId}/update-mp4Support`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### update-media-summary (`PATCH /on-demand/{mediaId}/summary`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### update-media-chapters (`PATCH /on-demand/{mediaId}/chapters`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### update-media-named-entities (`PATCH /on-demand/{mediaId}/named-entities`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### update-media-moderation (`PATCH /on-demand/{mediaId}/moderation`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### update-media-track (`PATCH /on-demand/{mediaId}/tracks/{trackId}`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### update-domain-restrictions (`PATCH /on-demand/{mediaId}/playback-ids/{playbackId}/domains`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### update-user-agent-restrictions (`PATCH /on-demand/{mediaId}/playback-ids/{playbackId}/user-agents`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### update-a-playlist (`PUT /on-demand/playlists/{playlistId}`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### add-media-to-playlist (`PATCH /on-demand/playlists/{playlistId}/media`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### change-media-order-in-playlist (`PUT /on-demand/playlists/{playlistId}/media`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### update-live-stream (`PATCH /live/streams/{streamId}`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### update-specific-simulcast-of-stream (`PUT /live/streams/{streamId}/simulcast/{simulcastId}`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### disable-live-stream (`PUT /live/streams/{streamId}/live-disable`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### enable-live-stream (`PUT /live/streams/{streamId}/live-enable`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### complete-live-stream (`PUT /live/streams/{streamId}/finish`)
- **Phase**: UPDATE
- **Status**: FAIL
- **HTTP**: 400
- **SDK error**: FastpixDefaultError: API error occurred: Status 400 Content-Type application/json;charset=UTF-8
Body: {"success":false,"error":{"code":400,"message":"stream cannot be completed","description":"Only active streams can be marked as completed."}}

### cancel-upload (`PUT /on-demand/upload/{uploadId}/cancel`)
- **Phase**: UPDATE
- **Status**: PASS
- **HTTP**: 200

### delete-media-from-playlist (`DELETE /on-demand/playlists/{playlistId}/media`)
- **Phase**: DELETE
- **Status**: PASS
- **HTTP**: 200

### delete-a-playlist (`DELETE /on-demand/playlists/{playlistId}`)
- **Phase**: DELETE
- **Status**: PASS
- **HTTP**: 200

### delete-media-track (`DELETE /on-demand/{mediaId}/tracks/{trackId}`)
- **Phase**: DELETE
- **Status**: PASS
- **HTTP**: 200

### delete-media-playback-id (`DELETE /on-demand/{mediaId}/playback-ids`)
- **Phase**: DELETE
- **Status**: PASS
- **HTTP**: 200

### delete-simulcast-of-stream (`DELETE /live/streams/{streamId}/simulcast/{simulcastId}`)
- **Phase**: DELETE
- **Status**: PASS
- **HTTP**: 200

### delete-playbackId-of-stream (`DELETE /live/streams/{streamId}/playback-ids`)
- **Phase**: DELETE
- **Status**: PASS
- **HTTP**: 200

### delete-live-stream (`DELETE /live/streams/{streamId}`)
- **Phase**: DELETE
- **Status**: PASS
- **HTTP**: 200

### delete-media (`DELETE /on-demand/{mediaId}`)
- **Phase**: DELETE
- **Status**: PASS
- **HTTP**: 200

### delete_signing_key (`DELETE /iam/signing-keys/{signingKeyId}`)
- **Phase**: DELETE
- **Status**: PASS
- **HTTP**: 200
