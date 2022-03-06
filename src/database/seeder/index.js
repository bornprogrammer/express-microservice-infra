import config from "config";
import seedScreeningQuestions from "./seedScreeningQuestions.js";
import seedDomain from "./seedDomain.js";

const seedData = async () => {
  if (config.get("isToBeSeeded")) {
    await seedScreeningQuestions();
    await seedDomain();
  }
}

export default seedData;