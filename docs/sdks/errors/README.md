# Errors
(*errors*)

## Overview

### Available Operations

* [listErrors](#listerrors) - List errors

## listErrors

This endpoint returns the total number of playback errors that occurred, along with the total number of views captured, based on the specified timespan and filters. It provides insights into the overall playback quality and helps identify potential issues that may impact viewer experience. 


#### Key fields in response

* **percentage:** The percentage of views affected by the specific error. 
* **uniqueViewersEffectedPercentage:** The percentage of unique viewers affected by the specific error (available only in the topErrors section). 
* **notes:** Additional notes or information about the specific error. 
* **message:** The error message or description. 
* **lastSeen:** The timestamp of when the error was last observed. 
* **id:** The unique identifier for the specific error. 
* **description:** A description of the specific error. 
* **count:** The number of occurrences of the specific error. 
* **code:** The error code associated with the specific error. 


Related guide: <a href="https://docs.fastpix.io/docs/track-playback-errors">Troubleshoot errors</a>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_errors" method="get" path="/data/errors" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.errors.listErrors({
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
import { errorsListErrors } from "@fastpix/fastpix-node/funcs/errorsListErrors.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await errorsListErrors(fastpix, {
    timespan: "7:days",
    filterby: "browser_name:Chrome",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("errorsListErrors failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListErrorsRequest](../../models/operations/listerrorsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListErrorsResponse](../../models/operations/listerrorsresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ViewNotFoundError       | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |