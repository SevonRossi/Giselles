document.querySelector('#ordernow').addEventListener('click', hide)

function hide(){
    document.querySelector('.order').style.display = 'none';
	document.querySelector('#ordernow').style.display = 'none';
    food.style.display = 'flex';
    food.style.position = 'absolute';
    food.style.width = '23%';
    food.style.top = '1050px';
    food.style.left = '24px';
    document.querySelector('#yummy').style.paddingLeft = '10px';
    // document.querySelectorAll('#yummy').style.opacity = '1';
       
}   

