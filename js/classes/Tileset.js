function Tileset(url) {
	
	// Chargement de l'image dans l'attribut image
	this.image = new Image();
	this.image.referenceDuTileset = this;
	this.image.onload = function() {
		// Largeur du tileset en tiles
		this.referenceDuTileset.largeur = this.width / 32;

		if(!this.complete) 
			throw "Erreur de chargement du tileset nomm� \"" + url + "\".";
	}
	this.image.src = "tilesets/" + url;
	
	// M�thode de dessin du tile num�ro "numero" dans le contexte 2D "context" aux coordonn�es x et y
	this.dessinerTile = function(numero, context, xDestination, yDestination) {
	
		var xSourceEnTiles = numero % this.largeur;
		if(xSourceEnTiles == 0) xSourceEnTiles = this.largeur;

		var ySourceEnTiles = Math.ceil(numero / this.largeur);

		var xSource = (xSourceEnTiles - 1) * 32;
		var ySource = (ySourceEnTiles - 1) * 32;
		
		context.drawImage(this.image, xSource, ySource, 32, 32, xDestination, yDestination, 32, 32);
	}
	
}
