const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// onRequestメソッドはGET時に自動で発動
// onCallメソッドは関数みたいに呼び出されたときに発動
exports.addAdminRole = functions.https.onCall((data, context) => {
  // firebase functionsでadminSDKを使っているだけ！
  // email情報でadminユーザを取得
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      // setCustomUserClaimsは普通のAuthに加えて付加情報を与えることができる
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been made an admin!!`,
      };
    })
    .catch((err) => {
      console.log(err);
    });
});