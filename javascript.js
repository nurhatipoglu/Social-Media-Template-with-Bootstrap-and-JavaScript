function createImage(src){
    const image = document.createElement('img');
    image.src = src;
    return image;
}

function OnImageClick(event){
    console.log("tıklandı");
    const image2 = createImage(event.currentTarget.src);
    const view = document.querySelector("#view");
    view.appendChild(image2);
    view.classList.remove('hidden');
}

function OnViewClick(){
    vieww.classList.add('hidden');
    vieww.innerHTML='';
}


const image = document.querySelector("#resim");
image.addEventListener("click",OnImageClick );
const image2 = document.querySelector("#resim2");
image2.addEventListener("click",OnImageClick );

const vieww = document.querySelector("#view");
vieww.addEventListener("click",OnViewClick );
