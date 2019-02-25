const fig1=document.getElementById('cat1');
const div1=document.getElementById('name');


show_image('https://farm3.staticflickr.com/2298/2290467335_89067c7b51_b.jpg',200,200,'cat')
//show_image('https://farm2.staticflickr.com/1126/625069434_db86b67df8_b.jpg',200,200,'cat2')
figc();
show_name('Jemmy','Nemmy');
function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <DIV> tag
    
    fig1.appendChild(img);
  
    
}

function figc(){
    const figc=document.createElement("figcaption");
    figc.innerText='Jemmy';
    //const span2=document.createElement("span");
    fig1.appendChild(figc);
   
    
   
//div1.appendChild(span);
//div1.appendChild(span2);

};
//function show_name(name,name1){
 //document.getElementById('name').innerText=name+" "+name1;
 //document.getElementById('name2').innerText=name1;
    //document.getElementById('name').innerText=name2;
//};
