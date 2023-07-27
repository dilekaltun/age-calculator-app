<template>
  <div id="app">
    <div class="bg-off-white flex flex-col w-2/5 h-auto p-10 rounded-3xl rounded-br-[130px]">
      <div>
        <a-form :form="form" class="mb-4 pb-5 flex justify-start gap-8 border-b-2 border-light-gray" @submit="handleSubmit">
          <a-form-item label="DAY" :colon="false" class="block text-smokey-grey text-[10px] tracking-widest font-bold mb-2 text-start">
            <a-input placeholder="DD"
                     v-model="day"
                     v-decorator="['day',
                     {
                       rules: [
                          {
                            required: true,
                            message: 'This field is required'
                          },
                          {
                            pattern: /^(0?[1-9]|1\d|2[0-9]|30|31)$/,
                            message: 'Invalid value'
                          },

                       ]}]"
                     class="bg-transparent text-off-black font-bold text-lg border border-light-gray rounded w-28 py-2
                px-3 focus:outline-none placeholder:text-smokey-grey placeholder:font-extrabold uppercase focus:border-off-purple">
            </a-input>
          </a-form-item>
          <a-form-item label="MONTH" :colon="false" class="block text-smokey-grey text-[10px] tracking-widest font-bold mb-2 text-start">
            <a-input placeholder="MM"
                     v-decorator="['month', { rules:
                     [
                         { required: true, message: 'This field is required' },
                         {
                            pattern: /^(0?[1-9]|1[0-2])$/,
                            message: 'Invalid value'
                          },
                     ] }]"
                     v-model="month"
                class="bg-transparent text-off-black font-bold text-lg border border-light-gray rounded w-28 py-2
                px-3 focus:outline-none placeholder:text-smokey-grey placeholder:font-extrabold uppercase focus:border-off-purple">

            </a-input>
          </a-form-item>
          <a-form-item label="YEAR" :colon="false" class="block text-smokey-grey text-[10px] tracking-widest font-bold mb-2 text-start">
            <a-input placeholder="YYYY"
                     v-decorator="['year', { rules:
                     [
                         { required: true, message: 'This field is required' },
                         {
                            pattern: /^(19\d\d|20[01]\d|202[0-3])$/,
                            message: 'Invalid value'
                          },
                          { min: 4},
                          { max: 4}
                     ] }]"
                     v-model="year"
                class="bg-transparent text-off-black font-bold text-lg border border-light-gray rounded w-28 py-2
                px-3 focus:outline-none placeholder:text-smokey-grey placeholder:font-extrabold uppercase focus:border-off-purple">
            </a-input>
          </a-form-item>
          <a-form-item class="inline-flex items-center justify-end w-full">
            <a-button html-type="submit" class="absolute p-4 mt-6 -ml-14 rounded-full  font-medium text-gray-900 bg-off-purple hover:bg-off-black hover:cursor-pointer">
              <img src="./assets/images/icon-arrow.svg" class="w-7 h-7" alt="arrow-icon">
            </a-button>
          </a-form-item>
        </a-form>
      </div>
      <div>
        <ul class="flex flex-col">
          <li :key="item" v-for="item in fields" class="font-bold text-6xl italic text-off-purple flex justify-start items-center ">
            <span :class="calculate[item] ? '' : 'tracking-[15px]'">{{ calculate[item] ?? '--'}}</span>
            <span class="text-off-black font-black pl-1">{{item}}</span>
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
      days: null,
      months: null,
      years: null,
    },
    fields: [
        'years',
        'months',
        'days',
    ],
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'form' })
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();

      this.form.validateFields((err) => {
        if (!err) {
          const birthDate = new Date(this.year +'-'+ this.month +'-'+ this.day);
          const now = new Date();

          const diffDate =  new Date(now - birthDate);

          this.calculate.days = diffDate.getDate();
          this.calculate.months = diffDate.getMonth() + 1;
          this.calculate.years = diffDate.getFullYear() - 1970;

          this.form.setFieldsValue({
            day: null,
            month: null,
            year: null,
          });
        } else {
            this.calculate.days = null
            this.calculate.months = null
            this.calculate.years = null
        }
      });
    },
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
.ant-form-item-with-help {
  .ant-form-item-label .ant-form-item-required {
    color: #ff5757 !important;
  }
  .ant-form-item-control-wrapper .has-error, .has-success {
    .ant-form-item-children input {
      border: 1px solid #ff5757 !important;
    }
    .ant-form-explain {
      color: #ff5757 !important;
      font-size: 10px !important;
      font-family: sans-serif;
      font-weight: 500 !important;
      letter-spacing: 0 !important;
      font-style: italic !important;
    }
  }
}
</style>
