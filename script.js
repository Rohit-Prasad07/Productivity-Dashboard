
function openFeatures(){
    var allElems =  document.querySelectorAll('.elem');
var fullElemPage = document.querySelectorAll('.fullElem');
var fullElemPageBackBtn = document.querySelectorAll('.fullElem .back');

allElems.forEach(function(elem){
    elem.addEventListener('click',function(){
       fullElemPage[elem.id].style.display="block";
    })
})


fullElemPageBackBtn.forEach(function(back){
  back.addEventListener('click',function(){
    fullElemPage[back.id].style.display="none";
  })
})

}

openFeatures();




// Todo Task Code 
//problem in reload
let form = document.querySelector('.addTask form');
let taskInput =  document.querySelector('.addTask form input')
let taskDetailsInput =      document.querySelector('.allTask form textarea ')
form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log(taskInput.value);
  console.log(taskDetailsInput.value)
});