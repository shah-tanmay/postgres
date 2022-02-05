const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_URL);

const Book = sequelize.define(
	"Book",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timeStamp: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	},
);

module.exports = Book;
