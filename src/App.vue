<template>
  <div class="w-full purple-bg">
    <div class="py-6 flex text-white mx-auto justify-between">
      <h1 class="text-3xl ml-8">&lt;>Hello!&lt;/></h1>
      <nav class="text-2xl">
        <router-link to="/">About</router-link>
        <router-link to="/" class="ml-4">Experience</router-link>
        <router-link to="/" class="ml-4">Projects</router-link>
        <router-link to="/" class="ml-4 mr-8">Skills</router-link>
      </nav>
    </div>
    <router-view/>
  </div>
</template>
