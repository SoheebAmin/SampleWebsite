# A Practical Guide to Make Websites

NOTE: The static, non-flask version of this website is live here: https://soheebamin.github.io/webtutorial_live

This project was made first and foremost to help myself practice creating all the elements of a dynamic website. The files in this folder create a sample website with the sole purpose of highlighting different features of HTML, CSS, JavaScript.

## Organization

The root folder has the HTML pages, with the CSS, JS, and other files having their own folders.

## Some Things to Note

The index page has the most explanation of tags and elements, with unique features of other pages explained on that page.

The website relies on CSS from Bootstrap and W3 Schools, with their stylesheets included on the pages they are used. There are also local stylesheets, which the CSS of may be from another website (mentioned in a comment on top) or it may be a self-made class to apply to select elements as needed.


# How to Add/Remove HTML, CSS, and JavaScript from Webpages

The most I had to learn in building this sample website had to deal with how to dynamically alter the HTML, CSS, and JavaScript within a webpage. Let's look at the techniques used here for each one.

## HTML

HTML was loaded and unloaded using a simple JavaScript function that used jQuery. So first, be sure to include jQuery in the header, such as via this source:

```html

<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>

```

The function as as follows. It can be included in a script tage in the head, or factored out into another .js file.

```javascript

$(function()
{
    $("#your_id").load("html_source.html");
});

```

and the body would include the following:

```html

<div id="your_id"><div>

```

The "#id" in the function ("id" replaced with your own tag name) will identify where to place the HTML in the body.

## CSS

CSS was the most straightforward of the bunch. Stylesheets were swapped out with a simple Javascript function that finds an element by ID and updates the reference link for the CSS. I used another simple Javascript counting function to append a number to the name of the CSS stylesheet to correspond to a list of sheets which differed in name by a single number.

```javascript

let style_counter = 0;
let stylesheets_max = 4;

function changeStyleCSS()
{
  // cycling the stylesheet number to append from 0 to the max number of stylesheets.
  if (style_counter != stylesheets_max)
  {
    style_counter++;
  }
  else
  {
    style_counter = 0;
  }

  //The actual update of the stylesheet location to be "stylesheet" + 1
  document.getElementById('stylesheet').href = "for_bg_page_cycles/css_bgs/stylesheet" + style_counter +".css";
}

```

## Javascript

The first thing to go over is what NOT TO DO to swap style sheets. Attempting the same method for CSS, changing href to src, didn't actually work, even though it did swap out the code in the HTML itself. The following code actually updates the source reference, but the page itself does not actually reload the Javascript to be from said source:

```javascript

  document.getElementById('script').src= "anoter_source.js";

```

Instead, creating a new script tag and added the source did actually include this new source to the page:

```javascript

function add_script()
{
  var myScript = document.createElement('script');
  myScript.setAttribute('src', 'new_script.js');
  document.head.appendChild(myScript);
}

```
