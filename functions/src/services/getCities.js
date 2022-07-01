import connectDb from "../gateway/connectDb.js";

export const addCity = async (req, res) => {
  if (!req.body || !req.body.name || !req.body.population) {
    res.status(401).send("Invalid request");
    return;
  }

  const db = connectDb();// getting the data base

  const newCity = {
    name: req.body.name,
    state: req.body.state,
    population: req.body.population,
  };
  try {
    const doc = await db.collection("cities").add(newCity);
    res.status(201).send("City created" + doc.id);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllCities = async (req, res) => {
  const db = connectDb();

  try {
    const snapshot = await db.collection("cities").get();// this give you all the document
    const citiesArray = snapshot.docs.map((doc) => { // snapshot take a picture of the all  docs in database// .map apply whaterver function you give it its returns s new array 
      let city = doc.data();  // this is an object returned
      city.id = doc.id;      // add id to city which is in the object
      return city;          // return city
    });
    res.send(citiesArray);
  } catch (error) {
    res.status(500).send(error);
  }
};
