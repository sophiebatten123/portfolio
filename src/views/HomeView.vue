<template>
  <div class="w-full bg-gray-100">
    <div class="w-3/5 medium:w-full mx-auto py-8 relative">
      <div class="grid grid-cols-2 medium:grid-cols-none about-medium-screens h-auto pb-8 medium:pb-2 small:flex">
        <div class="small-image">
          <img src="../assets/me.webp" alt="An image of me" class="w-full">
        </div>
        <div class="medium:ml-8 tiny:ml-0">
          <h2 class="text-gray-600 text-3xl">About Me</h2>
          <h2 class="orange-text text-2xl mt-2">Sophie Batten - Full Stack Developer</h2>
          <div class="tiny-image">
            <img src="../assets/me_small.webp" alt="An image of me" class="w-full">
          </div>
          <p class="pr-6 pt-4 text-base">I am a Full Stack Web Developer at Classroom Secrets. Equipped with using HTML, CSS, PHP, JavaScript and Python. My current role requires me to use Vue, NUXT, Laravel and Docker. 
            Alongside these I am familiar with other frameworks such as Flask, Django, jQuery and Bootstrap.</p>
            <p class="mt-2 pr-6 text-base">Problem Solving and Creativity have always been a passion of mine and worked hand in hand throughout my career and studies. 
            Coding has allowed me to bridge the gap between what often feels like two separate skills entirely and open up aspirations to become a Full Stack Web Designer. </p>
            <div class="show-download flex mx-auto pb-8 mt-8">
              <button class="rounded-full purple-bg text-white border-2 px-4 w-1/2 text-center py-2"><i class="fa-solid fa-phone"></i> Contact Me</button>
              <button class="rounded-full text-white orange-bg border-2 px-2 w-1/2 text-center py-2"><i class="fa-solid fa-download"></i> Download CV</button>
             </div>
          </div>
        <div class="absolute right-0 image-width">
          <img src="../assets/me.webp" alt="An image of me" class="w-full">
        </div>
      </div>
    </div>
    <div class="purple-bg pb-4 pt-12 small:pt-4">
      <div class="w-3/5 medium:w-auto medium:ml-36 small_medium:ml-28 flex mx-auto pb-8 hide-download">
          <button class="rounded-full purple-bg text-white border-2 px-4 w-1/5 text-center py-2 mr-6"><i class="fa-solid fa-phone"></i> Contact Me</button>
          <button class="rounded-full text-white orange-bg border-2 px-2 w-1/5 text-center py-2 mr-6"><i class="fa-solid fa-download"></i> Download CV</button>
      </div>
      <div class="grid grid-cols-7">
        <img src="../assets/html.webp" alt="An image of the HTML logo" class="w-24 py-6 mx-auto justify-center">
        <img src="../assets/css.webp" alt="An image of the CSS logo" class="w-24 py-6 mx-auto">
        <img src="../assets/javascript.webp" alt="An image of the JavaScript logo" class="w-24 py-6 mx-auto">
        <img src="../assets/laravel.webp" alt="An image of the JavaScript logo" class="w-24 py-6 mx-auto">
        <img src="../assets/python.webp" alt="An image of the JavaScript logo" class="w-24 py-6 mx-auto">
        <img src="../assets/vue.webp" alt="An image of the JavaScript logo" class="w-24 py-6 mx-auto">
        <img src="../assets/django.webp" alt="An image of the JavaScript logo" class="w-24 py-6 mx-auto">
      </div>
      <div class="grid grid-cols-7 text-white text-center pb-4 medium-logo-text-hidden">
        <div class="px-2">
          <h3 class="text-xl">HTML</h3>
          <p>Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on</p>
        </div>
        <div class="px-2">
          <h3 class="text-xl">CSS</h3>
          <p>Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on</p>
        </div>
        <div class="px-2">
          <h3 class="text-xl">JavaScript</h3>
          <p>Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on</p>
        </div>
        <div class="px-2">
          <h3 class="text-xl">Laravel</h3>
          <p>Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on</p>
        </div>
        <div class="px-2">
          <h3 class="text-xl">Python</h3>
          <p>Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on</p>
        </div>
        <div class="px-2">
          <h3 class="text-xl">Vue</h3>
          <p>Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on</p>
        </div>
        <div class="px-2">
          <h3 class="text-xl">Django</h3>
          <p>Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on</p>
        </div>
      </div>
    </div>
    <div class="w-full bg-gray-100 py-8">
      <div class="w-3/5 mx-auto medium:w-auto small_medium:mx-8">
        <h2 class="text-center text-3xl text-gray-600 pt-4">My Work Experience</h2>
        <div class="grid grid-cols-2">
          <div class="border-r-2 border-dotted border-gray-600 h-120 my-8 relative">
            <div class="w-5 h-5 rounded-full medium-orange-bg light-orange-border absolute right-0 -mt-2 -mr-2.5"></div>
            <div class="w-5 h-5 rounded-full medium-orange-bg light-orange-border absolute right-0 top-24 -mr-2.5"></div>
            <div class="w-5 h-5 rounded-full medium-orange-bg light-orange-border absolute right-0 top-48 -mr-2.5"></div>
            <div class="w-5 h-5 rounded-full medium-orange-bg light-orange-border absolute right-0 top-80 -mr-2.5"></div>
            <div>
              <h3 class="text-xl text-gray-600 font-bold pr-4">Fullhurst Community College</h3>
              <h4 class="text-lg text-gray-600 pr-4">September 2018 - December 2021</h4>
            </div>
            <div class="mt-32">
              <h3 class="text-xl text-gray-600 font-bold pr-4">Cambridge Education Group Digital</h3>
              <h4 class="text-lg text-gray-600 pr-4">February 2022 - January 2023</h4>
            </div>
            <div class="mt-20">
              <h3 class="text-xl text-gray-600 font-bold pr-4">Classroom Secrets</h3>
              <h4 class="text-lg text-gray-600 pr-4">January 2023 - Current</h4>
            </div>
          </div>
          <div class="mt-8 text-right">
            <div>
              <h3 class="text-xl text-gray-600 font-bold">Maths Teacher</h3>
              <p class="text-sm text-gray-600 pl-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis mauris neque, sed faucibus massa finibus non. Sed id massa nibh. Aliquam id neque eu nunc commodo.</p>
            </div>
            <div>
              <h3 class="text-xl text-gray-600 font-bold">Head of KS3 Maths</h3>
              <p class="text-sm text-gray-600 pl-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis mauris neque, sed faucibus massa finibus non. Sed id massa nibh. Aliquam id neque eu nunc commodo.</p>
            </div>
            <div>
              <h3 class="text-xl text-gray-600 font-bold">Online Learning Designer</h3>
              <p class="text-sm text-gray-600 pl-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis mauris neque, sed faucibus massa finibus non. Sed id massa nibh. Aliquam id neque eu nunc commodo.</p>
            </div>
            <div>
              <h3 class="text-xl text-gray-600 font-bold mt-8">Full Stack Developer</h3>
              <p class="text-sm text-gray-600 pl-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis mauris neque, sed faucibus massa finibus non. Sed id massa nibh. Aliquam id neque eu nunc commodo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="purple-bg h-80 z-10">
      <h3 class="text-center text-white text-3xl pt-4">Projects</h3>
    </div>
      <div class="grid grid-cols-3 small_medium:grid-cols-2 tiny:grid-cols-1 -mt-60 z-30">
        <div class="mx-5 mb-5">
          <img src="../assets/bakery.webp" alt="An image of battens bakery, a website made from HTML and CSS">
          <button class="bg-white h-60 text-left w-full">
            <div class="flex h-1/3">
              <img src="../assets/html.webp" alt="An image of the HTML logo" class="py-6 pl-4 pr-2">
              <img src="../assets/css.webp" alt="An image of the CSS logo" class="py-6 px-2">
            </div>
            <h3 class="text-xl font-bold ml-4">Batten's Bakery</h3>
            <p class="ml-4 mt-4 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis mauris neque, sed faucibus massa finibus non.</p>
          </button>
        </div>
        <div class="mx-5 mb-5">
          <img src="../assets/ginamore.webp" alt="An image of ginamore, an ecommerce website made from HTML, CSS, JavaScript, Django and Python">
          <button class="bg-white h-60 text-left w-full">
            <div class="flex h-1/3">
              <img src="../assets/html.webp" alt="An image of the HTML logo" class="py-6 pl-4 pr-2">
              <img src="../assets/css.webp" alt="An image of the CSS logo" class="py-6 px-2">
              <img src="../assets/javascript.webp" alt="An image of the JavaScript logo" class="py-6 px-2">
              <img src="../assets/django.webp" alt="An image of the Django logo" class="py-6 px-2">
              <img src="../assets/python.webp" alt="An image of the Python logo" class="py-6 px-2">
            </div>
            <h3 class="text-xl font-bold ml-4">GinAmore</h3>
            <p class="ml-4 mt-4 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis mauris neque, sed faucibus massa finibus non.</p>
          </button>
        </div>
        <div class="mx-5 mb-5">
          <img src="../assets/national_anthems.webp" alt="An image of the national anthems game, a hackathon project made from HTML, CSS, JavaScript, Django and Python">
          <button class="bg-white h-60 text-left w-full">
            <div class="flex h-1/3">
              <img src="../assets/html.webp" alt="An image of the HTML logo" class="py-6 pl-4 pr-2">
              <img src="../assets/css.webp" alt="An image of the CSS logo" class="py-6 px-2">
              <img src="../assets/javascript.webp" alt="An image of the JavaScript logo" class="py-6 px-2">
            </div>
            <h3 class="text-xl font-bold ml-4">National Anthems</h3>
            <p class="ml-4 mt-4 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis mauris neque, sed faucibus massa finibus non.</p>
          </button>
        </div>
        <div class="mx-5 mb-5">
          <img src="../assets/sudoku.webp" alt="An image of sudoku game, a website made from HTML and CSS">
          <button class="bg-white h-60 text-left w-full">
            <div class="flex h-1/3">
              <img src="../assets/html.webp" alt="An image of the HTML logo" class="py-6 pl-4 pr-2">
              <img src="../assets/css.webp" alt="An image of the CSS logo" class="py-6 px-2">
            </div>
            <h3 class="text-xl font-bold ml-4">Sudoku Game</h3>
            <p class="ml-4 mt-4 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis mauris neque, sed faucibus massa finibus non.</p>
          </button>
        </div>
        <div class="mx-5 mb-5">
          <img src="../assets/tutoring_hub.webp" alt="An image of tutoring hub, an online booking website made from HTML, CSS, JavaScript, Django and Python">
          <button class="bg-white h-60 text-left w-full">
            <div class="flex h-1/3">
              <img src="../assets/html.webp" alt="An image of the HTML logo" class="py-6 pl-4 pr-2">
              <img src="../assets/css.webp" alt="An image of the CSS logo" class="py-6 px-2">
              <img src="../assets/javascript.webp" alt="An image of the JavaScript logo" class="py-6 px-2">
              <img src="../assets/django.webp" alt="An image of the Django logo" class="py-6 px-2">
              <img src="../assets/python.webp" alt="An image of the Python logo" class="py-6 px-2">
            </div>
            <h3 class="text-xl font-bold ml-4">Tutoring Hub</h3>
            <p class="ml-4 mt-4 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis mauris neque, sed faucibus massa finibus non.</p>
          </button>
        </div>
        <div class="mx-5 mb-5">
          <img src="../assets/hp2g.webp" alt="An image of hp2g, a freelance project made from HTML, CSS, JavaScript">
          <button class="bg-white h-60 text-left w-full">
            <div class="flex h-1/3">
              <img src="../assets/html.webp" alt="An image of the HTML logo" class="py-6 pl-4 pr-2">
              <img src="../assets/css.webp" alt="An image of the CSS logo" class="py-6 px-2">
              <img src="../assets/javascript.webp" alt="An image of the JavaScript logo" class="py-6 px-2">
            </div>
            <h3 class="text-xl font-bold ml-4">HP2g</h3>
            <p class="ml-4 mt-4 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis mauris neque, sed faucibus massa finibus non.</p>
          </button>
        </div>
      </div>
    <div class="purple-bg h-80 z-10 -mt-40">
      <h4 class="text-white text-right pt-44 pr-8 text-xl underline">See more projects...</h4>
    </div>
    <div class="bg-gray-100 pb-8">
      <div class="col-span-2 bg-white z-30 -mt-20 mx-4 py-4">
        <h3 class="orange-text text-2xl text-center">Skills that I</h3>
        <h2 class="text-gray-600 text-3xl text-center">Specialise in...</h2>
        <div class="grid grid-cols-2 tiny:grid-cols-1 purple-dotted-border mt-4 mx-8">
          <div class="flex mt-8">
            <div class="rounded-full h-16 w-16 py-2 px-3 text-4xl purple-border purple-text"><i class="fa-solid fa-pencil"></i></div>
            <div class="ml-4">
              <h4 class="text-xl text-gray-600">Frontend Development</h4>
              <p>Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on almost every site.</p>
            </div>
          </div>
          <div class="flex mt-8">
            <div class="rounded-full h-16 w-16 py-2 px-3 text-4xl purple-border purple-text"><i class="fa-solid fa-palette"></i></div>
            <div class="ml-4">
              <h4 class="text-xl text-gray-600">Frontend Development</h4>
              <p>Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on almost every site.</p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 tiny:grid-cols-1">
          <div class="flex mx-8 mt-12">
            <div class="rounded-full h-16 w-16 p-2 text-3xl purple-border purple-text"><i class="fa-solid fa-laptop"></i></div>
            <div class="ml-4">
              <h4 class="text-xl text-gray-600">Frontend Development</h4>
              <p>Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on almost every site.</p>
            </div>
          </div>
          <div class="flex mx-8 mt-12">
            <div class="rounded-full h-16 w-16 py-2 px-4 text-4xl purple-border purple-text"><i class="fa-regular fa-lightbulb"></i></div>
            <div class="ml-4">
              <h4 class="text-xl text-gray-600">Frontend Development</h4>
              <p>Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on almost every site.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="purple-bg flex py-4 justify-center">
        <button class="text-white text-3xl"><i class="fa-brands fa-linkedin"></i></button>
        <button class="text-white text-3xl ml-4"><i class="fa-brands fa-facebook"></i></button>
        <button class="text-white text-3xl ml-4"><i class="fa-brands fa-instagram"></i></button>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>
