// const config = {
// 	"gatsby": {
// 		"pathPrefix": "/",
// 		"siteUrl": "https://learn.hasura.io",
// 		"gaTrackingId": null
// 	},
// 	"header": {
// 		"logo": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/favicon.png",
// 		"logoLink": "https://learn.hasura.io",
// 		"title": "Gatsby Gitbook Boilerplate",
// 		"githubUrl": "https://github.com/hasura/gatsby-gitbook-boilerplate",
// 		"helpUrl": "",
// 		"tweetText": "",
// 		"links": [
// 			{ "text": "", "link": ""}
// 		],
// 		"search": {
// 			"enabled": false,
// 			"indexName": "",
// 			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
// 			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
// 			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
// 		}
// 	},
// 	"sidebar": {
// 		"forcedNavOrder": [
// 			"/introduction",
//     		"/codeblock"
// 		],
//     	"collapsedNav": [
//       		"/codeblock"
//     	],
// 		"links": [
// 			{ "text": "Hasura", "link": "https://hasura.io"},
// 		],
// 		"frontline": false,
// 		"ignoreIndex": true,
// 	},
// 	"siteMetadata": {
// 		"title": "Gatsby Gitbook Boilerplate | Hasura",
// 		"description": "Documentation built with mdx. Powering learn.hasura.io ",
// 		"ogImage": null,
// 		"docsLocation": "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
// 		"favicon": "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
// 	},
// 	"pwa": {
// 		"enabled": false, // disabling this will also remove the existing service worker.
// 		"manifest": {
// 			"name": "Gatsby Gitbook Starter",
// 			"short_name": "GitbookStarter",
// 			"start_url": "/",
// 			"background_color": "#6b37bf",
// 			"theme_color": "#6b37bf",
// 			"display": "standalone",
// 			"crossOrigin": "use-credentials",
// 			icons: [
// 				{
// 					src: "src/pwa-512.png",
// 					sizes: `512x512`,
// 					type: `image/png`,
// 				},
// 			],
// 		},
// 	}
// };

const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://learn.hasura.io",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://user-images.githubusercontent.com/32684636/73146085-9b52f080-4065-11ea-800f-f1a9b087e74a.png",
		"logoLink": "http://www.kelenamori.com",
		"title": "Code Musings",
		"githubUrl": "https://github.com/kelenam/musings-gitbook/tree/master/content/",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/codeblock"
		],
    	"collapsedNav": [
      		"/codeblock"
    	],
		"links": [
			{ "text": "", "link": ""},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Code Musings | km ",
		"description": "Code musings and programming related thoughts ",
		"ogImage": null,
		"docsLocation": "https://github.com/kelenam/musings-gitbook/tree/master/content",
		"favicon": `https://user-images.githubusercontent.com/32684636/73146085-9b52f080-4065-11ea-800f-f1a9b087e74a.png`
	},
	"pwa": {
		"enabled": false, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "km | Code Musings",
			"short_name": "CodeMusings",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
