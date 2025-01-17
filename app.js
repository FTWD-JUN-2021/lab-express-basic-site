const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.static("public"));
app.use(cors());

//Home route
app.get("/", (request, response, next) =>
  response.sendFile(__dirname + "/views/home.html")
);

//about route
app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about.html")
);

//works route
app.get("/works", (request, response, next) =>
  response.sendFile(__dirname + "/views/works.html")
);

app.get("/euros", (request, response, next) => {
  response.json([
    { Brazil: 0, Argentina: 1, Cup: "Copa America" },
    { England: 1, Italy: 2, Cup: "Euros" },
    { Italy: 3, Swiss: 1, Cup: "Euros" },
    { Germany: 3, England: 4, Cup: "Euros" },
    { Colombia: 4, Paraguay: 2, Cup: "Copa America" },
  ]);
});

app.listen(process.env.PORT || 5000);
