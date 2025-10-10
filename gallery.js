const images = ['images/1.jpg','images/2.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg'];
let mainImage = document.getElementById("fullImage");
let count = 0;
let stop = false;

let startCycle = setInterval(changeImage,3000);

function changeImage(){

    mainImage.setAttribute("src",images[count]);
    count++;
    if(count >= images.length) {
        count = 0;
    }


}



mainImage.onclick = function () {
    if(!stop){
        clearInterval(startCycle);
        stop = true;
    } else {
        startCycle = setInterval(changeImage,3000);
        stop = false;
    }
}






function displayImage(fileName){
    document.getElementById('fullImage').src = 'images/'+ fileName +'.jpg';
    document.getElementById('ImageTitle').innerHTML = fileName;
}

