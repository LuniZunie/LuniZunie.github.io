/*
  Copyright 2023 LuniZunie

  Licensed under the Apache License, Version 2.0 (the 'License');
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an 'AS IS' BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

/**
 * CLASS DECLARATION
 */

class Board {
  turn = 1;
  constructor(width, height, customBoard) {
    this.width = width;
    this.height = height;

    this.statusRegExpP1 = new RegExp(`(
      (1|3)(1|3)(1|3)(1|3)| /* horizontal (color 1) */
      (1|3).{${this.height}}(1|3).{${this.height}}(1|3).{${this.height}}(1|3)| /* vertical (color 1) */
      (1|3)\\d{3}.{${this.height - 2}}(1|3).{${this.height + 1}}(1|3).{${this.height + 1}}(1|3)| /* diagnol v > (color 1) */
      (1|3).{${this.height - 3}}\\d{2}(1|3).{${this.height - 1}}(1|3).{${this.height - 1}}(1|3) /* diagnol ^ > (color 1) */
    )`.replace(/(\/\*.*\*\/|\n|\s)/g, ''));

    this.statusRegExpP2 = new RegExp(`(
      (2|3)(2|3)(2|3)(2|3)| /* horizontal (color 2) */
      (2|3).{${this.height}}(2|3).{${this.height}}(2|3).{${this.height}}(2|3)| /* vertical (color 2) */
      (2|3)\\d{3}.{${this.height - 2}}(2|3).{${this.height + 1}}(2|3).{${this.height + 1}}(2|3)| /* diagnol v > (color 2) */
      (2|3).{${this.height - 3}}\\d{2}(2|3).{${this.height - 1}}(2|3).{${this.height - 1}}(2|3) /* diagnol ^ > (color 2) */
    )`.replace(/(\/\*.*\*\/|\n|\s)/g, ''));

    this.$board = body.template('.board');
    this.$board.style.setProperty('--cellSize', `min(${90 / width}vw, ${90 / height}vh)`)

    this.$board.style.left =`calc(50vw - var(--cellSize) * ${width / 2})`;
    this.$board.style.top =`calc(50vh - var(--cellSize) * ${height / 2})`;

    this.board = customBoard ?? For(x => {
      const $column = this.$board.appendChild(this.$board.template('.column', false))
      return For(y => {
        const $cell = $column.appendChild($column.template('.cell', false))
        $cell.dataset.piece = 0;

        $cell.onclick = () => {
          const newY = this.options()[x];
          if (newY == undefined || newY >= this.height - y)
            return;

          $column.qs(`.cell:nth-child(${this.height - newY})`).dataset.piece = this.turn;
          this.turn = this.turn % 2 + 1;

          this.update();
        };

        return 0;
      }, height);
    }, width);

    this.$board.qsa('.template').forEach(
      template => template.remove()
    );

    this.update();
  }
  options(fakeBoard) {
    return (fakeBoard ?? this.board).map(column => {
      const height = column.filter(
        value => value
      ).length;

      return height < this.height ? height : undefined;
    });
  }
  cell(x, y) {
    return this.board[x] && this.board[x][y];
  }
  $cell(x, y) {
    if (y === undefined)
      return this.$board.qsa('.cell')[x];
    else
      return this.$board.qs(`.column:nth-child(${x + 1}) > .cell:nth-child(${y + 1})`);
  }
  winner(fakeBoard) {
    const flatBoard = (fakeBoard ?? this.board).map(
      column => column.join('')
    ).join(',');

    let winner = flatBoard.search(this.statusRegExpP1);
    let player = 1;
    if (winner == -1) {
      winner = flatBoard.search(this.statusRegExpP2);
      if (winner == -1)
        return null;

      player = 2;
    }

    return { player: player, index: winner - (winner / (this.height + 1) << 0) };
  }
  wins() {

  }
  async update() {
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 750)
    });

    this.board = this.$board.children.map(
      $column => $column.children.map(
        $cell => +$cell.dataset.piece
      )
    );

    let winner = this.winner();
    if (winner || !this.options().filter(
      value => value != null
    ).length) {
      this.$board.qsa('.cell').forEach(
        $cell => $cell.onclick = null
      );

      if (winner)
        this.$cell(winner.index).style.borderColor = 'dodgerblue';

      const $playAgain = body.qs('.playAgain');

      $playAgain.qs('.resultText').innerHTML = winner ? `Player #${winner.player} win` : `It's a draw`;

      $playAgain.qs('.click').onclick = () => {
        $playAgain.classList.add('hidden');

        this.$board.remove();
        board = new Board(this.width, this.height);
      };

      $playAgain.classList.remove('hidden');
    } else if (this.turn == 1)
      this.botV1();
    else if (this.turn == 2)
      this.botV4();
  }
  botV4() {
    const options = this.options();

    const badMoves = [];
    let x = For(x => {
      let y = options[x];
      if (y == undefined)
        return;

      y = this.height - 1 - y;

      const fakeBoard = structuredClone(this.board);
      fakeBoard[x][y] = 3;

      this.$board.qs(`.column:nth-child(${x + 1}) .cell:nth-child(${this.height - options[x]})`).style.borderColor = null;

      let winner = this.winner(fakeBoard);
      if (winner)
        return { x: x, moves: 0, ...winner };
      else {
        fakeBoard[x][y] = this.turn;
        fakeBoard[x][y - 1] = 3;
        winner = this.winner(fakeBoard);

        if (winner?.player == this.turn) {
          fakeBoard[x][y - 2] = this.turn;
          winner = this.winner(fakeBoard);
          if (winner)
            return { x: x, moves: 2, ...winner };
        }

        if (winner)
          badMoves.push(x);
      }

      return;
    }, this.width).filter(
      value => value != undefined
    );

    const minWinMove = Math.min(...x.map(
      value => value.moves
    ));

    x.forEach(
      x => board.$cell(x.x, this.height - options[x.x]).style.borderColor = 'red'
    )
    x = x.reduce(
      (return_, value) => value.moves == minWinMove ? (return_?.player == this.turn ? return_ : value) : return_,
    undefined)?.x;

    if (x == undefined) {
      x = options.map(
        (value, index) => value == null ? null : index
      ).filter(
        value => value != null && !badMoves.includes(value)
      );

      if (!x.length)
        return this.botRandom();
      else
        x = x.random();
    }

    const y = options[x];

    this.$board.qs(`.column:nth-child(${x + 1}) .cell:nth-child(${this.height - y})`).dataset.piece = this.turn;
    this.turn = this.turn % 2 + 1;

    this.update();
  }
  botV3() {
    const options = this.options();

    const badMoves = [];
    let x = For(x => {
      let y = options[x];
      if (y == undefined)
        return;

      y = this.height - 1 - y;

      const fakeBoard = structuredClone(this.board);
      fakeBoard[x][y] = 3;

      this.$board.qs(`.column:nth-child(${x + 1}) .cell:nth-child(${this.height - options[x]})`).style.borderColor = null;

      const winner = this.winner(fakeBoard);
      if (winner)
        return { x: x, ...winner };
      else {
        fakeBoard[x][y] = this.turn;
        fakeBoard[x][y - 1] = 3;
        const winner = this.winner(fakeBoard);
        if (winner)
          badMoves.push(x);
      }

      return;
    }, this.width).reduce(
      (return_, value) => return_?.player == this.turn ? return_ : value ?? return_,
    undefined)?.x;

    if (x == undefined) {
      x = options.map(
        (value, index) => value == null ? null : index
      ).filter(
        value => value != null && !badMoves.includes(value)
      );

      if (!x.length)
        return this.botRandom();
      else
        x = x.random();
    }

    const y = options[x];

    this.$board.qs(`.column:nth-child(${x + 1}) .cell:nth-child(${this.height - y})`).dataset.piece = this.turn;
    this.turn = this.turn % 2 + 1;

    this.update();
  }
  botV2() {
    const options = this.options();

    const badMoves = [];
    let x = For(x => {
      let y = options[x];
      if (y == undefined)
        return;

      y = this.height - 1 - y;

      const fakeBoard = structuredClone(this.board);
      fakeBoard[x][y] = 3;

      this.$board.qs(`.column:nth-child(${x + 1}) .cell:nth-child(${this.height - options[x]})`).style.borderColor = null;

      const winner = this.winner(fakeBoard);
      if (winner)
        return { x: x, ...winner };
      else {
        fakeBoard[x][y] = this.turn;
        fakeBoard[x][y - 1] = this.turn % 2 + 1;
        const winner = this.winner(fakeBoard);
        if (winner)
          badMoves.push(x);
      }

      return;
    }, this.width).reduce(
      (return_, value) => return_?.player == this.turn ? return_ : value ?? return_,
    undefined)?.x;

    if (x == undefined) {
      x = options.map(
        (value, index) => value == null ? null : index
      ).filter(
        value => value != null && !badMoves.includes(value)
      );

      if (!x.length)
        return this.botRandom();
      else
        x = x.random();
    }

    const y = options[x];

    this.$board.qs(`.column:nth-child(${x + 1}) .cell:nth-child(${this.height - y})`).dataset.piece = this.turn;
    this.turn = this.turn % 2 + 1;

    this.update();
  }
  botV1() {
    const options = this.options();

    const x = For(x => {
      let y = options[x];
      if (y == undefined)
        return;

      y = this.height - 1 - y;

      const fakeBoard = structuredClone(this.board);
      fakeBoard[x][y] = 3;

      const winner = this.winner(fakeBoard);
      if (winner)
        return { x: x, ...winner };

      return;
    }, this.width).reduce(
      (return_, value) => return_?.player == this.turn ? return_ : value ?? return_,
    undefined)?.x;

    if (x == undefined)
      return this.botRandom();

    const y = options[x];

    this.$board.qs(`.column:nth-child(${x + 1}) .cell:nth-child(${this.height - y})`).dataset.piece = this.turn;
    this.turn = this.turn % 2 + 1;

    this.update();
  }
  botRandom() {
    const options = this.options();

    const x = options.map(
      (value, index) => value == null ? null : index
    ).filter(
      value => value != null
    ).random();

    const y = options[x];

    this.$board.qs(`.column:nth-child(${x + 1}) .cell:nth-child(${this.height - y})`).dataset.piece = this.turn;
    this.turn = this.turn % 2 + 1;

    this.update();
  }
}

/**
 * DECLARATION
*/

let board = new Board(7, 6);