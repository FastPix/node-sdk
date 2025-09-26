# ListComparisonValuesResponse

Get filter/ dimension value details by dimension name.

## Example Usage

```typescript
import { ListComparisonValuesResponse } from "@fastpix/fastpix-node/models/operations";

let value: ListComparisonValuesResponse = {
  success: true,
  data: [
    [
      {
        value: 6,
        type: "number",
        name: "Views",
        metric: "views",
        items: [
          {
            value: 6,
            type: "number",
            name: "Unique Viewers",
            metric: "uniqueViewers",
          },
          {
            value: 503934,
            type: "milliseconds",
            name: "Playing Time",
            metric: "playingTime",
          },
        ],
      },
    ],
    [
      {
        value: 0.780347228050232,
        type: "score",
        name: "Overall Score",
        metric: "qualityOfExperienceScore",
      },
    ],
    [
      {
        value: 0.8,
        type: "score",
        name: "Playback Success Score",
        metric: "playbackSuccessScore",
        items: [
          {
            value: 0.2,
            type: "percentage",
            name: "Playback Failure Percentage",
            metric: "playbackFailurePercentage",
          },
          {
            value: 0,
            type: "percentage",
            name: "Vvideo Startup Failed Percentage",
            metric: "videoStartupFailedPercentage",
          },
        ],
      },
    ],
    [
      {
        value: 0.999100887775421,
        type: "score",
        name: "Startup Score",
        metric: "startupScore",
        items: [
          {
            value: 4,
            type: "milliseconds",
            name: "Video Startup Time (median)",
            metric: "videoStartupTime",
            measurement: "median",
          },
          {
            value: 9,
            type: "milliseconds",
            name: "Video Startup Time (95th %)",
            metric: "videoStartupTime",
            measurement: "95th",
          },
          {
            value: 52.5625,
            type: "milliseconds",
            name: "Player Initialization Time (median)",
            metric: "playerInitializationTime",
            measurement: "median",
          },
          {
            value: 60.0625,
            type: "milliseconds",
            name: "Player Initialization Time (95th %)",
            metric: "playerInitializationTime",
            measurement: "95th",
          },
          {
            value: 122.37890625,
            type: "milliseconds",
            name: "Page Load Time (median)",
            metric: "pageLoadTime",
            measurement: "median",
          },
          {
            value: 264.0625,
            type: "milliseconds",
            name: "Page Load Time (95th %)",
            metric: "pageLoadTime",
            measurement: "95th",
          },
          {
            value: 182.25,
            type: "milliseconds",
            name: "Total Startup Time (median)",
            metric: "totaleStartupTime",
            measurement: "median",
          },
          {
            value: 319.515625,
            type: "milliseconds",
            name: "Total Startup Time (95th %)",
            metric: "totaleStartupTime",
            measurement: "95th",
          },
          {
            value: 3042,
            type: "milliseconds",
            name: "Jump Latency",
            metric: "jumplatency",
          },
          {
            value: 0,
            type: "percentage",
            name: "Exits Before Video Start",
            metric: "exitsBeforeVideoStart",
          },
        ],
      },
    ],
    [
      {
        value: 0.952324783802032,
        type: "score",
        name: "Stability Score",
        metric: "stabilityScore",
        items: [
          {
            value: 0.000556491689594383,
            type: "percentage",
            name: "Rebuffer Percentage",
            metric: "rebufferPercentage",
          },
          {
            value: 0.116746508306514,
            type: "per_minute",
            name: "Rebuffer Frequency",
            metric: "rebufferFrequency",
          },
          {
            value: 0,
            type: "milliseconds",
            name: "Rebuffer Duration (median)",
            metric: "rebufferDuration",
            measurement: "median",
          },
          {
            value: 256,
            type: "milliseconds",
            name: "Rebuffer Duration (95th %)",
            metric: "rebufferDuration",
            measurement: "95th",
          },
          {
            value: 0,
            type: "number",
            name: "Stability Count (median)",
            metric: "StabilityCount",
            measurement: "median",
          },
          {
            value: 1,
            type: "number",
            name: "Rebuffer Count (95th %)",
            metric: "rebufferCount",
            measurement: "95th",
          },
        ],
      },
    ],
    [
      {
        value: 1,
        type: "score",
        name: "Video Quality Score",
        metric: "videoQualityScore",
        items: [
          {
            value: 0,
            type: "percentage",
            name: "Upscale Percentage (median)",
            metric: "upscalePercentage",
            measurement: "median",
          },
          {
            value: 0,
            type: "percentage",
            name: "Upscale Percentage (95th %)",
            metric: "upscalePercentage",
            measurement: "95th",
          },
          {
            value: 0,
            type: "percentage",
            name: "Upscale Percentage (average)",
            metric: "upscalePercentage",
            measurement: "avg",
          },
          {
            value: 0.007,
            type: "percentage",
            name: "Downscale Percentage (median)",
            metric: "downscalePercentage",
            measurement: "median",
          },
          {
            value: 0.449,
            type: "percentage",
            name: "Downscale Percentage (95th %)",
            metric: "downscalePercentage",
            measurement: "95th",
          },
          {
            value: 0.118139094736763,
            type: "percentage",
            name: "Downscale Percentage (average)",
            metric: "downscalePercentage",
            measurement: "avg",
          },
          {
            value: 0,
            type: "percentage",
            name: "Max Upscale Percentage (median)",
            metric: "maxUpscale",
            measurement: "median",
          },
          {
            value: 0,
            type: "percentage",
            name: "Max Upscale Percentage (95th %)",
            metric: "maxUpscale",
            measurement: "95th",
          },
          {
            value: 0.007,
            type: "percentage",
            name: "Max Downscale Percentage (median)",
            metric: "maxDownscale",
            measurement: "median",
          },
          {
            value: 0.449,
            type: "percentage",
            name: "Max Downscale Percentage (95th %)",
            metric: "maxDownscale",
            measurement: "95th",
          },
          {
            value: 851582.91015625,
            type: "mbps",
            name: "Average Bitrate (median)",
            metric: "averageBitrate",
            measurement: "median",
          },
          {
            value: 697016.265625,
            type: "mbps",
            name: "Average Bitrate (95th %)",
            metric: "averageBitrate",
            measurement: "95th",
          },
          {
            value: 2195,
            type: "milliseconds",
            name: "Live Stream Latency (median)",
            metric: "liveStreamLatency",
            measurement: "median",
          },
          {
            value: 3523,
            type: "milliseconds",
            name: "Live Stream Latency (95th %)",
            metric: "liveStreamLatency",
            measurement: "95th",
          },
        ],
      },
    ],
  ],
  timespan: [
    1610025789,
    1610025947,
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `success`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | It demonstrates whether the request is successful or not.                          |                                                                                    |
| `data`                                                                             | [models.MetricsComparisonDetails](../../models/metricscomparisondetails.md)[][]    | :heavy_minus_sign:                                                                 | Displays the result of the request.<br/>                                           |                                                                                    |
| `timespan`                                                                         | *number*[]                                                                         | :heavy_minus_sign:                                                                 | The timeframe from and to details displayed in the form of unix epoch timestamps.<br/> | {<br/>"availableValue": [<br/>1610025789,<br/>1610025947<br/>]<br/>}               |