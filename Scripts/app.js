"use strict";

// IIFE -> Immediately Invoked Function Expression
// mean? -> Anonymous Self-executing Function


(function(){

    let h2;

    // event handlers
    function mouseover()
    {
        h2.style.color = "green";
        h2.style.fontSize = "30px";
    }
  
    function mouseout()
    {
        h2.style.color = "black";
        h2.style.fontSize = "20px";
    }

    {
        var myVariable = "my variable";
    }

    for(var i=0; i<10; i++)
    {
        console.log(i);
    }

    
    function Start()
    {
        console.log(myVariable);
        console.log("%cApp Started...", "color:blue; font-size:20px;");

        // get a reference to the content area
        let contentArea = document.getElementById("contentArea");

        // create an h2 element
        h2 = document.createElement("h2");
        // add a class attribute to the h2 element
        h2.setAttribute("class", "display-5");
        h2.textContent = "Welcome to my site...";

        // append the new node to contentArea
        contentArea.appendChild(h2);

        h2.addEventListener("click", function(){
            h2.style.color = (h2.style.color == "blue") ? "black" : "blue";
        });

        h2.addEventListener("mouseover", mouseover);

        h2.addEventListener("mouseout", mouseout);
    }

    window.addEventListener("load", Start);
})();