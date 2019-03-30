module.exports = (sequelize, DataTypes) => {
    const GameQuestion = sequelize.define("GameQuestion", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        }
    });

    GameQuestion.associate = (models) => {
        GameQuestion.hasMany(models.PlayerAnswer, {
            foreignKey: {
                allowNull: false
            }
        });

        GameQuestion.belongsTo(models.Game, {
            foreignKey: {
                allowNull: false
            }
        });

        GameQuestion.belongsTo(models.Question, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return GameQuestion;
}