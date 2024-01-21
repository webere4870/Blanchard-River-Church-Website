import {nav} from './Partials.js'
$().ready(()=>
{
    $( "body" ).append(nav)
    setInterval(()=>
    {
        if(document.querySelectorAll(".sticky")[0]?.offsetHeight == 80 && window.innerWidth <= 768)
        {
            $("nav a").css("opacity", "0", 200)
        }
    },300)

    window.addEventListener("resize", (evt)=>
    {
        console.log("rezi")
        if(window.innerWidth > 768)
        {
            $("nav a").css("opacity", "1")
            $(".sticky").animate({height: "80px"})
        }
        else{
            $("nav a").css("opacity", "0")
           
        }
    })
    
    $("body").on("click", ".hamburgery", (evt) => {
        if(document.querySelectorAll(".sticky")[0].offsetHeight == 80)
        {
            $(".sticky").animate({height: "100vh", color: "black"}, 200);
            $("nav a").css("opacity", "1", 200)
        }
        else
        {
            $("nav a").css("opacity", "0", 200)
            $(".sticky").animate({height: "80px", color: "black"}, 200);
        }
    });
})