module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define("Question", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        questions: {
            type: DataTypes.TEXT
        }
    });

    Question.associate = (models) => {
        Question.hasMany(models.GameQuestion, {
            foreignKey: {
                allowNull: false
            }
        });

        Question.hasMany(models.Answer, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Question;
}