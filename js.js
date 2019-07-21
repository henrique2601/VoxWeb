// Siema 1.3.0 introuduced a basic callbacks
// https://github.com/pawelgrzybek/siema/releases/tag/v.1.3.0

function onInitCallback() {
	console.log('Siema initialised bro :)');
}

function onChangeCallback() {
	console.log(`The index of current slide is: ${this.currentSlide}`);
}

const mySiema = new Siema({
	onInit: onInitCallback,
	onChange: onChangeCallback,
});

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());