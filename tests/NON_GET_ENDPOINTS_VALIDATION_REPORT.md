# Non-GET endpoints validation report (Node SDK)

Generated: 2026-06-22T13:59:14.173Z

## Summary

- **Total**: 38
- **PASS**: 37
- **FAIL**: 1
- **SKIP**: 0

## Captured resources

- `signingKeyId`: <SIGNING_KEY_ID>
- `playlistId`: <PLAYLIST_ID>
- `streamId`: <STREAM_ID>
- `mediaId`: <MEDIA_ID>
- `mediaPlaybackId`: <MEDIA_PLAYBACK_ID>
- `createdPlaybackId`: <CREATED_PLAYBACK_ID>
- `trackId`: <TRACK_ID>
- `streamPlaybackId`: <STREAM_PLAYBACK_ID>
- `simulcastId`: <SIMULCAST_ID>
- `uploadId`: <UPLOAD_ID>

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
- **Captured id**: `<SIGNING_KEY_ID>`

### create-a-playlist (`POST /on-demand/playlists`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `<PLAYLIST_ID>`

### create-new-stream (`POST /live/streams`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `<STREAM_ID>`

### create-media (`POST /on-demand`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `<MEDIA_ID>`

### create-media-playback-id (`POST /on-demand/{mediaId}/playback-ids`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `<CREATED_PLAYBACK_ID>`

### Add-media-track (`POST /on-demand/{mediaId}/tracks`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `<TRACK_ID>`

### create-playbackId-of-stream (`POST /live/streams/{streamId}/playback-ids`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `<STREAM_PLAYBACK_ID>`

### create-simulcast-of-stream (`POST /live/streams/{streamId}/simulcast`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `<SIMULCAST_ID>`

### direct-upload-video-media (`POST /on-demand/upload`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `<UPLOAD_ID>`

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
