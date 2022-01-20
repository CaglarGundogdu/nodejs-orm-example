module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("app_room", {
        room_id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        room_name: {
            type: Sequelize.STRING
        },
        room_owner : {
            type: Sequelize.STRING  
        },
        session_id: {
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