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
  db.createTable('charityaddress', {
    charity_id: {
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
  db.addForeignKey('charityaddress', 'charity', 'charityaddress_charity_id_foreign',
  {
    'charity_id': 'id'
  },
  {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  }, callback);
};


exports.down = function(db) {
  return db.dropTable('charityaddress');
};

exports._meta = {
  "version": 1
};
