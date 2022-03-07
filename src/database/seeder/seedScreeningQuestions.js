import ScreeningQuestionModel from "../../mongo-schemas/ScreeningQuestion.js";

const seedScreeningQuestions = async () => {

  const data = [
    new ScreeningQuestionModel({
      question: "this is first screening question",
    }),
    new ScreeningQuestionModel({
      question: "this is second screening question",
    }),
    new ScreeningQuestionModel({
      question: "this is third screening question",
    }),
  ]

  await ScreeningQuestionModel.insertMany(data);
  console.log("seeded screening questions");
}

export default seedScreeningQuestions;