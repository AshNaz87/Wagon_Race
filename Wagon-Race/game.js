$(document).ready(function() {
  startCars();
});

function startCars() {
  $(document).on('keyup', function(e) {
    if (e.keyCode == 39 /* right-arrow */) {
      movePlayer(1);
    } else if (e.keyCode == 68 /* D */) {
      movePlayer(2);
    }
  });
}

function stopCars() {
  $(document).off('keyup');
}

function movePlayer(player) {
  var activeSquare = $('.player' + player + ' .active');
  activeSquare.next().addClass('active');
  activeSquare.removeClass('active');
  checkIfGameFinised();
}


function checkIfGameFinised() {
  var finishedSquare = $('td:last-child.active');
  if (finishedSquare.length > 0) {
    var player = finishedSquare.parents('tr').hasClass('player1') ? 'Player 1' : 'Player 2';
    alert(player + ' wins!');
    stopCars();
  };
}
