import { DatabaseServer } from "../_internal";

import { SmtpServer } from "./_internal";

export interface NotifierServer {
    database: DatabaseServer;
    emailSending: {
        /**
         * @deprecated Use `smtp` instead.
         */
        smpt: SmtpServer;
        smtp?: SmtpServer;
        fromAddress: string
    }
}
