const fs = require('fs')
const path = require('path')
const sequelize = require('../core/sequelize')
const db = {}

const basename = path.basename(module.filename)

/**
 * index.js 를 제외한 models 폴더의 js 파일을 검색하여 모델화 한다.
 */
fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db)
  .forEach((modelName) => {
    if ('associate' in db[modelName]) {
      db[modelName].associate(db)
    }
  })

db.sequelize = sequelize

/**
 * 테이블 생성 작업
 * db.Users.sync({force: true}) <-- 테이블을 항상 다시 생성하는 옵션
 */
db.Users.sync()

module.exports = db
