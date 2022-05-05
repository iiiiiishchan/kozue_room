'use strict';

// ハンバーガーメニュー
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const menu1 = document.getElementById('menu1');
  const menu2 = document.getElementById('menu2');
  const menu3 = document.getElementById('menu3');
  const menu4 = document.getElementById('menu4');
  const menu5 = document.getElementById('menu5');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  menu1.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  menu2.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  menu3.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  menu4.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  menu5.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}


// カルーセル
{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const pics = document.getElementById('pics');
  const slides = pics.children;
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    pics.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  updateButtons();
  
  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    moveSlides();
  });
  
  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    moveSlides();
  });
}
