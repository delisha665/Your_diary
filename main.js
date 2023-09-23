function logIn() {
    username=document.getElementById("username").value;
    localStorage.setItem("username",username);
    window.location="yourdiary.html";
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 cam=document.getElementById("camera123")
 Webcam.attach( cam ); 
function Click() {
    Webcam.snap(function(src){
        document.getElementById("selfie").innerHTML="<img src="+src+" id='picture'>"
    })
}
function next() {
    window.location="choose.html";
}
function reminder() {
    window.location="reminder.html";
}
function ToDoList() {
    window.location="toDoList.html";
}
function travel_goal() {
    window.location="travelGoal.html";
}
function Myday() {
    window.location="MyDay.html";
}