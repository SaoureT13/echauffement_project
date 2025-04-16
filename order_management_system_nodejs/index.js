const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const customerRouter = require("./routes/customerRoutes");
const orderRouter = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("API LAUCH");
});

app.use("/customers", customerRouter);
app.use("/orders", orderRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`SERVER LAUNCHED ON PORT ${PORT}`);
});
