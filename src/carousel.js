import image1 from './images/img1.jpg';
import image2 from './images/img2.jpg';
import image3 from './images/img3.jpg';
import image4 from './images/img4.jpg';
import image5 from './images/img5.jpg';
import image6 from './images/img6.jpg';
import image7 from './images/img7.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7];
const imageFrames = document.querySelectorAll('.image-frame');
const carouselControl = document.getElementById ('carousel-control');
let imageElements = [];
let currentImage = 0;
let shapes = [];
let interval = setInterval(timedScroll, 5000)

function initializeCarousel () {
    console.log (images);
    console.log (imageFrames);

    imageFrames.forEach (frame => {
        let imageElement = document.createElement('img');
        frame.append (imageElement);
        imageElements.push(imageElement);
    })

    images.forEach (image => {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        let shape = document.createElementNS ("http://www.w3.org/2000/svg", 'circle');
        svg.setAttribute("width", "24px");
        svg.setAttribute("height", "24px");
        svg.dataset.pos = images.indexOf(image);
        svg.addEventListener("mouseover", () => {
            shape.setAttribute('fill', 'black');
        })
        svg.addEventListener("mouseout", () => {
            shape.setAttribute('fill', 'none');
        })

        shape.setAttribute("cx", "12");
        shape.setAttribute("cy", "12");
        shape.setAttribute("r", "7");
        shape.setAttribute("stroke", "black");
        shape.setAttribute("stroke-width", "1");
        shape.setAttribute("fill", "none");
        
        shapes.push (shape);
        svg.append(shape);
        carouselControl.append(svg);
    })

    let svgs = document.querySelectorAll ('svg');
    svgs.forEach(shape =>{
        shape.addEventListener('click', () => {
            clearInterval(interval);
            changePicture(shape.dataset.pos);
            interval = setInterval(timedScroll, 5000);
        });
    })

    console.log (imageElements);
    loadImages();
}

function timedScroll () {
    currentImage++;
    if (currentImage >= images.length){currentImage = 0;}
    changePicture(currentImage);
}

function changePicture (index) {
    currentImage = Number(index);
    console.log(typeof currentImage);
    shapes.forEach(shape => {
        if (shapes.indexOf(shape) !== currentImage){
            shape.setAttribute("fill", "none");
        } else {
            shape.setAttribute("fill", "black");
        }
    })
    loadImages();
}

function loadImages () {

    imageElements[1].src = images[currentImage];

    if (currentImage === 0) {
        imageElements[0].src = images[images.length - 1];
        imageElements[2].src = images[currentImage + 1];
    }else if (currentImage === images.length-1) {
        imageElements[0].src = images[currentImage - 1];
        imageElements[2].src = images[0];
    } else {
        imageElements[0].src = images[currentImage - 1];
        imageElements[2].src = images[currentImage + 1];
    }
}

export {initializeCarousel};
