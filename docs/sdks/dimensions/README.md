# Dimensions
(*dimensions*)

## Overview

### Available Operations

* [listDimensions](#listdimensions) - List the dimensions
* [listFilterValuesForDimension](#listfiltervaluesfordimension) - List the filter values for a dimension

## listDimensions

Retrieves a list of dimensions that can be used as query parameters across various data endpoints. Each dimension has a unique id that can be used to filter data effectively. 

The dimensions retrieved from this endpoint can be used in conjunction with the <a href="https://docs.fastpix.io/reference/list_video_views">list video views</a> and <a href="https://docs.fastpix.io/reference/list_by_top_content">list by top content</a> endpoints to filter results based on specific criteria. For example, you can filter views by `browser_name`, `os_name`, `device_type`, and more.

Related guides: <a href="https://docs.fastpix.io/page/what-video-data-do-we-capture#/">What Video Data do we capture?</a> ,   <a href="https://docs.fastpix.io/docs/user-passable-metadata-1">Use passable dimensions</a>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_dimensions" method="get" path="/data/dimensions" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.dimensions.listDimensions();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { dimensionsListDimensions } from "@fastpix/fastpix-node/funcs/dimensionsListDimensions.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await dimensionsListDimensions(fastpix);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dimensionsListDimensions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListDimensionsResponse](../../models/operations/listdimensionsresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestError         | 400                            | application/json               |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## listFilterValuesForDimension

This endpoint returns the filter values associated with a specific dimension, along with the total number of video views for each value. For example, it can list all `browser_name` (dimension) and show how many views occurred for all available browsers like Chrome, Safari (filter values). 


In order to use the <a href="https://docs.fastpix.io/docs/custom-business-metadata">Custom Dimensions</a>, you must enable them in the dashboard under settings option based on the plan you have opted for.

#### Example

A developer wants to know how their video content performs across different browsers. By calling this endpoint for the `device_type` dimension, they can retrieve a breakdown of video views by each device (e.g., Desktop, Mobile, Tablet). This data will help the developer understand where optimizations or troubleshooting may be necessary.


Related guide: <a href="https://docs.fastpix.io/docs/understand-dashboard-ui#filters-and-timeframes">Filters and timeframes</a>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_filter_values_for_dimension" method="get" path="/data/dimensions/{dimensionsId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.dimensions.listFilterValuesForDimension({
    dimensionsId: "browser_name",
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
import { dimensionsListFilterValuesForDimension } from "@fastpix/fastpix-node/funcs/dimensionsListFilterValuesForDimension.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await dimensionsListFilterValuesForDimension(fastpix, {
    dimensionsId: "browser_name",
    timespan: "7:days",
    filterby: "browser_name:Chrome",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dimensionsListFilterValuesForDimension failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListFilterValuesForDimensionRequest](../../models/operations/listfiltervaluesfordimensionrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListFilterValuesForDimensionResponse](../../models/operations/listfiltervaluesfordimensionresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ViewNotFoundError       | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |