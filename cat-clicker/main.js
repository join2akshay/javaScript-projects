const fig1=document.getElementById('cat1');
const fig2=document.getElementById('cat2');
const div1=document.getElementById('name');
let count=0;
let count2=0;


show_image('https://farm3.staticflickr.com/2298/2290467335_89067c7b51_b.jpg',200,200,'cat');
show_image2('https://farm2.staticflickr.com/1126/625069434_db86b67df8_b.jpg',200,200,'cat2')
figc();
figc2();
//sDisplay image 1
function show_image(src, width, height, alt,fig) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <figure> tag
    fig1.appendChild(img);
  
    
}
// Display image 2
function show_image2(src, width, height, alt,fig) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <figure> tag
    fig2.appendChild(img);
  
    
}
// figure caption
function figc(){
    const figc=document.createElement("figcaption");
    figc.innerText='Jemmy';
    fig1.appendChild(figc);
   
    
   


};
//figure caption for second photo
function figc2(){
    const figc=document.createElement("figcaption");
    figc.innerText='Nemmy';
    fig2.appendChild(figc);
};

var elem = document.getElementById('cat1');
elem.addEventListener('click', function(){
 //the element has been clicked... 
    count++;
 const p1=document.getElementById("click1");
p1.innerText='total click on my photo ='+count;
  
}, false);

var elem = document.getElementById('cat2');
elem.addEventListener('click', function(){
 //the element has been clicked... 
    count2++;
 const p1=document.getElementById("click2");
p1.innerText='total click on my photo='+count2;
  
}, false);