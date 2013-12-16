var Sara = require('../..')

with (Sara) module.exports = View.extend({
	layout: new HTML([
		["!DOCTYPE html"],
		["html", [
			["head", [
				["meta", { "charset": "utf-8" }],
				["title", "Jackson Gariety"],
				["link", { "href": "/index.css", "rel": "stylesheet", "type": "text/css" }]
			]],
			["body", [
				["header", [
					["h1", "Sara Example"],
					["nav", [
						["a", { "href": "/" }, ["Posts"]],
						["a", { "href": "/posts/new" }, ["New Post"]]
					]]
				]],
				["main", View.yield]
			]]
		]]
	])
})