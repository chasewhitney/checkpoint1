clickCount=0;
$(document).ready(function(){
  console.log('jQuery loaded');

  $('#generate').on('click', function(){
    console.log('appending dom');
    clickCount += 1;
    $('body').append('<div class="red"></div>');
    $('div:last').append('<p>' + clickCount + '</p>');
    $('div:last').append('<button id="swap">Swap</button>' + '<button id="delete">Delete</button>');
  });

  $('body').on('click', '#swap', function(){
    console.log('clicked swap');
    $(this).parent().css('background-color', 'yellow');
  });

  $('body').on('click', '#delete', function(){
    console.log('clicked delete');
    $(this).parent().remove();
  });
});
