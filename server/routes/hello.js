
const sequelize = require('../core/sequelize')

module.exports = function (router) {
  router.route('/hello')
    .get((req, res) => {
      // eslint-disable-next-line standard/object-curly-even-spacing
      sequelize.query('SELECT * FROM "Category"', { type: sequelize.QueryTypes.SELECT}).then(cate => {
        res.json(cate)
      })
    })
}
