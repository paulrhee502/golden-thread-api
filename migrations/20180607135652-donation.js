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
  db.createTable('donation', {
    id: {
      type: 'int',
      primaryKey:true
    },
    user_id: {
      type: 'int',
      notNull: true
    },
    charity_id: {
      type: 'int',
      notNull: true
    },
    pm_id: {
      type: 'int',
      notNull: true
    },
    date: {
      type: 'string',
      length: 15,
    },
    amount: {
      type: 'int',
      notNull: true
    }
  }, callback);
  db.addForeignKey('donation', 'user', 'donation_user_id_foreign',
  {
    'user_id': 'id'
  },
  {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  }, callback);
  db.addForeignKey('donation', 'charity', 'donation_charity_id_foreign',
  {
    'charity_id': 'id'
  },
  {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  }, callback);
  db.addForeignKey('donation', 'payment', 'donation_pm_id_foreign',
  {
    'pm_id': 'id'
  },
  {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  }, callback);
};

exports.down = function(db) {
  return db.dropTable('donation');
};

exports._meta = {
  "version": 1
};
