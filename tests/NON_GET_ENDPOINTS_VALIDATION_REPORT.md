# Non-GET endpoints validation report (Node SDK)

Generated: 2026-06-08T07:07:29.410Z

## Summary

- **Total**: 38
- **PASS**: 37
- **FAIL**: 1
- **SKIP**: 0

## Captured resources

- `signingKeyId`: 496d4ca6-d3fc-4fef-9460-1cd851db7c22
- `playlistId`: 86ef0d26-9573-4ba6-a785-7374af08ca03
- `streamId`: 9b58f07729da379874e5ee0cfc0e0aaf
- `mediaId`: 27229043-54e7-4f7b-98ab-14d91aa2bbc6
- `mediaPlaybackId`: bfe46630-6017-43a5-b728-27b600dc91ec
- `createdPlaybackId`: 65597d5e-1684-4396-940d-9d478763f510
- `trackId`: 2cdcb3f2-7868-4364-8176-cc127fafa9c9
- `streamPlaybackId`: 35e19eb6-554e-4b3c-bf12-86f1d163f564
- `simulcastId`: 43402798197700b1c5a602917f9aada8
- `uploadId`: 83a9f59f-f1d0-49cc-8b5b-1a652a92f10c

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
- **Captured id**: `496d4ca6-d3fc-4fef-9460-1cd851db7c22`

### create-a-playlist (`POST /on-demand/playlists`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `86ef0d26-9573-4ba6-a785-7374af08ca03`

### create-new-stream (`POST /live/streams`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `9b58f07729da379874e5ee0cfc0e0aaf`

### create-media (`POST /on-demand`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `27229043-54e7-4f7b-98ab-14d91aa2bbc6`

### create-media-playback-id (`POST /on-demand/{mediaId}/playback-ids`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `65597d5e-1684-4396-940d-9d478763f510`

### Add-media-track (`POST /on-demand/{mediaId}/tracks`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `2cdcb3f2-7868-4364-8176-cc127fafa9c9`

### create-playbackId-of-stream (`POST /live/streams/{streamId}/playback-ids`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `35e19eb6-554e-4b3c-bf12-86f1d163f564`

### create-simulcast-of-stream (`POST /live/streams/{streamId}/simulcast`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `43402798197700b1c5a602917f9aada8`

### direct-upload-video-media (`POST /on-demand/upload`)
- **Phase**: CREATE
- **Status**: PASS
- **HTTP**: 201
- **Captured id**: `83a9f59f-f1d0-49cc-8b5b-1a652a92f10c`

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
