
const colors = [
	[0,0,0], [0,0,1], [0,1,0], [0,1,1],
	[1,0,0], [1,0,1], [1,1,0], [1,1,1]
].map(color)

array(document.getElementsByTagName('section'))
	.forEach(section => section.style.background =
		colors.splice(random(0, colors.length), 1))


function color([r, g, b]) {
	const channel = (k) => random(160 + 40 * k, 20).toString(16)
	return '#' + channel(r) + channel(g) + channel(b)
}

function random(from, range) {
	return Math.floor(Math.random() * range) + from
}

function array(value) {
	return Array.prototype.slice.call(value)
}
