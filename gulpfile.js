const { src, dest, parallel } = require("gulp");
const fileInclude = require("gulp-file-include");
const rename = require("gulp-rename");

// HTML task
function html() {
  return src("src/index.html") // only include index.html in dist
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "@file",
      }),
    )
    .pipe(dest("./dist")); // output final HTML
}

// Styles task
function styles() {
  return src(["src/styles/**/*.css", "src/components/**/*.css"])
    .pipe(rename({ dirname: "" }))
    .pipe(dest("./dist/css"));
}

// Scripts task
function scripts() {
  return src("src/js/**/*.js").pipe(dest("./dist/js"));
}

// Images task
function images() {
  return src("src/images/**/*").pipe(dest("./dist/images"));
}

exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.default = parallel(html, styles, scripts, images);
