CREATE TABLE `Communication` (
    `Id` VARCHAR(36) NOT NULL,
    `ProxyId` VARCHAR(36) NOT NULL,
    `RecipientIdentifier` VARCHAR(100) NOT NULL,
    `Content` TEXT NOT NULL,
    `Subject` TEXT NOT NULL,
    `SenderEmailAddress` VARCHAR(100) NOT NULL,
    `SenderName` VARCHAR(100) NOT NULL,
    `ReplyToEmailAddress` VARCHAR(100) NOT NULL,
    `ReplyToName` VARCHAR(100) NOT NULL,
    `ProviderId` VARCHAR(256) NULL,
    `Status` TEXT NOT NULL,
    `ErrorMessage` TEXT NULL,
    `ReceviedAtUtc` DATETIME NOT NULL,
    `LastUpdatedAtUtc` DATETIME NULL,
    `SentAtUtc` DATETIME NULL,
    PRIMARY KEY (`Id`)
) ENGINE = MyISAM DEFAULT CHARSET=utf8;
