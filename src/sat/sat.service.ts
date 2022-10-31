import { Inject, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { EmittedMessage, GCPubSub } from "@algoan/pubsub";
import { DataPayload } from "../types/sat/sat";


@Injectable()
export class SatService {
    constructor(
        @Inject("PUBSUB") private readonly pubsub: GCPubSub,
        private readonly httpService: HttpService,
    ) {
    }

    async onApplicationBootstrap() {
        const topicName = "sat-it";
        await this.listenMessage(topicName, async data => await this.sendToSatMessage(data));
        await this.publishMessage(topicName, { message: "Pow!!!" });
    }

    private filter = (data: EmittedMessage<DataPayload>) => {
        return {
            payload: data.payload,
        };
    };

    private async listenMessage(topicName: string, onMessage: (data: EmittedMessage<DataPayload>) => Promise<void>): Promise<void> {
        await this.pubsub.listen(topicName, {
            onMessage,
            onError: (error: Error) => {
                console.error(`Listening on ${topicName} error: \n${error}`);
            },

        });
    }

    private async publishMessage(topicName: string, data: DataPayload): Promise<void> {
        try {
            await this.pubsub.emit(topicName, data,);
        } catch (error) {
            console.error(`Publish message error: \n${error}`);
        }
    }

    private async sendToSatMessage(data: EmittedMessage<DataPayload>): Promise<void> {
        const payload = this.filter(data);
        console.log(data.payload);
        try {
            await this.httpService.axiosRef.post("https://softwareangels.pl/", payload);
        } catch (error) {
            console.error(`Send to sat catch error:\n${error}`);
        }
    }
}
