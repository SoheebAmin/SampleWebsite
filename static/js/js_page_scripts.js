// These are the scripts needed for the JS page.

function scramble()
{
  //grabs the input from the form, and gives error if none.
  let text_to_scramble = document.querySelector('#scramble_text').value;
  if (text_to_scramble === '')
  {
    alert('You have to type something in for me to scramble it!');
    return;
  }

  function getRandomInt(n) 
  {
    return Math.floor(Math.random() * n);
  }
  
  function shuffle(s) 
  {
    // Convert String to array
    var arr = s.split('');           
    
     // Length of the array
    var n = arr.length;             
    
    for(var i=0 ; i<n-1 ; ++i) 
    {
      // Get random of [0, n-1]
      var j = getRandomInt(n);   

      // Swap arr[i] and arr[j]
      var temp = arr[i];             
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    // Convert Array to string and return results
    s = arr.join('');               
    return s;
  }

  //calls function above to scamble text
  scrambled_text = shuffle(text_to_scramble);

  // Alert to display
  alert('Scambled Text: ' + scrambled_text);
}

// function to toggle greying out of the submit button for the scramble function.
function toggle_input()
{ 
  // disables the submit buton if text is empty upon the toggle being pressed.
  if (document.querySelector("#scramble_text").value === "" & document.querySelector('#input_checkbox').checked)
  {
    document.querySelector("#scramble_submit").disabled = true;
  }
  else
  {
    document.querySelector("#scramble_submit").disabled = false;
  }

  // disables/re-enables when toggle is on.
  document.querySelector("#scramble_text").onkeyup = function ()
  {
    if (document.querySelector("#scramble_text").value === "" & document.querySelector('#input_checkbox').checked)
    {
      document.querySelector("#scramble_submit").disabled = true;
    }
    else
    {
      document.querySelector("#scramble_submit").disabled = false;
    }
  }
}


// function to check if a string is a browser-supported color that CSS can recognize
function isColor(strColor){
  var s = new Option().style;
  s.color = strColor;
  return s.color == strColor;
}

// updates the font color based on user input
function color_change(id_of_input)
{
  
  // checks if color exists using the helper function
  var fetched_color = document.querySelector(id_of_input).value;
  if (isColor(fetched_color) == false)
  {
    alert(fetched_color + " is not a browser-recognized color!")
  }
  
  var style = document.createElement('style');
  
  // if input id is "bg_color", changes the color of the background
  if (id_of_input === "#bg_color")
  {
    // removes a w3 class that creates a a grey bg for a div
    document.querySelector('#has_grey_class').classList.remove("w3-light-grey");
    
    //adds new style based on input color
    style.innerHTML = `
    * {
    background-color: ` + fetched_color + ` !important;
    }
    `;
    document.head.appendChild(style);

    style = document.createElement('style');   
  }
  
  // if input id is "font_color," changing the font color with the input. 
  else
  {
    style.innerHTML = `
    * {
    color: ` + fetched_color + ` !important;
    }
    `;
    document.head.appendChild(style);

    style = document.createElement('style');
    // Reassigns the default W3-grey font to the input color, since it is not overridden with the previous style.
    style.innerHTML = `
    .w3-text-grey {
    color: ` + fetched_color + ` !important;
    }
    `;
    document.head.appendChild(style);
  }
}


// changes font size based on user input
function font_size_change()
{
  var fetched_size = document.querySelector('#font_size').value;
  var style = document.createElement('style');
  style.innerHTML = `
  * {
  font-size: ` + fetched_size + `px !important;
  }
  `;
  document.head.appendChild(style);
}


// Helper function to see if font is valid in CSS. Unfortunately there is no simple way for this, so I've borrowed some code.
// Honestly, I don't understand all of it, but I tested it and it works. 
// Usage: d = new Detector();
// d.detect('font name');
//Source: https://gist.github.com/szepeviktor/d28dfcfc889fe61763f3

var Detector = function() {
   // a font will be compared against all the three default fonts.
   // and if it doesn't match all 3 then that font is not available.
   var baseFonts = ['monospace', 'sans-serif', 'serif'];

   //we use m or w because these two characters take up the maximum width.
   // And we use a LLi so that the same matching fonts can get separated
   var testString = "mmmmmmmmmmlli";

   //we test using 72px font size, we may use any size. I guess larger the better.
   var testSize = '72px';

   var h = document.getElementsByTagName("body")[0];

   // create a SPAN in the document to get the width of the text we use to test
   var s = document.createElement("span");
   s.style.fontSize = testSize;
   s.innerHTML = testString;
   var defaultWidth = {};
   var defaultHeight = {};
   for (var index in baseFonts) {
       //get the default width for the three base fonts
       s.style.fontFamily = baseFonts[index];
       h.appendChild(s);
       defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
       defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
       h.removeChild(s);
   }

   function detect(font) {
       var detected = false;
       for (var index in baseFonts) {
           s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
           h.appendChild(s);
           var matched = (s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]]);
           h.removeChild(s);
           detected = detected || matched;
       }
       return detected;
   }
   this.detect = detect;
};


// function to change font style based on user input
function font_style_change()
{
  d = new Detector();
  var fetched_font = document.querySelector('#font_style').value;
  if (d.detect(fetched_font) == false)
  {
    alert(fetched_font + " is not a valid font")
  }
  else
  {
    alert("exists");
  }
}
