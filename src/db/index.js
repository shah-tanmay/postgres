const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URL);

const connectDB = async () => {
	try {
		await sequelize.authenticate();
		console.log("DB connection established successfully");
		const Book = require("../models/book");
		await Book.sync({ force: false });
	} catch (e) {
		console.log(e);
	}
};

connectDB();

module.exports = sequelize;
