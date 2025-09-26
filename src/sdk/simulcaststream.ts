import { simulcastStreamCreateSimulcastOfStream } from "../funcs/simulcastStreamCreateSimulcastOfStream.js";
import { simulcastStreamDeleteSimulcastOfStream } from "../funcs/simulcastStreamDeleteSimulcastOfStream.js";
import { simulcastStreamGetSpecificSimulcastOfStream } from "../funcs/simulcastStreamGetSpecificSimulcastOfStream.js";
import { simulcastStreamUpdateSpecificSimulcastOfStream } from "../funcs/simulcastStreamUpdateSpecificSimulcastOfStream.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class SimulcastStream extends ClientSDK {
  /**
   * Create a simulcast
   *
   * @remarks
   * Lets you to create a simulcast for a parent live stream. Simulcasting enables you to broadcast the live stream to multiple social platforms simultaneously (e.g., YouTube, Facebook, or Twitch). This feature is useful for expanding your audience reach across different platforms. However, a simulcast can only be created when the parent live stream is in idle state (i.e., not currently live or disabled). Additionally, only one simulcast target can be created per API call.
   * #### How it works
   *
   * 1. Upon calling this endpoint, you need to provide the parent `streamId` and the details of the simulcast target (platform and credentials). The system will generate a unique `simulcastId`, which can be used to manage the simulcast later.
   *
   * 2. To notify your application about the status of simulcast related events check for the <a href="https://docs.fastpix.io/docs/webhooks-collection#simulcast-target-events">webhooks for simulcast</a> target events.
   *
   * #### Example
   * An event manager sets up a live stream for a virtual conference and wants to simulcast the stream on YouTube and Facebook Live. They first create the primary live stream in FastPix, ensuring it's in the idle state. Then, they use the API to create a simulcast target for YouTube.
   *
   * Related guide: <a href="https://docs.fastpix.io/docs/simulcast-to-3rd-party-platforms">Simulcast to 3rd party platforms</a>
   */
  async createSimulcastOfStream(
    request: operations.CreateSimulcastOfStreamRequest,
    options?: RequestOptions,
  ): Promise<models.SimulcastResponse> {
    return unwrapAsync(simulcastStreamCreateSimulcastOfStream(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a simulcast
   *
   * @remarks
   * Allows you to delete a simulcast using its unique `simulcastId`, which was returned during the simulcast creation process. Deleting a simulcast stops the broadcast to the associated platform, but the parent stream will continue to run if it is live. This action is irreversible, and a new simulcast would need to be created if you want to resume streaming to the same platform.
   *
   * Webhook event: <a href="https://docs.fastpix.io/docs/live-events#videolive_streamsimulcast_targetdeleted">video.live_stream.simulcast_target.deleted</a>
   *
   * #### Example
   * A broadcaster needs to stop simulcasting to one platform due to technical difficulties while keeping the stream active on others. For instance, a tech company is simulcasting a product launch on multiple platforms. Midway through the event, they decide to stop the simulcast on Facebook due to performance issues, but keep it running on YouTube. They call this API to delete the Facebook simulcast target.
   */
  async deleteSimulcastOfStream(
    request: operations.DeleteSimulcastOfStreamRequest,
    options?: RequestOptions,
  ): Promise<models.SimulcastdeleteResponse> {
    return unwrapAsync(simulcastStreamDeleteSimulcastOfStream(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a specific simulcast
   *
   * @remarks
   * Retrieves the details of a specific simulcast associated with a parent live stream. By providing both the `streamId` of the parent stream and the `simulcastId`, FastPix returns detailed information about the simulcast, such as the stream URL, the status of the simulcast, and metadata.
   *
   * #### Example
   * This endpoint can be used to verify the status of the simulcast on external platforms before the live stream begins. For instance, before starting a live gaming event, the organizer wants to ensure that the simulcast to Twitch is set up correctly. They retrieve the simulcast information to confirm that everything is properly configured.
   */
  async getSpecificSimulcastOfStream(
    request: operations.GetSpecificSimulcastOfStreamRequest,
    options?: RequestOptions,
  ): Promise<models.SimulcastResponse> {
    return unwrapAsync(simulcastStreamGetSpecificSimulcastOfStream(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a simulcast
   *
   * @remarks
   * Allows you to enable or disable a specific simulcast associated with a parent live stream. The status of the simulcast can be updated at any point, whether the live stream is active or idle. However, once the live stream is disabled, the simulcast can no longer be modified.
   *
   * Webhook event: <a href="https://docs.fastpix.io/docs/live-events#videolive_streamsimulcast_targetupdated">video.live_stream.simulcast_target.updated</a>
   *
   * #### Example
   * When a `PATCH` request is made to this endpoint, the API updates the status of the simulcast. This can be useful for pausing or resuming a simulcast on a particular platform without stopping the parent live stream.
   */
  async updateSpecificSimulcastOfStream(
    request: operations.UpdateSpecificSimulcastOfStreamRequest,
    options?: RequestOptions,
  ): Promise<models.SimulcastUpdateResponse> {
    return unwrapAsync(simulcastStreamUpdateSpecificSimulcastOfStream(
      this,
      request,
      options,
    ));
  }
}
