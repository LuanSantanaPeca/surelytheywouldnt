/*
const bgImgInput = document.getElementById('bg-img-input');
const bgImgForm = document.getElementById('bg-img-form');

const image1 = new Image();
image1.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAIAAAC3cQTlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAR0SURBVGhD7ZjbT1xFHIBnzt7Lsu1SygpL9tKmLEsJpVxcJX1AK0KsNbFNDUnb1JoaS030wcQHTfpSEm80Bn1Q44tSE6WVNCk0NdBERO6CCy23hd3lHq7LHtj7Lucch+VE/4DOqZNmvoc9J3M5s9/8Zn7nAgVBAE8LjHh8KqAypEJlSIXKkAqVIRUqQypUhlSoDKlQGVKhMqRCZUiFypAKlSGVJyGTiEfFM4mR9vNsJBy+d7+1c4otsepfP3kiRasVK6RB2sh0dXWd7ZfVG6suDCn7+nrFUsmQUGZkZKSlvROoGOCbATDa2HKvp69PrJMGqZbZ7MJC0+d1mV/Xm7Ly4sI2BMC3NLlSfe75Dz84WljIQFQgAUgGF7x4FAadzpsVJ+eApTu7oG5vtsdU/Elq1oi5aFWW9ydIb/zm2w2WFZtiBccyEwSWZf92On/49LPlpWWX2z1+/u3KtqnUw5mLiVhAAKzAP4hshXkeWnV55oNHaq78fL12KxgUu+MDwzJbXVv7/vI76b2jidVJY3Ozr72j6sYvQUuGlmHkkEGqEMK4ICjQIdleAaDX0+tuuFl94XyyABsYIjPt8Wju3imNKhyHioduN1lvt2oPGdsDLMtxcjRbSQUVRFposJ3zbQCsmUWb1+tm5ueTF8AGBplYJBI25Ua2QluewdMND+wyJQd3/v32TtD/2+ghnp+OR9F4cYHbUMH8qWHX+LhYhwkMMsfLyw1X35x3mNd/bfrtymux+SAEglWlGYuGZSgyyTZyCIcjgeVETAYhWtZtW3490My6XMlKbGCQQXn2jZqal+7fOXvmtMFsYrbZbQHYVXtCPOeMBHbiI/CjkZAnFi/ekxrguJ4gSgogxWhXf9fQfOsWx3HihR4bDDKIvTpdul6PriVL04fBEtr1DBRe0aUFeL5lc/3u5sZ0LHZm3341ZKI8PxQJZCvUK3JgGB2Y+PGncBTbkxvmm+ajsbGJIwUnzMUJtLCSU4XyGA+AMpkG0EgoJfSHg78HWC64qH7v/YvvXs3Jydnt+/jgicy/2G229RtfTM32K5NThBYQ2iTIBPnszhkqKdCknEvLqASgrKICowkCs4xcJqt+61LnRx93e/tCnjHBF0E7ajdECPTLxDkVG9PPuVwm++FcW7IYG5I8m0Vjsb8GBuYGBte7ex1/PNKplegGqoEyZyLstxri+/Wco6Tk1Kv5eXliB0xI+z7T8/Ch9+jLSr3Oqk2xAHn9Pt5We+14SaklK0tsgRWpZLwzM8MdHf7+wYONbXE5VDNMviZlPhH3HdCulhXlXrpYeOyY2BQjSAY7yOSroufcAKwBu9/ybDdI+xK9FICMFWDbALYFAGpLy3x+v9gaH5JEZmxiorX8lGPFjZLYMjBuXLv8TElxaHom4ZqUhcKcXm94sfyFqkqFQiF2wIRUy2xxacnr9aI8dsBgsJrNSoUCDYMSA8fzCrlchVtjF2kTwBMG833m/4XKkAqVIRUqQypUhlSoDKlQGVKhMqRCZUiFypAJAP8AtIwOnxC5jPMAAAAASUVORK5CYII='

bgImgForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var file = bgImgInput.files[0];
    var reader = new FileReader();

    reader.onload = function(e){
        image1.src=e.target.result;
        img = loadImage(`${image1.src}`);
    }
    reader.readAsDataURL(file);
});

const inputSlider = document.getElementById('resolution');
const inputLabel = document.getElementById('resolution-label');
inputSlider.addEventListener('change', handleSlider);
function handleSlider(){
    if(inputSlider.value == 1){
        inputLabel.innerHTML = 'Original Image';
    } else {
        inputLabel.innerHTML = `Resolution: ${inputSlider.value}px`;
    }
}

let sourceText;
let poem;
let img;
let startIndex = 0;

function getRandom(min, max){
    console.log(1);
    return Math.random() * (max-min) + min;
}
function componentToHex(comp) {
    var hex = comp.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function preload() {
    img = loadImage(`${image1.src}`);
    sourceText = loadStrings("imgs/sourceText.txt");
}

function setup() {
    asciiDiv = document.getElementById('ascii-div');
    noCanvas();
    sourceText = sourceText.join(' ');
}

function draw() {
    background(0);
    frameRate(10);
    
    let charIndex = startIndex;
    img.loadPixels();
    let asciiImage = "";
        for (let j = 0; j < img.height; j+=parseInt(inputSlider.value)) {
            for (let i = 0; i < img.width; i+=parseInt(inputSlider.value)) {
                const pixelIndex = (i + j * img.width) * 4;
                const r = img.pixels[pixelIndex + 0];
                const g = img.pixels[pixelIndex + 1];
                const b = img.pixels[pixelIndex + 2];

                let c = sourceText.charAt(charIndex%sourceText.length);
                c = c.fontcolor(`${rgbToHex(r, g, b)}`);
                if(c == ' ') asciiImage += '&nbsp;';
                if(c == 'W' && getRandom(1, 10) > 9) asciiImage += 'X';
                if(c == 'S' && getRandom(1, 10) < 9) asciiImage += '$';
                else asciiImage += c;

                charIndex++;
            }
            asciiImage += '<br>';
        }
        asciiDiv.innerHTML = asciiImage;
    startIndex++;
}
*/
const bgImgInput = document.getElementById('bg-img-input');
const bgImgForm = document.getElementById('bg-img-form');

const image1 = new Image();
image1.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAIAAAC3cQTlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAR0SURBVGhD7ZjbT1xFHIBnzt7Lsu1SygpL9tKmLEsJpVxcJX1AK0KsNbFNDUnb1JoaS030wcQHTfpSEm80Bn1Q44tSE6WVNCk0NdBERO6CCy23hd3lHq7LHtj7Lucch+VE/4DOqZNmvoc9J3M5s9/8Zn7nAgVBAE8LjHh8KqAypEJlSIXKkAqVIRUqQypUhlSoDKlQGVKhMqRCZUiFypAKlSGVJyGTiEfFM4mR9vNsJBy+d7+1c4otsepfP3kiRasVK6RB2sh0dXWd7ZfVG6suDCn7+nrFUsmQUGZkZKSlvROoGOCbATDa2HKvp69PrJMGqZbZ7MJC0+d1mV/Xm7Ly4sI2BMC3NLlSfe75Dz84WljIQFQgAUgGF7x4FAadzpsVJ+eApTu7oG5vtsdU/Elq1oi5aFWW9ydIb/zm2w2WFZtiBccyEwSWZf92On/49LPlpWWX2z1+/u3KtqnUw5mLiVhAAKzAP4hshXkeWnV55oNHaq78fL12KxgUu+MDwzJbXVv7/vI76b2jidVJY3Ozr72j6sYvQUuGlmHkkEGqEMK4ICjQIdleAaDX0+tuuFl94XyyABsYIjPt8Wju3imNKhyHioduN1lvt2oPGdsDLMtxcjRbSQUVRFposJ3zbQCsmUWb1+tm5ueTF8AGBplYJBI25Ua2QluewdMND+wyJQd3/v32TtD/2+ghnp+OR9F4cYHbUMH8qWHX+LhYhwkMMsfLyw1X35x3mNd/bfrtymux+SAEglWlGYuGZSgyyTZyCIcjgeVETAYhWtZtW3490My6XMlKbGCQQXn2jZqal+7fOXvmtMFsYrbZbQHYVXtCPOeMBHbiI/CjkZAnFi/ekxrguJ4gSgogxWhXf9fQfOsWx3HihR4bDDKIvTpdul6PriVL04fBEtr1DBRe0aUFeL5lc/3u5sZ0LHZm3341ZKI8PxQJZCvUK3JgGB2Y+PGncBTbkxvmm+ajsbGJIwUnzMUJtLCSU4XyGA+AMpkG0EgoJfSHg78HWC64qH7v/YvvXs3Jydnt+/jgicy/2G229RtfTM32K5NThBYQ2iTIBPnszhkqKdCknEvLqASgrKICowkCs4xcJqt+61LnRx93e/tCnjHBF0E7ajdECPTLxDkVG9PPuVwm++FcW7IYG5I8m0Vjsb8GBuYGBte7ex1/PNKplegGqoEyZyLstxri+/Wco6Tk1Kv5eXliB0xI+z7T8/Ch9+jLSr3Oqk2xAHn9Pt5We+14SaklK0tsgRWpZLwzM8MdHf7+wYONbXE5VDNMviZlPhH3HdCulhXlXrpYeOyY2BQjSAY7yOSroufcAKwBu9/ybDdI+xK9FICMFWDbALYFAGpLy3x+v9gaH5JEZmxiorX8lGPFjZLYMjBuXLv8TElxaHom4ZqUhcKcXm94sfyFqkqFQiF2wIRUy2xxacnr9aI8dsBgsJrNSoUCDYMSA8fzCrlchVtjF2kTwBMG833m/4XKkAqVIRUqQypUhlSoDKlQGVKhMqRCZUiFypAJAP8AtIwOnxC5jPMAAAAASUVORK5CYII='

bgImgForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var file = bgImgInput.files[0];
    var reader = new FileReader();

    reader.onload = function(e){
        image1.src=e.target.result;
        img = loadImage(`${image1.src}`);
    }
    reader.readAsDataURL(file);
});

const inputSlider = document.getElementById('resolution');
const inputLabel = document.getElementById('resolution-label');
inputSlider.addEventListener('change', handleSlider);
function handleSlider(){
    if(inputSlider.value == 1){
        inputLabel.innerHTML = 'Original Image';
    } else {
        inputLabel.innerHTML = `Resolution: ${inputSlider.value}px`;
    }
}

let sourceText;
let poem;
let img;
let startIndex = 0;

function preload() {
  img = loadImage("imgs/teste.png");
  sourceText = loadStrings("imgs/sourceText.txt");
}

function setup() {
  createCanvas(screen.width, screen.height); 
  poem = sourceText.join(' ');
  textFont("Courier-Bold");
}

function draw() {
  background(0);
  frameRate(10);
  
  let charIndex = startIndex;
  let w = width / img.width;
  let h = height / img.height;
  img.loadPixels();
    for (let j = 0; j < img.height; j+=parseInt(inputSlider.value)) {
        for (let i = 0; i < img.width; i+=parseInt(inputSlider.value)) {
            const pixelIndex = (i + j * img.width) * 4;
            const r = img.pixels[pixelIndex + 0];
            const g = img.pixels[pixelIndex + 1];
            const b = img.pixels[pixelIndex + 2];
            const a = img.pixels[pixelIndex + 3];
            const avg = (r + g + b) / 3;
            
            noStroke();
            if(avg > 50) fill(r, g, b, a);
            else fill(0,0,0,0);      
            textSize(w*1.2);
            textAlign(CENTER, CENTER);
            
            text(poem.charAt(charIndex % poem.length), i * w + w * 0.5, j * h + h * 0.5);
            charIndex++;
        }
    }
  startIndex++;
}