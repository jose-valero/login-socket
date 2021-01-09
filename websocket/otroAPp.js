var admin = require("firebase-admin");

var serviceAccount = require("../src/firebase/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://wispro-app-default-rtdb.firebaseio.com"
});