import { Module } from "@nestjs/common";
import { pubsubProvider } from "./pubsub.provider";

@Module({
    providers: [...pubsubProvider],
    exports: [...pubsubProvider],
})
export class PubsubModule {
}
