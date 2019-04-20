window.onload = (function() {
	var ingredients = document.querySelectorAll('.ingredient-item'),
		ingredientsUl = document.querySelectorAll('.ingredient-items'),
		craftfield = document.querySelector('.alch-circle'),
		button =  document.querySelector('.craft-new-item'),
		craft = document.querySelector('.craft__field-for-items'),
		count = 0,
		count2 = ['Water', 'Earth', 'Air', 'Fire'];


		for (let i = 0; i < ingredients.length; i++) {
			ingredients[i].addEventListener('click', function addClick(e = event) {
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
		button.addEventListener('click', function() {
			
			if (count === 2) { // Если в поле для создания 2 элемента
				let currentItems = []; // массив в который будем записываем имена этих 2 элементов
				let childs = [...craft.childNodes]; // Создаем массив из двух элементов стола
				for (let value of childs ) { // Перебираем этот массив
					currentItems.push(value.id) // Добавляем ID элементов в новый массив
				}
				if (currentItems[0] === undefined) { //Если в массиве первый элемент undefined
					currentItems.reverse().pop() //Перевариваем этот массив и удаляем последний элемент
				}
				let [first, second] = currentItems // Создаем переменные из этого массива
				for (let key in answers) { //перебираем обьект с ответами
					if (key == `${first} + ${second}` ||
						key == `${second} + ${first}`) { // Если ключ из обьекта равен строке из двух элементов
						count = 0;   // Обнуляем счетчик	
						for (let value of count2) {
							if (value !== answers[key]) continue
								else {
									button.style.background = "#FF4500";
									button.innerHTML = "You have this item"
									setTimeout(function() {
									button.style.background = "rgba(0,0,0,.4)"
									button.innerHTML = 'Activate the magic circle';
									}, 1000)
									while (craft.firstChild) {
			   						 craft.removeChild(craft.firstChild);
									}
									count = 0;
									return
								}
						}

						count2.push(answers[key])
						let newLi = document.createElement('li'); //Создаем Li
						newLi.setAttribute('id', answers[key]); //Даем созданному li id;
						newLi.innerHTML = `<img src="img/${answers[key]}.png" alt="" width="32px" height="32px">${answers[key]}` 
						newLi.addEventListener('click', function addClick(e = event) {
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
						if (count2.length < 11) {	
							ingredientsUl[0].appendChild(newLi); // Добавляем созданный li в ul
						}
						else if (count2.length < 21) {
							ingredientsUl[1].appendChild(newLi); // Добавляем созданный li в ul
							show2()
						}
						else if (count2.length < 32) {
							ingredientsUl[2].appendChild(newLi); // Добавляем созданный li в ul
							show3()
						}

						while (craft.firstChild) {
   							craft.removeChild(craft.firstChild); // Чистим ul с элементами
						}
						button.style.background = "green"; //Изменяем фон кнопки на зеленый
						button.innerHTML = `Created ${answers[key]}` //Изменяем текст кнопки
						setTimeout(function() {
							button.style.background = "rgba(0,0,0,.4)"
							button.innerHTML = 'Activate the magic circle';
						}, 1000) //Через секунду возвращаем все на место



						return
					}
					else {
						button.style.background = "red";
						button.innerHTML = "Ooops"
						setTimeout(function() {
							button.style.background = "rgba(0,0,0,.4)"
							button.innerHTML = 'Activate the magic circle';
						}, 1000)
						while (craft.firstChild) {
   							 craft.removeChild(craft.firstChild);
							}
							count = 0;
					}
				}

			}
			else {
				return
			}
		})
		

})()

const answers = {
		"fire + air" : "Light",
		"fire + earth" : "Stone",
		"fire + water" : "Steam",
		"air + water" : "Fog",
		"earth + water" : "Dirt", // 5
		"air + Fog" : "Cloud",
		"fire + Light" : "Sun",
		"air + Stone" : "Sand",
		"water + Fog" : "Ice",
		"Stone + Sun" : "Moon",
		"Light + Dirt" : "DNK",
		"Dirt + Sand" : "Clay",
		"earth + DNK" : "Mush",
		"Sand + fire" : "Glass",
		"earth + Sun" : "Dark",
		"fire + Clay" : "Brick",
		"Sand + Glass" : "Clock",
		"Sun + DNK" : "Grass",
		"Ice + Cloud" : "Snow"
	}



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
		newLi.setAttribute('id', this.id)
		newItem.setAttribute('width', '64px');
		newItem.setAttribute('height', '64px');
		newItem.setAttribute('src', `img/${this.id}.png`);
		craft.appendChild(newLi);
	}

	
}

	
let btn = document.querySelectorAll('.btn');
let items = document.querySelectorAll('.ingredient-items');
		function show1() {
			if (btn[0].classList.contains('active')) {
				return
			}
			else {
				btn[1].classList.remove('active');
				btn[2].classList.remove('active');
				btn[0].classList.add('active');
				items[0].style.display = "block";
				items[1].style.display = "none";
				items[2].style.display = "none";
			}
		}

		function show2() {
			if (btn[1].classList.contains('active')) {
				return
			}
			else {
				btn[0].classList.remove('active');
				btn[2].classList.remove('active');
				btn[1].classList.add('active');
				items[0].style.display = "none";
				items[1].style.display = "block";
				items[2].style.display = "none";
			}
		}

		function show3() {
			if (btn[2].classList.contains('active')) {
				return
			}
			else {
				btn[0].classList.remove('active');
				btn[1].classList.remove('active');
				btn[2].classList.add('active');
				items[0].style.display = "none";
				items[1].style.display = "none";
				items[2].style.display = "block";
			}
		}
