import request from "supertest";

import app from "../../../index.js";

import mongooseConnect from "../../../src/database/mongooseConnect.js";

describe("testing the product list apis", () => {
  let pathDetails = "";

  beforeAll(async () => {
    await mongooseConnect();
  })
  beforeEach(async () => {
    pathDetails = {
      path: "/api/v1/",
      productName: "products",
    }


  })

  test("200 success response when path is valid", async () => {
    pathDetails.path += pathDetails.productName;
    // console.log(pathDetails.path);
    const response = await request(app).get(pathDetails.path);
    expect(response.status).toEqual(200);
    // eslint-disable-next-line no-underscore-dangle
    expect(response.body.result[0]._id).toEqual("621c65cbdcec357fad4facac");
    // eslint-disable-next-line no-underscore-dangle
    expect(response.body.result[0].productFeatures[0]._id).toEqual("621c62c8dcec357fad4faca6");
    // eslint-disable-next-line no-underscore-dangle
    expect(response.body.result[0].productFeatures[1]._id).toEqual("621c6562dcec357fad4facab");
    // // eslint-disable-next-line no-underscore-dangle









  })
})



