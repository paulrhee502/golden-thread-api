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
  db.createTable('bankaddress', {
    bank_id: {
      type: 'int',
      notNull: true
    },
    street: {
      type: 'string',
      unique: true,
      notNull: true
    },
    city: {
      type: 'string',
      notNull: true
    },
    state: {
      type: 'string',
      notNull: true
    },
    zip: {
      type: 'int',
      notNull: true
    }
  }, callback);
  db.addForeignKey('bankaddress', 'bank', 'bankaddress_bank_id_foreign',
  {
    'bank_id': 'id'
  },
  {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  }, callback);
};


exports.down = function(db) {
  return db.dropTable('bankaddress');
};

exports._meta = {
  "version": 1
};
