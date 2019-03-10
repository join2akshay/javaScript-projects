/*modal*/

let modal
{
    currentCat=null;
    cats:[
        {
            clickCount:0,
            name:'Jenny',
            imgSrc:"https://farm2.staticflickr.com/1126/625069434_db86b67df8_b.jpg"
        },
        {
            clickCount:0,
            name:'Nenny',
            imgSrc:"https://farm2.staticflickr.com/1321/624226507_2eabd0ffdd_b.jpg"
        },
        {
            clickCount:0,
            name:'Tiger',
            imgSrc:"https://farm4.staticflickr.com/3914/15171599148_6ef1d09dab_b.jpg"
        },
        {
            clickCount:0,
            name:'Menny',
            imgSrc:"https://farm9.staticflickr.com/8080/8326417203_fbaeb344b9_b.jpg"
        },
        {
            clickCount:0,
            name:'Tenny',
            imgSrc:"https://farm5.staticflickr.com/4177/34738948615_9ba2eba156_b.jpg"
        }
        
    ]
}

/*octopus*/
var octopus={
    init:function(){
        //first cat will see on load
        model.currentCat = model.cats[0];
        // view initilize
        CatListView.init();
        CatView.init();
    }
}

/* View */

var view={
    
};





