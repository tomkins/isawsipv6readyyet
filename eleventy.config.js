module.exports = function(eleventyConfig) {
    // Return your Object options:
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
