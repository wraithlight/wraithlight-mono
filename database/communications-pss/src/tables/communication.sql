CREATE TABLE `Communication` (
    `Id` VARCHAR(36) NOT NULL,
    `ProxyId` VARCHAR(36) NOT NULL,
    `RecipientIdentifier` VARCHAR(100) NOT NULL,
    `Content` TEXT NOT NULL,
    `Subject` TEXT NOT NULL,
    `LogoUrl` TEXT NOT NULL,
    `ProviderId` VARCHAR(36) NOT NULL,
    `ProviderStatus` VARCHAR(64) NOT NULL,
    `ProviderIdentifier` TEXT NULL,
    `ProviderSentAt` DATETIME NULL,
    `Status` TEXT NOT NULL,
    `ApplicationLink` TEXT NOT NULL,
    `ErrorMessage` TEXT NULL,
    `ReceviedAtUtc` DATETIME NOT NULL,
    `LastUpdatedAtUtc` DATETIME NULL,
    `SentAtUtc` DATETIME NULL,
    PRIMARY KEY (`Id`)
) ENGINE = MyISAM DEFAULT CHARSET=utf8;
