import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24"> */}
      <img src={"/Images/SonyLogo.png"} width={150}/>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      {/* </svg> */}
      <span class="ml-3 text-xl">Sony Computer Education</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <b><Link href={"/"} class="mr-5 hover:text-gray-900">Home</Link></b>
      <Link href={""} class="mr-5 hover:text-gray-900">About Us</Link>
      <Link href={""} class="mr-5 hover:text-gray-900">Our Course</Link>
      <Link href={""} class="mr-5 hover:text-gray-900">Activity</Link>
      <Link href={""} class="mr-5 hover:text-gray-900">Faculty</Link>
      <Link href={""} class="mr-5 hover:text-gray-900">News & Events</Link>
      <Link href={"/contactus"} class="mr-5 hover:text-gray-900">Contact Us</Link>
    </nav>
  </div>
</header>
  )
}

export default Header