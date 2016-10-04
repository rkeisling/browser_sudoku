var list_o_rows = [[[5, 3, 4, 6, 7, 8, 9, 1, 2],
               [6, 7, 2, 1, 9, 5, 3, 4, 8],
               [1, 9, 8, 3, 4, 2, 5, 6, 7],
               [8, 5, 9, 7, 6, 1, 4, 2, 3],
               [4, 2, 6, 8, 5, 3, 7, 9, 1],
               [7, 1, 3, 9, 2, 4, 8, 5, 6],
               [9, 6, 1, 5, 3, 7, 2, 8, 4],
               [2, 8, 7, 4, 1, 9, 6, 3, 5],
               [3, 4, 5, 2, 8, 6, 1, 7, 9]],
              [[4, 8, 5, 7, 3, 9, 6, 1, 2],
               [3, 7, 2, 1, 5, 6, 9, 8, 4],
               [6, 1, 9, 2, 4, 8, 3, 7, 5],
               [2, 6, 1, 3, 7, 5, 8, 4, 9],
               [7, 9, 4, 8, 2, 1, 5, 3, 6],
               [5, 3, 8, 6, 9, 4, 7, 2, 1],
               [8, 5, 3, 4, 6, 2, 1, 9, 7],
               [9, 4, 7, 5, 1, 3, 2, 6, 8],
               [1, 2, 6, 9, 8, 7, 4, 5, 3]],
              [[5, 6, 3, 2, 1, 9, 8, 4, 7],
               [7, 1, 8, 4, 5, 3, 9, 2, 6],
               [2, 9, 4, 6, 7, 8, 3, 1, 5],
               [1, 2, 5, 7, 9, 6, 4, 3, 8],
               [6, 8, 7, 3, 4, 2, 1, 5, 9],
               [3, 4, 9, 1, 8, 5, 7, 6, 2],
               [4, 5, 1, 8, 2, 7, 6, 9, 3],
               [9, 7, 6, 5, 3, 1, 2, 8, 4],
               [8, 3, 2, 9, 6, 4, 5, 7, 1]]];

var board = {
  rows: list_o_rows[Math.floor(Math.random() * list_o_rows.length)],

  guesses: [[null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null]],

  // choose: function (choices) {
  //   var index = Math.floor(Math.random() * choices.length);
  //   return choices[index];
  // },

  random_cells: function () {
    var trs = document.getElementById('board').getElementsByTagName('tr');
    for (var i = 0; i < this.guesses.length; i++) {
      var tds = trs[i].getElementsByTagName('td');
      for (var j = 0; j < this.guesses[i].length; j++) {
        var value = this.rows[i][j];
        var input = tds[j].getElementsByTagName('input')[0];
        num = Math.random();
        if (num >= 0.7) {
          input.value =  value;
          this.guesses[i][j] = this.rows[i][j];
        }
      }
    }
  },
  check: function () {
    this.readGuesses();
    this.markGuesses();
  },

  readGuesses: function () {
    var trs = document.getElementById('board').getElementsByTagName('tr');
    for (var i = 0; i < trs.length; i++) {
      var tds = trs[i].getElementsByTagName('td');
      for (var j = 0; j < tds.length; j++) {
        var value = tds[j].getElementsByTagName('input')[0].value;
        this.guesses[i][j] = Number(value);
      }
    }
  },

  markGuesses: function () {
    var trs = document.getElementById('board').getElementsByTagName('tr');
    for (var i = 0; i < this.guesses.length; i++) {
      var tds = trs[i].getElementsByTagName('td');
      for (var j = 0; j < this.guesses[i].length; j++) {
        var value = this.guesses[i][j];
        var input = tds[j].getElementsByTagName('input');
        input.value =  value;
        if (this.guesses[i][j] === this.rows[i][j]) {
          tds[j].style.backgroundColor = '#b9de67';
        }
        else {
          tds[j].style.backgroundColor = '#c84149';
        }
      }
    }
  }
}
board.random_cells();
