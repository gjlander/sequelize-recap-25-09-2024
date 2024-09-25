// models/User.js
import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

//making it lowercase will make our lives easier later on
const Duck = sequelize.define(
    'duck',
    {
        name: { type: DataTypes.STRING, allowNull: false },
        imgUrl: { type: DataTypes.STRING(510), allowNull: false },
        quote: { type: DataTypes.TEXT, defaultValue: 'Let me help you debug!' },
    },
    { paranoid: true }
);

// Duck.sync(); // Check the block about Model synchronization

export default Duck;
