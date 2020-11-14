class Color{
    constructor(){
        this.color1 = document.getElementById("color1");
        this.color1.addEventListener("click" , ()=>{
            this.select_color("color1");
        });

        this.color2 = document.getElementById("color2");
        this.color2.addEventListener("click" , ()=>{
            this.select_color("color2");
        });

        this.color3 = document.getElementById("color3");
        this.color3.addEventListener("click" , ()=>{
            this.select_color("color3");
        });

        this.color4 = document.getElementById("color4");
        this.color4.addEventListener("click" , ()=>{
            this.select_color("color4");
        });
        if(localStorage.getItem("COLOR")==null){
            document.getElementById("content").style.background = "rgb(255, 0, 0)";
        }
        this.select_color(localStorage.getItem("COLOR"));
    }
    select_color(color){
        if(color=="color1"){
            document.getElementById("header").style.background = "#DF6589FF";
            document.getElementById("content").style.background = "rgb(114, 70, 138)";
            document.body.style.background = " aquamarine";
        }

         else if(color=="color2"){
            document.getElementById("header").style.background = "#1C1C1BFF";
            document.getElementById("content").style.background = "rgb(255, 0, 0)";
            document.body.style.background = " gray";
        }

        else if(color=="color3"){
            document.getElementById("header").style.background = "rgb(175, 82, 171)";
            document.getElementById("content").style.background = " rgb(1, 255, 35)";
            document.body.style.background = "pink";
        }

        else if(color=="color4"){
            document.getElementById("header").style.background = "rgb(49, 24, 65)";
            document.getElementById("content").style.background = " rgb(230, 215, 9)";
            document.body.style.background = "rgb(35, 255, 119)";
        }
        localStorage.setItem("COLOR", color);
    }
}
onload = new Color();