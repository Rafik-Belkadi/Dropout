
var mainbgcolor = "#e0e0e0";
var secondarybgcolor = "#191516";
var secondaryaccentcolor = "#5465FF";
var secondarytxtcolor = "#FFFFFF";
var maintxtcolor = "#707070";
var darktxtcolor = "#020202";
var accentcolor = "#c92200";

var state = innerWidth > 768 ? "big" : "small";


var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 20,
                top: posY - 20
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});



gsap.set(".mainsec", { height: "0%", overflow: "hidden", position: "absolute" });
var tl = gsap.timeline();
tl.to(".loading-screen", {
    duration: 2,
    height: "100%",
    top: "-100%",
    ease: "Expo.easeInOut",
    delay: 4,
});
gsap.set(".mainsec", { height: "100%", overflow: "hidden", position: "static", delay: 4 });


//  LANDING PAGE ANIMATIONS
// -------------------------------------------------
var mydealy = 5.5;
let current = new Date();
document.getElementById("current-time").innerText = current.toUTCString();

gsap.from(".top-menu-bloc ul", { duration: 2, opacity: 0, x: "-100%", ease: "back", delay: mydealy });
gsap.from(".top-menu-bloc h2", { duration: 2, opacity: 0, x: "-100%", ease: "back", delay: mydealy });
var t1 = new TimelineMax();

t1.delay(mydealy)
t1.from(".shout-us h6", 1, { opacity: 0 })
t1.staggerFrom(".top-content-bloc p,.top-content-bloc h1, .about p, .about ul", 1.5, { opacity: 0, y: "100%" }, .02);
t1.from(".underline ", 1, { width: "0%" })



//  UL HOVER ANIMATION
if (state == 'big') {
    var hoveredLi = document.getElementsByClassName("menu-item-wrapper");
    for (let index = 0; index < hoveredLi.length; index++) {
        const element = hoveredLi[index].children[0];
        element.addEventListener("mouseover", function (e) {
            let nextEl = element.parentElement.children[1];
            gsap.to(nextEl, {
                duration: 0.2,
                y: "-100%",
                color: nextEl.textContent == "Algiers" ? accentcolor : "#020202"
            });
        });
    }

    for (let index = 0; index < hoveredLi.length; index++) {
        const element = hoveredLi[index].children[0];;
        element.addEventListener("mouseout", function (e) {
            let nextEl = element.parentElement.children[1];
            gsap.to(nextEl, {
                duration: 0.2,
                y: 0,
                color: "#707070"
            });
        });
    }

}


const shoutUs = document.getElementById("shoutWrapper");
if (state == 'big') {
    shoutUs.addEventListener("mouseover", () => {
        const element = document.getElementById("shoutUs");
        gsap.to(element, {
            duration: 0.2,
            cursor: "none",
            width: "70%",
            backgroundColor: mainbgcolor,
            color: darktxtcolor,
            ease: Power4.easeOut

        })
    })
    shoutUs.addEventListener("mouseout", () => {
        const element = document.getElementById("shoutUs");
        gsap.to(element, {
            duration: 0.2,
            cursor: "none",
            width: "100%",
            backgroundColor: accentcolor,
            color: secondarytxtcolor,
            ease: Power4.easeOut
        })
    })

}

//  END LANDING PAGE ANIMATIONS
// -------------------------------------------------


//  ABOUT PAGE ANIMATIONS
// -------------------------------------------------
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(CSSRulePlugin);
var aboutContent = document.querySelector(".about-content");
var results = Splitting({ target: aboutContent, by: "lines" });
document.getElementsByClassName("about-content")[0].innerHTML = "";
for (let index = 0; index < results[0].lines.length; index++) {
    var myLine = document.createElement("div");
    var myLineWrapper = document.createElement("div");
    myLine.classList.add("my-line");
    myLineWrapper.classList.add("my-line-wrapper");
    const line = results[0].lines[index];
    for (let j = 0; j < line.length; j++) {
        const word = line[j];
        myLine.appendChild(word);
        myLine.innerHTML += " ";
    }
    myLineWrapper.appendChild(myLine);
    document.getElementsByClassName("about-content")[0].appendChild(myLineWrapper);
}
gsap.from("#about .section-title-wrapper h4, #about .section-title-wrapper h2", 1, {
    scrollTrigger: ".about-content",
    y: "200%",
    stagger: .2

});

gsap.from(".my-line", 2, {
    scrollTrigger: ".about-content",
    y: "200%",
    stagger: .2
})
gsap.from("#about .funny-text p", 2, {
    scrollTrigger: ".about-content",
    y: "200%",
    delay: 0.5
})

//  END ABOUT PAGE ANIMATIONS
// -------------------------------------------------

//  CAN DO ANIMATIONS
// -------------------------------------------------

gsap.from("#cando .section-title-wrapper h4, #cando .section-title-wrapper h2", 1, {
    scrollTrigger: "#cando",
    y: "200%",
    stagger: .2

})
gsap.from(".can-do li", 2, {
    scrollTrigger: ".can-do",
    x: "-100%",
    stagger: .2
})
gsap.from("#cando .funny-text p", 1, {
    scrollTrigger: ".can-do",
    y: "100%",
})

//  END CAN DO ANIMATIONS
// -------------------------------------------------

//  Projects ANIMATIONS
// -------------------------------------------------

gsap.from("#projects .section-title-wrapper h4, #projects .section-title-wrapper h2", 1, {
    scrollTrigger: "#projects",
    y: "200%",
    stagger: .2

})
gsap.from(".projects li", 2, {
    scrollTrigger: ".projects",
    x: "-100%",
    stagger: .2
})
gsap.from("#projects .wrapper .funny-text p", 1, {
    scrollTrigger: ".projects",
    y: "100%",
})

//  END Projects ANIMATIONS
// -------------------------------------------------


gsap.from("#contact .section-title-wrapper h4, #contact .section-title-wrapper h2", 1, {
    scrollTrigger: "#contact",
    y: "200%",
    stagger: .2

})
gsap.from("#contact .contact-bubble", 2, {
    scrollTrigger: "#contact",
    y: "200%",
    ease: "back"
})
gsap.from("#contact .footer", 2, {
    scrollTrigger: "#contact",
    y: "200%",
    delay: 0.5
})


//  BACK TO TOP PAGE ANIMATIONS
// -------------------------------------------------







var h = document.getElementById("home-li");
h.addEventListener("click", function () {
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    });
    $('.selected').removeClass("selected");
    h.parentElement.children[state == 'big' ? 0 : 1].classList.add("selected");
});
var a = document.getElementById("about-li");
a.addEventListener("click", function () {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
    $('.selected').removeClass("selected");
    a.parentElement.children[state == 'big' ? 0 : 1].classList.add("selected");

});
var c = document.getElementById("cando-li");
c.addEventListener("click", function () {
    document.querySelector('#cando').scrollIntoView({
        behavior: 'smooth'
    });
    $('.selected').removeClass("selected");
    c.parentElement.children[state == 'big' ? 0 : 1].classList.add("selected");

});
var cz = document.getElementById("projects-li");
cz.addEventListener("click", function () {
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
    $('.selected').removeClass("selected");
    cz.parentElement.children[state == 'big' ? 0 : 1].classList.add("selected");

});
var cd = document.getElementById("contact-li");
cd.addEventListener("click", function () {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
    $('.selected').removeClass("selected");
    cd.parentElement.children[state == 'big' ? 0 : 1].classList.add("selected");

});


var back = document.getElementById("back");
back.addEventListener("click", function () {
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    });
    $('.selected').removeClass("selected");
    h.parentElement.children[state == 'big' ? 0 : 1].classList.add("selected");
});


var myAnimation1 = new hoverEffect({
    parent: document.querySelector('.bottom-menu-bloc'),
    image1: 'assets/background2.jpg',
    image2: 'assets/future.png',
    displacementImage: 'assets/fluid.jpg'
});

$(document).ready(function () {
    TweenMax.set(".project-preview", {
        width: 0
    });
    $(document)
        .on("mouseover", ".navigation-item span", function (evt) {

            gsap.to($(".project-preview"), {
                duration: 1,
                width: "600px",
                ease: Expo.easeInOut
            });
        })
        .on("mouseout", ".navigation-item span", function (evt) {

            gsap.to($(".project-preview"), {
                duration: 0.5,
                width: 0,
                ease: Expo.easeInOut
            })
        });
});


$(".navigation-link-1").hover(function () {
    $(".project-preview").css({
        "background-image": "url(assets/Perf.jpg)"
    });
});

$(".navigation-link-2").hover(function () {
    $(".project-preview").css({
        "background-image": "url(assets/radio.jpg)"
    });
});

$(".navigation-link-3").hover(function () {
    $(".project-preview").css({
        "background-image": "url(assets/banxy.png)"
    });
});

$(".navigation-link-4").hover(function () {
    $(".project-preview").css({
        "background-image": "url(assets/sgs.PNG)"
    });
});



