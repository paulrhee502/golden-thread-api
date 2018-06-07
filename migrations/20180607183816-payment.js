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
  db.createTable('payment', {
    user_id: {
      type: 'int',
      notNull: true
    },
    name: {
      type: 'string',
      notNull: true
    },
    cardNum: {
      type: 'int',
      notNull: true
    },
    expDate: {
      type: 'string',
      notNull: true
    },
    securityCode: {
      type: 'int',
      notNull: true
    },
  }, callback);
  db.addForeignKey('payment', 'user', 'payment_user_id_foreign',
  {
    'user_id': 'id'
  },
  {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  }, callback);
};


exports.down = function(db) {
  return db.dropTable('payment');
};

exports._meta = {
  "version": 1
};
