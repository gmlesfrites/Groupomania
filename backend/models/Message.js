'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // association de Message avec User
      models.Message.belongsTo(models.User, {
        foreignKey : {
          allowNull : false
        }
      })
    }
  };
  Message.init({
    iduser: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    multimedia: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};