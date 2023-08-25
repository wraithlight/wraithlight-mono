CREATE TABLE `Logs` (
    `Id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `ToAddress` TEXT NOT NULL,
    `Subject` TEXT NOT NULL,
    `Content` TEXT NOT NULL,
    `IsHtml` BIT NOT NULL,
    `WebhookBaseUrl` TEXT NULL,
    `QueuedAt` DATETIME NOT NULL,
    `ProcessingStartedAt` DATETIME NULL,
    `ProcessingFinishedAt` DATETIME NULL,
    `ProcessingResult` TEXT NULL,
    `ProcessingMessage` TEXT NULL,
    PRIMARY KEY (`Id`)
) ENGINE = MyISAM DEFAULT CHARSET=utf8;
