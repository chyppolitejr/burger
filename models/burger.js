const orm = require("../config/orm.js");

const burger = {
  selectAll: (cb) => {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  InsertOne: (cols, vals, cb) => {
    orm.insertOne("cats", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne("cats", objColVals, condition, function (res) {
      cb(res);
    });
  },
};

modules.export = burger;
