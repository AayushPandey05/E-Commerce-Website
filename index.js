var first = document.querySelectorAll(".box-content>h2")[0];
var Second = document.querySelectorAll(".box-content>h2")[1];
var third = document.querySelectorAll(".box-content>h2")[2];
var fourth = document.querySelectorAll(".box-content>h2")[3];

first.addEventListener('mouseover', function handleMouseOver() {
    first.style.color = 'red';
  });
  

  first.addEventListener('mouseout', function handleMouseOut() {
    first.style.color = 'black';
  });


  Second.addEventListener('mouseover', function handleMouseOver() {
    Second.style.color = 'yellow';
  });
  

  Second.addEventListener('mouseout', function handleMouseOut() {
    Second.style.color = 'black';
  });


third.addEventListener('mouseover', function handleMouseOver() {
    third.style.color = 'aqua';
  });
  

  third.addEventListener('mouseout', function handleMouseOut() {
    third.style.color = 'black';
  });



fourth.addEventListener('mouseover', function handleMouseOver() {
    fourth.style.color = 'green';
  });
  

  fourth.addEventListener('mouseout', function handleMouseOut() {
    fourth.style.color = 'black';
  });

