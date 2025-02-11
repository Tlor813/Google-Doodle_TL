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