const db = require('../config/db');
const {DataTypes} = require('sequelize');

const Post = db.define('post', {
    id: {type: DataTypes.UUID, primaryKey: true},
    title: {type: DataTypes.STRING, allowNull: false},
    body: {type: DataTypes.STRING(1250), allowNull: false}
});

module.exports = {
    Post
};