// PASSPORT: This is the user model for Passport Authentication.  You can tighten up the validation if needed.
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uID: {
        type: DataTypes.STRING,
        notEmpty: true
      },
      firstname: {
        type: DataTypes.STRING,
        notEmpty: true
      },
      lastname: {
        type: DataTypes.STRING,
        notEmpty: true
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },
      lastLogin: {
        type: DataTypes.DATE
      },
      suite: {
        type: DataTypes.INTEGER,
        notEmpty: true
      }
    });
  
    // Pass id DOWN into Player table
    User.associate = (models) => {
      User.hasOne(models.Player, {
        // as: "userId",
        // foreignKey: "id",
        onDelete: 'cascade' 
      });
    };
    return User;
  };
  