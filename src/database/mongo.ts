import env from "../environments";
import sampleModel from "../models/sample.model";

export const mongoOptions = {
  connectionString: env.mongo_conn,
  name: "main",
  options: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  },
  schemas: [sampleModel],
};
