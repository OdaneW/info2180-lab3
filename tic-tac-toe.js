window.onload = function(){
    var cDiv = document.getElementById("board").childNodes;
    cDiv.forEach((div) => div.className = "square"); 
    
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
      
      
      alert("Ran")

   }
    
