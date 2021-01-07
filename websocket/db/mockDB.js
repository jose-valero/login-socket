const UsersMocksDB = new Map();

function createUser(userOBject) {
  UsersMocksDB.set(userOBject.username, userOBject);
  return 'user created';
}

function deleteUser(userOBject) {
  UsersMocksDB.delete(userOBject.username);
  return 'user deleted';
}

function listUsers() {
  const iterator = UsersMocksDB.values();
  const array = [];
  let value = iterator.next().value;
  while (value) {
    array.push(value);
    value = iterator.next().value;
  }
  console.log('savedValues', array);
  return array;
}

function editUser(userOBject) {
  if (UsersMocksDB.get(userOBject.username)) {
    UsersMocksDB.set(userOBject.username, userOBject);
    return 'user edited';
  }
  return 'user not found';
}

module.exports = { createUser, deleteUser, editUser, listUsers };
