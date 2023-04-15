CREATE TABLE `Content` (
    `Id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `ApplicationId` VARCHAR(36) NOT NULL,
    `Value` VARCHAR(MAX) NOT NULL,
    `LanguageId` VARCHAR(36) NOT NULL,
    `Type` TINYINT(4) UNSIGNED NOT NULL,
    `IsActive` BIT NOT NULL,
    PRIMARY KEY (`Id`)
) ENGINE = MyISAM DEFAULT CHARSET=utf8;
