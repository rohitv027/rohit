import React from 'react'

const page = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-col text-center w-full mb-5">
    <img src={"/Images/IContactUs.jpg"} width={1500} height={100}></img>
    </div>
    <div class="flex flex-wrap">
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
      <img src={"/Images/OfficeLogo.jpeg"} width={50} height={50}></img>
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">OFFICE</h2>
        <p class="leading-relaxed text-base mb-4">Lane No.1 Gulabara , Chhindwara (M.P.).</p>
        <a class="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
      <img src={"/Images/CollegeLogo.jpeg"} width={50} height={50}></img>
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">COLLEGE</h2>
        <p class="leading-relaxed text-base mb-4">Nagpur Road, Khunajhirkala(Deverdha), Chhindwara (M.P.).</p>
        <a class="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
      <img src={"/Images/PhoneLogo.png"} width={50} height={50}></img>
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">CALL US</h2>
        <p class="leading-relaxed text-base mb-4">We Are Happy To Help You. Feel Free To Contact Us.</p>
        <a class="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
      <img src={"/Images/EmailLogo.jpeg"} width={50} height={50}></img>
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">CONTACT US</h2>
        <p class="leading-relaxed text-base mb-4">We Are Happy To Help You. Feel Free To Contact Us.</p>
        <a class="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
     </div>
</section>
  )
}

export default page