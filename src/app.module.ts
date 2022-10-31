import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SatModule } from "./sat/sat.module";
import { PubsubModule } from "./pubsub/pubsub.module";

@Module({
    imports: [
        ConfigModule.forRoot(
            { isGlobal: true, }
        ),
        SatModule, PubsubModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
