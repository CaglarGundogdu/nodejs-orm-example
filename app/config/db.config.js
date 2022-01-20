module.exports = {
    HOST: "10.50.10.7",
    USER: "postgres",
    PASSWORD: "admin",
    DB: "postgres",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};