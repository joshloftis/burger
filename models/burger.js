const orm = require('../config/orm');

const burger = {
  all: (cb) => {
    orm.selectAll('burgers', function(result){
      cb(result);
    });
  },
  insert: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, function(result){
      cb(result);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, function(result) {
      cb(result);
    });
  }
};

module.exports = burger;
