import { Module } from "@mayajs/core";
import { RouterModule } from "@mayajs/router";
import { routes } from "./app.routing.module";
import { AppController } from "./app.controller";
import { SampleController } from "./controllers/sample/sample.controller";
import { SampleServices } from "./controllers/sample/sample.service";

@Module({
  declarations: [AppController, SampleController],
  imports: [RouterModule.forRoot(routes)],
  providers: [SampleServices],
  bootstrap: AppController,
})
export class AppModule {}
