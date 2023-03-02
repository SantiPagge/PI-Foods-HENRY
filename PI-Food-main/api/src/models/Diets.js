const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define(
        'Diets',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
            { timestamps: false }
        );
}