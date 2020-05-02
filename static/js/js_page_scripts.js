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

// function to toggle 

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
