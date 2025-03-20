console.log('OK');

gsap.to('#Body', {
  
    scale: 1.05,
    duration: 2,
    transformOrigin: '50% 50%',
    repeat: -1,
    yoyo: true,
    
    
  })

  gsap.to('#head', {
  
    scale: 1.05,
    duration: 2,
    transformOrigin: '50% 50%',
    repeat: -1,
    yoyo: true,
    
    
  })

  gsap.to('#leaf', {
  
    rotation: -15, transformOrigin:"bottom" ,
    repeat: -1,
    duration: 1.5,
    yoyo: true,
    
    
  })

  
  gsap.to('#leafr2', {
  
    rotation: -15, transformOrigin:"bottom" ,
    repeat: -1,
    duration: 1.5,
    yoyo: true,
    
    
  })

  gsap.to('#leafr', {
  
    rotation: -15, transformOrigin:"bottom" ,
    repeat: -1,
    duration: 1.5,
    yoyo: true,
    
    
  })


  gsap.to('#leafr5', {
  
    rotation: -15, transformOrigin:"bottom" ,
    repeat: -1,
    duration: 1.5,
    yoyo: true,
    
    
  })

  gsap.to('#leafr3', {
  
    rotation: -15, transformOrigin:"bottom" ,
    repeat: -1,
    duration: 1.5,
    yoyo: true,
    
    
  })






  
  gsap.to('#Pen', {
  
    rotation: -10, transformOrigin:"top" ,
    repeat: -1,
    duration: 3,
    yoyo: true,
    
    
  })










  document.getElementById("r1").addEventListener("click", function() {
    this.style.visibility = "hidden";
});

document.getElementById("leaf").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r2").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r3").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r4").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r5").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r6").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r7").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r8").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r9").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r10").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r11").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r12").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r13").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r14").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r15").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r16").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r17").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r18").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r19").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("r20").addEventListener("click", function() {
  this.style.visibility = "hidden";
});


document.getElementById("r21").addEventListener("click", function() {
  this.style.visibility = "hidden";
});






document.getElementById("leaf").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("leafr").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("leafr2").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("leafr3").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("leafr4").addEventListener("click", function() {
  this.style.visibility = "hidden";
});

document.getElementById("leafr5").addEventListener("click", function() {
  this.style.visibility = "hidden";
});


document.getElementById("gift").addEventListener("click", function() {
  let tl = gsap.timeline();

  // Inflate the balloon before popping
  tl.to("#gift", { scale: 1.2, duration: 0.2, ease: "elastic.out(1, 0.3)" })
    .to("#gift", { scale: 0, duration: 0.1, ease: "power2.inOut" }) // Instant pop effect
    .to("#particles", { opacity: 1, scale: 1.5, duration: 0.3, ease: "power2.out" }, "-=0.1") // Show particles
    .to("#particles", { opacity: 0, duration: 0.5 }); // Fade out particles

  // Optional: Play a pop sound
  let popSound = new Audio('https://www.fesliyanstudios.com/play-mp3/403');
  popSound.play();
});