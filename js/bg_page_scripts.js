// Scripts that allow the the cycling between CSS, HTML, and JS background pages, stylesheets, and scripts


// Changes the CSS styles by modifying the name of the ref stylesheet with a counter
let style_counter = 0;
let current_stylesheets = 5;


function changeStyleHTML() 
{
  if (style_counter != current_stylesheets)
  {
    style_counter-=1;
  }
  else
  {
    style_counter = 0;
  }
  document.getElementById('stylesheet').href = "for_bg_page_cycles/css_for_bgs/stylesheet" + style_counter +".css";
}

function changeStyleCSS() 
{
  if (style_counter != current_stylesheets)
  {
    style_counter++;
  }
  else
  {
    style_counter = 0;
  }
  document.getElementById('stylesheet').href = "for_bg_page_cycles/css_for_bgs/stylesheet" + style_counter +".css";
}

function changeStyleJS() 
{
  if (style_counter != current_stylesheets)
  {
    style_counter++;
    style_counter++;
  }
  else
  {
    style_counter = 0;
  }
  document.getElementById('stylesheet').href = "for_bg_page_cycles/css_for_bgs/stylesheet" + style_counter +".css";
}