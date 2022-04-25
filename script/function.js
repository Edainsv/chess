// Création de la grille
function createGrid(x, y, hw)
{
	var canvas = document.getElementById('chess');
	var coo = new Array(x);
	var pions = new Array(16);

	// Création des cases
	for(var i = 0; i < x; i++) {
		coo[i] = new Array(y);
	}

	for(i = 0; i < x; i++) {
		for(j = 0; j < y; j++){
			coo[i][j] = document.createElement('div');
			coo[i][j].className = 'bgc1';
		}
	}

	// Coloration des cases
	for(i = 0; i < x; i+=2) {
		for(j = 0; j < y; j+=2){
			coo[i][j].className = 'bgc2';
		}
	}
	for(i = 1; i < x; i+=2) {
		for(j = 1; j < y; j+=2){
			coo[i][j].className = 'bgc2';
		}
	}

	// Dimension auto
	if (hw < 400 || hw > 650){
		hw = 600;
	}

	canvas.style.width = hw + 'px';
	canvas.style.height = hw + 'px';

	for(i = 0; i < x; i++) {
		for(j = 0; j < y; j++){
			coo[i][j].style.width = hw / x + 'px';
			coo[i][j].style.height = hw / y + 'px';
		}
	}

	// Afficher dans le canvas
	for(i = 0; i < x; i++) {
		for(j = 0; j < y; j++){
			canvas.appendChild(coo[i][j]);
		}
	}

	initPion(coo, pions);	

}

function initPion(coo, pions){

	for(i = 0; i < 32; i++){
		pions[i] = document.createElement('i');
	}

	// Création des pions NOIR

	// Tour
	pions[0].className = 'fa-solid fa-chess-rook pb'

	// Cavalier
	pions[1].className = 'fa-solid fa-chess-knight pb';

	// Foul
	pions[2].className = 'fa-solid fa-chess-bishop pb';

	// Reine
	pions[3].className = 'fa-solid fa-chess-queen pb';

	// Roi
	pions[4].className = 'fa-solid fa-chess-king pb';	

	// Foul
	pions[5].className = 'fa-solid fa-chess-bishop pb';	

	// Cavalier
	pions[6].className = 'fa-solid fa-chess-knight pb';

	// Tour
	pions[7].className = 'fa-solid fa-chess-rook pb';

	// Petits pions
	pions[8].className = 'fa-solid fa-chess-pawn pb';
	pions[9].className = 'fa-solid fa-chess-pawn pb';
	pions[10].className = 'fa-solid fa-chess-pawn pb';
	pions[11].className = 'fa-solid fa-chess-pawn pb';
	pions[12].className = 'fa-solid fa-chess-pawn pb';
	pions[13].className = 'fa-solid fa-chess-pawn pb';
	pions[14].className = 'fa-solid fa-chess-pawn pb';
	pions[15].className = 'fa-solid fa-chess-pawn pb';

	// CREATION DES PIONS BLANCS

	// Tour
	pions[16].className = 'fa-solid fa-chess-rook pw'

	// Cavalier
	pions[17].className = 'fa-solid fa-chess-knight pw';

	// Foul
	pions[18].className = 'fa-solid fa-chess-bishop pw';

	// Reine
	pions[19].className = 'fa-solid fa-chess-queen pw';

	// Roi
	pions[20].className = 'fa-solid fa-chess-king pw';	

	// Foul
	pions[21].className = 'fa-solid fa-chess-bishop pw';	

	// Cavalier
	pions[22].className = 'fa-solid fa-chess-knight pw';

	// Tour
	pions[23].className = 'fa-solid fa-chess-rook pw';

	// Petits pions
	pions[24].className = 'fa-solid fa-chess-pawn pw';
	pions[25].className = 'fa-solid fa-chess-pawn pw';
	pions[26].className = 'fa-solid fa-chess-pawn pw';
	pions[27].className = 'fa-solid fa-chess-pawn pw';
	pions[28].className = 'fa-solid fa-chess-pawn pw';
	pions[29].className = 'fa-solid fa-chess-pawn pw';
	pions[30].className = 'fa-solid fa-chess-pawn pw';
	pions[31].className = 'fa-solid fa-chess-pawn pw';

	// AFFICHE PION NOIR
	coo[0][0].appendChild(pions[0]);
	coo[0][1].appendChild(pions[1]);
	coo[0][2].appendChild(pions[2]);
	coo[0][3].appendChild(pions[3]);
	coo[0][4].appendChild(pions[4]);
	coo[0][5].appendChild(pions[5]);
	coo[0][6].appendChild(pions[6]);
	coo[0][7].appendChild(pions[7]);

	coo[1][0].appendChild(pions[8]);
	coo[1][1].appendChild(pions[9]);
	coo[1][2].appendChild(pions[10]);
	coo[1][3].appendChild(pions[11]);
	coo[1][4].appendChild(pions[12]);
	coo[1][5].appendChild(pions[13]);
	coo[1][6].appendChild(pions[14]);
	coo[1][7].appendChild(pions[15]);

	// AFFICHE PION BLANC
	coo[7][0].appendChild(pions[16]);
	coo[7][1].appendChild(pions[17]);
	coo[7][2].appendChild(pions[18]);
	coo[7][3].appendChild(pions[19]);
	coo[7][4].appendChild(pions[20]);
	coo[7][5].appendChild(pions[21]);
	coo[7][6].appendChild(pions[22]);
	coo[7][7].appendChild(pions[23]);

	coo[6][0].appendChild(pions[24]);
	coo[6][1].appendChild(pions[25]);
	coo[6][2].appendChild(pions[26]);
	coo[6][3].appendChild(pions[27]);
	coo[6][4].appendChild(pions[28]);
	coo[6][5].appendChild(pions[29]);
	coo[6][6].appendChild(pions[30]);
	coo[6][7].appendChild(pions[31]);
}