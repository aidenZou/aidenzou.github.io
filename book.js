module.exports = {
    // title: 'GitBook Documentation',

    // theme-official, disqus, quizzes
    plugins: ['disqus'],
    "pluginsConfig": {
        "disqus": {
            "shortName": "blogbook"
        }
    },
    // theme: 'official'

    // Links in template (null: default, false: remove, string: new value)
    "links": {
        // Custom links at top of sidebar
        "sidebar": {
            // "Custom link name": "https://customlink.com"
        },

        // Sharing links
        "sharing": {
        	"weibo": null,
            "google": null,
            "facebook": false,
            "twitter": false,
            "all": null
        }
    },
};