// PASSPORT: This is the user model for Passport Authentication.  You can tighten up the validation if needed.
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
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
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastLogin: {
        type: DataTypes.DATE
      },
      startTime: {
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
  