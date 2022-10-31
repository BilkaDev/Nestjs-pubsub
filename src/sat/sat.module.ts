import { Module } from "@nestjs/common";
import { SatService } from "./sat.service";
import { HttpModule } from "@nestjs/axios";
import { PubsubModule } from "../pubsub/pubsub.module";

@Module({
    imports: [HttpModule, PubsubModule],
    providers: [SatService],
})
export class SatModule {
}
