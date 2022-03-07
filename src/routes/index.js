import express from "express";

import authRoutesIns from "./AuthRoutes.js";

import userRoutesIns from "./UserRoutes.js";

import productRoutesIns from "./ProductRoutes.js";

import planRoutesIns from "./PlanRoutes.js";

import masterRoutesIns from "./MasterRoutes.js";

import employerRoutesIns from "./EmployerRoutes.js";

import positionRoutesIns from "./PositionRoutes.js";

export default () => {
  const router = express.Router();
  router.use("/v1/auth", authRoutesIns.setRoutes());
  router.use("/v1/users", userRoutesIns.setRoutes());
  router.use("/v1/products", productRoutesIns.setRoutes());
  router.use("/v1/plans", planRoutesIns.setRoutes());
  router.use("/v1/masters", masterRoutesIns.setRoutes());
  router.use("/v1/employer", employerRoutesIns.setRoutes());
  router.use("/v1/positions", positionRoutesIns.setRoutes());
  return router;
};