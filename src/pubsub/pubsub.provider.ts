import { PubSubFactory, Transport } from "@algoan/pubsub";

export const pubsubProvider = [
    {
        provide: "PUBSUB",
        useFactory: async () => PubSubFactory.create({
            transport: Transport.GOOGLE_PUBSUB,
            options: {
                projectId: process.env.PROJECT_ID,
            }
        })
    }
];