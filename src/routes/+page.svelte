<Body class="dark:bg-[#121212] bg-cream"/>
<section class="flex flex-col gap-[1rem]">
  <!-- <button id="btn" on:click={onClick}>
    dark
  </button> -->
  <button 
    class="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none"
    on:click={onClick}>
    <div
        id="switch-toggle"
        class="w-12 h-12 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    </div>
  </button>
  <article class="bg-soft-red dark:bg-[#2d3142] flex justify-between items-center gap-[15rem] px-[2rem] py-[2rem] rounded-[15px]">
    <div> 
      <p class="font-Sans text-pale-orange">
      My balance
      </p>
      <h1 class="font-SansBold text-[30px] text-pale-orange">
      $921.48
      </h1>
    </div>
  <img src={logo} alt="" class="dark:hidden">
  <img src={altlogo} alt="" class="dark:block hidden">
  </article>
  <article class="bg-pale-orange p-[2rem] rounded-[10px] dark:bg-[#2d3142]">
  <p class="font-SansBold text-dark-brown dark:text-pale-orange text-[30px]">
    Spending - Last 7 days
  </p>
  <section class="flex gap-[0.2rem] mt-[1.5rem]">
      {#each typedDatas as data}
      <div class="flex flex-col rotate-180 items-center">
        <p class="rotate-180 font-Sans mb-[0.3rem] text-med-brown dark:text-pale-orange">{data.day}</p>
        <div class={data.class}>
            
        </div>
        <p class={data.pClass}>${data.amount}</p>
      </div>
      {/each}
  </section>
  <div class="w-[100%] h-[1px] bg-cream dark:text-pale-orange my-[1.5rem]"></div>
  <section class="flex justify-between items-end">
    <div class="flex flex-col justify-end">
      <p class="font-Sans text-med-brown dark:text-pale-orange text-[17px]">
        Total this month
      </p>
      <h1 class="font-SansBold text-dark-brown dark:text-pale-orange text-[40px]">
        $478.33
      </h1>
    </div>
    <div class="mb-[0.7rem]">
      <p class="font-SansBold text-dark-brown dark:text-pale-orange">
        +2.4%
      </p>
      <p class="font-Sans text-med-brown dark:text-pale-orange text-[17px]">
        from last month
      </p>
    </div>
  </section>
  </article>
</section>

<script lang="ts">
  import { Body } from 'svelte-body';
  import datas from "../data.json"
  import logo from "../logo.svg"
  import altlogo from "../altlogo.svg"
  let state = false
  const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>`

  const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>`
  function switchTheme (){
  if (state == true) {
      document.querySelector('#switch-toggle').classList.remove('bg-yellow-500','-translate-x-2')
      document.querySelector('#switch-toggle').classList.add('bg-gray-700','translate-x-full')
      setTimeout(() => {
        document.querySelector('#switch-toggle').innerHTML = darkIcon
      }, 0);
    } else if(state == false) {
      document.querySelector('#switch-toggle').classList.add('bg-yellow-500','-translate-x-2')
      document.querySelector('#switch-toggle').classList.remove('bg-gray-700','translate-x-full')
      setTimeout(() => {
        document.querySelector('#switch-toggle').innerHTML = lightIcon
      }, 0);
    }
  }
  const onClick = () => {
    switchTheme()
    if(state == false){
      document.documentElement.classList.add("dark")
      state = true
      switchTheme()
    }
    else if(state == true){
      document.documentElement.classList.remove("dark")
      state = false
      switchTheme()
    }
  }
  // console.log(state)
  interface Data {
    day: string;
    amount: number;
    class?: string;
    pClass:string;
  }
  // In your TypeScript file
  // function changeBodyBackgroundColor(color: string) {
  //     document.body.style.backgroundColor = color;
  // }

  // // Call this function to change the background color of the body element
  // changeBodyBackgroundColor("2d3142");
  // // document.body.style.backgroundColor = "2d3142"

  const typedDatas = datas as Data[];

  const divClass = [
      {
        pClass:"money invisible rotate-180 font-SansBold mt-[0.5rem] rounded-[9px] dark:bg-[#121212] text-pale-orange bg-dark-brown px-[0.5rem] py-[0.5rem] text-[19px]",
        class:"bar bg-soft-red dark:bg-[#3a86ff] dark:hover:bg-dmb hover:bg-hs w-[3.5rem] h-[4rem] cursor-pointer rotate-180 rounded-[9px]"
      },
      {
        pClass:"money invisible rotate-180 font-SansBold mt-[0.5rem] rounded-[9px] dark:bg-[#121212] text-pale-orange bg-dark-brown px-[0.5rem] py-[0.5rem] text-[19px]",
        class:"bar bg-soft-red hover:bg-hs w-[3.5rem] dark:bg-[#3a86ff] dark:hover:bg-dmb h-[8rem] cursor-pointer rotate-180 rounded-[9px]"
      },
      {
        pClass:"money invisible rotate-180 font-SansBold mt-[0.5rem] rounded-[9px] dark:bg-dmr text-pale-orange bg-dark-brown px-[0.5rem] py-[0.5rem] text-[19px]",
        class:"bar bg-soft-red dark:bg-[#3a86ff] dark:hover:bg-dmr hover:bg-cyan w-[3.5rem] h-[12rem] cursor-pointer rotate-180 rounded-[9px]"
      },
      {
        pClass:"money invisible rotate-180 font-SansBold mt-[0.5rem] rounded-[9px] dark:bg-[#121212] text-pale-orange bg-dark-brown px-[0.5rem] py-[0.5rem] text-[19px]",
        class:"bar bg-soft-red dark:bg-[#3a86ff] dark:hover:bg-dmb hover:bg-hs w-[3.5rem] h-[7rem] cursor-pointer rotate-180 rounded-[9px]"
      },
      {
        pClass:"money invisible rotate-180 font-SansBold mt-[0.5rem] rounded-[9px] dark:bg-[#121212] text-pale-orange bg-dark-brown px-[0.5rem] py-[0.5rem] text-[19px]",
        class:"bar bg-soft-red dark:bg-[#3a86ff] dark:hover:bg-dmb hover:bg-hs w-[3.5rem] h-[6rem] cursor-pointer rotate-180 rounded-[9px]"
      },
      {
        pClass:"money invisible rotate-180 font-SansBold mt-[0.5rem] rounded-[9px] dark:bg-[#121212] text-pale-orange bg-dark-brown px-[0.5rem] py-[0.5rem] text-[19px]",
        class:"bar bg-soft-red dark:bg-[#3a86ff] dark:hover:bg-dmb hover:bg-hs w-[3.5rem] h-[9rem] cursor-pointer rotate-180 rounded-[9px]"
      },
      {
        pClass:"money invisible rotate-180 font-SansBold mt-[0.5rem] rounded-[9px] dark:bg-[#121212] text-pale-orange bg-dark-brown px-[0.5rem] py-[0.5rem] text-[19px]",
        class:"bar bg-soft-red dark:bg-[#3a86ff] dark:hover:bg-dmb hover:bg-hs w-[3.5rem] h-[6.5rem] cursor-pointer rotate-180 rounded-[9px]"
      },
  ]

  typedDatas.forEach((data, i) =>{
    data.class = divClass[i].class
    data.pClass = divClass[i].pClass
  })
</script>

<style lang="postcss">
  .toggle-checkbox:checked {
    @apply right-0 border-green-400;
    right: 0;
    border-color: #68D391;
  }
  .toggle-checkbox:checked + .toggle-label {
    @apply bg-green-400;
    background-color: #68D391;
  }
  .bar:hover ~ .money{
    visibility: visible;
  }
  img{
    height: fit-content;
  }
</style>
