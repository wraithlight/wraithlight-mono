CREATE TABLE `Content` (
    `Id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Key` VARCHAR(64) NOT NULL,
    `Value` TEXT NOT NULL,
    `ApplicationId` VARCHAR(36) NOT NULL,
    `LanguageId` VARCHAR(36) NOT NULL,
    `Type` TINYINT(4) UNSIGNED NOT NULL,
    `IsActive` BOOLEAN NOT NULL,
    PRIMARY KEY (`Id`)
) ENGINE = MyISAM DEFAULT CHARSET=utf8;
