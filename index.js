const express = require("express");
const morgan = require("morgan");

const routing = require("./routes");
const app = express();

app.use(express.json());
app.use(morgan("common"));

routing(app);

app.listen(5000, () => {
    console.log("Backend server is running...");
});