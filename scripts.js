var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.",
	animal = "Zielone słonie",
	textLength = "";

animal = animal.toUpperCase();
text = text.replace("Papugi", animal);
textLength = text.length / 2;

console.log(text.slice(0, textLength));