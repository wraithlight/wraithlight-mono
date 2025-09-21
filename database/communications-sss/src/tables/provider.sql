CREATE TABLE `Provider` (
    `Id` VARCHAR(36) NOT NULL,
    `Label` TEXT NOT NULL,
    `Config` TEXT NOT NULL,
    `LastUpdatedAtUtc` DATETIME NULL,
    `IsActive` BIT NOT NULL,
    PRIMARY KEY (`Id`)
) ENGINE = MyISAM DEFAULT CHARSET=utf8;
