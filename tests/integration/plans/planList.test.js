import req, { param } from "express/lib/request";
import { result } from "lodash";
import request from "supertest";

import app from "../../../index.js";

import mongooseConnect from "../../../src/database/mongooseConnect.js";

describe("testing plan apis", () => {
  let pathDetails = {}

  beforeAll(async () => {
    await mongooseConnect();
  });

  beforeEach(async () => {
    pathDetails = {
      productId: "621c65cbdcec357fad4facac",
      path: "/api/v1/plans/",
    }
  });

  test("400 bad request when product id format is invalid", async () => {
    pathDetails.productId = "invalid product id";
    pathDetails.path += pathDetails.productId;
    const response = await request(app).get(pathDetails.path);
    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual("\"productId\" must only contain alpha-numeric characters");
  })

  test("400 bad request when product id length is invalid", async () => {
    pathDetails.productId = "juus7ggh";
    pathDetails.path += pathDetails.productId;
    const response = await request(app).get(pathDetails.path);
    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual("\"productId\" length must be at least 24 characters long");
  })

  test("404 not found when product id is wrong", async () => {
    pathDetails.productId = "621c65cbdcec357fad4facaa";
    pathDetails.path += pathDetails.productId;
    const response = await request(app).get(pathDetails.path);
    expect(response.status).toEqual(404)
    expect(response.body.message).toEqual("No Record found");
  })

  test("success response 200 after inserting correct productId", async () => {
    pathDetails.path += pathDetails.productId;
    console.log(pathDetails.path);
    const response = await request(app).get(pathDetails.path);
    expect(response.status).toEqual(200);
    expect(response.body.result[0].product).toEqual(pathDetails.productId)
  })
});
