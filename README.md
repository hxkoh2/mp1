# Starter files for MP1
Use the following commands in your vagrant development environment to get this up and running
```bash
git clone https://github.com/uiuc-web-programming/mp1_starter.git
cd mp1_starter
npm install
bower install
grunt compass
grunt uglify
grunt serve
(the last three steps can be done together by just saying "grunt")
```

For MP1, you should edit the following:
- `public/index.html` - this html file is served by default. You are going to change this for your MP.
- `source_sass` folder - all sass files here will be compiled to `public/css/styles.css`
- `js` folder - all javascript files here will be uglified and put in `public/js/script.js`
- `public/media` - all your media files (images, videos, GIFs etc. ) go here. Use relative path to access these from your HTML files.

**Do not edit anything under the `public\css` and `public\js` folders.** All things there are auto-generated and any changes you make there will get overwritten by Grunt.


References
- http://www.queness.com/post/923/create-a-simple-infinite-carousel-with-jquery
- http://www.w3schools.com/howto/howto_css_modals.asp
- https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
- http://api.jquery.com/fadein/
- https://css-tricks.com/snippets/jquery/smooth-scrolling/
- http://api.jquery.com/offset/
- http://api.jquery.com/animate/

Additional Comments
- Click on the rectangles on the Projects page to see the modals 