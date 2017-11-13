$(function(){
  $('#devour-btn').on('click', function(){
    let id = $(this).data('id');
    let isDevoured = {
      devoured: 1
    };
    $.ajax(`/api/burger/${id}`, {
      method: 'PUT',
      data: isDevoured
    }).then(function(){
      location.reload();
    });
  });

  $('#add-burger').on('click', function(event){
    event.preventDefault();
    let newBurger = {
      name: $('#text-area').val().trim(),
      devoured: 0
    };
    $.ajax(`/api/burger`, {
      method: 'POST',
      data: newBurger
    }).then(function(){
      location.reload();
    });
  });
});
