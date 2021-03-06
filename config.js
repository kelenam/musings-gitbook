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
		"logo": "https://user-images.githubusercontent.com/32684636/73151243-28567380-407f-11ea-8a3d-66b027f87436.png",
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
    		"/codeblock",
			"/the_javascript_language",
			"/browser_documents-events-interfaces"
		],
    	"collapsedNav": [
			  "/codeblock",
			  "/practical_guide_to_algorithms",
			  "/intro_to_data_structures_for_interviews",
			  "/just_javascript",
			  "/javascript-info",
			  "/01_the_javascript_language",
			  "/low-level_javascript"
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
		"favicon": `https://user-images.githubusercontent.com/32684636/73151243-28567380-407f-11ea-8a3d-66b027f87436.png`
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
