
array(document.getElementsByTagName('section'))
	.forEach(section => section.style.background = color())

function color() {
	const channel = () => random(160, 220).toString(16)
	return '#' + channel() + channel() + channel()
}

function random(from, to) {
	return Math.floor(Math.random() * (to - from)) + from
}

function array(value) {
	return Array.prototype.slice.call(value)
}
