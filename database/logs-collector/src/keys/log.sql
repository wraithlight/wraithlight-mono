ALTER TABLE Log ADD CONSTRAINT FK_Log_Application FOREIGN KEY (ApplicationId) REFERENCES Application(Id);
