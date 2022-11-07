/**imports */
const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors')
const { advisorRouter } = require("./src/routes/advisorRouter");
const { partnerRouter } = require("./src/routes/partnerRouter");
const { authRouter } = require("./src/routes/authRouter");


const app = express();

/**config */
const PORT = process.env.PORT || 3000;
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/advisors",advisorRouter);
app.use("/partners",partnerRouter);
app.use("/auth",authRouter);


app.get("/", (req, res, next) => {
  res.send("Welcome page...");
});

app.listen(PORT, () => {
    console.log("Server is running..");
});
  