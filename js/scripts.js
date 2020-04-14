// This file needs to be linked as the source scripts page for JS, and then functions can be referenced here.

function scramble()
{
  //grabs the input from the form
  let text_to_scramble = document.querySelector('#scramble_text').value
  
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