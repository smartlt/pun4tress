const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.count = functions.https.onRequest((req, res) => {
  admin.database().ref('/count').transaction(function (count) {
    return (count || 0) + 1;
  }).then(function(tx) {
    return res.send(200, { count: tx.snapshot })
  })
})

exports.gifts = functions.https.onRequest((req, res) => {
  admin.database().ref('/count').on("value", function (snapshot) {
    let currentCount = parseInt(snapshot.val() || 0)
    admin.database().ref('/gifts').on("value", function (snapshot) {
      let archivedGifts = snapshot.val().filter((gift) => {
        return gift.point <= currentCount
      })
      return res.send(200, archivedGifts);
    });
  })
});