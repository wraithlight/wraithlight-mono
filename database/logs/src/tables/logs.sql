CREATE TABLE `Logs` (
    `Id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Severity` TEXT NOT NULL,
    `Application` TEXT NOT NULL,
    `Message` TEXT NOT NULL,
    `AdditionalFields` TEXT NULL,
    `LogDate` DATETIME NOT NULL,
    PRIMARY KEY (`Id`)
) ENGINE = MyISAM DEFAULT CHARSET=utf8;
