import { SessionPayload } from "@wraithlight/core.auth.types";

import { BaseResponse } from "./internal";

export interface LoginResponse extends BaseResponse<SessionPayload> { }
