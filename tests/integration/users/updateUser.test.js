// import { header } from "express/lib/request";
// import request from "supertest";

// import app from "../../../index.js";

// import mongooseConnect from "../../../src/database/mongooseConnect.js"


// describe("testing updateUser apis", () => {
//   let pathDetails = {};
//   let bodyData = {};
//   // eslint-disable-next-line no-shadow
//   let header = {};

//   beforeAll(async () => {
//     await mongooseConnect();
//   })

//   beforeEach(async () => {
//     pathDetails = {
//       userId: "621e4e85055407e5ae57e303",
//       path: "/api/v1/users/",
//     }
//     bodyData = {
//       fname: "update_firstname",
//       lname: "update_lastname",
//       email: "update_lastname@yahoo.com",
//       phone: "9876598765",
//       "address": {
//         "address1": "this is address 1",
//         "address2": "this is address 2",
//         "pincode": "12244",
//         "city": "ahmedabad",
//         "state": "gujarat",
//       },
//     }
//     header = { "Content-Type": "application/json" };
//   })

//   test("400 bad request when first name is missing", async () => {
//     delete bodyData.fname;
//     pathDetails.path += pathDetails.userId;
//     const response = await request(app).put(pathDetails.path).send().set(header);

//   })




// });