export interface SmtpServer {
    host: string;
    port: number;
    secure: boolean;
    auth: SmtpServerAuth
}

export interface SmtpServerAuth {
    user: string;
    pass: string;
}
