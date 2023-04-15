ALTER TABLE Content ADD CONSTRAINT FK_Content_Application FOREIGN KEY (ApplicationId) REFERENCES Application(Id);
ALTER TABLE Content ADD CONSTRAINT FK_Content_Language FOREIGN KEY (LanguageId) REFERENCES Language(Id);
