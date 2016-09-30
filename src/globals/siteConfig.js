module.exports = {
	title: "Static site",
	description: "Awesome static site",
	url: "http://site.com/",
	menuTop : {
		linkPrefix: "",
		linkPostfix: "/",
		items: [
			{
				"href": "about",
				"text": "About"
			},
			{
				"href": "contact",
				"text": "Contact us"
			},
			{
				"href": "account",
				"text": "Account",
				"className": "item-account"
			}
		]
	},
	menuBottom : {
		linkPrefix: "",
		linkPostfix: "/",
		className: "footer-menu",
		items: [
			{
				"href": "account",
				"text": "Login",
				"className": "item-login"
			},
			{
				"href": "account/restore",
				"text": "Restore password"
			},
			{
				"href": "account/register",
				"text": "Register new account"
			}
		]
	}
}