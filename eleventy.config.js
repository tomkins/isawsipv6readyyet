const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/_data/*.json");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin, {
        baseHref: process.env.ELEVENTY_BASE_URL || "/"
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        },
        templateFormats: ["html", "njk", "md", "11ty.js"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
    }
};
