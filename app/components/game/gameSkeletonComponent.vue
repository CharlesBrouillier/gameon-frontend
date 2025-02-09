<template>
  <div class="flex-wrap">
    <div class="grid grid-cols-1 xl:grid-cols-2 md:gap-16 gap-8 mb-12">
      <div class="flex flex-col justify-center items-center relative pb-4">     
        <USkeleton class="max-h-[500px] max-w-[500px] h-screen w-screen" />
        <div class="flex mt-4 gap-4">
          <USkeleton class="max-h-[100px] max-w-[100px] h-screen w-screen" />
          <USkeleton class="max-h-[100px] max-w-[100px] h-screen w-screen" />
          <USkeleton class="max-h-[100px] max-w-[100px] h-screen w-screen" />
        </div>
      </div>
  
      <div class="flex flex-col space-y-4">
        <USkeleton class="h-8 max-w-[500px] w-screen" />
        <USkeleton class="h-8 max-w-[200px] w-screen" />
        <USkeleton class="h-32 max-w-[400px] w-screen" />
        
        <div class="flex gap-2 mr-2 mb-4">
          <USkeleton class="h-6 max-w-[150px] w-screen" />
          <USkeleton class="h-6 max-w-[150px] w-screen" />
          <USkeleton class="h-6 max-w-[150px] w-screen" />
        </div>
      </div>
    </div>
  </div>
</template>