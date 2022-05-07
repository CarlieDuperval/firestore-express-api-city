import functions from "firebase-functions";
import express from "express";

import { addCity, getAllCities } from "./getCities.js";

const app = express();
app.use(express.json());

// routes
app.get("/cities", getAllCities);

app.post("/cities", addCity);

export const api = functions.https.onRequest(app);


