-- WEBSITE
INSERT INTO `Logs` (
    `Severity`,
    `Application`,
    `Message`,
    `LogDate`
) VALUES (
    "INFO",
    "LogsDatabase",
    "Database is up!",
    UTC_TIMESTAMP()
);
