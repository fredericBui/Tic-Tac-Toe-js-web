// Variables
counter = 0;
symbol = "";
turn = false;
players = {};
board = {
  line1: ["-", "-", "-"],
  line2: ["-", "-", "-"],
  line3: ["-", "-", "-"],
};

// Création du tableau de jeu
function generateBoard() {
  for (const property in board) {
    lineConstructor(board[property]);
  }
}

function lineConstructor(lineBoardNumber) {
  var tr = document.createElement("tr");
  lineBoardNumber.forEach((lineData) => {
    squareConstructor(lineData, tr);
  });
  document.getElementById("board").appendChild(tr);
}

function squareConstructor(data, tableRow) {
  var td = document.createElement("td");
  td.innerHTML = data;
  td.setAttribute("id", (counter += 1));
  td.addEventListener("click", saveUserChoice);
  tableRow.appendChild(td);
}

// Fonctionnalités de suivi de partie

function horizontalVictory(line) {
  if (board[line][0] == "x" && board[line][1] == "x" && board[line][2] == "x") {
    alert("Joueur 1 gagne !");
  } else if (
    board[line][0] == "o" &&
    board[line][1] == "o" &&
    board[line][2] == "o"
  ) {
    alert("Joueur 2 gagne !");
  }
}

function verticalVictory(lineSquareNumber) {
  if (
    board["line1"][lineSquareNumber] == "x" &&
    board["line2"][lineSquareNumber] == "x" &&
    board["line3"][lineSquareNumber] == "x"
  ) {
    alert("Joueur 1 gagne !");
  } else if (
    board["line1"][lineSquareNumber] == "o" &&
    board["line2"][lineSquareNumber] == "o" &&
    board["line3"][lineSquareNumber] == "o"
  ) {
    alert("Joueur 2 gagne !");
  }
}

function diagonalVictory() {
  if (
    board["line1"][0] == "x" &&
    board["line2"][1] == "x" &&
    board["line3"][2] == "x"
  ) {
    alert("Joueur 1 gagne !");
  } else if (
    board["line1"][0] == "o" &&
    board["line2"][1] == "o" &&
    board["line3"][2] == "o"
  ) {
    alert("Joueur 2 gagne !");
  }

  if (
    board["line1"][2] == "x" &&
    board["line2"][1] == "x" &&
    board["line3"][0] == "x"
  ) {
    alert("Joueur 1 gagne !");
  } else if (
    board["line1"][2] == "o" &&
    board["line2"][1] == "o" &&
    board["line3"][0] == "o"
  ) {
    alert("Joueur 2 gagne !");
  }
}

function saveUserChoice(e) {
  turn = !turn;
  turn ? (symbol = "x") : (symbol = "o");
  turn ? (e.target.innerHTML = "x") : (e.target.innerHTML = "o");
  switch (e.target.id) {
    case "1":
      board.line1[0] = symbol;
      horizontalVictory("line1");
      verticalVictory(0);
      diagonalVictory();
      break;
    case "2":
      board.line1[1] = symbol;
      horizontalVictory("line1");
      verticalVictory(1);
      break;
    case "3":
      board.line1[2] = symbol;
      horizontalVictory("line1");
      verticalVictory(2);
      diagonalVictory();
      break;
    case "4":
      board.line2[0] = symbol;
      horizontalVictory("line2");
      verticalVictory(0);
      break;
    case "5":
      board.line2[1] = symbol;
      horizontalVictory("line2");
      verticalVictory(1);
      diagonalVictory();
      break;
    case "6":
      board.line2[2] = symbol;
      horizontalVictory("line2");
      verticalVictory(2);
      break;
    case "7":
      board.line3[0] = symbol;
      horizontalVictory("line3");
      verticalVictory(0);
      diagonalVictory();
      break;
    case "8":
      board.line3[1] = symbol;
      horizontalVictory("line3");
      verticalVictory(1);
      break;
    case "9":
      board.line3[2] = symbol;
      horizontalVictory("line3");
      verticalVictory(2);
      diagonalVictory();
      break;
  }
  e.target.removeEventListener("click", saveUserChoice);
  console.log(board);
}

// Appel des fonctions
generateBoard();
