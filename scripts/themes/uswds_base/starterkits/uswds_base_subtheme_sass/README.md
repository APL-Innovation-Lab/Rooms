INTRODUCTION
------------
This sub-theme requires compiling of the USWDS CSS and also the assets folder for javascript.

INSTALLATION
------------

This starterkit contains a very basic example of the gulpfile.js copied from https://github.com/uswds/uswds-compile

Follow the setup instructions on https://github.com/uswds/uswds-compile#installation for setting up for your project.

Copied from https://github.com/uswds/uswds-compile#usage-tips

 * Use init only once. The init task is meant for initializing the design system on a project.
Since it will overwrite project files (like settings files and the Sass entry point), use it sparingly and don't use it
for updating the design system on a project, or at any point after you've customized your settings files.

 * Update USWDS assets with copyAssets. Don't update assets with init, use the copyAssets task. This task updates static
assets (like images, fonts, and compiled JavaScript) only and you don't risk clobbering your customizations.

 * Compile only from a single Sass entry point. Define the location of this entry point with paths.dist.theme. If you
have project Sass files outside the paths.dist.theme directory, load these files into your single entry point via
@forward, @use, or @import. To include these project Sass files in your gulp watch task, set paths.src.projectSass
to your project Sass directory. The Sass will still compile from the single entry point located in paths.dist.theme.

 * Only check theme files and custom icons into version control. You should have a build process that copies static
assets like images, fonts, and compiled JavaScript from the uswds package. This assures that these assets are
up-to-date with whatever version of USWDS you're using. You only need to track your customizations
(like settings, theme files, custom icons, and your gulpfile) in version control.

