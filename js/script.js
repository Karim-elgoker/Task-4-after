$(document).ready(function(){

  $('#itemslider').carousel({ interval: 3000 });
  
  $('.carousel-showmanymoveone .item').each(function(){
  var itemToClone = $(this);
  
  for (var i=1;i<6;i++) {
  itemToClone = itemToClone.next();
  
  if (!itemToClone.length) {
  itemToClone = $(this).siblings(':first');
  }
  
  itemToClone.children(':first-child').clone()
  .addClass("cloneditem-"+(i))
  .appendTo($(this));
  }
  });
  });

  function validateForm() {
    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    
    if (!name || !email || !message) {
      alert("Please enter full information");
      return false;
    }

    
    if (!email.includes('@') || !email.includes('.')) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true; 
  }

  