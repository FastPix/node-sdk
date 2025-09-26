import { startLiveStreamCreateNewStream } from "../funcs/startLiveStreamCreateNewStream.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import { unwrapAsync } from "../types/fp.js";

export class StartLiveStream extends ClientSDK {
  /**
   * Create a new stream
   *
   * @remarks
   * Allows you to initiate a new <a href="https://docs.fastpix.io/docs/get-started-with-live-streaming">RTMPS</a> or <a href="https://docs.fastpix.io/docs/using-srt-to-live-stream">SRT</a> live stream on FastPix. Upon creating a stream, FastPix generates a unique `streamKey` and `srtSecret`, which can be used with any broadcasting software (like OBS) to connect to FastPix's RTMPS or SRT servers.
   * Leverage SRT for live streaming in environments with unstable networks, taking advantage of its error correction and encryption features for a resilient and secure broadcast.
   *
   * <h4>How it works</h4>
   *
   * 1. Send a a `POST` request to this endpoint. You can configure the stream settings, including `metadata` (such as stream name and description), `reconnectWindow` (in case of disconnection), and privacy options (`public` or `private`).
   *
   * 2. FastPix returns the stream details for both RTMPS and SRT configurations. These keys and IDs from the stream details are essential for connecting the broadcasting software to FastPix’s servers and transmitting the live stream to viewers.
   *
   * 3. Once the live stream is created, we’ll shoot a `POST` message to the address you give us with the webhook event <a href="https://docs.fastpix.io/docs/live-events#videolive_streamcreated">video.live_stream.created</a>.
   *
   * **Example:**
   *
   *   Imagine a gaming platform that allows users to live stream gameplay directly from their dashboard. The API creates a new stream, provides the necessary stream key, and sets it to "private" so that only specific viewers can access it.
   *
   * Related guide: <a href="https://docs.fastpix.io/docs/how-to-livestream">How to live stream</a>
   */
  async createNewStream(
    request: models.CreateLiveStreamRequest,
    options?: RequestOptions,
  ): Promise<models.LiveStreamResponseDTO> {
    return unwrapAsync(startLiveStreamCreateNewStream(
      this,
      request,
      options,
    ));
  }
}
