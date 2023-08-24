import { DatabaseServer } from "../_internal";

import { SmtpServer } from "./_internal";

export interface NotifierServer {
    database: DatabaseServer;
    emailSending: {
        smpt: SmtpServer;
        fromAddress: string
    }
}
