const { query } = require("./connection.js");
const connection = require("./connection.js");

const orm = {
  //selectAll
  selectAll: (tableInput, cb) => {
    let queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },
  //insertOne
  insertOne: (table, cols, vals, cb) => {
    let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, vals, (err,result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
  },
  //updateOne
   updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

};

modules.export = orm;
