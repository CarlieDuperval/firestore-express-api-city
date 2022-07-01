import functions from "firebase-functions";
import express from "express";  // import the framework express to make it easy to Make the API

import { addCity, getAllCities } from "./src/services/getCities.js";

const app = express();
app.use(express.json());

// routes
app.get("/cities", getAllCities);

app.post("/cities", addCity);

export const api = functions.https.onRequest(app);//  for deployment to the cloud



