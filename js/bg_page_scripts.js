// Scripts that allow the the cycling between CSS, HTML, and JS background pages, stylesheets, and scripts


// Script to change the HTML imported to the page, based on counter

let html_counter = 0;
let html_max = 4;

function changeStyleHTML() 
{
  if (html_counter != html_max)
  {
    html_counter++;
  }
  else
  {
    html_counter = 0;
  }
}


// Changes the CSS styles by modifying the name of the ref stylesheet with a counter

let style_counter = 0;
let stylesheets_max = 4;

function changeStyleCSS() 
{
  if (style_counter != stylesheets_max)
  {
    style_counter++;
  }
  else
  {
    style_counter = 0;
  }
  document.getElementById('stylesheet').href = "for_bg_page_cycles/css_bgs/stylesheet" + style_counter +".css";
}

// Utilities
let JS_counter = 0;
let JS_max = 4;

function changeStyleJS() 
{
  if (JS_counter != JS_max)
  {
    JS_counter++;
  }
  else
  {
    JS_counter = 0;
  }
  document.getElementById('script').src= "for_bg_page_cycles/js_bgs/script" + JS_counter +".js";
}

// experimentalw way to add script.

function add_script()
{
  var myScript = document.createElement('script');
  myScript.setAttribute('src', 'for_bg_page_cycles/js_bgs/script1.js');
  document.head.appendChild(myScript);
}