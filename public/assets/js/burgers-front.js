$(() => {
  $('.devour-btn').on('click', function update() {
    const id = $(this).data('id');
    const isDevoured = {
      devoured: 1,
    };
    console.log(id);
    $.ajax(`/api/burger/${id}`, {
      method: 'PUT',
      data: isDevoured,
    }).then(() => {
      location.reload();
    });
  });

  $('#add-burger').on('click', () => {
    const newBurger = {
      name: $('#text-area').val().trim(),
      devoured: 0,
    };
    $.ajax('/api/burger', {
      method: 'POST',
      data: newBurger,
    }).then(() => {
      location.reload();
    });
  });

  $('.delete-btn').on('click', function deleteBurger() {
    const id = $(this).data('id');
    $.ajax(`/api/burger/${id}`, {
      method: 'DELETE',
    }).then(() => {
      location.reload();
    });
  });
});
