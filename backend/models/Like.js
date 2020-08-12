'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.belongsToMany(models.Message, {
        through: models.Like,
        foreignKey: 'userId',
        otherKey: 'messageId',
      });
  
      models.Message.belongsToMany(models.User, {
        through: models.Like,
        foreignKey: 'messageId',
        otherKey: 'userId',
      });
  
      models.Like.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
  
      models.Like.belongsTo(models.Message, {
        foreignKey: 'messageId',
        as: 'message',
      });// define association here
    }
  };
  like.init({
    messageId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'like',
  });
  return like;
};