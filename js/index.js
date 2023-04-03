// toggle nav bar

$(document).ready(function() {
    $('.nav-toggle').click(function() {
      $('.navbar ul').slideToggle();
    });
    $(window).resize(function() {
      if ($(window).width() > 768) {
        $('.nav-menu').show();
      } else {
        $('.nav-menu').hide();
      }
    });
  });
  
  
// owl carousel in about section...............
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
})

// banner section slider of home page.....

let flag = 1;
showSlider(flag);

// window.onload=setInterval(function (){
//     changeSlide(flag+1);
// },1000);

function changeSlide(n) {
    flag = flag + n;
    showSlider(flag);
}

function showSlider(n) {
    let slide = document.getElementsByClassName("slider");
    console.log("silde lenght", slide, slide.length);
    if (n > slide.length) {
        flag = 1;
    }
    if (n < 1) {
        flag = slide.length
    }
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[flag - 1].style.display = "block";
}

// changing the color of multiple navigation section
function changeColor(recive) {
    switch (recive) {

        case 1: document.getElementById("home_js").style.color = "#F45B0E";
            document.getElementById("about_js").style.color = "aliceblue";
            document.getElementById("gallery_js").style.color = "aliceblue";
            document.getElementById("service_js").style.color = "aliceblue";
            document.getElementById("contact_js").style.color = "aliceblue";

            break;

        case 2: document.getElementById("about_js").style.color = "#F45B0E";
            document.getElementById("home_js").style.color = "aliceblue";
            document.getElementById("gallery_js").style.color = "aliceblue";
            document.getElementById("service_js").style.color = "aliceblue";
            document.getElementById("contact_js").style.color = "aliceblue";

            break;
        case 3: document.getElementById("gallery_js").style.color = "#F45B0E";
            document.getElementById("home_js").style.color = "aliceblue";
            document.getElementById("about_js").style.color = "aliceblue";
            document.getElementById("service_js").style.color = "aliceblue";
            document.getElementById("contact_js").style.color = "aliceblue";

            break;

        case 4: document.getElementById("service_js").style.color = "#F45B0E";
            document.getElementById("home_js").style.color = "aliceblue";
            document.getElementById("about_js").style.color = "aliceblue";
            document.getElementById("gallery_js").style.color = "aliceblue";
            document.getElementById("contact_js").style.color = "aliceblue";

            break;
        case 5: document.getElementById("contact_js").style.color = "#F45B0E";
            document.getElementById("home_js").style.color = "aliceblue";
            document.getElementById("about_js").style.color = "aliceblue";
            document.getElementById("gallery_js").style.color = "aliceblue";
            document.getElementById("service_js").style.color = "aliceblue";

            break;


        default:
    }
}
// sticky navbar.......

window.onscroll = function () { scrollfunction() };

function scrollfunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("stick_nav").style.backgroundColor = 'lightslategrey';
        document.getElementById("stick_nav").style.boxShadow = "none";
    }
    else {
        document.getElementById("stick_nav").style.background = 'none';
        document.getElementById("stick_nav").style.boxShadow = "0px 0px 10px white";
    }
}
// home page form validaton...................................

let nam1stCheck = document.getElementById('nam_1st_check');
let nam2ndCheck = document.getElementById('nam_2nd_check');
let mailCheck = document.getElementById('mail_check');
let numberCheck = document.getElementById('number_check');
// let sessionCheck = document.getElementById('session_check');
// let dobCheck = document.getElementById('dob_check');
let messageCheck = document.getElementById('massege_check');

// error

let nam1stError = document.getElementById('nam_1st_error');
let nam2ndError = document.getElementById('nam_2nd_error');
let mailError = document.getElementById('mail_error');
let numberError = document.getElementById('number_error');
let sessionError = document.getElementById('session_error');
let dobError = document.getElementById('dob_error');
let messageError = document.getElementById('message_error');

// submit error 

let no_1stNum_error = true;
let no_2ndNum_error = true;
let no_mail_error = true;
let no_number_error = true;
let no_session_error = true;
let no_dob_error = true;
let no_message_error = true;

// function 

nam1stCheck.addEventListener('input', check1stNam);
function check1stNam() {
    data = nam1stCheck.value;
    console.log(data);
    valid1stNam = RegExp('^[A-Z]{1}[A-Za-z ]{1,19}$');
    if (data == '') {
        nam1stError.innerHTML = 'Required field';
        return false;
    }
    else if (!valid1stNam.test(data)) {
        nam1stError.innerHTML = 'Atleast 2 characters, max 20 characters, only alphabet required';
        return false;
    }
    else {
        nam1stError.innerHTML = '';
        return true;
    }

}

nam2ndCheck.addEventListener('input', check2stNam);
function check2stNam() {
    data = nam2ndCheck.value;
    console.log(data);
    valid1stNam = RegExp('^[A-Z]{1}[A-Za-z ]{1,19}$');
    if (data == '') {
        nam2ndError.innerHTML = 'Required field';
        return false;
    }
    else if (!valid1stNam.test(data)) {
        nam2ndError.innerHTML = 'Atleast 2 characters, max 20 characters, only alphabet required';
        return false;
    }
    else {
        nam2ndError.innerHTML = '';
        return true;
    }

}

mailCheck.addEventListener('input', checkMail);
function checkMail() {
    data = mailCheck.value;
    console.log(data);
    validMail = RegExp('^([a-z0-9._]{2,25})@([a-z]{2,20}).([a-z.]{1,20})$');
    if (data == '') {
        mailError.innerHTML = 'Required field';
        return false;
    }
    else if (!validMail.test(data)) {
        mailError.innerHTML = 'Enter valid mail id';
        return false;
    }
    else {
        mailError.innerHTML = '';
        return true;
    }
}

numberCheck.addEventListener('input', checkNmber);
function checkNmber() {
    data = numberCheck.value;
    console.log(data);
    validNumber = RegExp('[6-9]{1}[0-9]{9,10}');
    if (data == '') {
        numberError.innerHTML = 'Reqiured field';
        return false;
    }
    else if (!validNumber.test(data)) {
        numberError.innerHTML = 'Enter valid number';
        return false;
    }
    else {
        numberError.innerHTML = '';
        return true;
    }
}

messageCheck.addEventListener('input', checkmessage);
function checkmessage() {
    data = messageCheck.value;
    console.log(data);
    if (data == '') {
        messageError.innerHTML = 'Required field';
        return false;
    }
    else {
        messageError.innerHTML = '';
        return true;
    }
}

function checkSession(){
    let valid
}

// satrt submit function

function validationsubmit(){

}


// auto slider section
var makeBSS = function (el, options) {
    var $slideshows = document.querySelectorAll(el), // a collection of all of the slideshow
        $slideshow = {},
        Slideshow = {
            init: function (el, options) {
                this.counter = 0; // to keep track of current slide
                this.el = el; // current slideshow container    
                this.$items = el.querySelectorAll('.bss-sli'); // a collection of all of the slides, caching for performance
                this.numItems = this.$items.length; // total number of slides
                options = options || {}; // if options object not passed in, then set to empty object 
                options.auto = options.auto || false; // if options.auto object not passed in, then set to false
                this.opts = {
                    auto: (typeof options.auto === "undefined") ? false : options.auto,
                    speed: (typeof options.auto.speed === "undefined") ? 1500 : options.auto.speed,
                    pauseOnHover: (typeof options.auto.pauseOnHover === "undefined") ? false : options.auto.pauseOnHover,
                    fullScreen: (typeof options.fullScreen === "undefined") ? false : options.fullScreen,
                    swipe: (typeof options.swipe === "undefined") ? false : options.swipe
                };
                
                this.$items[0].classList.add('bss-show'); // add show class to first figure 
                this.injectControls(el);
                this.addEventListeners(el);
                if (this.opts.auto) {
                    this.autoCycle(this.el, this.opts.speed, this.opts.pauseOnHover);
                }
                if (this.opts.fullScreen) {
                    this.addFullScreen(this.el);
                }
                if (this.opts.swipe) {
                    this.addSwipe(this.el);
                }
            },
            showCurrent: function (i) {
                // increment or decrement this.counter depending on whether i === 1 or i === -1
                if (i > 0) {
                    this.counter = (this.counter + 1 === this.numItems) ? 0 : this.counter + 1;
                } else {
                    this.counter = (this.counter - 1 < 0) ? this.numItems - 1 : this.counter - 1;
                }

                // remove .show from whichever element currently has it 
                // http://stackoverflow.com/a/16053538/2006057
                [].forEach.call(this.$items, function (el) {
                    el.classList.remove('bss-show');
                });
  
                // add .show to the one item that's supposed to have it
                this.$items[this.counter].classList.add('bss-show');
            },
            injectControls: function (el) {
            // build and inject prev/next controls
                // first create all the new elements
                var spanPrev = document.createElement("span"),
                    spanNext = document.createElement("span"),
                    docFrag = document.createDocumentFragment();
        
                // add classes
                spanPrev.classList.add('bss-prev');
                spanNext.classList.add('bss-next');
        
                // add contents
                spanPrev.innerHTML = '&laquo;';
                spanNext.innerHTML = '&raquo;';
                
                // append elements to fragment, then append fragment to DOM
                docFrag.appendChild(spanPrev);
                docFrag.appendChild(spanNext);
                el.appendChild(docFrag);
            },
            addEventListeners: function (el) {
                var that = this;
                el.querySelector('.bss-next').addEventListener('click', function () {
                    that.showCurrent(1); // increment & show
                }, false);
            
                el.querySelector('.bss-prev').addEventListener('click', function () {
                    that.showCurrent(-1); // decrement & show
                }, false);
                
                el.onkeydown = function (e) {
                    e = e || window.event;
                    if (e.keyCode === 37) {
                        that.showCurrent(-1); // decrement & show
                    } else if (e.keyCode === 39) {
                        that.showCurrent(1); // increment & show
                    }
                };
            },
            autoCycle: function (el, speed, pauseOnHover) {
                var that = this,
                    interval = window.setInterval(function () {
                        that.showCurrent(1); // increment & show
                    }, speed);
                
                if (pauseOnHover) {
                    el.addEventListener('mouseover', function () {
                        interval = clearInterval(interval);
                    }, false);
                    el.addEventListener('mouseout', function () {
                        interval = window.setInterval(function () {
                            that.showCurrent(1); // increment & show
                        }, speed);
                    }, false);
                } // end pauseonhover
                
            },
            addFullScreen: function(el){
                var that = this,
                fsControl = document.createElement("span");
                
                fsControl.classList.add('bss-fullscreen');
                el.appendChild(fsControl);
                el.querySelector('.bss-fullscreen').addEventListener('click', function () {
                    that.toggleFullScreen(el);
                }, false);
            },
            addSwipe: function(el){
                var that = this,
                    ht = new Hammer(el);
                ht.on('swiperight', function(e) {
                    that.showCurrent(-1); // decrement & show
                });
                ht.on('swipeleft', function(e) {
                    that.showCurrent(1); // increment & show
                });
            },
            toggleFullScreen: function(el){
                // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
                if (!document.fullscreenElement &&    // alternative standard method
                    !document.mozFullScreenElement && !document.webkitFullscreenElement &&   
                    !document.msFullscreenElement ) {  // current working methods
                    if (document.documentElement.requestFullscreen) {
                      el.requestFullscreen();
                    } else if (document.documentElement.msRequestFullscreen) {
                      el.msRequestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                      el.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                      el.webkitRequestFullscreen(el.ALLOW_KEYBOARD_INPUT);
                    }
                } else {
                    if (document.exitFullscreen) {
                      document.exitFullscreen();
                    } else if (document.msExitFullscreen) {
                      document.msExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                      document.mozCancelFullScreen();
                    } else if (document.webkitExitFullscreen) {
                      document.webkitExitFullscreen();
                    }
                }
            } // end toggleFullScreen
            
        }; // end Slideshow object 
        
    // make instances of Slideshow as needed
    [].forEach.call($slideshows, function (el) {
        $slideshow = Object.create(Slideshow);
        $slideshow.init(el, options);
    });
};
var opts = {
    auto : {
        speed : 3000, 
        pauseOnHover : true
    },
    fullScreen : true, 
    swipe : true
};
makeBSS('.demo1', opts);