function locomotiveanimate(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locomotiveanimate();

function navbaranimate(){
    gsap.to('.nav-part1 svg',{
        transform: "translateY(-100%)",
        scrollTrigger:{
            trigger: ".page1",
            scroller : ".main",
            start : 'top 0',
            end : 'top -5%',
            scrub : 2
        }
    })
    
    gsap.to('.nav-part2 .links',{
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger:{
            trigger: ".page1",
            scroller : ".main",
            start : 'top 0',
            end : 'top -5%',
            scrub : 2
        }
    })
}
navbaranimate();

 function description(){
    gsap.from('.description h1',{
        y : 100,
        // scale: 0.5,
        opacity: 0,
        scrollTrigger:{
            trigger: ".description",
            scroller : ".main",
            start : 'top 100%',
            end : 'top 50%',
            scrub : 2
        }
    })
 };
 description();
function videoanimation(){
    var videocon = document.querySelector('.video-container');
var playbtn = document.querySelector('.playbutton');

videocon.addEventListener('mouseenter',function(){
    gsap.to(playbtn,{
        scale: 1,
        opacity : 1
    })
});
videocon.addEventListener('mousemove',function(dets){
    gsap.to(playbtn,{
        left : dets.x-70,
        top : dets.y-80
    })
});
videocon.addEventListener('mouseleave',function(dets){
    gsap.to(playbtn,{
        scale: 0,
        opacity : 0
    });
    unmute.innerHTML = `<video autoplay muted loop src="./video.mp4"></video>`;
        flag= false;
        playbtn.innerHTML = 'play'
});
var unmute = document.querySelector('.video-container video');
var flag = false;
videocon.addEventListener('click',function(){
    console.log(unmute);
    if(!flag){
    unmute.innerHTML = `<video autoplay loop src="./video.mp4"></video>`;
    flag = true;
    playbtn.innerHTML = 'mute';
    }else{
        unmute.innerHTML = `<video autoplay muted loop src="./video.mp4"></video>`;
        flag= false;
        playbtn.innerHTML = 'play'

    }
})
};
videoanimation();

function loadingtitle(){
    gsap.from('.page1 h1',{
        y:100,
        opacity : 0,
        duration: 0.8,
        delay : 0.5,
        stagger : 0.3
    });

    gsap.from('.page1 .video-container',{
        scale:0.9,
        opacity : 0,
        duration: 0.5,
        delay : 1.3,
    })
};
loadingtitle();

document.addEventListener('mousemove',function(dets){
    gsap.to('.cursor',{
        left: dets.x,
        top: dets.y,
    })
})


function productanimation(){
    document.querySelectorAll('.child').forEach(function(elem){
        elem.addEventListener('mouseleave',function(){
            gsap.to('.cursor',{
                transform: `translate(-50%,-50%) scale(0)`,
            })
            gsap.to(elem,{
                scale: 1
            })
        })
    })
    
    document.querySelectorAll('.child').forEach(function(elem){
        elem.addEventListener('mouseenter',function(){
            gsap.to('.cursor',{
                transform: `translate(-50%,-50%) scale(1)`,
    
            })
            gsap.to(elem,{
                scale: 1.2
            })
        })
    })
}

productanimation();


function lastheading(){
    gsap.from('.page4 h1',{
        y : 50,
        // scale: 0.5,
        stagger: 0.3,
        opacity: 0,
        scrollTrigger:{
            trigger: ".lastcontainer",
            scroller : ".main",
            start : 'top 100%',
            end : 'top 50%',
            scrub : 2
        }
    })

    var messagebtn = document.querySelector('.page4 button');
    messagebtn.addEventListener('mouseenter',function(){
        gsap.to(messagebtn,{
            scale: 1.1,
        });
        
        messagebtn.addEventListener('click',function(){
            gsap.to(messagebtn,{
                scale:1.05,
            })
        })

        messagebtn.addEventListener('mouseleave',function(){
            gsap.to(messagebtn,{
                scale:1,
            })
        })
  })}
lastheading();