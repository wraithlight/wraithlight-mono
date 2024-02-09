CREATE TABLE `Application` (
    `Id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Application` TEXT NOT NULL,
    `Description` TEXT NOT NULL,
    `IsActive` BIT NOT NULL,
    `CreatedAt` DATETIME NOT NULL,
    `CreatedBy` VARCHAR(36) NOT NULL,
    PRIMARY KEY (`Id`)
) ENGINE = MyISAM DEFAULT CHARSET=utf8;
