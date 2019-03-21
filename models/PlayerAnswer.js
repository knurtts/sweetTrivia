module.exports = (sequelize, DataTypes) => {
    const PlayerAnswer = sequelize.define("PlayerAnswer", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        answerTime: {
            type: DataTypes.DATE,
            notEmpty: true
        }
    });

    PlayerAnswer.associate = (models) => {
        PlayerAnswer.belongsTo(models.Game, {
            foreignKey: {
                allowNull: false
            }
        });

        PlayerAnswer.belongsTo(models.GameQuestion, {
            foreignKey: {
                allowNull: false
            }
        });

        PlayerAnswer.belongsTo(models.Player, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return PlayerAnswer;
}