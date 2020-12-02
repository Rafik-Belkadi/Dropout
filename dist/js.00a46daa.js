// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
gsap.set(".mainsec", {
  height: "0%",
  overflow: "hidden",
  position: "absolute"
});
var tl = gsap.timeline();
tl.to(".loading-screen", {
  duration: 2,
  height: "100%",
  top: "-100%",
  ease: "Expo.easeInOut",
  delay: 4
});
gsap.set(".mainsec", {
  height: "100%",
  overflow: "hidden",
  position: "static",
  delay: 4
}); //  LANDING PAGE ANIMATIONS
// -------------------------------------------------

var mydealy = 5.5;
var current = new Date();
document.getElementById("current-time").innerText = current.toUTCString();
gsap.from(".top-menu-bloc ul", {
  duration: 2,
  opacity: 0,
  x: "-100%",
  ease: "back",
  delay: mydealy
});
gsap.from(".top-menu-bloc h2", {
  duration: 2,
  opacity: 0,
  x: "-100%",
  ease: "back",
  delay: mydealy
});
var t1 = new TimelineMax();
t1.delay(mydealy);
t1.staggerFrom(".top-content-bloc p,.top-content-bloc h1", 2, {
  opacity: 0,
  y: "100%"
}, .02);
var t2 = new TimelineMax();
t2.delay(mydealy);
t2.staggerFrom(".about p", 2, {
  opacity: 0,
  y: "100%",
  ease: "back"
}, .02);
t2.staggerFrom(".about ul", 2, {
  opacity: 0,
  y: "100%",
  ease: "back"
}, .02); //  UL HOVER ANIMATION

var hoveredLi = document.getElementsByClassName("menu-item-wrapper");

var _loop = function _loop(index) {
  var element = hoveredLi[index].children[0];
  element.addEventListener("mouseover", function (e) {
    var nextEl = element.parentElement.children[1];
    gsap.to(nextEl, {
      duration: 0.2,
      y: "-100%",
      color: "#020202"
    });
  });
};

for (var index = 0; index < hoveredLi.length; index++) {
  _loop(index);
}

var _loop2 = function _loop2(_index) {
  var element = hoveredLi[_index].children[0];
  ;
  element.addEventListener("mouseout", function (e) {
    var nextEl = element.parentElement.children[1];
    gsap.to(nextEl, {
      duration: 0.2,
      y: 0,
      color: "#707070"
    });
  });
};

for (var _index = 0; _index < hoveredLi.length; _index++) {
  _loop2(_index);
} //  END LANDING PAGE ANIMATIONS
// -------------------------------------------------
//  ABOUT PAGE ANIMATIONS
// -------------------------------------------------


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
var aboutContent = document.querySelector(".about-content");
var results = Splitting({
  target: aboutContent,
  by: "lines"
});
console.log(results);
document.getElementsByClassName("about-content")[0].innerHTML = "";

for (var _index2 = 0; _index2 < results[0].lines.length; _index2++) {
  var myLine = document.createElement("div");
  var myLineWrapper = document.createElement("div");
  myLine.classList.add("my-line");
  myLineWrapper.classList.add("my-line-wrapper");
  var line = results[0].lines[_index2];

  for (var j = 0; j < line.length; j++) {
    var word = line[j];
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
});
gsap.from(".funny-text p", 2, {
  scrollTrigger: ".about-content",
  y: "200%",
  delay: 0.5
}); //  END ABOUT PAGE ANIMATIONS
// -------------------------------------------------
//  CAN DO ANIMATIONS
// -------------------------------------------------

gsap.from("#cando .section-title-wrapper h4, #cando .section-title-wrapper h2", 1, {
  scrollTrigger: "#cando",
  y: "200%",
  stagger: .2
});
gsap.from(".can-do li", 2, {
  scrollTrigger: ".can-do",
  x: "-100%",
  stagger: .2
});
gsap.from("#cando .funny-text p", 1, {
  scrollTrigger: ".can-do",
  y: "100%"
}); //  END CAN DO ANIMATIONS
// -------------------------------------------------

gsap.from("#contact .section-title-wrapper h4, #contact .section-title-wrapper h2", 1, {
  scrollTrigger: "#contact",
  y: "200%",
  stagger: .2
});
gsap.from("#contact .contact-bubble", 2, {
  scrollTrigger: "#contact",
  y: "200%",
  ease: "back"
});
gsap.from("#contact .footer", 2, {
  scrollTrigger: "#contact",
  y: "200%",
  delay: 0.5
}); //  BACK TO TOP PAGE ANIMATIONS
// -------------------------------------------------

var cursor = $(".cursor"),
    follower = $(".cursor-follower");
var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;
TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function onRepeat() {
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
var h = document.getElementById("home-li");
h.addEventListener("click", function () {
  document.querySelector('#home').scrollIntoView({
    behavior: 'smooth'
  });
  $('.selected').removeClass("selected");
  h.parentElement.children[0].classList.add("selected");
});
var a = document.getElementById("about-li");
a.addEventListener("click", function () {
  document.querySelector('#about').scrollIntoView({
    behavior: 'smooth'
  });
  $('.selected').removeClass("selected");
  a.parentElement.children[0].classList.add("selected");
});
var c = document.getElementById("cando-li");
c.addEventListener("click", function () {
  document.querySelector('#cando').scrollIntoView({
    behavior: 'smooth'
  });
  $('.selected').removeClass("selected");
  c.parentElement.children[0].classList.add("selected");
});
var cd = document.getElementById("contact-li");
cd.addEventListener("click", function () {
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth'
  });
  $('.selected').removeClass("selected");
  cd.parentElement.children[0].classList.add("selected");
});
var back = document.getElementById("back");
back.addEventListener("click", function () {
  document.querySelector('#home').scrollIntoView({
    behavior: 'smooth'
  });
  $('.selected').removeClass("selected");
  h.parentElement.children[0].classList.add("selected");
});
},{}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50135" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map