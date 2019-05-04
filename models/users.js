'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    //TODO: add in email(with sequelize validation)
    firstname: {
			type: DataTypes.STRING,
            allowNull: false,
            // hard coding in 'Thomas' for folks who want to continue on as a guest without creating an account
            defaultValue: 'Thomas',
			validate: {
                //firstname must be at least 1 character long
				len: [1]
			}
    },
    lastname: {
			type: DataTypes.STRING,
            allowNull: false,
            // hard coding in 'Paine' for folks who want to continue on as a guest without creating an account
            defaultValue: 'Paine',
			validate: {
                //lastname must be at least 5 character long
				len: [1]
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

  // Users.associate = function(models) {
  //   // associations can be defined here
  //   Users.hasMany(models.Issues, {
  //     // foreignKey: 'userId',
  //     as: 'issues',
  //     onDelete: "cascade"
  //   });

  // };
  return Users;
};