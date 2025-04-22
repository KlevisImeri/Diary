import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import mathjaxPlugin from "eleventy-plugin-mathjax";


export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(mathjaxPlugin);
  eleventyConfig.addPassthroughCopy("posts/assets/**/**/*");
  return {
    dir: {
      input: "posts",
      output: "dist",
      includes: "_includes"
    },
    pathPrefix: "/Diary/"
  };
}
