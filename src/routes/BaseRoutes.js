
export default class BaseRoutes {
  router;

  constructor(express) {
    this.router = express.Router();
  }

  setRoutes() {
    // child class will implement this method for registring the routes 
  }
}