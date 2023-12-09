const spawn = require("child_process").spawn;
const gulp = require("gulp");
const babel = require("gulp-babel");
var uglify = require("gulp-uglify");

gulp.task("react", function () {
    // 3.
    return (
      gulp
        .src(["src/index.js",  "src/**/*.js"])
        .pipe(babel())
        // .pipe(concat("allComponents.js"))
        // .pipe(uglify())
        .pipe(gulp.dest("dist/"))
    );
  });

  gulp.task("node", function () {
    return gulp.src("custom_node_modules/**/*").pipe(gulp.dest("node_modules/"));
  });

  gulp.task("start", gulp.parallel("react", "node"), function () {
    // 4.
    spawn("node_modules/.bin/electron", ["."], { stdio: "inherit" }).on(
      "close",
      () => process.exit()
    );
  });
  