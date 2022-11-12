var firebaseConfig = {
      apiKey: "AIzaSyAvTHulp8BoQ5K4Tupk5MaHuiHy3l-SL3Y",
      authDomain: "kwitter-ec515.firebaseapp.com",
      databaseURL: "https://kwitter-ec515-default-rtdb.firebaseio.com",
      projectId: "kwitter-ec515",
      storageBucket: "kwitter-ec515.appspot.com",
      messagingSenderId: "47559564648",
      appId: "1:47559564648:web:e5b6682a983ee8d7430add"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="welcome"+username+"!";
function addroom(){
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding roomname"
      });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname="+Room_names);
      row="<div id="+Room_names+"class='roomname' onclick='redirectToRoomName(This.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html"
}