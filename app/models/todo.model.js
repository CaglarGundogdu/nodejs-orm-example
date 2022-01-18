module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define("todo", {
        description: {
            type: Sequelize.STRING
        },
        completed: {
            type: Sequelize.BOOLEAN
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });

    return Todo;
};