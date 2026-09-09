# Tests

The SDK is tested at two layers:

1. **Offline contract tests (vitest)** — run with no credentials or network. They
   verify model serialization, wire aliases, and the full API surface.
2. **Live validation harnesses** — hit the real API (dev) to validate every
   endpoint's request/response against the OpenAPI spec.

## 1. Offline tests (vitest)

```bash
npm test          # runs every *.test.ts, offline
```

| File | What it covers |
| --- | --- |
| `models.test.ts` | Model contracts: media `duration` parses as a number and rejects `"HH:MM:SS"`, `enableRecording`, and `accessRestrictions` inbound/outbound wire aliases. |
| `liveplayback.test.ts` | The live playback restriction endpoints via an injected fetch: asserts `PATCH`, the exact path, `Content-Type`, and the flat request body. |
| `surface.test.ts` | Full API surface: every SDK resource exposes each of its operation methods as a callable (guards against accidental removals/renames). |

No credentials are needed; these run in CI. Add new offline tests as
`tests/<name>.test.ts` and they are picked up automatically.

## 2. Live harnesses

These call the real API, so they need credentials. Copy `tests/.env.example` to
`tests/.env` (gitignored) and fill it in, or export the vars:

```bash
export FASTPIX_USERNAME="your-access-token"
export FASTPIX_PASSWORD="your-secret-key"
export FASTPIX_BASE_URL="https://api.fastpix.com/v1"   # optional; this is the default
```

Snapshot the OpenAPI spec to the repo root as `openapi.yaml` first (it is
gitignored). The harnesses resolve the spec from there.

| Command | Script | Scope |
| --- | --- | --- |
| `npm run validate:get-endpoints` | `validate-get-endpoints.ts` | Every GET endpoint: calls the API, validates the raw response against the spec, and diffs it against the SDK-parsed response. |
| `npm run validate:non-get-endpoints` | `validate-non-get-endpoints.ts` | POST/PATCH/PUT/DELETE endpoints, one shot each, driven by fixtures. |
| `npm run validate:non-get-lifecycle` | `validate-non-get-lifecycle.ts` | Creates real resources, exercises every non-GET op against them in order, then deletes them. |

### Fixtures

- `get-endpoints-fixtures.json` supplies real IDs for GET path parameters. Fill
  placeholders locally for a run; do **not** commit real workspace IDs — revert
  the file afterwards (`git checkout -- tests/get-endpoints-fixtures.json`).
- `non-get-endpoints-fixtures.json` supplies request bodies for the one-shot
  non-GET run. Entries needing real IDs are marked `"skip": true`.

### Output (gitignored, per run)

- `GET_ENDPOINTS_OPENAPI_RESPONSE_VALIDATION_REPORT.md` — per-endpoint report.
- `GET_ENDPOINTS_OPENAPI_RESPONSE_FIX_SUGGESTIONS.md` — heuristic fix hints.
- `NON_GET_ENDPOINTS_VALIDATION_REPORT.md` — non-GET report.
- `artifacts/<operationId>.{api,sdk}.json` — raw API and SDK-parsed responses.

Run output is never committed and is not appended to this README.

## Endpoint coverage

Every SDK operation is exercised by the harnesses: all GET endpoints by the GET
harness, all non-GET endpoints by the non-GET harnesses. `surface.test.ts`
additionally guards the whole method surface offline.
