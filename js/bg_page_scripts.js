// Scripts that allow the the cycling between CSS, HTML, and JS background pages, stylesheets, and scripts.


// This is script that would have changed HTML-only styling, but that isn't a thing since HTML5, so rather, it will
// change the page with minimal CSS, imitating the early days of HTML with only simple BG color and image changes.
let html_counter = 0;
let html_max = 5;
let insert_style = "";

function changeStyleHTML() 
{
  // restores default stylesheet. Removing this allows these bgs to mix with the effects of the CSS button.
  document.getElementById('stylesheet').href = "for_bg_page_cycles/css_bgs/stylesheet0.css";
  
  // cycles through a counter to 4 for the different choices
  if (html_counter != html_max)
  {
    html_counter++;
  }
  else
  {
    html_counter = 1;
  }

  // uses the counter's value to select a text and bg color/style
  if (html_counter == 1)
  {
    insert_style = "background-color: silver";
    document.getElementById('bg_text').style = "color: red";
  }
  if (html_counter == 2)
  {
    insert_style = "background-image: url('media/winter.jpg')";
    document.getElementById('bg_text').style = "color: gold";
  }
  if (html_counter == 3)
  {
    insert_style = insert_style = "background-color: maroon";
    document.getElementById('bg_text').style = "color: white";
  }
  if (html_counter == 4)
  {
    insert_style = "background-image: url('media/stars_stock.png')";
    document.getElementById('bg_text').style = "color: white";
  }
  if (html_counter == 5)
  {
    insert_style = "background-image: url('media/abstract.jpg')";
    document.getElementById('bg_text').style = "color: white";
  }
  // applies the selected choice
  $(function()
  {
    document.getElementById('body_id').style = insert_style;
  });
}


// Changes the CSS styles by modifying the name of the ref stylesheet with a counter
let style_counter = 0;
let stylesheets_max = 5;

function changeStyleCSS() 
{
  if (style_counter != stylesheets_max)
  {
    style_counter++;
  }
  else
  {
    style_counter = 1;
  }

  // removes any selections made from the HTML button
  document.getElementById('body_id').style.removeProperty("background-color");
  document.getElementById('body_id').style.removeProperty("background-image");
  document.getElementById('bg_text').style.removeProperty("color");

  // inject html based on the stylesheet to load
  $(function()
  {
    $("#inject_html").load("for_bg_page_cycles/css_bgs/html_for_" + style_counter + ".html");
  });

  // sets the new stylesheet
  document.getElementById('stylesheet').href = "for_bg_page_cycles/css_bgs/stylesheet" + style_counter + ".css";
}


// Adds a new CSS and Javascript source
let js_counter = 0;
let js_max = 5;

function add_script()
{
  if (js_counter != js_max)
  {
    js_counter++;
  }
  else
  {
    js_counter = 1;
  }

  // removes any selections made from the HTML button
  document.getElementById('body_id').style.removeProperty("background-color");
  document.getElementById('body_id').style.removeProperty("background-image");
  document.getElementById('bg_text').style.removeProperty("color");

  // adds
  var myScript = document.createElement('script');
  myScript.setAttribute('src', 'for_bg_page_cycles/js_bgs/script' + js_counter + '.js');
  document.head.appendChild(myScript);

  // sets the new stylesheet
  document.getElementById('stylesheet').href = "for_bg_page_cycles/js_bgs/stylesheet" + js_counter + ".css";
}