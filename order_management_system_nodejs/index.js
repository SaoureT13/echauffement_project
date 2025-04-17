const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const customerRouter = require("./routes/customerRoutes");
const orderRouter = require("./routes/orderRoutes");
const productRouter = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("API LAUCH");
});

app.use("/api/customers", customerRouter);
app.use("/api/orders", orderRouter);
app.use("/api/products", productRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "192.168.252.22", () => {
    console.log(`SERVER LAUNCHED ON PORT ${PORT}`);
});
