CREATE TABLE `Language` (
    `Id` VARCHAR(36) NOT NULL,
    `DisplayName` VARCHAR(64) NOT NULL,
    `IsoCode` VARCHAR(5) NOT NULL,
    `IsActive` BIT NOT NULL,
    `LanguageCode` VARCHAR(36) NOT NULL,
    PRIMARY KEY (`Id`)
) ENGINE = MyISAM DEFAULT CHARSET=utf8;
