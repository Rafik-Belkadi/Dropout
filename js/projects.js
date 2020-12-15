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
    gsap.set('html,body', { backgroundColor: '#FFFFFF' })

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
        image2: '../assets/sgs.png',
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