import { dimensionsListDimensions } from "../funcs/dimensionsListDimensions.js";
import { dimensionsListFilterValuesForDimension } from "../funcs/dimensionsListFilterValuesForDimension.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Dimensions extends ClientSDK {
  /**
   * List the dimensions
   *
   * @remarks
   * Retrieves a list of dimensions that can be used as query parameters across various data endpoints. Each dimension has a unique id that can be used to filter data effectively.
   *
   * The dimensions retrieved from this endpoint can be used in conjunction with the <a href="https://docs.fastpix.io/reference/list_video_views">list video views</a> and <a href="https://docs.fastpix.io/reference/list_by_top_content">list by top content</a> endpoints to filter results based on specific criteria. For example, you can filter views by `browser_name`, `os_name`, `device_type`, and more.
   *
   * Related guides: <a href="https://docs.fastpix.io/page/what-video-data-do-we-capture#/">What Video Data do we capture?</a> ,   <a href="https://docs.fastpix.io/docs/user-passable-metadata-1">Use passable dimensions</a>
   */
  async listDimensions(
    options?: RequestOptions,
  ): Promise<operations.ListDimensionsResponse> {
    return unwrapAsync(dimensionsListDimensions(
      this,
      options,
    ));
  }

  /**
   * List the filter values for a dimension
   *
   * @remarks
   * This endpoint returns the filter values associated with a specific dimension, along with the total number of video views for each value. For example, it can list all `browser_name` (dimension) and show how many views occurred for all available browsers like Chrome, Safari (filter values).
   *
   * In order to use the <a href="https://docs.fastpix.io/docs/custom-business-metadata">Custom Dimensions</a>, you must enable them in the dashboard under settings option based on the plan you have opted for.
   *
   * #### Example
   *
   * A developer wants to know how their video content performs across different browsers. By calling this endpoint for the `device_type` dimension, they can retrieve a breakdown of video views by each device (e.g., Desktop, Mobile, Tablet). This data will help the developer understand where optimizations or troubleshooting may be necessary.
   *
   * Related guide: <a href="https://docs.fastpix.io/docs/understand-dashboard-ui#filters-and-timeframes">Filters and timeframes</a>
   */
  async listFilterValuesForDimension(
    request: operations.ListFilterValuesForDimensionRequest,
    options?: RequestOptions,
  ): Promise<operations.ListFilterValuesForDimensionResponse> {
    return unwrapAsync(dimensionsListFilterValuesForDimension(
      this,
      request,
      options,
    ));
  }
}
