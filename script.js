window.onload = (function() {
	var ingredients = document.querySelectorAll('.ingredient-item'),
		craftfield = document.querySelector('.alch-circle'),
		button =  document.querySelector('.craft-new-item'),
		craft = document.querySelector('.craft__field-for-items'),
		count = 0;

		for (let i = 0; i < ingredients.length; i++) {
			ingredients[i].addEventListener('click', function(e = event) {
				if (count < 2 ) {
					let id_click = e.target.id;
		         	let newItem = new Game(id_click)
		         	newItem.createImg();
		         	count++;
				}
				else {
					return
				}
			
		})
	}

	
})()




class Game {
	constructor(id) {
		this.id = id;
		this.count++;
	}

	createImg() {
		let craft = document.querySelector('.craft__field-for-items');
		let newItem = document.createElement('img');
		let newLi = document.createElement('li');

		newLi.appendChild(newItem);
		newItem.setAttribute('width', '64px');
		newItem.setAttribute('height', '64px');
		newItem.setAttribute('src', `img/${this.id}.png`);
		craft.appendChild(newLi);
	}

}

	

