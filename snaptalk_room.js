function addUser(){
    user_name=document.getAnimations("user_name").values;
    localStorage.setItem("user_name",user_name);
    window.location="Snap Talk_room.html";
}