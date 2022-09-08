const firebaseConfig = {
      apiKey: "AIzaSyBk9DWc0bWSRNzRPsZzLJq82bmEu5zyoJ8",
      authDomain: "kwitter-d66af.firebaseapp.com",
      databaseURL: "https://kwitter-d66af-default-rtdb.firebaseio.com",
      projectId: "kwitter-d66af",
      storageBucket: "kwitter-d66af.appspot.com",
      messagingSenderId: "235676890428",
      appId: "1:235676890428:web:343eac7241a6a98ffc5a39",
      measurementId: "G-65LP7BGHJ4"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name")
    room_name = localStorage.getItem("room_name");
function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data ['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class= 'user_tick' src='tick.png'></img></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"
like_button = "<button class='btn btn warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up-like'>Like: "+like+"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
         name: user_name,
         message: msg,
         like:0
      });

      document.getElementById("msg").value = "";
}