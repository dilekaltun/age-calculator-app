<template>
  <div id="app">
    <div class="bg-off-white flex flex-col w-2/5 h-auto p-10 rounded-3xl rounded-br-[130px]">
      <div>
        <form>
          <div>
            <ul class="mb-4 flex justify-start gap-8">
              <li>
                <label class="block text-smokey-grey text-[10px] tracking-widest font-bold mb-2 text-start" for="day">
                  DAY
                </label>
                <input class="bg-transparent text-off-black font-bold text-lg border border-light-gray rounded w-28 py-2
                px-3 focus:outline-none placeholder:text-smokey-grey placeholder:font-extrabold uppercase focus:border-off-purple"
                       id="day"
                       type="text"
                       placeholder="DD">
              </li>
              <li>
                <label class="block text-smokey-grey text-[10px] tracking-widest font-bold mb-2 text-start" for="month">
                  MONTH
                </label>
                <input class="text-off-black font-bold bg-transparent text-lg border border-light-gray rounded w-28 py-2
                 px-3 focus:outline-none placeholder:text-smokey-grey placeholder:font-extrabold uppercase focus:border-off-purple"
                       id="month"
                       type="text"
                       placeholder="MM">
              </li>
              <li>
                <label class="block text-smokey-grey text-[10px] tracking-widest font-bold mb-2 text-start" for="year">
                  YEAR
                </label>
                <input class="text-off-black font-bold bg-transparent text-lg border border-light-gray rounded w-28 py-2
                 px-3 focus:outline-none placeholder:text-smokey-grey placeholder:font-extrabold uppercase focus:border-off-purple"
                       id="year"
                       type="text"
                       placeholder="YYYY">
              </li>
            </ul>
            </div>
        </form>
      </div>
      <div class="inline-flex items-center justify-end w-full">
        <hr class="w-full h-px my-5 bg-light-gray border-0">
        <span class="absolute p-4 rounded-full  font-medium text-gray-900 bg-off-purple hover:bg-off-black hover:cursor-pointer">
          <img src="./assets/images/icon-arrow.svg" class="w-7 h-7" alt="arrow-icon">
        </span>
      </div>
      <div>
        <ul class="flex flex-col">
          <li class="font-bold text-6xl italic text-off-purple flex justify-start items-center ">
            <span class="tracking-[15px]">--</span>
            <span class="text-off-black font-black">years</span>
          </li>
          <li class="font-bold text-6xl italic text-off-purple flex justify-start items-center ">
            <span class="tracking-[15px]">--</span>
            <span class="text-off-black font-black">months</span>
          </li>
          <li class="font-bold text-6xl italic text-off-purple flex justify-start items-center ">
            <span class="tracking-[15px]">--</span>
            <span class="text-off-black font-black">days</span>
          </li>
        </ul>
      </div>
    </div>
  
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #dbdbdb;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
