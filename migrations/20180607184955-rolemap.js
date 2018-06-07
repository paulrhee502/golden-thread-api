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
  db.createTable('rolemap', {
    user_id: {
      type: 'int',
      notNull: true
    },
    role_id: {
      type: 'int',
      notNull: true
    },
   }, callback);
  db.addForeignKey('rolemap', 'user', 'rolemap_user_id_foreign',
  {
    'user_id': 'id'
  },
  {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  }, callback);
  db.addForeignKey('rolemap', 'role', 'rolemap_role_id_foreign',
  {
    'role_id': 'id'
  },
  {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  }, callback);
};


exports.down = function(db) {
  return db.dropTable('rolemap');
};

exports._meta = {
  "version": 1
};
