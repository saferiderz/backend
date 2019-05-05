'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    //TODO: add in first name, lastname, and email(with sequelize validation)
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //username must be at least 5 character long
        len: [5]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //password must be at least 8 characters long
        len: [8]
      }
    }

  });

  Users.associate = function(models) {
    // associations can be defined here
    Users.hasMany(models.Issues, {
      // foreignKey: 'userId',
      as: 'issues',
      onDelete: "cascade"
    });

  };
  return Users;
};