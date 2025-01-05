-- Root admin
INSERT INTO `User` (
    `Id`,
    `Username`,
    `EmailAddress`,
    `PasswordHash`,
    `PasswordSalt`,
    `FailedLoginAttempts`,
    `UserStatus`,
    `CreatedAtUtc`,
    `CreatedByUserId`,
    `LanguageId`,
    `IsDeleted`
) VALUES (
    "7777ba27-da56-4ddd-ae97-f38a1e48effa",
    "root",
    "root@wraithlight.ai",
    -- Password1
    "$2a$12$JB/VIMi29z/s4IcGgEbwc.tvP8ynlxvq0jwIEYwBkPtolnTsDx1oS",
    "",
    0,
    "ACTIVE",
    NOW(),
    "7777ba27-da56-4ddd-ae97-f38a1e48effa",
    "7655c0c5-c14b-4ebe-bf4a-d67efa2fe4b1",
    0
);

-- Platform deployer svc user
INSERT INTO `User` (
    `Id`,
    `Username`,
    `EmailAddress`,
    `PasswordHash`,
    `PasswordSalt`,
    `FailedLoginAttempts`,
    `UserStatus`,
    `CreatedAtUtc`,
    `CreatedByUserId`,
    `LanguageId`,
    `IsDeleted`
) VALUES (
    "3f0e995e-6bcc-71f9-9d17-5e82c7c84301",
    "platform_deployer_svc",
    "platform_deployer_svc@wraithlight.ai",
    -- Password2
    "$2a$12$9Wg1tYiXthR0r4C/GvtZQeOFebdS4cUXUCfVNzNwV29B7..bt/5oa",
    "",
    0,
    "INACTIVE",
    NOW(),
    "7777ba27-da56-4ddd-ae97-f38a1e48effa",
    "b6d2118f-1fca-4485-b61f-82a6538e8144",
    1
);

-- Platform onboarding svc user
INSERT INTO `User` (
    `Id`,
    `Username`,
    `EmailAddress`,
    `PasswordHash`,
    `PasswordSalt`,
    `FailedLoginAttempts`,
    `UserStatus`,
    `CreatedAtUtc`,
    `CreatedByUserId`,
    `LanguageId`,
    `IsDeleted`
) VALUES (
  "ebe313ba-47e9-68df-978e-0d6a0ef34c6b",
  "platform_onboarding_svc",
  "platform_onboarding_svc@wraithlight.ai",
  -- Password3
  "$2a$12$ltewtJti8BlGfXg.sb5eFOCJdWSpcY4TzvMXWThDEPXOBZayCrANa",
  "",
  0,
  "INACTIVE",
  NOW(),
  "7777ba27-da56-4ddd-ae97-f38a1e48effa",
  "3c392ece-4dd8-21ba-8b1b-e16a347aba71",
  1
);
