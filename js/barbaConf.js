function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function delayxd(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransitionStart() {
    var tl = gsap.timeline();
    var currentToHide = document.URL.split("/")[3] == "index.html" ? "mainsec" : "main"
    tl.to(".loading-screen-xd", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });
    tl.to(currentToHide, { opacity: 0 }, 0.5,)
}

function pageTransitionEnd() {
    var tl = gsap.timeline();
    var currentToHide = document.URL.split("/")[3] == "index.html" ? "mainsec" : "main"
    tl.to(currentToHide, 0, { opacity: 1 }, 1)
    tl.to(".loading-screen-xd", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen-xd", { left: "-100%" });
}

const loadCss = (css, id) => {
    jQuery(document.createElement('link')).attr({
        href: css,
        id: id,
        type: 'text/css',
        rel: 'stylesheet'
    }).appendTo('head');
}

const destroyCss = (id) => {
    document.getElementById(id).remove();
}

const deleteAnimationStart = () => {
    document.getElementById("loadingToDestroy").remove()
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                name: 'home',
                to: { namespace: ['home'] },

                async leave(data) {
                    const done = this.async();
                    pageTransitionStart();
                    destroyCss('perfCss')
                    destroyCss('imageToDestroy')
                    destroyCss('text-to-destroy')
                    var currentPage = document.URL.split('/')[3];
                    if (currentPage == "index.html") {
                        loadCss("css/style.css", "indexCss")
                    } else if (currentPage == "index-dark.html") {
                        loadCss("css/style-dark.css", "indexCss")
                    } else {
                        loadCss("css/style.css", "indexCss")
                    }
                    await delay(1000);
                    done();
                },
                async beforeEnter(data) {
                    deleteAnimationStart();
                    $('.content-bloc, #shoutUs').addClass('notransition');
                },
                async enter(data) {
                    const done = this.async();
                    pageTransitionEnd();
                    await delay(1000)
                    animateHomeLight()
                    done();
                },
                after() {
                    var cz = document.getElementById("projects-li");

                    document.querySelector('#projects').scrollIntoView({
                        behavior: 'smooth'
                    });
                    $('.selected').removeClass("selected");
                    cz.parentElement.children[state == 'big' ? 0 : 1].classList.add("selected");
                }
            },
            {
                name: 'perf',
                to: { namespace: ['perf'] },
                async leave(data) {
                    const done = this.async();
                    pageTransitionStart()
                    destroyCss('indexCss')
                    destroyCss('bottomToDestroy')
                    loadCss("css/projects.css", "perfCss")
                    await delay(1000);
                    done();
                },
                async enter(data) {
                    const done = this.async();
                    pageTransitionEnd();
                    await delay(1000)
                    animatePerf()
                    done();
                }
            },
            {
                name: 'radio',
                to: { namespace: ['radio'] },
                async leave(data) {
                    const done = this.async();
                    pageTransitionStart()
                    destroyCss('indexCss')
                    destroyCss('bottomToDestroy')
                    loadCss("css/projects.css", "perfCss")
                    await delay(1000);
                    done();
                },
                async enter(data) {
                    const done = this.async();
                    pageTransitionEnd();
                    await delay(1000)
                    animatePerf()
                    done();
                }
            },
            {
                name: 'sgs',
                to: { namespace: ['sgs'] },
                async leave(data) {
                    const done = this.async();
                    pageTransitionStart()
                    destroyCss('indexCss')
                    destroyCss('bottomToDestroy')
                    loadCss("css/projects.css", "perfCss")
                    await delay(1000);
                    done();
                },
                async enter(data) {
                    const done = this.async();
                    pageTransitionEnd();
                    await delay(1000)
                    animatePerf()
                    done();
                }
            },
            {
                name: 'banxy',
                to: { namespace: ['banxy'] },
                async leave(data) {
                    const done = this.async();
                    pageTransitionStart()
                    destroyCss('indexCss')
                    destroyCss('bottomToDestroy')
                    loadCss("css/projects.css", "perfCss")
                    await delay(1000);
                    done();
                },
                async enter(data) {
                    const done = this.async();
                    pageTransitionEnd();
                    await delay(1000)
                    animatePerf()
                    done();
                }
            },
        ],
    });
});

const animatePerf = () => {
    $('#maindiv').width('800px');

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


    var aboutContent = document.querySelector(".text-content");
    var results = Splitting({ target: aboutContent, by: "lines" });
    document.getElementsByClassName("text-content")[0].innerHTML = "";
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
        document.getElementsByClassName("text-content")[0].appendChild(myLineWrapper);
    }
    gsap.from(".our-story", 2, {
        x: "-100%",
        opacity: 0,
        stagger: .5

    });
    gsap.from(".date-location", 2, {
        x: "-100%",
        opacity: 0,
        stagger: .5
    });

    gsap.from(".my-line", 2, {
        y: "200%",
        stagger: .2
    })
    var currentLink = document.URL.split('/')[3]
    if (currentLink == 'Radio.html') {
        document.documentElement.style.setProperty('--accent-color', '#FF2A6D');

        var myAnimation = new hoverEffect({
            parent: document.querySelector('.image-container'),
            image1: '../assets/projects/radio.jpg',
            image2: '../assets/projects/radioMock.png',
            displacementImage: '../assets/fluid.jpg'
        });
    }
    else if (currentLink == 'banxy.html') {
        gsap.set('html,body', { backgroundColor: '#FFFFFF' })
        var myAnimation = new hoverEffect({
            parent: document.querySelector('.image-container'),
            image1: '../assets/future.png',
            image2: '../assets/projects/banxyMock.png',
            displacementImage: '../assets/fluid.jpg'
        });
    } else if (currentLink == 'Security.html') {
        gsap.set('html,body', { backgroundColor: '#FFFFFF' })
        document.documentElement.style.setProperty('--accent-color', '#1280b4');
        var myAnimation = new hoverEffect({
            parent: document.querySelector('.image-container'),
            image1: '../assets/future.png',
            image2: '../assets/sgs.jpg',
            displacementImage: '../assets/fluid.jpg'
        });
    } else {
        var myAnimation = new hoverEffect({
            parent: document.querySelector('.image-container'),
            image1: '../assets/projects/perf.jpg',
            image2: '../assets/projects/perfMock.png',
            displacementImage: '../assets/fluid.jpg'
        });
    }


    $("i").on("mouseenter", function () {
        cursor.addClass("active");
        follower.addClass("active");
        gsap.to('i', { zIndex: 5 })
    });

    $("i").on("mouseleave", function () {
        cursor.removeClass("active");
        follower.removeClass("active");
    });
}


const animateHomeLight = () => {
    var currentPage = document.URL.split('/')[3];
    var mydelay1 = 1;
    if (currentPage == "index.html" || currentPage == '') {
        var mainbgcolor = "#e0e0e0";
        var secondarybgcolor = "#191516";
        var secondaryaccentcolor = "#5465FF";
        var secondarytxtcolor = "#FFFFFF";
        var maintxtcolor = "#707070";
        var darktxtcolor = "#020202";
        var accentcolor = "#c92200";
    } else if (currentPage == "index-dark.html") {
        var mainbgcolor = "#161616";
        var secondarybgcolor = "#161616";
        var secondaryaccentcolor = "#c92200";
        var secondarytxtcolor = "#FFFFFF";
        var maintxtcolor = "#5465FF";
        var darktxtcolor = "#FFFFFF";
        var accentcolor = "#5465FF";
    }
    document.documentElement.style.setProperty('--accent-color', accentcolor);
    gsap.set('html,body', { backgroundColor: mainbgcolor })

    var state = innerWidth > 768 ? "big" : "small";
    var cz = document.getElementById("projects-li");
    $('#home').height('100vh')

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(CSSRulePlugin);


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

    gsap.set(".mainsec", { height: "100%", overflow: "hidden", position: "static" });




    const shoutUs = document.getElementById("shoutWrapper");
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

    $(document).ready(function () {
        TweenMax.set(".project-preview", {
            width: 0
        });
        $(document)
            .on("mouseover", ".navigation-item span", function () {

                gsap.to($(".project-preview"), {
                    duration: 1,
                    width: "600px",
                    ease: Expo.easeInOut
                });
            })
            .on("mouseout", ".navigation-item span", function () {

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
            "background-image": "url(assets/banxy.jpg)"
        });
    });
    $(".navigation-link-4").hover(function () {
        $(".project-preview").css({
            "background-image": "url(assets/sgs.jpg)"
        });

    });
    var myAnimation1 = new hoverEffect({
        parent: document.querySelector('.bottom-menu-bloc'),
        image1: 'assets/background2.jpg',
        image2: 'assets/future.png',
        displacementImage: 'assets/fluid.jpg'
    });

}
