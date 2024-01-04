ALTER TABLE Token ADD CONSTRAINT FK_Token_Application FOREIGN KEY (ApplicationId) REFERENCES Application(Id);
