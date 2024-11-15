module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,ttf,svg,mp3,html,js,css,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};