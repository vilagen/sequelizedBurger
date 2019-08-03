module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
      burger_name: DataTypes.STRING,
      devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
      createdAt: sequelize.DATE,
      updatedAt: sequelize.DATE,
    });
    return Burger;
  };
  