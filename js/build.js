// require compile
({
	baseUrl:'',
	out: 'build/ie.js',
	wrap:true,
	include: ['requireLib'],
	paths: {
		'requireLib': './../bower_components/requirejs/require',
		html5shiv : './lib/html5shiv',
		nwmattcher : './lib/nwmatcher',
		rem : './lib/rem',
		resond : './lib/respond',
		selectivizr : './lib/selectivizr'
	}
})
