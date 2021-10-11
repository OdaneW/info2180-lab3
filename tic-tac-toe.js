window.onload = function(){
    var cDiv = document.getElementById("board").childNodes;
    cDiv.forEach((div) => div.className = "square"); 
    
    // event listener to add x or o to a square, it also Disallows cheating
    const alt = [];
    cDiv.forEach((div) => div.addEventListener("click", function(){
      
      if (div.className == "square" && alt[alt.length-1] != "X"){         
         div.className = "square X";
         div.textContent = "X";
         alt.push("X");            
            
      }
         
      else if(div.className == "square" && alt[alt.length-1] != "O"){
            div.className = "square O";
            div.textContent = "O";
            alt.push("O");
               
               
               
      }
            
   })); 


   //event listener to change the style of a square when the mouse hovers over it
   cDiv.forEach((div) => div.addEventListener("mouseover", function(){
      
   }));
      
   var button = document.getElementsByClassName("controls");
   //event listener to reset squares
   button.addEventListener("click", function(){
      cDiv.forEach((div) => div.className = "square");
   });    
      

   }
    
