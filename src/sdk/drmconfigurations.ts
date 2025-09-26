import { drmConfigurationsGetDRMConfiguration } from "../funcs/drmConfigurationsGetDRMConfiguration.js";
import { drmConfigurationsGetDRMConfigurationById } from "../funcs/drmConfigurationsGetDRMConfigurationById.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class DRMConfigurations extends ClientSDK {
  /**
   * Get list of DRM configuration IDs
   *
   * @remarks
   *
   * This endpoint retrieves the DRM configuration (DRM ID) associated with a workspace. It returns a list of DRM configurations, identified by a unique DRM ID, which is used for creating DRM encrypted asset.
   *
   * **How it works:**
   * 1. Make a GET request to this endpoint.
   * 2. Optionally use the `offset` and `limit` query parameters to paginate through the list of DRM configurations.
   * 3. The response includes a list of DRM IDs and pagination metadata.
   *
   * **Example:**
   * A media service provider may retrieve DRM configuration for a workspace to create DRM content.
   *
   * Related guide: <a href="https://docs.fastpix.io/docs/secure-playback-with-drm">Manage DRM configuration</a>
   */
  async getDrmConfiguration(
    request?: operations.GetDrmConfigurationRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.GetDrmConfigurationResponse> {
    return unwrapAsync(drmConfigurationsGetDRMConfiguration(
      this,
      request,
      options,
    ));
  }

  /**
   * Get DRM configuration by ID
   *
   * @remarks
   *
   * This endpoint retrieves a DRM configuration ID. It is used to fetch the DRM-related ID for a workspace, typically required when validating or applying DRM policies to video assets.
   *
   * **How it works:**
   * 1. Make a GET request to this endpoint, replacing `{drmConfigurationId}` with the UUID of the DRM configuration.
   * 2. The response will contain the associated DRM configuration ID.
   *
   * Related guide: <a href="https://docs.fastpix.io/docs/secure-playback-with-drm">Manage DRM configuration</a>
   */
  async getDrmConfigurationById(
    request: operations.GetDrmConfigurationByIdRequest,
    options?: RequestOptions,
  ): Promise<operations.GetDrmConfigurationByIdResponse> {
    return unwrapAsync(drmConfigurationsGetDRMConfigurationById(
      this,
      request,
      options,
    ));
  }
}
