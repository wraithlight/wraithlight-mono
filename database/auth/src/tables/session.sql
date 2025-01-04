CREATE TABLE `Session` (
    `Id` VARCHAR(36) NOT NULL,
    `UserId` VARCHAR(36) NOT NULL,
    `ScopeId` VARCHAR(36) NOT NULL,
    `Token` VARCHAR(100) NOT NULL,
    `RefreshToken` VARCHAR(100) NOT NULL,
    `TokenValidFromUtc` DATETIME NOT NULL,
    `TokenValidUntilUtc` DATETIME NOT NULL,
    `RefreshTokenValidFromUtc` DATETIME NOT NULL,
    `RefreshTokenValidUntilUtc` DATETIME NOT NULL,
    `CreatedAtUtc` DATETIME NOT NULL,
    `CreatedByUserId` VARCHAR(36) NOT NULL,
    `UpdatedAtUtc` DATETIME NULL,
    `UpdatedByUserId` VARCHAR(36) NULL,
    `IsDeleted` BIT NOT NULL,
    PRIMARY KEY (`Id`)
) ENGINE = MyISAM DEFAULT CHARSET=utf8;
