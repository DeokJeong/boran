$(document).ready(function(){
    setTimeout(function() { 

     $(".loading").fadeOut(6000); 

  }); 

   $('.side_nav dt').click(function(){
    $('.side_nav ul li').stop().slideToggle('slow')
  });

  $('.side_nav ul li a').on('click', function (e) {
    e.preventDefault(); 
    var id = $(this).attr('href');
    var dest = $(id); 

    $('.side_nav ul li a').removeClass('color')
    $(this).addClass('color')
    
    $('html,body').animate({
      scrollTop: (dest.offset().top)
    }, 1000);
    console.log($('#skills').offset().top)

  });

  $('#nav_btn li a').on('click', function (e) {
    e.preventDefault(); 

    var id = $(this).attr('href');
    var dest = $(id); 

    $('html,body').animate({
      scrollTop: (dest.offset().top)
    }, 1000);
 
});


  // ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!@#$%^&*()";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }}


// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
"hello,",
"welcome to my portfolio!",
];


const el = document.querySelector(".text");
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1500);
  });
  counter = (counter + 1) % phrases.length;
};

next();

$('#nav_btn li:nth-child(-n+6)')
        .on('mouseover', function(){
            $(this).stop().animate({backgroundColor:'#f2c1bd'}, 300, 'easeOutQuad')
    })
        .on('mouseout', function(){
            $(this).stop().animate({backgroundColor:'#ffffff'}, 300, 'easeOutQuad')
    });

})
