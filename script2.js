
startBtn.addEventListener('click',function(){
    startBtn.style.display="none"
    Parent.style.display="block"
})

flipcard.forEach(flip_card => {
    
flip_card.addEventListener("click",function(){
    ++count
    console.log(count);
    sendingimage()
    
  
})

});


function randomvalue(){
    return Math.floor(Math.random()*arr.length)
}


function sendingimage(){

    for(let i=0;i<arr.length*2;i++){    
    let random= randomvalue()
    let Randomimage = arr[random]

    let image= document.createElement("img")
    image.src=Randomimage
let Flipcardback = document.querySelector(".flip-card-back")
     
    
    Flipcardback[i].append(image)
    e.target.style.transform="rotateY(180deg)"

}
}


function checkingsimilarimg(value){
//   const here  =value
  data.push(value)
  console.log(data);
  
}