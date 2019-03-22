module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define("Player", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        score: {
            type: DataTypes.INTEGER
        }
    });


    Player.associate = (models) => {
        //pass id UP to User table
        Player.belongsTo(models.User, {
            as: "playerId",
            foreignKey: {
                allowNull: false
            }
        });

        //pass id DOWN to PlayerAnswer table
        Player.hasMany(models.PlayerAnswer, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Player;
}