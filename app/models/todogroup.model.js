module.exports = (sequelize, Sequelize) => {
    const TodoGroup = sequelize.define("todo_group", {
        description: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });

    return TodoGroup;
};