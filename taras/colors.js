
const [min, range, gap] = [100, 40, 40]
const colors = [
	[0,0,1], [0,1,0], [0,1,1],
	[1,0,0], [1,0,1], [1,1,0]
].map(color)

array(document.getElementsByTagName('section'))
	.forEach(section => section.style.background =
		colors.splice(random(0, colors.length), 1))


function color([r, g, b]) {
	const channel = (k) =>
		random(min + (range + gap) * k, range).toString(16)
	return '#' + channel(r) + channel(g) + channel(b)
}

function random(from, range) {
	return Math.floor(Math.random() * range) + from
}

function array(value) {
	return Array.prototype.slice.call(value)
}
