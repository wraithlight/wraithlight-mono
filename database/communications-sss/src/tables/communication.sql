CREATE TABLE `Communication` (
    `Id` VARCHAR(36) NOT NULL,
    `ProxyId` VARCHAR(36) NOT NULL,
    `RecipientIdentifier` VARCHAR(100) NOT NULL,
    `Content` TEXT NOT NULL,
    `ApplicationLink` TEXT NOT NULL,
    `Status` TEXT NOT NULL,
    `ErrorMessage` TEXT NULL,
    `ReceviedAtUtc` DATETIME NOT NULL,
    `LastUpdatedAtUtc` DATETIME NULL,
    `SentAtUtc` DATETIME NULL,
    PRIMARY KEY (`Id`)
) ENGINE = MyISAM DEFAULT CHARSET=utf8;
