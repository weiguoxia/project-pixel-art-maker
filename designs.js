// return the html to creat table
function returnTable(height, width, color = '') {
  let r ='';
  for(let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++ ) {
      if(i ===0)r += '<tr>';
      r += '<td ' + 'id=' + j + '.' +i + ' style="background-color:' + color + '"> </td>';
      if(i ==width-1)r += '</tr>';
    }
  }
  return r;
}

// remove exist table and create new table
function makeGrid(form) {
  const height = form.input_height.value;
  const width = form.input_width.value;
  $('tr').remove();
  $('table').append(returnTable(height, width));
}


// click listener for click on pixel
$('#container' ).on( 'click', 'td', function(event) {
  $(event.target).css("background-color", $("#colorPicker").val() );
});
