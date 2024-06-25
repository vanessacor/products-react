// import { app, serverClose, serverStart } from "../server";
// import request from "supertest";

// describe("Home Route", () => {
//   beforeAll(async () => {
//     await serverStart();
//   });
//   afterAll(async () => {
//     await serverClose();
//   });
//   it("should return status code 200", async () => {
//     const res = await request(app).get("/");
//     expect(res.statusCode).toEqual(200);
//   });
//   it("should return the correct message", async () => {
//     const res = await request(app).get("/");
//     expect(res.text).toEqual("Hello world");
//   });
// });

import { app, serverClose, serverStart } from "../server";
import request from "supertest";

describe("Home Route", () => {
  beforeAll(async () => {
    await serverStart();
    console.log("SSSStarted");
  });
  afterAll(async () => {
    await serverClose();
  });
  it("should return status code 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });
  it("should return the correct message", async () => {
    const res = await request(app).get("/");
    expect(res.text).toEqual("Hello world");
  });
});
