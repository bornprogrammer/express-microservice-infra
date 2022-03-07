import DomainModel from "../../mongo-schemas/Domain.js";

const seedDomain = async () => {

  const data = [
    new DomainModel({
      name: "IT & Software",
    }),
    new DomainModel({
      name: "Hardware",
    }),
    new DomainModel({
      name: "Accounting",
    }),
  ]

  await DomainModel.insertMany(data);
  console.log("seeded domain");
}

export default seedDomain;