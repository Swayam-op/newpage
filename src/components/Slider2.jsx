import React from 'react';
import {MdNavigateNext} from 'react-icons/md';
import {MdNavigateBefore} from 'react-icons/md';
const Slider2 = () => {
  return (
    //This is made of bootstrap
    <div>
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="/images/1.jpg" class="d-block w-100 h-96 md:h-screen" alt="..." />
      <div class="carousel-caption  d-block">
        <h1 class="text-2xl md:text-5xl  md:-translate-x-44 md:-translate-y-20  text-white">01. Private Houses Tunkey</h1>
        <p class="text-sm md:text-lg md:-translate-x-36 md:-translate-y-12 text-white">We develope strong relationship with contractors and <br /> specialist companies offering Discounted Prices</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/images/2.jpg " class="d-block w-100 h-96 md:h-screen" alt="..." />
      <div class="carousel-caption d-block">
      <h1 class="text-2xl md:text-5xl md:-translate-x-44 md:-translate-y-20 text-white">02. Dustine Villa, Spain</h1>
        <p class="text-sm md:text-lg md:-translate-x-36 md:-translate-y-12 text-white">We develope strong relationship with contractors and <br /> specialist companies offering Discounted Prices</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/images/3.jpg " class="d-block w-100 h-96 md:h-screen" alt="..." />
      <div class="carousel-caption  d-block">
      <h1 class="text-2xl md:text-5xl md:-translate-x-44 md:-translate-y-20 text-white">03. Innovative Architecture</h1>
        <p class="text-sm md:text-lg md:-translate-x-36 md:-translate-y-12 text-white">We develope strong relationship with contractors and <br /> specialist companies offering Discounted Prices</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
  <MdNavigateBefore className='w-24 h-20 text-gray-200' />
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
  <MdNavigateNext className='w-24 h-20 text-gray-200' />
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider2