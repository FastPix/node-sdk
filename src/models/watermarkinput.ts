import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Type of overlay (currently only supports 'watermark').
 */
export const WatermarkInputType = {
  Watermark: "watermark",
} as const;
/**
 * Type of overlay (currently only supports 'watermark').
 */
export type WatermarkInputType = ClosedEnum<typeof WatermarkInputType>;

/**
 * Horizontal alignment of the watermark.
 */
export const XAlign = {
  Left: "left",
  Center: "center",
  Right: "right",
} as const;
/**
 * Horizontal alignment of the watermark.
 */
export type XAlign = ClosedEnum<typeof XAlign>;

/**
 * Vertical alignment of the watermark.
 */
export const YAlign = {
  Top: "top",
  Middle: "middle",
  Bottom: "bottom",
} as const;
/**
 * Vertical alignment of the watermark.
 */
export type YAlign = ClosedEnum<typeof YAlign>;

export type Placement = {
  /**
   * Horizontal alignment of the watermark.
   */
  xAlign?: XAlign | undefined;
  /**
   * Horizontal margin from the edge of the video.
   */
  xMargin?: string | undefined;
  /**
   * Vertical alignment of the watermark.
   */
  yAlign?: YAlign | undefined;
  /**
   * Vertical margin from the edge of the video.
   */
  yMargin?: string | undefined;
};

export type WatermarkInput = {
  /**
   * Type of overlay (currently only supports 'watermark').
   */
  type?: WatermarkInputType | undefined;
  /**
   * URL of the watermark image.
   */
  url?: string | undefined;
  placement?: Placement | undefined;
  /**
   * Width of the watermark in percentage or pixels.
   */
  width?: string | undefined;
  /**
   * Height of the watermark in percentage or pixels.
   */
  height?: string | undefined;
  /**
   * Opacity of the watermark in percentage.
   */
  opacity?: string | undefined;
};

/** @internal */
export const WatermarkInputType$inboundSchema: z.ZodNativeEnum<
  typeof WatermarkInputType
> = z.nativeEnum(WatermarkInputType);

/** @internal */
export const WatermarkInputType$outboundSchema: z.ZodNativeEnum<
  typeof WatermarkInputType
> = WatermarkInputType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WatermarkInputType$ {
  /** @deprecated use `WatermarkInputType$inboundSchema` instead. */
  export const inboundSchema = WatermarkInputType$inboundSchema;
  /** @deprecated use `WatermarkInputType$outboundSchema` instead. */
  export const outboundSchema = WatermarkInputType$outboundSchema;
}

/** @internal */
export const XAlign$inboundSchema: z.ZodNativeEnum<typeof XAlign> = z
  .nativeEnum(XAlign);

/** @internal */
export const XAlign$outboundSchema: z.ZodNativeEnum<typeof XAlign> =
  XAlign$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace XAlign$ {
  /** @deprecated use `XAlign$inboundSchema` instead. */
  export const inboundSchema = XAlign$inboundSchema;
  /** @deprecated use `XAlign$outboundSchema` instead. */
  export const outboundSchema = XAlign$outboundSchema;
}

/** @internal */
export const YAlign$inboundSchema: z.ZodNativeEnum<typeof YAlign> = z
  .nativeEnum(YAlign);

/** @internal */
export const YAlign$outboundSchema: z.ZodNativeEnum<typeof YAlign> =
  YAlign$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace YAlign$ {
  /** @deprecated use `YAlign$inboundSchema` instead. */
  export const inboundSchema = YAlign$inboundSchema;
  /** @deprecated use `YAlign$outboundSchema` instead. */
  export const outboundSchema = YAlign$outboundSchema;
}

/** @internal */
export const Placement$inboundSchema: z.ZodType<
  Placement,
  z.ZodTypeDef,
  unknown
> = z.object({
  xAlign: XAlign$inboundSchema.optional(),
  xMargin: z.string().optional(),
  yAlign: YAlign$inboundSchema.optional(),
  yMargin: z.string().optional(),
});

/** @internal */
export type Placement$Outbound = {
  xAlign?: string | undefined;
  xMargin?: string | undefined;
  yAlign?: string | undefined;
  yMargin?: string | undefined;
};

/** @internal */
export const Placement$outboundSchema: z.ZodType<
  Placement$Outbound,
  z.ZodTypeDef,
  Placement
> = z.object({
  xAlign: XAlign$outboundSchema.optional(),
  xMargin: z.string().optional(),
  yAlign: YAlign$outboundSchema.optional(),
  yMargin: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Placement$ {
  /** @deprecated use `Placement$inboundSchema` instead. */
  export const inboundSchema = Placement$inboundSchema;
  /** @deprecated use `Placement$outboundSchema` instead. */
  export const outboundSchema = Placement$outboundSchema;
  /** @deprecated use `Placement$Outbound` instead. */
  export type Outbound = Placement$Outbound;
}

export function placementToJSON(placement: Placement): string {
  return JSON.stringify(Placement$outboundSchema.parse(placement));
}

export function placementFromJSON(
  jsonString: string,
): SafeParseResult<Placement, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Placement$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Placement' from JSON`,
  );
}

/** @internal */
export const WatermarkInput$inboundSchema: z.ZodType<
  WatermarkInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: WatermarkInputType$inboundSchema.optional(),
  url: z.string().optional(),
  placement: z.lazy(() => Placement$inboundSchema).optional(),
  width: z.string().optional(),
  height: z.string().optional(),
  opacity: z.string().optional(),
});

/** @internal */
export type WatermarkInput$Outbound = {
  type?: string | undefined;
  url?: string | undefined;
  placement?: Placement$Outbound | undefined;
  width?: string | undefined;
  height?: string | undefined;
  opacity?: string | undefined;
};

/** @internal */
export const WatermarkInput$outboundSchema: z.ZodType<
  WatermarkInput$Outbound,
  z.ZodTypeDef,
  WatermarkInput
> = z.object({
  type: WatermarkInputType$outboundSchema.optional(),
  url: z.string().optional(),
  placement: z.lazy(() => Placement$outboundSchema).optional(),
  width: z.string().optional(),
  height: z.string().optional(),
  opacity: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WatermarkInput$ {
  /** @deprecated use `WatermarkInput$inboundSchema` instead. */
  export const inboundSchema = WatermarkInput$inboundSchema;
  /** @deprecated use `WatermarkInput$outboundSchema` instead. */
  export const outboundSchema = WatermarkInput$outboundSchema;
  /** @deprecated use `WatermarkInput$Outbound` instead. */
  export type Outbound = WatermarkInput$Outbound;
}

export function watermarkInputToJSON(watermarkInput: WatermarkInput): string {
  return JSON.stringify(WatermarkInput$outboundSchema.parse(watermarkInput));
}

export function watermarkInputFromJSON(
  jsonString: string,
): SafeParseResult<WatermarkInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WatermarkInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WatermarkInput' from JSON`,
  );
}
