

import { FastpixError } from "./fastpixerror.js";

/** The fallback error class if no more specific error class is matched */
export class FastpixDefaultError extends FastpixError {
  constructor(
    message: string,
    httpMeta: {
      response: Response;
      request: Request;
      body: string;
    },
  ) {
    if (message) {
      message += `: `;
    }
    message += `Status ${httpMeta.response.status}`;
    const contentType = httpMeta.response.headers.get("content-type") || `""`;
    if (contentType !== "application/json") {
      message += ` Content-Type ${
        contentType.includes(" ") ? `"${contentType}"` : contentType
      }`;
    }
    const body = httpMeta.body || `""`;
    message += body.length > 100 ? "\n" : ". ";
    let bodyDisplay = body;
    if (body.length > 10000) {
      const truncated = body.substring(0, 10000);
      const remaining = body.length - 10000;
      bodyDisplay = `${truncated}...and ${remaining} more chars`;
    }
    message += `Body: ${bodyDisplay}`;
    message = message.trim();
    super(message, httpMeta);
    this.name = "FastpixDefaultError";
  }
}
