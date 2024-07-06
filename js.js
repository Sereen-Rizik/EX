function addclass(){
    const text = document.getElementById("text");
    const cls= document.getElementById("input").value;
    if(cls== "highlight")
        text.className = "highlight";
    if(cls == "underline")
        text.className = "underline";
    if(cls == "bold")
        text.className = "bold";

    }
    function toggleVisibility(num) {
        if (num == 1) {
          const paragraph = document.getElementById("one");
          if (paragraph.classList.contains("show"))
             {
            paragraph.classList.remove("show");
            paragraph.classList.add ("hidden");
          } 
          else {
            paragraph.classList.add("show");
            paragraph.classList.remove ("hidden");
        }
    }
        if (num == 2) {
          const paragraph = document.getElementById("two");
          if (paragraph.classList.contains("show")) 
            {
            paragraph.classList.remove("show");
            paragraph.classList.add ("hidden");
          }
           else {
            paragraph.classList.add("show");
            paragraph.classList.remove ("hidden");
        }
    }
        if (num == 3) {
          const paragraph = document.getElementById("three");
          if (paragraph.classList.contains("show")) 
            {
            paragraph.classList.remove("show");
            paragraph.classList.add ("hidden");
          } 
          else {
            paragraph.classList.add("show");
            paragraph.classList.remove ("hidden");
        }
        }

    }
    function chang(){
        const btn = document.getElementById("btn");
        btn.textContent= "clicked";
        btn.style.pointerEvents="none";
    }
