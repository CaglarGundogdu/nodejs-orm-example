module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("app_room", {
        roomId: {
            type: Sequelize.BIGINT
        },
        roomName: {
            type: Sequelize.STRING
        },
        sessionId: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });

    return Room;
};