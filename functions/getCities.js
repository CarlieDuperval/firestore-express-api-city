import connectDb from "./connectDb.js";

export const addCity = async (req, res) => {
  if (!req.body || !req.body.name || !req.body.po) {
    res.status(401).send("Invalid request");
    return;
  }
  const db = connectDb();

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
      const snapshot = await db.collection("cities").get();
      const citiesArray = snapshot.docs.map((doc) => {
        let city = doc.data();
        city.id = doc.id;
        return city;
      });
      res.send(citiesArray);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  