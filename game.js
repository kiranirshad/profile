let count = 0;
function getWiner(boxNumb){

    count += 1;
    let clickedBox = document.querySelector("#box" + boxNumb);

    if (clickedBox.innerHTML === "") {
        if (count % 2 === 0) {
            clickedBox.innerHTML = "X";
           console.log("xxx");

        } else {
            clickedBox.innerHTML = "0";
        }
    }
    else{
        alert("ak bar clikc krna he abhi");
    }
    

    let box1 = document.querySelector("#box1");
    let box2 = document.querySelector("#box2");
    let box3 = document.querySelector("#box3");
    let box4 = document.querySelector("#box4");
    let box5 = document.querySelector("#box5");
    let box6 = document.querySelector("#box6");
    let box7 = document.querySelector("#box7");
    let box8 = document.querySelector("#box8");
    let box9 = document.querySelector("#box9");
   

    if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML  && box1.innerHTML === box3.innerHTML){
        document.querySelector(".result").innerHTML = `${box2.innerHTML} win the game`;

    } else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML){
        document.querySelector(".result").innerHTML =`${box5.innerHTML} win the game`;


    } else if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML){
        document.querySelector(".result").innerHTML = `${box8.innerHTML} win the game`;


    } else if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML){
        document.querySelector(".result").innerHTML = `${box4.innerHTML} win the game`;


    }  else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTM === box8.innerHTML){
        document.querySelector(".result").innerHTML = `${box5.innerHTML} win the game`;


    }  else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML){
        document.querySelector(".result").innerHTML = `${box6.innerHTML} win the game`;


    } else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML){
        document.querySelector(".result").innerHTML = `${box5.innerHTML} win the game`;


    } else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML){
        document.querySelector(".result").innerHTML = `${box5.innerHTML} win the game`;

      } 

}
function replay(){
location.reload();
}

