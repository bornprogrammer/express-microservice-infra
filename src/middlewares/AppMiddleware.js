import cors from "cors";

import bodyParser from "body-parser";

const appMiddleware = ({ app, router }) => {

  app.use(cors());

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use("/api", router);

}

export default appMiddleware;