import { ApplicationStatic, EnvironmentStatic } from "../_internal";

import { ServerStatic } from "./server-static.model";

export interface EnvironmentStaticServer extends ApplicationStatic<EnvironmentStatic<ServerStatic>> { }
