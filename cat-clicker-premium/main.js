var data = ['img/cat1.jpeg','img/cat2.jpeg','img/cat3.jpeg','img/cat4.jpeg','img/cat5.jpeg'];
const name=['Jenny','Nenny','Shely','Kenny','aenny'];  
/*
  data.images.forEach( function(obj) {
    var img = new Image();
    img.src = obj.cat1;
    img.setAttribute("class", "banner-img");
    img.setAttribute("alt", "effy");
    document.getElementById("img-container").appendChild(img);
  });

  */
 /*
  for(i=0;i<=4;i++)
 {
     const img = new Image();
     img.src = data[i];
    img.setAttribute("class", "banner-img");
    img.setAttribute("alt", "effy");
    document.getElementById("cat1").appendChild(img);

    // console.log(data[i]);
 };
 */
/*
 for(i=0;i<=4;i++)
 {
  const figc=document.createElement("figcaption");
  figc.innerText=name[i];
  document.getElementById("cat1").appendChild(figc);
  // var j= document.getElementById('name').innerHTML=`<p>${name[i]}</p>`;
   
     //  console.log(data[i]);
 };

 */

for(i=0;i<=4;i++)
{
  var x = document.createElement("LI");
  var t = document.createTextNode(name[i]);
  x.appendChild(t);
 

x.addEventListener('click',(function(num){
  return function() {
    
};  
})(name[i]));
document.getElementById('name').appendChild(x);
}



