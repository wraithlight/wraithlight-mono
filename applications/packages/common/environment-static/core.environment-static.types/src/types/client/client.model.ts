import { ApplicationStatic, EnvironmentStatic } from "../_internal";

import { ContentClient } from "./apps";

export interface EnvironmentStaticClient extends ApplicationStatic<
    EnvironmentStatic<ContentClient>,
> { }
