module.exports = function(sequelize, DataTypes) {
	return sequelize.define('name', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});
};