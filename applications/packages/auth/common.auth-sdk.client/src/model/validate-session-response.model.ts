import { SessionPayload } from "@wraithlight/core.auth.types";

import { BaseResponse } from "./internal";

export interface ValidateSessionResponse
    extends BaseResponse<SessionPayload> { }

