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
  db.createTable('keyword', {
    charity_id: {
      type: 'int',
      notNull: true
    },
    keyword: {
      type: 'string',
      notNull: true
    }
  }, callback);
  db.addForeignKey('keyword', 'charity', 'keyword_charity_id_foreign',
  {
    'charity_id': 'id'
  },
  {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  }, callback);
};


exports.down = function(db) {
  return db.dropTable('keyword');
};

exports._meta = {
  "version": 1
};
