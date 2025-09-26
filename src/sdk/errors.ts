import { errorsListErrors } from "../funcs/errorsListErrors.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Errors extends ClientSDK {
  /**
   * List errors
   *
   * @remarks
   * This endpoint returns the total number of playback errors that occurred, along with the total number of views captured, based on the specified timespan and filters. It provides insights into the overall playback quality and helps identify potential issues that may impact viewer experience.
   *
   * #### Key fields in response
   *
   * * **percentage:** The percentage of views affected by the specific error.
   * * **uniqueViewersEffectedPercentage:** The percentage of unique viewers affected by the specific error (available only in the topErrors section).
   * * **notes:** Additional notes or information about the specific error.
   * * **message:** The error message or description.
   * * **lastSeen:** The timestamp of when the error was last observed.
   * * **id:** The unique identifier for the specific error.
   * * **description:** A description of the specific error.
   * * **count:** The number of occurrences of the specific error.
   * * **code:** The error code associated with the specific error.
   *
   * Related guide: <a href="https://docs.fastpix.io/docs/track-playback-errors">Troubleshoot errors</a>
   */
  async listErrors(
    request: operations.ListErrorsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListErrorsResponse> {
    return unwrapAsync(errorsListErrors(
      this,
      request,
      options,
    ));
  }
}
