// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyBnKqP6ANfHgfqJAPCHBGfO4LUl8SD1aRQ",
      authDomain: "buzz-talk-730a7.firebaseapp.com",
      projectId: "buzz-talk-730a7",
      storageBucket: "buzz-talk-730a7.appspot.com",
      messagingSenderId: "316441211168",
      appId: "1:316441211168:web:83206cedb1568acd90e745",
      measurementId: "G-6CPRCE5JSJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
