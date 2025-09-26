# Metrics
(*metrics*)

## Overview

### Available Operations

* [listBreakdownValues](#listbreakdownvalues) - List breakdown values
* [listOverallValues](#listoverallvalues) - List overall values
* [getTimeseriesData](#gettimeseriesdata) - Get timeseries data
* [listComparisonValues](#listcomparisonvalues) - List comparison values

## listBreakdownValues

Retrieves breakdown values for a specified metric and timespan, allowing you to analyze the performance of your content based on various dimensions. It provides insights into how different factors contribute to the overall metrics. 

#### How it works

  1. Before using this endpoint, you can call the <a href="https://docs.fastpix.io/reference/list_dimensions">List Dimensions</a> endpoint to retrieve all available dimensions that can be used in your query. 

  2. Make a `GET` request to this endpoint with the required `metricId` and other query parameters. 

  3. Receive a response containing the breakdown values for the specified metric, grouped and filtered according to your parameters. 

  4. Upon successful retrieval, the response will include the breakdown values based on the specified parameters. Note that the time values ( `totalWatchTime` and `totalPlayingTime` ) are in milliseconds. 


#### Example


A developer wants to analyze how watch time varies across different device types. By calling this endpoint for the `playing_time` metric and filtering by `device_type`, they can understand how engagement differs between mobile, desktop, and tablet users. This data will guide optimization efforts for different platforms. 


Related guide: <a href="https://docs.fastpix.io/docs/metrics-overview">Understand data definitions</a>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_breakdown_values" method="get" path="/data/metrics/{metricId}/breakdown" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.metrics.listBreakdownValues({
    metricId: "quality_of_experience_score",
    timespan: "7:days",
    filterby: "browser_name:Chrome",
    groupBy: "browser_name",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { metricsListBreakdownValues } from "@fastpix/fastpix-node/funcs/metricsListBreakdownValues.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await metricsListBreakdownValues(fastpix, {
    metricId: "quality_of_experience_score",
    timespan: "7:days",
    filterby: "browser_name:Chrome",
    groupBy: "browser_name",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsListBreakdownValues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListBreakdownValuesRequest](../../models/operations/listbreakdownvaluesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListBreakdownValuesResponse](../../models/operations/listbreakdownvaluesresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ViewNotFoundError       | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## listOverallValues

Retrieves overall values for a specified metric, providing summary statistics that help you understand the performance of your content. The response includes key metrics such as `totalWatchTime`, `uniqueViews`, `totalPlayTime` and `totalViews`. 

#### How it works

  1. Before using this endpoint, you can call the <a href="https://docs.fastpix.io/reference/list_dimensions">list dimensions</a> endpoint to retrieve all available dimensions that can be used in your query. 

  2. Make a `GET` request to this endpoint with the required `metricId` and other query parameters. 

  3. Receive a response containing the overall values for the specified metric, which may vary based on the applied filters. 






#### Key fields in response


  * **value:** The specific metric value calculated based on the applied filters. 
  * **totalWatchTime:** Total time watched across all views, represented in milliseconds. 
  * **uniqueViews:** The count of unique viewers who interacted with the content. 
  * **totalViews:** The total number of views recorded. 
  * **totalPlayTime:** Total time spent playing the video, represented in milliseconds. 
  * **globalValue:** A global metric value that reflects the overall performance of the specified metric across the entire dataset for the given timespan. This value is not affected by specific filters. 


  Related guide: <a href="https://docs.fastpix.io/docs/metrics-overview">Understand data definitions</a>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_overall_values" method="get" path="/data/metrics/{metricId}/overall" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.metrics.listOverallValues({
    metricId: "quality_of_experience_score",
    timespan: "7:days",
    filterby: "browser_name:Chrome",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { metricsListOverallValues } from "@fastpix/fastpix-node/funcs/metricsListOverallValues.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await metricsListOverallValues(fastpix, {
    metricId: "quality_of_experience_score",
    timespan: "7:days",
    filterby: "browser_name:Chrome",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsListOverallValues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListOverallValuesRequest](../../models/operations/listoverallvaluesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListOverallValuesResponse](../../models/operations/listoverallvaluesresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ViewNotFoundError       | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## getTimeseriesData

This endpoint retrieves timeseries data for a specified metric, providing insights into how the metric values change over time. The response includes an array of data points, each representing the metric's value at specific intervals. 

Each data point contains the following fields: 

* **intervalTime:** The timestamp for the data point indicating when the metric value was recorded. 
* **metricValue:** The value of the specified metric at the given interval, reflecting the performance or engagement level during that time. 
* **numberOfViews:** The total number of views recorded during that interval, providing context for the metric value. 


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_timeseries_data" method="get" path="/data/metrics/{metricId}/timeseries" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.metrics.getTimeseriesData({
    metricId: "quality_of_experience_score",
    timespan: "7:days",
    filterby: "browser_name:Chrome",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { metricsGetTimeseriesData } from "@fastpix/fastpix-node/funcs/metricsGetTimeseriesData.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await metricsGetTimeseriesData(fastpix, {
    metricId: "quality_of_experience_score",
    timespan: "7:days",
    filterby: "browser_name:Chrome",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsGetTimeseriesData failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTimeseriesDataRequest](../../models/operations/gettimeseriesdatarequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTimeseriesDataResponse](../../models/operations/gettimeseriesdataresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ViewNotFoundError       | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## listComparisonValues

This endpoint allows you to compare multiple metrics across specified dimensions. You can specify the metrics you want to compare in the query parameters, and the response will include the relevant metrics for the specified dimensions. 

#### How it works 

  1. Before making a request to this endpoint, call the <a href="https://docs.fastpix.io/reference/list_dimensions">list dimensions</a> endpoint to obtain all available dimensions that can be used for comparison. 

  2. Make a `GET` request to this endpoint with the desired metrics specified in the query parameters. 

  3. Receive a response containing the comparison values for the specified metrics across the selected dimensions. 


  Related guide: <a href="https://docs.fastpix.io/docs/understand-dashboard-ui#compare-metrics">Compare metrics in dashboard</a>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_comparison_values" method="get" path="/data/metrics/comparison" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.metrics.listComparisonValues({
    timespan: "7:days",
    filterby: "browser_name:Chrome",
    dimension: "browser_name",
    value: "Chrome",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { metricsListComparisonValues } from "@fastpix/fastpix-node/funcs/metricsListComparisonValues.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await metricsListComparisonValues(fastpix, {
    timespan: "7:days",
    filterby: "browser_name:Chrome",
    dimension: "browser_name",
    value: "Chrome",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsListComparisonValues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListComparisonValuesRequest](../../models/operations/listcomparisonvaluesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListComparisonValuesResponse](../../models/operations/listcomparisonvaluesresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ViewNotFoundError       | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |