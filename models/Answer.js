module.exports = (sequelize, DatTypes) => {
    const Answer = sequelize.define("Answer", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        answer: {
            type: DataTypes.TEXT,
            notEmpty: true
        },
        correctAnswer: {
            type: DataTypes.BOOLEAN,
            notEmpty: true
        }
    });

    Answer.associate = (models) => {
        Answer.belongsTo(models.Question, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Answer;
}