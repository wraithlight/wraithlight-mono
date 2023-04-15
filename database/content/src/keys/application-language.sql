ALTER TABLE ApplicationLanguage ADD CONSTRAINT FK_ApplicationLanguage_Application FOREIGN KEY (ApplicationId) REFERENCES Application(Id);
ALTER TABLE ApplicationLanguage ADD CONSTRAINT FK_ApplicationLanguage_Language FOREIGN KEY (LanguageId) REFERENCES Language(Id);
