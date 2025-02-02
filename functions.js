function changetheme(){
    style = document.getElementById("stylesheet");
    
   current_style = style.getAttribute("href");
   
    // 1 (c) Determine new stylesheet file name
    newstyle = ""
    if (current_style == "style1.css")
        newstyle = "style2.css";
    else
        newstyle = "style1.css";
   

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    style.setAttribute("href", newstyle);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("saved style", newstyle);
  
}


window.onload = function(){
    namee = localStorage.getItem("saved style");    
    
    style = document.getElementById("stylesheet");

    if (namee == "style1.css" || namee == "style2.css")

    style.setAttribute("href", namee);
}
