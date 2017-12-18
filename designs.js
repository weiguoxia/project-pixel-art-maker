function returnTable(height, width, color = '') {
  var r ='';
  for(let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++ ) {
      if(i ===0)r += '<tr>';
      r += '<td ' + 'id=' + j + '.' +i + ' style="background-color:' + color + '"> </td>';
      if(i ==width-1)r += '</tr>';
    }
  }
  return r;
}

function makeGrid(form) {
  var height = form.input_height.value;
  var width = form.input_width.value;
  $('tr').remove();
  $('table').append(returnTable(height, width));
}
$('#container' ).on( 'click', 'td', function(event) {
  $(event.target).css("background-color", $("#colorPicker").val() );
});
