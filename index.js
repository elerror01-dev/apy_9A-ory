import express from "express";
<<<<<<< HEAD
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import { cards } from "./models/cards.js";

=======
import { connectDB } from "./bd.js";
import { Card } from "./models/Card.js";
import dotenv from "dotenv";
>>>>>>> 865740626c1d1140842df22fbb655fb13b0aa90d
dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.post("/createCard", async (req, res) => {
  try {
<<<<<<< HEAD
    const card = await cards.create(req.body);
    res.status(201).json({
      message: "Card created successfully!",
      data: card,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/addCard", async (req, res) => {
  try {
    const newCard = new cards(req.body);
    await newCard.save();
    res.status(201).json({
      message: "Card added successfully!",
      data: newCard,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/getAllCards", async (req, res) => {
  try {
    const data = await cards.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/getCard/:id", async (req, res) => {
  try {
    const cardData = await cards.findById(req.params.id);
    if (!cardData) return res.status(404).send("Card not found");
    res.status(200).json(cardData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/deleteCard/:id", async (req, res) => {
  try {
    const deletedCard = await cards.findByIdAndDelete(req.params.id);
    if (!deletedCard) return res.status(404).send("Card not found");
    res.status(200).send("Card deleted successfully!");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put("/updateCard/:id", async (req, res) => {
  try {
    const updatedCard = await cards.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      overwrite: true,
    });
    if (!updatedCard) return res.status(404).send("Card not found");
    res.status(200).json({
      message: "Card updated (PUT) successfully!",
      data: updatedCard,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.patch("/updateCard/:id", async (req, res) => {
  try {
    const updatedCard = await cards.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedCard) return res.status(404).send("Card not found");
    res.status(200).json({
      message: "Card updated (PATCH) successfully!",
      data: updatedCard,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/review", (req, res) => {
  const endpoints = `
GemPoints API Endpoints:
-------------------------------------
POST   /createCard
POST   /addCard
GET    /getAllCards
GET    /getCard/:id
PUT    /updateCard/:id
PATCH  /updateCard/:id
DELETE /deleteCard/:id
GET    /review
-------------------------------------
`;
  res.type("text/plain").send(endpoints);
});

app.get("/hola", (req, res) => res.status(200).send("Hello world from the server!"));
app.get("/adios", (req, res) => res.status(200).send("Goodbye world from the server!"));
app.post("/send", (req, res) => {
  const { user, email } = req.body;
  console.log("Datos recibidos:", user, email);
  res.status(200).send("Data received successfully!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor ejecutándose en http://localhost:${PORT}`));
=======
    const card = await Card.create(req.body);
    //vamos a regresar la carta creada por mongo db
    console.log(Card);
    res.status(201).json(card).send("Card create succesfully!!");
  } catch (error) {
    res.status(400).send(error);
    console.error(error);
  }
});

//put y pathc actualizan uno es actualización completa y otro es actualización parcial
app.get("/getAllCards", async(req, res) => {
    try {
    const cards = await Card.find();
    res.status(200).json(cards);

  } catch (error){
    console.error(error)
  }
  
})

app.get("/getCard/:id", async(req, res) => {
    try {
      const id = parseInt(req.params.id);
    const cards = await Card.findById(req.params.id);
    res.status(200).json(cards);

  } catch (error){
    res.status(400).send(error);
    console.error(error);
  }
  
})

app.delete("/deleteCard/:id", async(req, res) => {
    try {
      const id = parseInt(req.params.id);
    await Card.findByIdAndDelete(req.params.id);
    res.status(200).send("Card delete successfully")

    /*if (id = null){
      res.status(400).send(error);

    }*/
  } catch (error){
    res.status(400).send(error);
    console.error(error);
  }
  
})

//Endpoint. node index.js
app.get("/hola", (req, res) => {
  res.status(200).send("Hello world from a server!!!! :0");
});

app.get("/adios", (req, res) => {
  res.status(200).send("Goodbye world from a server!!!! :0");
});

app.post("/send", (req, res) => {
  const { user, email } = req.body; //Lo estamos mandando en formato Json
  //imaginemos que agregamos unos daros a una data base
  console.log("Datos recibidos" + user + "" + email);

  res.status(200).send("Date received succesfuly :D");
});

const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});

>>>>>>> 865740626c1d1140842df22fbb655fb13b0aa90d
