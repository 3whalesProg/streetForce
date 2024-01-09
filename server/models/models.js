const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tg_id: {type: DataTypes.BIGINT},
    email: {type: DataTypes.STRING, unique: true},
    phone: {type: DataTypes.STRING},
    first_name: {type: DataTypes.STRING},
    second_name: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    createdAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
    updatedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') }
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Basket_Item = sequelize.define('basket_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    product_id: {type: DataTypes.INTEGER}
})

const Likes = sequelize.define('likes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Likes_Item = sequelize.define('likes_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    product_id: {type: DataTypes.INTEGER}
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    sizes: {type: DataTypes.TEXT},
    img: {type: DataTypes.ARRAY(sequelize.Sequelize.STRING)},
    gender: {type: DataTypes.STRING},
    type: {type: DataTypes.STRING},
    brand: {type: DataTypes.STRING},
    description: {type: DataTypes.TEXT},
    features: {type: DataTypes.ARRAY(sequelize.Sequelize.STRING)},
    compositions: {type: DataTypes.ARRAY(sequelize.Sequelize.STRING)}
})

const Order_History = sequelize.define('order_history', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Order_History_Item = sequelize.define('order_history', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    product_id: {type: DataTypes.INTEGER}
})

User.hasOne(Basket, {foreignKey: 'user_id', targetKey: 'id'})
Basket.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id'})

User.hasOne(Likes, {foreignKey: 'user_id', targetKey: 'id'})
Likes.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id'})

User.hasOne(Order_History, {foreignKey: 'user_id', targetKey: 'id'})
Order_History.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id'})



Basket.hasMany(Basket_Item, {foreignKey: 'basket_id', targetKey: 'id'})
Basket_Item.belongsTo(Basket, {foreignKey: 'basket_id', targetKey: 'id'} )

Likes.hasMany(Likes_Item, {foreignKey: 'likes_id', targetKey: 'id'})
Likes_Item.belongsTo(Likes, {foreignKey: 'likes_id', targetKey: 'id'} )

Order_History.hasMany(Order_History_Item, {foreignKey: 'order_history_id', targetKey: 'id'})
Order_History_Item.belongsTo(Order_History, {foreignKey: 'order_history_id', targetKey: 'id'} )

sequelize.sync({alter:true})

module.exports = {
    User,
    Basket,
    Basket_Item,
    Likes,
    Likes_Item,
    Product,
    Order_History,
    Order_History_Item
}
