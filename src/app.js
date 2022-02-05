const express = require("express");
const app = express();
require("dotenv").config();
require("./db/index");
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
