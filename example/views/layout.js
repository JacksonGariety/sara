var Sara = require('../..')

with (Sara) var Layout = module.exports = new View('Layout').html([

	['!DOCTYPE html'],
	['html', [
		['head', [
			['meta', { 'charset': 'utf-8' }],
			['title', 'Jackson Gariety'],
			['link', { 'href': '/index.css', 'rel': 'stylesheet', 'type': 'text/css' }]
		]],
		['body', [
			['header', [
				['h1', 'Todos']
			]],
			['main', data('body')]
		]]
	]]

])