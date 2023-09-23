const firebaseConfig = {
    apiKey: "AIzaSyDXM_aeZWSho9AD4SCyHuboHEBe91VaZPs",
    authDomain: "todolist-b6fcb.firebaseapp.com",
    databaseURL: "https://todolist-b6fcb-default-rtdb.firebaseio.com",
    projectId: "todolist-b6fcb",
    storageBucket: "todolist-b6fcb.appspot.com",
    messagingSenderId: "385321083808",
    appId: "1:385321083808:web:8e3939e8b645c883e37ac5"
  };
  const app = initializeApp(firebaseConfig);

  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; 
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      list_data = childData;
                      console.log(list_data);
                      list = list_data["list"];
                      list_html = "<h4>" + reminder + "</h4>"
                      check_box="<input type='checkbox' id='list_checkbox'>"
                      document.getElementById("output").innerHTML +=  list_html+check_box;
                }
          });
    });
}

function add() {
   list = document.getElementById("list").value;
    firebase.database().ref("/").push({
     list:list
         
    });
    document.getElementById("list").value = " ";
}