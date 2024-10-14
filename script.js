let imagearr = ["img1.webp", "img2.png", "img3.jpg", "img4.webp", "img5.webp", "img6.jpg"]
let Parent = document.querySelector("#parent")
let startbutton = document.querySelector("button")
let flipcardback = document.querySelectorAll(".flip-card-back")
let frontdivimage = document.querySelectorAll(".flip-card-front img")
let timerDiv = document.querySelector("p")
let blankarr = []
let openimage = 0
let openstoreimage = []
let count = 0
let timmer = 0

let mainimage = [...imagearr, ...imagearr]



startbutton.addEventListener('click', function () {
    startbutton.style.display = "none"
    Parent.style.display = "block"
    sendimage()
    settimer()
})

function sendimage() {
    for (let i = 0; i < mainimage.length; i++) {
        let image = document.createElement("img")
        image.src = mainimage[getrandomImage()]
        flipcardback[i].append(image)
    }
}


frontdivimage.forEach((frontimage) => {
    frontimage.addEventListener('click', function () {
        openimage++
        frontimage.parentElement.parentElement.classList.add('backside')
        openstoreimage.push(frontimage.parentElement.nextElementSibling.children[0])
        console.log(openstoreimage);
        setTimeout(() => {
            if (openimage > 1) {
                if (openstoreimage[0].src === openstoreimage[1].src) {
                    openimage = 0
                    openstoreimage.length = 0
                    count++
                }
                else {
                    openstoreimage.forEach((image) => {
                        image.parentElement.parentElement.classList.remove('backside')
                    })
                    openimage = 0
                    openstoreimage.length = 0
                }
            }
        }, 500)
    })
})



function getrandomImage() {
    let randomvalue = Math.floor(Math.random() * mainimage.length)
    if (blankarr.includes(randomvalue)) return getrandomImage()

    else {
        blankarr.push(randomvalue)
        return randomvalue
    }

}

    function settimer(){
        let set = setInterval(() => {
            timerDiv.innerHTML=timmer=timmer+1
                if (timmer === 60 || count==6) {
                
                clearInterval(set)
            }
            // screenthird()
            
        }, 1000);
        }
        