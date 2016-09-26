/// <reference path="jquery.d.ts" />
var Cell = (function () {
    function Cell() {
        this.element = $("<div class='cell'></div>")[0];
        this.occupied = "black";
        this.element.style.backgroundColor = "black";
    }
    Cell.prototype.setColor = function (color) {
        this.occupied = color;
        this.element.style.backgroundColor = color;
    };
    Cell.prototype.draw = function () {
        this.element.style.backgroundColor = this.occupied;
    };
    return Cell;
}());
var Piece = (function () {
    function Piece() {
        this.pos = [];
        this.pos[0] = 0;
        this.pos[1] = 4;
        this.blocks = [];
        this.curRot = 0;
        for (var i = 0; i < 4; ++i) {
            this.blocks[i] = [];
        }
        var type = Math.floor(Math.random() * 7);
        if (type == 0) {
            this.blocks[0].push([0, 0]);
            this.blocks[1].push([1, -2]);
            this.blocks[0].push([1, 0]);
            this.blocks[1].push([1, -1]);
            this.blocks[0].push([2, 0]);
            this.blocks[1].push([1, 0]);
            this.blocks[0].push([3, 0]);
            this.blocks[1].push([1, 1]);
            this.blocks[2].push([0, 0]);
            this.blocks[3].push([2, -1]);
            this.blocks[2].push([1, 0]);
            this.blocks[3].push([2, 0]);
            this.blocks[2].push([2, 0]);
            this.blocks[3].push([2, 1]);
            this.blocks[2].push([3, 0]);
            this.blocks[3].push([2, 2]);
            this.color = 'cyan';
        }
        else if (type == 1) {
            this.blocks[0].push([0, 0]);
            this.blocks[0].push([1, 0]);
            this.blocks[0].push([1, 1]);
            this.blocks[0].push([0, 1]);
            this.blocks[1].push([0, 0]);
            this.blocks[1].push([1, 0]);
            this.blocks[1].push([1, 1]);
            this.blocks[1].push([0, 1]);
            this.blocks[2].push([0, 0]);
            this.blocks[2].push([1, 0]);
            this.blocks[2].push([1, 1]);
            this.blocks[2].push([0, 1]);
            this.blocks[3].push([0, 0]);
            this.blocks[3].push([1, 0]);
            this.blocks[3].push([1, 1]);
            this.blocks[3].push([0, 1]);
            this.color = 'yellow';
        }
        else if (type == 2) {
            this.blocks[0].push([0, 0]);
            this.blocks[0].push([1, -1]);
            this.blocks[0].push([1, 0]);
            this.blocks[0].push([1, 1]);
            this.blocks[1].push([0, 1]);
            this.blocks[1].push([1, 1]);
            this.blocks[1].push([2, 1]);
            this.blocks[1].push([1, 0]);
            this.blocks[2].push([1, 0]);
            this.blocks[2].push([0, -1]);
            this.blocks[2].push([0, 0]);
            this.blocks[2].push([0, 1]);
            this.blocks[3].push([0, -1]);
            this.blocks[3].push([1, -1]);
            this.blocks[3].push([2, -1]);
            this.blocks[3].push([1, 0]);
            this.color = 'purple';
        }
        else if (type == 3) {
            this.blocks[0].push([0, 0]);
            this.blocks[0].push([1, 0]);
            this.blocks[0].push([1, 1]);
            this.blocks[0].push([2, 1]);
            this.blocks[1].push([0, 0]);
            this.blocks[1].push([0, 1]);
            this.blocks[1].push([1, 0]);
            this.blocks[1].push([1, -1]);
            this.blocks[2].push([0, 0]);
            this.blocks[2].push([1, 0]);
            this.blocks[2].push([1, 1]);
            this.blocks[2].push([2, 1]);
            this.blocks[3].push([0, 0]);
            this.blocks[3].push([0, 1]);
            this.blocks[3].push([1, 0]);
            this.blocks[3].push([1, -1]);
            this.color = 'green';
        }
        else if (type == 4) {
            this.blocks[0].push([0, 1]);
            this.blocks[0].push([1, 0]);
            this.blocks[0].push([1, 1]);
            this.blocks[0].push([2, 0]);
            this.blocks[1].push([0, 0]);
            this.blocks[1].push([0, -1]);
            this.blocks[1].push([1, 0]);
            this.blocks[1].push([1, 1]);
            this.blocks[2].push([0, 1]);
            this.blocks[2].push([1, 0]);
            this.blocks[2].push([1, 1]);
            this.blocks[2].push([2, 0]);
            this.blocks[3].push([0, 0]);
            this.blocks[3].push([0, -1]);
            this.blocks[3].push([1, 0]);
            this.blocks[3].push([1, 1]);
            this.color = 'red';
        }
        else if (type == 5) {
            this.blocks[0].push([0, 0]);
            this.blocks[0].push([1, 0]);
            this.blocks[0].push([2, 0]);
            this.blocks[0].push([2, -1]);
            this.blocks[1].push([0, -1]);
            this.blocks[1].push([0, 0]);
            this.blocks[1].push([0, 1]);
            this.blocks[1].push([1, 1]);
            this.blocks[2].push([0, 1]);
            this.blocks[2].push([0, 0]);
            this.blocks[2].push([1, 0]);
            this.blocks[2].push([2, 0]);
            this.blocks[3].push([1, -1]);
            this.blocks[3].push([1, 0]);
            this.blocks[3].push([1, 1]);
            this.blocks[3].push([0, -1]);
            this.color = 'blue';
        }
        else {
            this.blocks[0].push([0, 0]);
            this.blocks[0].push([1, 0]);
            this.blocks[0].push([2, 0]);
            this.blocks[0].push([2, 1]);
            this.blocks[1].push([1, -1]);
            this.blocks[1].push([1, 0]);
            this.blocks[1].push([1, 1]);
            this.blocks[1].push([0, 1]);
            this.blocks[2].push([0, -1]);
            this.blocks[2].push([0, 0]);
            this.blocks[2].push([1, 0]);
            this.blocks[2].push([2, 0]);
            this.blocks[3].push([0, -1]);
            this.blocks[3].push([0, 0]);
            this.blocks[3].push([0, 1]);
            this.blocks[3].push([1, -1]);
            this.color = '#FFA500';
        }
    }
    Piece.prototype.moveLeft = function () {
        if (this.pos[1])
            --this.pos[1];
    };
    Piece.prototype.moveRight = function () {
        if (this.pos[1] < 9)
            ++this.pos[1];
    };
    Piece.prototype.moveDown = function () {
        if (this.pos[0] < 21)
            ++this.pos[0];
    };
    Piece.prototype.rotate = function () {
        this.curRot--;
        if (this.curRot === -1)
            this.curRot = 3;
    };
    Piece.prototype.getCells = function () {
        var cells;
        cells = [];
        for (var i = 0; i < this.blocks.length; ++i)
            cells.push([this.blocks[this.curRot][i][0] + this.pos[0], this.blocks[this.curRot][i][1] + this.pos[1]]);
        return cells;
    };
    return Piece;
}());
var Board = (function () {
    function Board(el) {
        this.el = el;
        this.cells = [];
        this.element = el;
        // TODO: hide top 2 rows
        for (var r = 0; r < 22; ++r) {
            this.cells[r] = [];
            for (var c = 0; c < 10; ++c) {
                var cell = new Cell();
                this.cells[r][c] = cell;
                this.element.appendChild(cell.element);
            }
        }
    }
    Board.prototype.putPiece = function (piece, color) {
        var cells = piece.getCells();
        for (var i = 0; i < cells.length; ++i) {
            var pos = cells[i];
            this.cells[pos[0]][pos[1]].setColor(color);
        }
    };
    Board.prototype.isValid = function (piece) {
        var cells = piece.getCells();
        for (var i = 0; i < cells.length; ++i) {
            var pos = cells[i];
            if (pos[0] > 21 || pos[0] < 0 || pos[1] < 0 || pos[1] > 9)
                return false;
            if (this.cells[pos[0]][pos[1]].occupied !== "black") {
                return false;
            }
        }
        return true;
    };
    Board.prototype.checkLines = function () {
        var lines = 0;
        for (var i = 0; i < 22; ++i) {
            var allOccupied = true;
            for (var j = 0; j < 10; ++j)
                if (this.cells[i][j].occupied === "black") {
                    allOccupied = false;
                }
            if (allOccupied) {
                ++lines;
                for (var k = i; k - 1 >= 0; --k)
                    for (var j = 0; j < 10; ++j) {
                        this.cells[k][j].occupied = this.cells[k - 1][j].occupied;
                    }
                for (var j = 0; j < 10; ++j)
                    this.cells[0][j].occupied = "black";
            }
        }
        this.reDraw();
        return lines;
    };
    Board.prototype.reDraw = function () {
        for (var i = 0; i < 22; ++i)
            for (var j = 0; j < 10; ++j)
                this.cells[i][j].draw();
    };
    return Board;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.board = new Board($("#board")[0]);
        this.piece = new Piece();
        this.board.putPiece(this.piece, this.piece.color);
        this.lastFrameTime = 0;
        this.score = 0;
        document.getElementById("score").innerHTML = "<p>Score: 0</p>";
        document.onkeydown = (function (event) {
            _this.board.putPiece(_this.piece, "black");
            var clone = jQuery.extend(true, {}, _this.piece);
            event.preventDefault();
            if (event.keyCode == 39) {
                _this.piece.moveRight();
            }
            else if (event.keyCode == 37) {
                _this.piece.moveLeft();
            }
            else if (event.keyCode == 40) {
                _this.piece.moveDown();
            }
            else if (event.keyCode == 38) {
                _this.piece.rotate();
            }
            else if (event.keyCode == 32) {
                do {
                    clone = jQuery.extend(true, {}, _this.piece);
                    _this.piece.moveDown();
                    ++_this.score;
                } while (_this.board.isValid(_this.piece));
            }
            if (!_this.board.isValid(_this.piece)) {
                delete _this.piece;
                _this.piece = clone;
            }
            _this.board.putPiece(_this.piece, _this.piece.color);
        });
        requestAnimationFrame(this.mainLoop.bind(this));
    }
    Game.prototype.mainLoop = function (timestamp) {
        if (timestamp < this.lastFrameTime + (1000)) {
            requestAnimationFrame(this.mainLoop.bind(this));
            return;
        }
        this.board.putPiece(this.piece, "black");
        var clone = jQuery.extend(true, {}, this.piece);
        this.piece.moveDown();
        if (!this.board.isValid(this.piece)) {
            this.board.putPiece(clone, clone.color);
            var lines = this.board.checkLines();
            if (lines == 1)
                this.score += 40;
            else if (lines == 2) {
                this.score += 100;
            }
            else if (lines == 3) {
                this.score += 200;
            }
            else if (lines == 4) {
                this.score += 1200;
            }
            delete this.piece;
            this.piece = new Piece();
        }
        this.board.putPiece(this.piece, this.piece.color);
        document.getElementById("score").innerHTML = "<p>Score: " + this.score + "</p>";
        this.lastFrameTime = timestamp;
        requestAnimationFrame(this.mainLoop.bind(this));
    };
    return Game;
}());
$(new Function("var game = new Game();"));
