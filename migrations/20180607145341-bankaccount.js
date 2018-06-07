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
  db.createTable('bankaccount', {
    charity_id: {
      type: 'int',
      notNull: true
    },
    bank_id: {
      type: 'int',
      notNull: true
    },
    accountNum: {
      type: 'int',
      notNull: true
    },
    routingNum: {
      type: 'int',
      notNull: true
    }
  }, callback);
  db.addForeignKey('bankaccount', 'charity', 'bankaccount_charity_id_foreign',
  {
    'charity_id': 'id'
  },
  {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  }, callback);
  db.addForeignKey('bankaccount', 'bank', 'bankaccount_bank_id_foreign',
  {
    'bank_id': 'id'
  },
  {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  }, callback);
};


exports.down = function(db) {
  return db.dropTable('bankaccount');
};

exports._meta = {
  "version": 1
};
