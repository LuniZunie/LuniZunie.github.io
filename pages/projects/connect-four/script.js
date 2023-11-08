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
  constructor(width, height, customBoard, turn = 1) {
    this.turn = turn;
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

    this.board = Array.from({ length: width }, (_, x) => {
      const $column = this.$board.appendChild(this.$board.template('.column', false));
      return Array.from({ length: height }, (_, y) => {
        const $cell = $column.appendChild($column.template('.cell', false));
        $cell.dataset.piece = (customBoard && customBoard[x] && customBoard[x][y]) ?? 0;

        $cell.onclick = () => {
          const newY = this.options()[x];
          if (newY == undefined || newY >= this.height - y)
            return;

          $column.qs(`.cell:nth-child(${this.height - newY})`).dataset.piece = this.turn;
          this.turn = this.turn % 2 + 1;

          this.update();
        };

        return $cell.dataset.piece;
      });
    });

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
  evalBoard(player, fakeBoard) {
    /**
     * let @ = current player
     * let ! = other player
     *
     * let 0 = empty
     * let # = playable
     *
     * let W = playable win
     * let w = unplayable win
     * let L = playable loss
     * let l = unplayable loss
     */

    const { height, width } = this;

    let flatBoard = (fakeBoard ?? this.board).map(
      column => column.join('')
    ).join(',');

    flatBoard = flatBoard.replaceAll(player, '@');
    flatBoard = flatBoard.replaceAll(player % 2 + 1, '!');

    flatBoard = flatBoard.replace(/(0$|0(?=(,|@|!)))/g, '#');

    /**
     * CURREN PLAYER
    */

    // VERTICAL PLAYABLE
    flatBoard = flatBoard.replace(/#@@@/g, 'W@@@');

    // VERTICAL UNPLAYABLE
    flatBoard = flatBoard.replace(/0@@@/g, 'w@@@');

    // HORIZONTAL PLAYABLE
    flatBoard = flatBoard.replace(new RegExp(`#(?=.{${height}}@.{${height}}@.{${height}}@)`, 'g'), 'W');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@.{${height}})#(?=.{${height}}@.{${height}}@)`, 'g'), 'W');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@.{${height}}@.{${height}})#(?=.{${height}}@)`, 'g'), 'W');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@.{${height}}@.{${height}}@.{${height}})#`, 'g'), 'W');

    // HORIZONTAL UNPLAYABLE
    flatBoard = flatBoard.replace(new RegExp(`0(?=.{${height}}@.{${height}}@.{${height}}@)`, 'g'), 'w');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@.{${height}})0(?=.{${height}}@.{${height}}@)`, 'g'), 'w');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@.{${height}}@.{${height}})0(?=.{${height}}@)`, 'g'), 'w');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@.{${height}}@.{${height}}@.{${height}})0`, 'g'), 'w');

    //DIAGONAL ^ > PLAYABLE
    flatBoard = flatBoard.replace(new RegExp(`#(?=.{${height - 3}}[^,]{2}@.{${height - 1}}@.{${height - 1}}@)`, 'g'), 'W');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@.{${height - 3}}[^,]{2})#(?=.{${height - 1}}@.{${height - 1}}@)`, 'g'), 'W');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@.{${height - 3}}[^,]{2}@.{${height - 1}})#(?=.{${height - 1}}@)`, 'g'), 'W');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@.{${height - 3}}[^,]{2}@.{${height - 1}}@.{${height - 1}})#`, 'g'), 'W');

    //DIAGONAL ^ > UNPLAYABLE
    flatBoard = flatBoard.replace(new RegExp(`0(?=.{${height - 3}}[^,]{2}@.{${height - 1}}@.{${height - 1}}@)`, 'g'), 'w');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@.{${height - 3}}[^,]{2})0(?=.{${height - 1}}@.{${height - 1}}@)`, 'g'), 'w');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@.{${height - 3}}[^,]{2}@.{${height - 1}})0(?=.{${height - 1}}@)`, 'g'), 'w');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@.{${height - 3}}[^,]{2}@.{${height - 1}}@.{${height - 1}})0`, 'g'), 'w');

    //DIAGONAL v > PLAYABLE
    flatBoard = flatBoard.replace(new RegExp(`#(?=[^,]{3}.{${height - 2}}@.{${height + 1}}@.{${height + 1}}@)`, 'g'), 'W');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@[^,]{3}.{${height - 2}})#(?=.{${height + 1}}@.{${height + 1}}@)`, 'g'), 'W');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@[^,]{3}.{${height - 2}}@.{${height + 1}})#(?=.{${height + 1}}@)`, 'g'), 'W');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@[^,]{3}.{${height - 2}}@.{${height + 1}}@.{${height + 1}})#`, 'g'), 'W');

    //DIAGONAL v > UNPLAYABLE
    flatBoard = flatBoard.replace(new RegExp(`0(?=[^,]{3}.{${height - 2}}@.{${height + 1}}@.{${height + 1}}@)`, 'g'), 'w');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@[^,]{3}.{${height - 2}})0(?=.{${height + 1}}@.{${height + 1}}@)`, 'g'), 'w');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@[^,]{3}.{${height - 2}}@.{${height + 1}})0(?=.{${height + 1}}@)`, 'g'), 'w');
    flatBoard = flatBoard.replace(new RegExp(`(?<=@[^,]{3}.{${height - 2}}@.{${height + 1}}@.{${height + 1}})0`, 'g'), 'w');

    /**
     * OTHER PLAYER
    */

    flatBoard = flatBoard.replace(/#!!!/g, 'L!!!');

    // VERTICAL UNPLAYABLE
    flatBoard = flatBoard.replace(/0!!!/g, 'w!!!');

    // HORIZONTAL PLAYABLE
    flatBoard = flatBoard.replace(new RegExp(`#(?=.{${height}}!.{${height}}!.{${height}}!)`, 'g'), 'L');
    flatBoard = flatBoard.replace(new RegExp(`(?<=!.{${height}})#(?=.{${height}}!.{${height}}!)`, 'g'), 'L');
    flatBoard = flatBoard.replace(new RegExp(`(?<=!.{${height}}!.{${height}})#(?=.{${height}}!)`, 'g'), 'L');
    flatBoard = flatBoard.replace(new RegExp(`(?<=!.{${height}}!.{${height}}!.{${height}})#`, 'g'), 'L');

    // HORIZONTAL UNPLAYABLE
    flatBoard = flatBoard.replace(new RegExp(`0(?=.{${height}}!.{${height}}!.{${height}}!)`, 'g'), 'l');
    flatBoard = flatBoard.replace(new RegExp(`(?<=!.{${height}})0(?=.{${height}}!.{${height}}!)`, 'g'), 'l');
    flatBoard = flatBoard.replace(new RegExp(`(?<=!.{${height}}!.{${height}})0(?=.{${height}}!)`, 'g'), 'l');
    flatBoard = flatBoard.replace(new RegExp(`(?<=!.{${height}}!.{${height}}!.{${height}})0`, 'g'), 'l');

    //DIAGONAL ^ > PLAYABLE
    flatBoard = flatBoard.replace(new RegExp(`#(?=.{${height - 3}}[^,]{2}!.{${height - 1}}!.{${height - 1}}!)`, 'g'), 'L');
    flatBoard = flatBoard.replace(new RegExp(`(?<=!.{${height - 3}}[^,]{2})#(?=.{${height - 1}}!.{${height - 1}}!)`, 'g'), 'L');
    flatBoard = flatBoard.replace(new RegExp(`(?<=!.{${height - 3}}[^,]{2}!.{${height - 1}})#(?=.{${height - 1}}!)`, 'g'), 'L');
    flatBoard = flatBoard.replace(new RegExp(`(?<=!.{${height - 3}}[^,]{2}!.{${height - 1}}!.{${height - 1}})#`, 'g'), 'L');

    //DIAGONAL ^ > UNPLAYABLE
    flatBoard = flatBoard.replace(new RegExp(`0(?=.{${height - 3}}[^,]{2}!.{${height - 1}}!.{${height - 1}}!)`, 'g'), 'l');
    flatBoard = flatBoard.replace(new RegExp(`(?<=!.{${height - 3}}[^,]{2})0(?=.{${height - 1}}!.{${height - 1}}!)`, 'g'), 'l');
    flatBoard = flatBoard.replace(new RegExp(`(?<=!.{${height - 3}}[^,]{2}!.{${height - 1}})0(?=.{${height - 1}}!)`, 'g'), 'l');
    flatBoard = flatBoard.replace(new RegExp(`(?<=!.{${height - 3}}[^,]{2}!.{${height - 1}}!.{${height - 1}})0`, 'g'), 'l');

    //DIAGONAL v > PLAYABLE
    flatBoard = flatBoard.replace(new RegExp(`#(?=[^,]{3}.{${height - 2}}!.{${height + 1}}!.{${height + 1}}!)`, 'g'), 'L');
    flatBoard = flatBoard.replace(new RegExp(`(?<=![^,]{3}.{${height - 2}})#(?=.{${height + 1}}!.{${height + 1}}!)`, 'g'), 'L');
    flatBoard = flatBoard.replace(new RegExp(`(?<=![^,]{3}.{${height - 2}}!.{${height + 1}})#(?=.{${height + 1}}!)`, 'g'), 'L');
    flatBoard = flatBoard.replace(new RegExp(`(?<=![^,]{3}.{${height - 2}}!.{${height + 1}}!.{${height + 1}})#`, 'g'), 'L');

    //DIAGONAL v > UNPLAYABLE
    flatBoard = flatBoard.replace(new RegExp(`0(?=[^,]{3}.{${height - 2}}!.{${height + 1}}!.{${height + 1}}!)`, 'g'), 'l');
    flatBoard = flatBoard.replace(new RegExp(`(?<=![^,]{3}.{${height - 2}})0(?=.{${height + 1}}!.{${height + 1}}!)`, 'g'), 'l');
    flatBoard = flatBoard.replace(new RegExp(`(?<=![^,]{3}.{${height - 2}}!.{${height + 1}})0(?=.{${height + 1}}!)`, 'g'), 'l');
    flatBoard = flatBoard.replace(new RegExp(`(?<=![^,]{3}.{${height - 2}}!.{${height + 1}}!.{${height + 1}})0`, 'g'), 'l');

    /**
     * DEBUGGING
     */

    const evalBoard = flatBoard.split(',').map(
      column => column.split('')
    );

    evalBoard.forEach(
      (column, x) => column.forEach((cell, y) => {
        const $cell = this.$cell(x, y);
        $cell.style.opacity = +(cell != 3);
        $cell.innerHTML = cell;
      })
    );

    return { evalBoard: evalBoard, flatBoard: flatBoard };
  }
  evalPosition(player, fakeBoard, depth = 0) {
    const { evalBoard, flatBoard } = this.evalBoard(player, fakeBoard);

    const winner = this.winner(fakeBoard);
    if (winner) {
      if (winner.player == player)
        return { eval: 1 << 30, type: 'IW', depth: depth };

      return { eval: -1 << 30, type: 'IL', depth: depth };
    }

    /* if (flatBoard.match(/W/g)?.length)
      return { eval: 1 << 29, type: 'W', depth: depth };

    if (flatBoard.match(/L/g)?.length)
      return { eval: -1 << 29, type: 'L', depth: depth }; */

    if (depth < 3) {
      const options = this.options(fakeBoard);
      const evaluation = Array.from({ length: this.width }, (_, x) => {
        let y = options[x];
        if (y == null)
          return;

        y = this.height - y - 1;

        const newPlayer = player % 2 + 1;

        const fakeBoard2 = structuredClone(fakeBoard);
        fakeBoard2[x][y] = newPlayer;

        const evaluation = this.evalPosition(newPlayer, fakeBoard2, depth + 1);
        return { centerDist: Math.abs(x - this.width / 2 + 0.5), ...evaluation };
      }).reduce((bestMove, move) => {
        if (!move)
          return bestMove;
        else if (move.eval > bestMove.eval || (move.eval == bestMove.eval && (move.depth > bestMove.depth || (move.depth == bestMove.depth && move.centerDist < bestMove.centerDist))))
          return move;

        return bestMove;
      }, { x: Math.absMin(...options.map(
        (option, index) => option == undefined ? Infinity : index - this.width / 2 + 0.5
      )) + this.width / 2 - 0.5, eval: -Infinity, centerDist: Infinity });
      evaluation.eval *= -1;

      return evaluation;
    }

    /* if (flatBoard.match(/W/g)?.length > 1)
      return { eval: 1 << 30, type: 'W', depth: depth };

    if (flatBoard.match(/L/g)?.length > 1)
      return { eval: -1 << 30, type: 'L', depth: depth }; */

    const forcedWin = [ flatBoard.match(/ww[^,@!]*/), flatBoard.search(/ww[^,@!]*/) ];
    if (forcedWin[1] != -1)
      return { index: forcedWin[1], eval: 1 << (30 - forcedWin[0][0].replace(/w+/, '').length - 1), type: 'w', depth: depth + forcedWin[0][0].replace(/w+/, '').length };

    const forcedLoss = [ flatBoard.match(/ll[^,@!]*/), flatBoard.search(/ll[^,@!]*/) ];
    if (forcedLoss[1] != -1)
      return { index: forcedLoss[1], eval: -1 << (30 - forcedLoss[0][0].replace(/l+/, '').length - 1), type: 'l', depth: depth + forcedLoss[0][0].replace(/l+/, '').length };

    return { eval: ((flatBoard.match(/W/g)?.length ?? 0) + flatBoard.match(/w/g)?.length ?? 0) - ((flatBoard.match(/L/g)?.length ?? 0) + flatBoard.match(/l/g)?.length ?? 0), depth: depth };
  }
  indexToColumn(index) {
    return index / (this.height + 1) << 0;
  }
  async update() {
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 1)
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
      this.botV5();
  }
  botV5() {
    console.clear();
    const options = this.options();

    const x = Array.from({ length: this.width }, (_, x) => {
      let y = options[x];
      if (y == undefined)
        return;

      y = this.height - 1 - y;

      const fakeBoard = structuredClone(this.board);
      fakeBoard[x][y] = 3;

      const winner = this.winner(fakeBoard);
      if (winner)
        return { x: x, eval: Infinity, ...winner };

      fakeBoard[x][y] = this.turn;

      const evaluation = this.evalPosition(this.turn, fakeBoard);
      delete evaluation.centerDist;
      console.log({ x: x, centerDist: Math.abs(x - this.width / 2 + 0.5), ...evaluation })

      return { x: x, centerDist: Math.abs(x - this.width / 2 + 0.5), ...evaluation };
    }).reduce((bestMove, move) => {
      if (!move)
        return bestMove;
      else if (move.eval > bestMove.eval || (move.eval == bestMove.eval && (move.depth > bestMove.depth || (move.depth == bestMove.depth && move.centerDist < bestMove.centerDist))))
        return move;

      return bestMove;
    }, { x: Math.absMin(...options.map(
      (option, index) => option == undefined ? Infinity : index - this.width / 2 + 0.5
    )) + this.width / 2 - 0.5, eval: -Infinity, centerDist: Infinity })?.x;

    const y = options[x];

    this.$board.qs(`.column:nth-child(${x + 1}) .cell:nth-child(${this.height - y})`).dataset.piece = this.turn;
    this.turn = this.turn % 2 + 1;

    this.update();
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

/* let board = new Board(7, 6, For(x => {
  return [
    [0,0,0,2,0,0,0],
    [0,0,1,2,2,2,0],
    [0,0,1,1,2,1,0],
    [1,2,2,2,1,1,0],
    [1,1,1,2,2,2,0],
    [2,1,1,1,2,1,0],
  ].map(
    column => column[x]
  );
}, 7));

const $score = body.appendChild('span');
$score.innerHTML = JSON.stringify(board.evalPosition(2)); */

/**
 * EVAL BOARD CHECKER
 */

/* let board = new Board(17, 9, For(x => {
  return [
    [1,1,1,0,0,0,0,2,2,2,3,3,0,3,3,1,1],
    [0,3,0,2,1,2,1,0,3,0,3,3,3,1,1,0,3],
    [2,3,2,1,3,3,2,1,3,1,3,3,3,0,1,3,3],
    [2,0,1,3,1,2,3,2,0,1,3,3,1,1,3,1,3],
    [2,0,3,3,3,3,3,3,0,1,3,3,3,0,3,3,0],
    [3,3,3,3,3,2,2,0,2,3,2,3,2,3,3,3,3],
    [1,1,0,1,3,1,0,1,1,3,3,2,3,0,3,3,3],
    [2,0,2,2,3,0,2,2,2,3,2,3,0,3,2,3,3],
    [0,1,1,1,3,3,3,3,3,0,3,3,3,2,3,2,3],
  ].map(
    column => column[x]
  );
}, 17));

board.evalBoard(1); */