// Counter on about us - counts the number of followers on instagram, youtube and facebook
const counters = document.querySelectorAll('.counter')
counters.forEach((counter) => {
	counter.innerText = '0'

	// Det lille + tegn ændrer tallet fra string til number
	const updateCounter = () => {
		const target = +counter.getAttribute('data-target')
		const c = + counter.innerText;

		const increment = target / 150;

		if (c < target) {
			counter.innerText = `${Math.ceil( c + increment)}`;
			setTimeout(updateCounter, 60);
		} else {
			counter.innerText = target;
		}
	};
	updateCounter()
});
