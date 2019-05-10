'use strict';
module.exports = (sequelize, DataTypes) => {
  const Issues = sequelize.define('Issues', {
    issueType: {
      type: DataTypes.STRING,
      allowNull: false,
  },
// Future issue attribute.  
//   comment: {
//       type: DataTypes.STRING,
//       allowNull: true,
//       validate: {
//           // comment must be at least one character long to prevent blank comments
//           len: [1]
//       }
//   },
  lat: {
      type: DataTypes.DECIMAL(10,8),
      allowNull: true,
      defaultValue: null,
      validate: {
          min: -90, max: 90
      }
  },
  lon: {
      type: DataTypes.DECIMAL(11,8),
      allowNull: true,
      defaultValue: null,
      validate: {
          min: -180, max: 180
      }
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    }
  }
}, 
);
//   Issues.associate = function(models) {
//     // associations can be defined here
//     Issues.belongsTo(models.Users, {
      
//     })
//   };
  return Issues;
};