import res from "express/lib/response";
import request from "supertest";

import app from "../../../index.js";

import mongooseConnect from "../../../src/database/mongooseConnect.js";

describe("testing signUp apis", () => {
  const path = "/api/v1/auth/signup";
  let signUpBody = {};
  let header = {};

  beforeAll(async () => {
    await mongooseConnect();
  });

  beforeEach(async () => {
    signUpBody = {
      userType: "interviewer",
      fname: "firstname",
      lname: "lastname",
      password: "sandeep123",
      signupType: "incruiter",
      email: "sandeepdiv9000@test.com",
    }
    header = { "Content-Type": "application/json" };
  });

  // test("400 bad request when usertype is missing", async () => {
  //   delete signUpBody  .userType;
  //   const response = await request(app).post(path).send(signUpBody).set(header);
  //   expect(response.status).toEqual(400);
  //   expect(response.body.message).toEqual("\"userType\" is required");
  // })

  // test("400 bad request when usertype is invalid", async () => {
  //   signUpBody.userType = "wrong usertype";
  //   const response = await request(app).post(path).send(signUpBody).set(header);
  //   expect(response.status).toEqual(400);
  //   expect(response.body.message).toEqual("\"userType\" must be one of [employer, interviewer, recruiter, subemployer]");
  // })

  // test("400 bad request when sign-up type is missing", async () => {
  //   delete signUpBody.signupType
  //   const response = await request(app).post(path).send(signUpBody).set(header);
  //   expect(response.status).toEqual(400);
  //   expect(response.body.message).toEqual("\"signupType\" is required");
  // })

  // test("400 bad request when sign-up type is invalid", async () => {
  //   signUpBody.signupType = "wrong signup type";
  //   const response = await request(app).post(path).send(signUpBody).set(header);
  //   expect(response.status).toEqual(400);
  //   expect(response.body.message).toEqual("\"signupType\" must be one of [google, linkedin, incruiter]");
  // })

  // test("400 bad request when firstname field is missing", async () => {
  //   delete signUpBody.fname;
  //   const response = await request(app).post(path).send(signUpBody).set(header);
  //   expect(response.status).toEqual(400);
  //   expect(response.body.message).toEqual("\"fname\" is required");
  // })

  // test("400 bad request when lastname field is missing", async () => {
  //   delete signUpBody.lname;
  //   const response = await request(app).post(path).send(signUpBody).set(header);
  //   expect(response.status).toEqual(400);
  //   expect(response.body.message).toEqual("\"lname\" is required");
  // })

  // test("400 bad request when password field is missing", async () => {
  //   delete signUpBody.password;
  //   const response = await request(app).post(path).send(signUpBody).set(header);
  //   expect(response.status).toEqual(400);
  //   expect(response.body.message).toEqual("\"password\" is required");
  // })

  // test("400 bad request when emailId field is missing", async () => {
  //   delete signUpBody.email;
  //   const response = await request(app).post(path).send(signUpBody).set(header);
  //   expect(response.status).toEqual(400);
  //   expect(response.body.message).toEqual("\"email\" is required");
  // })


  // test("success response 201 after signup", async () => {
  //   signUpBody.email += "nm";
  //   const response = await request(app).post(path).send(signUpBody).set(header);
  //   expect(response.status).toEqual(201);
  //   // eslint-disable-next-line no-underscore-dangle
  //   expect(response.body.result._id.length).toEqual(24);
  //   expect(response.body.result.email).toEqual(signUpBody.email);
  // })






});
