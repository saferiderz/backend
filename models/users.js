'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    //TODO: add in first name, lastname, and email(with sequelize validation)
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      // hard coding in 'anonymousUser' for folks who want to continue on as a guest without creating an account
      defaultValue: 'anonymousFirstName'
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      // hard coding in 'anonymousUser' for folks who want to continue on as a guest without creating an account
      defaultValue: 'anonymousLastName'
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
      // hard coding in 'anonymousUser' for folks who want to continue on as a guest without creating an account
      defaultValue: 'anonymousUser',
      validate: {
        //username must be at least 5 character long
        len: [5]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // hard coding anonymousUserPassword for folks who want to coninue on as a guest without creating an account
      defaultValue: 'anonymousUserPassword',
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