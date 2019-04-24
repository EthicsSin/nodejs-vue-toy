module.exports = function (sequelize, Sequelize) {
  let user = sequelize.define('Users', {
    user_no: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    user_id: {type: Sequelize.STRING(32), allowNull: false},
    user_name: {type: Sequelize.STRING(32), allowNull: false}
  }, {
    classMethods: {},
    tableName: 'users',
    underscored: true,
    timestamps: false
  })
  return user
}
