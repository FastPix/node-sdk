# CreateResponse

## Example Usage

```typescript
import { CreateResponse } from "@fastpix/fastpix-node/models";

let value: CreateResponse = {
  success: true,
  data: {
    id: "fc9d9368-6ee5-4b16-ae50-880a2374bdc4",
    privateKey:
      "LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2Z0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktnd2dnU2tBZ0VBQW9JQkFRREtaN1JKT1IrbXZGeVQxSWFIL0hVUkYwQnRncDJzK0srdUd4TUZ4N1JiaGNudVBMYU14WjM1b0lNWndhdHJrdDFDM3JxVFZsQzBsSnExeENFTyt3Zi9JNHQ0bktmUFB2WG83NGFCQi82YmR0MXpaSHp0OGFIenBnL3YrdEtCWVc5SEdWQ0tYc2JpNjczbHgwcFhHdXVnem8wdnZMR2lKWDBiL0Z4WEI5U1R3RkV5Q1dQOFJhczZ3VWVuSUdVM2UwMmJiV3Z4UnNoMWNER2xSRk03RWw2RVQ2MUQrS0tLTndnUGNYR1pvY0YwZTFxRU5iVGdPZUdBMFNDU0xIT3NtQ0NBQTNtSndJS1VaY0Z2MmpGRUx4Uk5MTnhoMjM5UEdUT3BuWmdvTFp5Skt4b2REN1FpV1N1eDVZY1Z0MFgrSk9rZXNBOEpjM1ZtM0tGc0IwL3RYck9QQWdNQkFBRUNnZ0VBUHhNWUxLVmZocTgyVGw4eFdWbEVCZ0p2OG5COHdIVnpFZGVnRXZJTDgyVjY2d0lDaFZYa0IvR01TVStBSXZMT2Z0TTM0MGhIdUM2REU5ZTkwWlJMQnFoR0ExMFdNbEJWZzdSNC91YkY0aDZsbmhzWGozTDRYQnhJNVNrTnhvSGRrcE9COU16YVA4YmxFNkVLT3FES0F2KzdJY0EwdnVuZDFnWExwTmRzMkduTW5nZW1qOUhJZWh1eTNLY0taNHlheFo1YkRKVEpLZlFrTlFDQzhOR0hIdWovQmRWUnU1RHRrZVdNMFFpN2FKeW5lSXRxOGhtbXdxcVNMTnpTOTZtcHpBdzF3RzFXTHVML1A3TGxJekVWa2ZJUFc0SW1zRXhsSG5FUG0ySld1RUNMQ1pRL25NODdhQXVXekROektCYW51LzZhdXhnSDB2Wnc5YWowTmxNNFFRS0JnUURPM3Y0YlN4bWluZGJpVEdSaXdFVXVyODh4TVA3M2U5RSt2SHlzb3JZMWZycFpkdXJHOVlFb09MUFN1YnQ5WkhZNFhGOFhxRWZ4bE94d294eDVzcU9PcGNMTnFnOWhTSWxPaXEyYmVnN2V2RGpOMml6b3JKRFl3VEhGQ0Era25FbmFpL0J2TU16N3AyVVkrUEEzUnJ4Z25BK3RkQlErZWlSZ1c0WmhnMkhWcndLQmdRRDZlVEpwRTRxZVFYdmpnMy9FS081UkllRklZOHphTGMvMVVHODBqNmVvbStNK3UyTmdUVDJqVmNyMkdQbjZTbHRNRlJNem5qOVJHYmQ1MCt5a2k0Y1NYU1JPdE44alV2M0FseHJtZzEwVTVtSWIrUXFIZ3g2QldyeXkvakxHYXVvMUJnVFg1dDZ0VXVEUUZuVDJSM2xoNGRNZ044T3V4VlR3OCtadGloSllJUUtCZ1FERE00ZHpHWnBHNThrc0lBbFpaVFBpcWVKSCtJT2Q0eWUrbXZ6SnFYOWxXdjljQytuZGN5czhXTVRWd293MzllUFhxdEhQOE9weCtxUmdaSWtxREhabzArRE5UL3JUUVM3Ty9leHpHT21QSXV3MjBmZ3VWU2NZWUxRbHgwVjdmajN5Q3JvRk1YYzZ2dW1XZHMrMFdQckg3bnFjb1R1NCtHZjZ4R0k1QVUvLzRRS0JnUUR6TFcvdjdIVU1xTzhyT0tSM1FuWCtkekpPSWZibGJNMFdrdjBrdnNROFF2MGlEclN3N3MwRkkycGwvR0hXeXhKUWo3V1F5L2NWT2k2VUxWajNlQyt2ZUphamc1K1FvQ2FWTVIrQTVkRWRWWCt6UU5za0xmMFVBWkJyQjdrc1F1a1lpYnR5RWtmblp5dTFXOWc2czdINWdsS0VXUiszTXdjQTJRdkRGZVl4Z1FLQmdDWVdlKzQ4bVVaUEl5ZnR4NVFaQllnYTE2blpndzYxZmxtdEdpQlVGWGVMR3BTaU1XNXc5R3RYVDZPbFh1Zy91TkNKbHR4TDE4c0NEeDNVaU9DNWFTMEN4OTc5TlFrSm1YRWw1UDNtMFNGaVU4VlZ0SFp1dHd3SWFKTFZockZ1T3NJV1BtRFN4aHhMaFpPNmJ5aWRwbHlXLzl1eGpwMlZrQ0Y3OGd5QXRRSWsKLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLQo=",
    createdAt: new Date("2024-01-11T10:00:06.618993Z"),
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | It demonstrates whether the request is successful or not.                      | true                                                                           |
| `data`                                                                         | [models.CreateSigningKeyResponseDTO](../models/createsigningkeyresponsedto.md) | :heavy_minus_sign:                                                             | Displays the result of the request.                                            |                                                                                |