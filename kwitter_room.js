var firebaseConfig = {
    apiKey: "AIzaSyBELiIk5Lb4yKsCwYDyfMzuD3gYHNnZXnU",
    authDomain: "kwitter-976e0.firebaseapp.com",
    databaseURL: "https://kwitter-976e0-default-rtdb.firebaseio.com",
    projectId: "kwitter-976e0",
    storageBucket: "kwitter-976e0.appspot.com",
    messagingSenderId: "32182385813",
    appId: "1:32182385813:web:170170bc49a2f079a2ef9c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+ user_name;
  
  function addroom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      colour:"green"
    });
  
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  
  }
  
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("roomname " + Room_names)
        row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
  
  
        //End code
        });});}
  getData();
  function redirect(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }
  
  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
  }