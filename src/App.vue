<template>
  <div id="app">
    <div class="bg-off-white flex flex-col w-2/5 h-auto p-10 rounded-3xl rounded-br-[130px]">
      <div>
        <a-form class="mb-4 flex justify-start gap-8">
          <a-form-item label="DAY" :colon="false" class="block text-smokey-grey text-[10px] tracking-widest font-bold mb-2 text-start">
            <a-input placeholder="DD"
                     v-model="day"
                     class="bg-transparent text-off-black font-bold text-lg border border-light-gray rounded w-28 py-2
                px-3 focus:outline-none placeholder:text-smokey-grey placeholder:font-extrabold uppercase focus:border-off-purple">
            </a-input>
          </a-form-item>
          <a-form-item label="MONTH" :colon="false" class="block text-smokey-grey text-[10px] tracking-widest font-bold mb-2 text-start">
            <a-input placeholder="MM"
                     v-model="month"
                class="bg-transparent text-off-black font-bold text-lg border border-light-gray rounded w-28 py-2
                px-3 focus:outline-none placeholder:text-smokey-grey placeholder:font-extrabold uppercase focus:border-off-purple">

            </a-input>
          </a-form-item>
          <a-form-item label="YEAR" :colon="false" class="block text-smokey-grey text-[10px] tracking-widest font-bold mb-2 text-start">
            <a-input placeholder="YYYY"
                     v-model="year"
                class="bg-transparent text-off-black font-bold text-lg border border-light-gray rounded w-28 py-2
                px-3 focus:outline-none placeholder:text-smokey-grey placeholder:font-extrabold uppercase focus:border-off-purple">
            </a-input>
          </a-form-item>
        </a-form>
      </div>
      <div class="inline-flex items-center justify-end w-full" @click="ageCalculate()">
        <hr class="w-full h-px my-5 bg-light-gray border-0">
        <span class="absolute p-4 rounded-full  font-medium text-gray-900 bg-off-purple hover:bg-off-black hover:cursor-pointer">
          <img src="./assets/images/icon-arrow.svg" class="w-7 h-7" alt="arrow-icon">
        </span>
      </div>
      <div>
        <ul class="flex flex-col">
          <li class="font-bold text-6xl italic text-off-purple flex justify-start items-center ">
            <span :class="calculate.year ? '' : 'tracking-[15px]'">{{ calculate.year ?? '--'}}</span>
            <span class="text-off-black font-black pl-1">years</span>
          </li>
          <li class="font-bold text-6xl italic text-off-purple flex justify-start items-center ">
            <span :class="calculate.month ? '' : 'tracking-[15px]'">{{ calculate.month ?? '--'}}</span>
            <span class="text-off-black font-black pl-1">months</span>
          </li>
          <li class="font-bold text-6xl italic text-off-purple flex justify-start items-center ">
            <span :class="calculate.day ? '' : 'tracking-[15px]'">{{ calculate.day ?? '--'}}</span>
            <span class="text-off-black font-black pl-1">days</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>

export default {

  name: 'App',
  data: () => ({
    day: null,
    month: null,
    year: null,
    calculate: {
      day: null,
      month: null,
      year: null,
    }
  }),
  methods: {
    ageCalculate() {
      const birthDate = new Date(this.year +'-'+ this.month +'-'+ this.day);
      const now = new Date();

      const diffDate =  new Date(now - birthDate);

      this.calculate.day = diffDate.getDate();
      this.calculate.month = diffDate.getMonth() + 1;
      this.calculate.year = diffDate.getFullYear() - 1970;

      this.year = null;
      this.month = null;
      this.day = null;
    },
    onInput(event) {
      const id = event.target.id;
      const value = event.target.value;

      if (id === 'day') {
        if (
            (value < 1 || value > 31)
            &&
            (value !== '')
            ||
            (value.length < 1)
        ) {
          this.day = 1
        }
        console.log(typeof value)
      }
    }
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
