import request from "supertest";

import app from "../../index.js";

import mongooseConnect from "../../src/database/mongooseConnect.js";

describe("testing auth apis", () => {
  const path = "/api/v1/auth/oauth/token";
  let loginBody = {};
  let header = {};

  beforeAll(async () => {
    await mongooseConnect();
  });

  beforeEach(async () => {
    loginBody = {
      grant_type: "password",
      scope: "profile",
      username: "sandeep@test.com",
      password: "sandeep123",
    }
    header = { "Content-Type": "application/x-www-form-urlencoded", "Authorization": "Basic ZGVtb2NsaWVudDpkZW1vY2xpZW50c2VjcmV0" };
  });

  test("success response 201 after login", async () => {
    const response = await request(app).post(path).send(loginBody).set(header);
    expect(response.status).toEqual(201);
  })

  test("400 bad request when grant_type is missing", async () => {
    delete loginBody.grant_type;
    const response = await request(app).post(path).send(loginBody).set(header);
    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual("Missing parameter: `grant_type`");
  })

  test("400 bad request when grant_type is invalid", async () => {
    loginBody.grant_type = "wrong-vlaue";
    const response = await request(app).post(path).send(loginBody).set(header);
    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual("Unsupported grant type: `grant_type` is invalid");
  })

})
