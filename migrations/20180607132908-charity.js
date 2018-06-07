'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('charity', {
    id: {
      type: 'int',
      primaryKey:true
    },
    name: {
      type: 'string',
      unique: true,
      length: 100
    },
    description: {
      type: 'string',
      length: 1000
    },
    image: {
      type: 'string',
      length: 200
    },
    phone: {
      type: 'string',
      length: 50,
      unique: true
    },
    url: {
      type: 'string',
      length: 200,
    }
  }, callback);
};

exports.down = function(db) {
  return db.dropTable('charity');
};

exports._meta = {
  "version": 1
};
