export interface SmtpServer {
    host: string;
    port: number;
    secure: boolean;
    auth: SmtpServerAuth
}

interface SmtpServerAuth {
    user: string;
    pass: string;
}
