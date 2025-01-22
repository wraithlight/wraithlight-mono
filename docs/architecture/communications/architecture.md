## Communications subsystem
This file contains the architecture of the communications subsystem.

This subsystem contains the following services:
* `NotifierProxy`
* `EmailSenderService`
* `SmsSenderService`
* `PushSenderService`
* `RealtimeService`

### Description of the services
This section contains the high level description of microservices of this particular domain.

#### NotifierProxy
This is the main entry point of the domain. The other microservices out of the comms domain will call this, then this microservice sends the request to the proper microservice.
Each request is being logged into database level.

#### EmailSenderService
This microservice sends the email to the given email address. This microservice is not callable directly, only through the `NotifierProxy` service.

#### SmsSenderService
This microservice sends the SMS to the given phone number. This microservice is not callable directly, only through the `NotifierProxy` service.

#### PushSenderService
This microservice sends the push notification to the given mobile device. This microservice is not callable directly, only through the `NotifierProxy` service.

#### RealtimeService
This is a front-facing microservice accessible throught WebSocket connection from both client and backend side, and through message queue (Kafka) from backend services.
The basic way-of-working of this microservice is to receive a message throught MQ then send the payload throught WS.
