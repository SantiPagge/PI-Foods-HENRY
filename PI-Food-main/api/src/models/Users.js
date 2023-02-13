const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Users', {
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    { timestamps: false }
    );
}