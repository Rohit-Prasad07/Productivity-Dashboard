let allElems = document.querySelectorAll('.elem');

let fullElemPage = document.querySelectorAll('.fullElem');

// backbutton code 
let allFullElemBackBtn =  document.querySelectorAll('.fullElem .back');

allElems.forEach(function(elem){
    elem.addEventListener('click', function(){
        fullElemPage[elem.id].style.display = 'block'
    });
})

// now writing the logic of back button
allFullElemBackBtn.forEach(function(back){
    back.addEventListener('click', function(){
        fullElemPage[back.id].style.display = 'none'
    })
});