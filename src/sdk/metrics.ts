import { metricsGetTimeseriesData } from "../funcs/metricsGetTimeseriesData.js";
import { metricsListBreakdownValues } from "../funcs/metricsListBreakdownValues.js";
import { metricsListComparisonValues } from "../funcs/metricsListComparisonValues.js";
import { metricsListOverallValues } from "../funcs/metricsListOverallValues.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Metrics extends ClientSDK {
  /**
   * List breakdown values
   *
   * @remarks
   * Retrieves breakdown values for a specified metric and timespan, allowing you to analyze the performance of your content based on various dimensions. It provides insights into how different factors contribute to the overall metrics.
   *
   * #### How it works
   *
   *   1. Before using this endpoint, you can call the <a href="https://docs.fastpix.io/reference/list_dimensions">List Dimensions</a> endpoint to retrieve all available dimensions that can be used in your query.
   *
   *   2. Make a `GET` request to this endpoint with the required `metricId` and other query parameters.
   *
   *   3. Receive a response containing the breakdown values for the specified metric, grouped and filtered according to your parameters.
   *
   *   4. Upon successful retrieval, the response will include the breakdown values based on the specified parameters. Note that the time values ( `totalWatchTime` and `totalPlayingTime` ) are in milliseconds.
   *
   * #### Example
   *
   * A developer wants to analyze how watch time varies across different device types. By calling this endpoint for the `playing_time` metric and filtering by `device_type`, they can understand how engagement differs between mobile, desktop, and tablet users. This data will guide optimization efforts for different platforms.
   *
   * Related guide: <a href="https://docs.fastpix.io/docs/metrics-overview">Understand data definitions</a>
   */
  async listBreakdownValues(
    request: operations.ListBreakdownValuesRequest,
    options?: RequestOptions,
  ): Promise<operations.ListBreakdownValuesResponse> {
    return unwrapAsync(metricsListBreakdownValues(
      this,
      request,
      options,
    ));
  }

  /**
   * List overall values
   *
   * @remarks
   * Retrieves overall values for a specified metric, providing summary statistics that help you understand the performance of your content. The response includes key metrics such as `totalWatchTime`, `uniqueViews`, `totalPlayTime` and `totalViews`.
   *
   * #### How it works
   *
   *   1. Before using this endpoint, you can call the <a href="https://docs.fastpix.io/reference/list_dimensions">list dimensions</a> endpoint to retrieve all available dimensions that can be used in your query.
   *
   *   2. Make a `GET` request to this endpoint with the required `metricId` and other query parameters.
   *
   *   3. Receive a response containing the overall values for the specified metric, which may vary based on the applied filters.
   *
   * #### Key fields in response
   *
   *   * **value:** The specific metric value calculated based on the applied filters.
   *   * **totalWatchTime:** Total time watched across all views, represented in milliseconds.
   *   * **uniqueViews:** The count of unique viewers who interacted with the content.
   *   * **totalViews:** The total number of views recorded.
   *   * **totalPlayTime:** Total time spent playing the video, represented in milliseconds.
   *   * **globalValue:** A global metric value that reflects the overall performance of the specified metric across the entire dataset for the given timespan. This value is not affected by specific filters.
   *
   *   Related guide: <a href="https://docs.fastpix.io/docs/metrics-overview">Understand data definitions</a>
   */
  async listOverallValues(
    request: operations.ListOverallValuesRequest,
    options?: RequestOptions,
  ): Promise<operations.ListOverallValuesResponse> {
    return unwrapAsync(metricsListOverallValues(
      this,
      request,
      options,
    ));
  }

  /**
   * Get timeseries data
   *
   * @remarks
   * This endpoint retrieves timeseries data for a specified metric, providing insights into how the metric values change over time. The response includes an array of data points, each representing the metric's value at specific intervals.
   *
   * Each data point contains the following fields:
   *
   * * **intervalTime:** The timestamp for the data point indicating when the metric value was recorded.
   * * **metricValue:** The value of the specified metric at the given interval, reflecting the performance or engagement level during that time.
   * * **numberOfViews:** The total number of views recorded during that interval, providing context for the metric value.
   */
  async getTimeseriesData(
    request: operations.GetTimeseriesDataRequest,
    options?: RequestOptions,
  ): Promise<operations.GetTimeseriesDataResponse> {
    return unwrapAsync(metricsGetTimeseriesData(
      this,
      request,
      options,
    ));
  }

  /**
   * List comparison values
   *
   * @remarks
   * This endpoint allows you to compare multiple metrics across specified dimensions. You can specify the metrics you want to compare in the query parameters, and the response will include the relevant metrics for the specified dimensions.
   *
   * #### How it works
   *
   *   1. Before making a request to this endpoint, call the <a href="https://docs.fastpix.io/reference/list_dimensions">list dimensions</a> endpoint to obtain all available dimensions that can be used for comparison.
   *
   *   2. Make a `GET` request to this endpoint with the desired metrics specified in the query parameters.
   *
   *   3. Receive a response containing the comparison values for the specified metrics across the selected dimensions.
   *
   *   Related guide: <a href="https://docs.fastpix.io/docs/understand-dashboard-ui#compare-metrics">Compare metrics in dashboard</a>
   */
  async listComparisonValues(
    request: operations.ListComparisonValuesRequest,
    options?: RequestOptions,
  ): Promise<operations.ListComparisonValuesResponse> {
    return unwrapAsync(metricsListComparisonValues(
      this,
      request,
      options,
    ));
  }
}
