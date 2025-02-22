CREATE TABLE `User` (
    `Id` VARCHAR(36) NOT NULL,
    `EmailAddress` VARCHAR(100) NOT NULL,
    `Username` VARCHAR(100) NOT NULL,
    `UserStatus` VARCHAR(32) NOT NULL,
    `PasswordHash` VARCHAR(128) NOT NULL,
    `PasswordSalt` VARCHAR(128) NOT NULL,
    `FailedLoginAttempts` TINYINT(3) UNSIGNED NOT NULL,
    `CreatedAtUtc` DATETIME NOT NULL,
    `CreatedByUserId` VARCHAR(36) NOT NULL,
    `UpdatedAtUtc` DATETIME NULL,
    `UpdatedByUserId` VARCHAR(36) NULL,
    `LanguageId` VARCHAR(36) NULL,
    `IsDeleted` BOOLEAN NOT NULL,
    PRIMARY KEY (`Id`)
) ENGINE = MyISAM DEFAULT CHARSET=utf8;
