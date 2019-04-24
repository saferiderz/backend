function Users (sequelize, DataTypes) {
	let Users = sequelize.define("Users", {
		// Giving the users model a name of type STRING
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

	Users.associate = function (models) {
		// Associating issues with users
		// When a user is deleted, also delete any associated issues
		Users.hasMany(models.Issues, {
			onDelete: "cascade"
		});
	};

	return Users;
};

export default Users;
