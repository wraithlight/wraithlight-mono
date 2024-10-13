-- Root admin
INSERT INTO `User` (
    `Id`,
    `Username`,
    `EmailAddress`,
    `PasswordHash`,
    `LanguageId`,
    `FailedLoginAttempts`,
    `Status`,
    `IsDeleted`
) VALUES (
    "7777ba27-da56-4ddd-ae97-f38a1e48effa",
    "root",
    "root@wraithlight.ai",
    -- password: root
    -- hash: QwErT123Qw
    -- pwToHash: QwErT123QwrootwQ321TrEwQ
    "ac3b6887099db1166429578c3abbac9fe582b2b6b3ca83bc470e36776b0eeb02c21bbea150b7b49849111a0bc84ac0384f952bfa724f05a6881418a741ccfd79",
    "b6d2118f-1fca-4485-b61f-82a6538e8144", -- english
    0,
    1,
    0
);

-- Platform deployer svc user
INSERT INTO `User` (
    `Id`,
    `Username`,
    `EmailAddress`,
    `PasswordHash`,
    `LanguageId`,
    `FailedLoginAttempts`,
    `Status`,
    `IsDeleted`
) VALUES (
    "3f0e995e-6bcc-71f9-9d17-5e82c7c84301",
    "platform_deployer_svc",
    "platform_deployer_svc@wraithlight.ai",
    -- password: P4ssw0rd_1
    -- hash: QwErT123Qw
    -- pwToHash: QwErT123QwP4ssw0rd_1wQ321TrEwQ
    "$2a$12$OIbOt.PpDKdNgt4NdHAa5Op5InVxfide0T8ZHbVTHzX1A/li33sq6",
    "b6d2118f-1fca-4485-b61f-82a6538e8144", -- english
    0,
    1,
    1
);

-- Platform onboarding svc user
INSERT INTO `User` (
    `Id`,
    `Username`,
    `EmailAddress`,
    `PasswordHash`,
    `LanguageId`,
    `FailedLoginAttempts`,
    `Status`,
    `IsDeleted`
) VALUES (
    "3f0e995e-6bcc-71f9-9d17-5e82c7c84301",
    "platform_onboarding_svc",
    "platform_onboarding_svc@wraithlight.ai",
    -- password: P4ssw0rd_1
    -- hash: QwErT123Qw
    -- pwToHash: QwErT123QwP4ssw0rd_1wQ321TrEwQ
    "$2a$12$OIbOt.PpDKdNgt4NdHAa5Op5InVxfide0T8ZHbVTHzX1A/li33sq6",
    "b6d2118f-1fca-4485-b61f-82a6538e8144", -- english
    0,
    1,
    1
);
