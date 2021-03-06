//  var server = "http://localhost:5000";
// server = "https://group5antique.firebaseapp.com";

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;
    //  var userId = user.uid;
    var cashierNumber;
    if (window.location.hostname == "localhost") {
      console.log(window.location.hostname);
      if (
        window.location.href !="http://"+window.location.hostname+":"+window.location.port+ "/admin/"
      )
       {
        window.location.href =
          "/admin/";
      }
    } else {
      if (
        window.location.href !=
        "announcementapp-1bcde.firebaseapp.com/login.html"
      ) {
        window.location.href = "/admin/";
      }
    }

    if (user != null) {
      console.log("user identified");
      // var userId = firebase.auth().currentUser.uid;
      // return firebase.database().ref('/user/' + userId+'/cashier_number').once('value').then(function(snapshot) {
      // localStorage.cashiernumber = snapshot.val();
      // });
      var email_id = user.email;
      // if (window.location.href != "http://localhost:5000/index.html" || window.location.href != "http://localhost:5000/index.html" ) {
      //     window.location.href = "index.html";
      // }
    }
  } else {
    console.log("login page");
    // No user is signed in.
    if (window.location.hostname == "localhost") {
      if (window.location.href != "http://"+window.location.hostname+":"+window.location.port+ "/login.html") {
        window.location.href = "/login.html";
        console.log("will be logged out");
      }
    } else {
      if (
        window.location.href !=
        "announcementapp-1bcde.firebaseapp.com/login.html"
      ) {
        window.location.href =
        window.location.href = "/login.html";
        console.log("will be logged out");
      }
    }
  }
});

function login() {
  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorMessage);
      // ...
    });
}

function logout() {
  firebase.auth().signOut();
  console.log("logout");
}
