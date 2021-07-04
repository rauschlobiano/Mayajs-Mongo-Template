import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { MayaJsContext } from "@mayajs/router";
import { Controller } from "@mayajs/core";
import { SampleServices } from "./sample.service";

@Controller()
export class SampleController {
  constructor(private services: SampleServices) {}

  @Post()
  async createSample({ body }: MayaJsContext): Promise<any> {
    // Create a Sample
    return { message: "From SampleController POST route", body };
  }

  @Get()
  async readSample(): Promise<any> {
    // Read all Sample list
    return { message: "From SampleController GET route" };
  }

  @Get("/:id")
  async readSampleByID({ params }: MayaJsContext): Promise<any> {
    // Read Sample by ID from list
    return { message: "From SampleController GET route with params ID", params };
  }

  @Put("/:id")
  async replaceSample({ body, params }: MayaJsContext): Promise<any> {
    // Replace Sample from list
    return { message: "From SampleController PUT route", body, params };
  }

  @Patch("/:id")
  async updateSample({ body, params }: MayaJsContext): Promise<any> {
    // Update Sample from list
    return { message: "From SampleController PATCH route", body, params };
  }

  @Delete("/:id")
  async deleteSample({ params }: MayaJsContext): Promise<any> {
    // Delete Sample from list
    return { message: "From SampleController DELETE route", params };
  }
}
