module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/_data/*.json");

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
