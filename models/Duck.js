import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

const Duck = sequelize.define(
    'duck',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imgUrl: {
            type: DataTypes.STRING(510),
            allowNull: false,
        },
        quote: {
            type: DataTypes.TEXT,
            defaultValue: 'Let me help you debug!',
        },
    },
    { paranoid: true }
);

// Duck.sync({ alter: true });

export default Duck;
