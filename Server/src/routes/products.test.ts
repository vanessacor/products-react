import { app, serverClose, serverStart } from "../server";
import request from "supertest";
import { products } from "../mock-data";

describe("Products Routes", () => {
  beforeAll(async () => {
    await serverStart();
  });
  afterAll(async () => {
    await serverClose();
  });
  describe("GET /api/products", () => {
    it("should return the list of products", async () => {
      const res = await request(app).get("/api/products");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(products);
    });
  });
  describe("GET /api/products/:id", () => {
    it("should return a single product", async () => {
      const expectedResult = products[0];
      const res = await request(app).get(`/api/products/${expectedResult.id}`);
      expect(res.body).toEqual(products[0]);
    });
    it("return 404 if id does not exist", async () => {
      const res = await request(app).get("/api/products/fooo");
      expect(res.status).toEqual(404);
    });
  });
  describe("POST /api/products/", () => {
    it("should return 201 if product is save correctly", async () => {
      const newProduct = {
        title: "Title test",
        price: 200,
        description: "description test",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/test.jpg",
        rating: {
          rate: 4,
          count: 200,
        },
      };
      const res = await request(app).post("/api/products/").send(newProduct);
      expect(res.status).toEqual(201);
    });
    it("should return the new product with an id", async () => {
      const newProduct = {
        title: "Title test",
        price: 200,
        description: "description test",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/test.jpg",
        rating: {
          rate: 4,
          count: 200,
        },
      };

      const res = await request(app).post("/api/products/").send(newProduct);
      expect(res.body).toHaveProperty("id");
    });
    // need to implement validation
  });
  describe("PUT /api/products/:id", () => {
    it("should return an 200 if id exists", async () => {
      const newProduct = {
        id: "1",
        title: "Title test",
        price: 200,
        description: "description test",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/test.jpg",
        rating: {
          rate: 4,
          count: 200,
        },
      };
      const res = await request(app).put("/api/products/1").send(newProduct);
      expect(res.status).toEqual(200);
    });
  });
});
