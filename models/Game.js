module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define("Game", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        gameDate: {
            type: DataTypes.DATE,
            notEmpty: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            notEmpty: true
        },
        startTime: {
            type: DataTypes.DATE
        }
    });

    Game.associate = (models) => {
        Game.hasMany(models.Player, {
            foreignKey: {
                allowNull: false
            }
        });

        Game.hasMany(models.PlayerAnswer, {
            foreignKey: {
                allowNull: false
            }
        });

        Game.hasMany(models.GameQuestion, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Game;
}