/// <reference path="jquery.d.ts" />

class Cell {
	element: HTMLElement;
	occupied: string;
	constructor() {
		this.element = $("<div class='cell'></div>")[0];
		this.occupied = "black";
		this.element.style.backgroundColor = "black";
	}

	public setColor(color: string) {
		this.occupied = color;
		this.element.style.backgroundColor = color;
	}

	public draw() {
		this.element.style.backgroundColor = this.occupied;
	}
}

class Piece {
	pos: number[]; //top left corner, line column
	blocks: number[][][];
	color: string;
	curRot: number;
	constructor() {
		this.pos = [];
		this.pos[0] = 0; this.pos[1] = 4;
		this.blocks = [];
		this.curRot = 0;
		for (var i = 0; i < 4; ++i) {
			this.blocks[i] = [];
		}
		var type = Math.floor(Math.random()*7);
		if (type == 0) {
			this.blocks[0].push([0, 0]); this.blocks[1].push([1,-2]);
			this.blocks[0].push([1, 0]); this.blocks[1].push([1,-1]);
			this.blocks[0].push([2, 0]); this.blocks[1].push([1,0]);
			this.blocks[0].push([3, 0]); this.blocks[1].push([1,1]);

			this.blocks[2].push([0, 0]); this.blocks[3].push([2,-1]);
			this.blocks[2].push([1, 0]); this.blocks[3].push([2,0]);
			this.blocks[2].push([2, 0]); this.blocks[3].push([2,1]);
			this.blocks[2].push([3, 0]); this.blocks[3].push([2,2]);
			this.color = 'cyan';
		} else if (type == 1) {
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
		} else if (type == 2) {
			this.blocks[0].push([0, 0]);
			this.blocks[0].push([1,-1]);
			this.blocks[0].push([1, 0]);
			this.blocks[0].push([1, 1]);

			this.blocks[1].push([0, 1]);
			this.blocks[1].push([1, 1]);
			this.blocks[1].push([2, 1]);
			this.blocks[1].push([1, 0]);

			this.blocks[2].push([1, 0]);
			this.blocks[2].push([0,-1]);
			this.blocks[2].push([0, 0]);
			this.blocks[2].push([0, 1]);

			this.blocks[3].push([0, -1]);
			this.blocks[3].push([1, -1]);
			this.blocks[3].push([2, -1]);
			this.blocks[3].push([1, 0]);
			this.color = 'purple';
		} else if (type == 3) {
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
		} else if (type == 4) {
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
		} else if(type == 5) {
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
		} else {
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

	public moveLeft() {
		if (this.pos[1]) --this.pos[1];
	}

	public moveRight() {
		if (this.pos[1] < 9) ++this.pos[1];
	}

	public moveDown() {
		if (this.pos[0] < 21) ++this.pos[0];
	}

	public rotate() {
		this.curRot --;
		if (this.curRot === -1)
			this.curRot = 3;
	}

	public getCells(): number[][] {
		let cells: number[][];
		cells = [];
		for (var i = 0; i < this.blocks.length; ++i)
			cells.push([this.blocks[this.curRot][i][0] + this.pos[0], this.blocks[this.curRot][i][1] + this.pos[1]]);
		return cells;
	}
}

class Board {
	private cells: Cell[][];
	private element: HTMLElement;
	constructor(public el: HTMLElement) {
		this.cells = [];
		this.element = el
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

	public putPiece(piece: Piece, color: string) {
		let cells = piece.getCells();
		for (var i = 0; i < cells.length; ++i) {
			let pos = cells[i];
			this.cells[pos[0]][pos[1]].setColor(color);
		}
	}

	public isValid(piece: Piece) {
		let cells = piece.getCells();
		for (var i = 0; i < cells.length; ++i) {
			let pos = cells[i];
			if(pos[0] > 21 || pos[0] < 0 || pos[1] < 0 || pos[1] > 9)
				return false;
			if (this.cells[pos[0]][pos[1]].occupied !== "black") {
				return false;
			}
		}
		return true;
	}

	public checkLines() {
		let lines = 0;
		for (var i = 0; i < 22; ++i) {
			var allOccupied = true;
			for (var j = 0; j < 10; ++j)
				if (this.cells[i][j].occupied === "black") {
					allOccupied = false;
				}
			if (allOccupied) {
				++lines;
				for (var k = i; k-1 >= 0; --k)
					for(var j = 0; j < 10; ++j) {
						this.cells[k][j].occupied = this.cells[k-1][j].occupied;
					}
				for (var j = 0; j < 10; ++j)
					this.cells[0][j].occupied = "black";
			}
		}
		this.reDraw();
		return lines;
	}

	private reDraw() {
		for (var i = 0; i < 22; ++i)
			for (var j = 0; j < 10; ++j)
				this.cells[i][j].draw();

	}
}

class Game {
	private board: Board;
	private piece: Piece;
	private lastFrameTime: number;
	private score: number;

	public mainLoop(timestamp) {
		if (timestamp < this.lastFrameTime + (1000)) {
			requestAnimationFrame(this.mainLoop.bind(this));	
			return;
		}
		this.board.putPiece(this.piece, "black");
		var clone: Piece = jQuery.extend(true, {}, this.piece);
		this.piece.moveDown();
		if (!this.board.isValid(this.piece)) {
			this.board.putPiece(clone, clone.color);
			let lines = this.board.checkLines();
			if (lines == 1) 
				this.score += 40;
			else if (lines == 2) {
				this.score += 100;
			} else if (lines == 3) {
				this.score += 200;
			} else if (lines == 4) {
				this.score += 1200;
			}
			delete this.piece;
			this.piece = new Piece();

		}
		this.board.putPiece(this.piece, this.piece.color);
		document.getElementById("score").innerHTML = "<p>Score: " + this.score + "</p>";
		this.lastFrameTime = timestamp;
		requestAnimationFrame(this.mainLoop.bind(this));
	}

	constructor() { 
		this.board = new Board($("#board")[0]);
		this.piece = new Piece();
		this.board.putPiece(this.piece, this.piece.color);
		this.lastFrameTime = 0;
		this.score = 0;
		document.getElementById("score").innerHTML = "<p>Score: 0</p>";

		document.onkeydown = ((event: KeyboardEvent) => {
			this.board.putPiece(this.piece, "black");
			let clone: Piece = jQuery.extend(true, {}, this.piece);

			event.preventDefault();
			if (event.keyCode == 39) {
				this.piece.moveRight();
			} else if (event.keyCode == 37) {
				this.piece.moveLeft();
			} else if (event.keyCode == 40) {
				this.piece.moveDown();
			} else if (event.keyCode == 38) {
				this.piece.rotate();
			} else if (event.keyCode == 32) {
				do {
					clone = jQuery.extend(true, {}, this.piece);
					this.piece.moveDown();
					++this.score;
				}while(this.board.isValid(this.piece));
			}
			if (!this.board.isValid(this.piece)) {
				delete this.piece;
				this.piece = clone;
			}
			this.board.putPiece(this.piece, this.piece.color);
		});

		requestAnimationFrame(this.mainLoop.bind(this));
		
	}
}

$(new Function("var game = new Game();"));
