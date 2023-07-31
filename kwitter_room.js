
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC3sbXXQNgTVwj7SqOwqwluo69uAgzENXs",
      authDomain: "chat-bot-bb90c.firebaseapp.com",
      databaseURL: "https://chat-bot-bb90c-default-rtdb.firebaseio.com",
      projectId: "chat-bot-bb90c",
      storageBucket: "chat-bot-bb90c.appspot.com",
      messagingSenderId: "213712361000",
      appId: "1:213712361000:web:f7c6260b47f7f3fe73071d",
      measurementId: "G-5HLPY1D0YJ"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name: " +Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function addRoom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
  localStorage.setItem("room_name",room_name);
  window.loaction="kwitter_page.html";
}