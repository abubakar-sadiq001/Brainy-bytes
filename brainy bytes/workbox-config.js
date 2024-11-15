module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,webp,ttf,svg,mp3,html,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};