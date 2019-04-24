
const models = require('../models')
const logger = require('../core/logger')

module.exports = function (router) {
  router.route('/hello')
    .get((req, res) => {
      /**
       * 기본 조회 쿼리
       */
      models.Users.findAll().then(function (result) {
        res.json(result)
      }).catch(function (err) {
        logger.info(err)
      })
    })
  router.route('/getUser')
    .get((req, res) => {
      /**
       * where 추가 조회 쿼리
       */
      models.Users.findAll({
        where: {user_id: 1}
      }).then(function (result) {
        res.json(result)
      })
    })
}
