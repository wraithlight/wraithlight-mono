-- WEBSITE
INSERT INTO `Logs` (
    `Severity`,
    `Application`,
    `Message`,
    `LogDate`
) VALUES (
    "INF",
    "LOGS",
    "Database is up!",
    UTC_TIMESTAMP()
);
