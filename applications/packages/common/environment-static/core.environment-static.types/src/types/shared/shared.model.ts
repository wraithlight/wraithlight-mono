import { ApplicationStatic, EnvironmentStatic } from "../_internal";

import { SharedStatic } from "./shared-static.model";

export interface EnvironmentStaticShared extends ApplicationStatic<EnvironmentStatic<SharedStatic>> { }
