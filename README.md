
# Nestjs-pubsub

Mini project to connect Pub/Sub google cloud using pubsub emulator in nest js.


## 🛠 Skills
Typescript.


## Tech Stack

**Server:**  
Node, \
NestJs v8.0.0 \
@algoan/pubsub v5.0.0



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PUBSUB_EMULATOR_HOST=localhost:8085`

`PUBSUB_PROJECT_ID=test`

**PUBSUB_EMULATOR_HOST - turns on emulator mode.**

## Usage

**Google Cloud PubSub**\
To run the PubSubFactory class, you need to have a google account and have installed **gcloud sdk**.

Then, to install the Google PubSub simulator, run:
```
gcloud components install pubsub-emulator
gcloud components update
```

### Start gcloud emulator:
```
 npm run start-pubsub-emulator 
 or
 gcloud beta emulators pubsub start --project=test
```
--project=pojectId

### Start nestjs application:
```
nest start
```