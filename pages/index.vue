<script setup lang="ts">
useHead({
	title: 'Mavuno Feeds'
})
const contact = {
	email: 'mavunofeeds093@gmail.com',
	phone: '0700000000'
}
</script>

<template>
  <!-- home section -->
        <section class="py-8 md:py-16">

            <div class="container max-w-screen-xl mx-auto px-4">

                <nav class="flex-wrap lg:flex items-center justify-between mb-20 lg:mb-40" x-data="{navbarOpen:false}">
                    <div class="flex items-center justify-between mb-10 lg:mb-0">
                        <img src="/mavuno_feeds/android/mipmap-xhdpi/ic_launcher.png" alt="Logo">
	                    
	                    <!--                        <button class="flex items-center justify-center border border-[#006301] w-10 h-10 text-[#006301] rounded-md outline-none lg:hidden ml-auto" @click="navbarOpen = !navbarOpen">-->
	                    <!--                            <i data-feather="menu"></i>-->
	                    <!--                        </button>-->
	                    <button class="flex items-center justify-center border border-[#006301] w-10 h-10 text-[#006301] rounded-md outline-none lg:hidden ml-auto">
                            <i data-feather="menu"></i>
                        </button>
                    </div>
	                
	                <!--                    <ul class="hidden lg:block lg:flex flex-col lg:flex-row lg:items-center lg:space-x-20" :class="{'hidden':!navbarOpen,'flex':navbarOpen}">-->
                    <ul class="hidden lg:block lg:flex flex-col lg:flex-row lg:items-center lg:space-x-10">
                        <li class="font-medium text-[#006301] text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mr-0 lg:mb-0 text-center">
                            <a href="#offers">Function</a>
                        </li>

                        <li class="font-medium text-[#006301] text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0 text-center">
                            <a href="#what_we_do">What We Do</a>
                        </li>

                        <li class="font-medium text-[#006301] text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0 text-center">
                            <a href="#works">Works</a>
                        </li>
	                    <li class="font-medium text-[#006301] text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0 text-center">
                            <a href="#social">Social</a>
                        </li>
	                    
	                      <li class="px-8 py-3 font-medium text-green-700 text-lg text-center border-2 border-green-700 rounded-md hover:bg-[#006301] hover:text-white transition ease-linear duration-300">
                            <a href="#contact">Contact</a>
                       </li>
                    </ul>
                </nav>

                <header class="flex-col xl:flex-row flex justify-between items-center w-full" style="width: 100%;">

                    <div class="mx-auto text-center xl:text-left xl:mx-0 mb-20 xl:mb-0">
                        <h1 class="font-bold text-gray-700 text-3xl md:text-6xl leading-tight mb-10">Mavuno Feeds</h1>

                        <p class="font-normal text-gray-500 text-sm md:text-lg mb-10">Manufactures of high-quality animal mineral salts supplements. <br> Our Products have been analyzed & certified by KEBS.</p>

                        <div class="flex items-center justify-center lg:justify-start">
                            <a href="#offers" class="px-8 py-3 bg-[#006301] font-medium text-white text-md md:text-lg rounded-md hover:bg-green-700 transition ease-in-out duration-300 mr-14">Function</a>
	                        
	                        <!--                            <a href="#" class="hidden lg:block font-normal text-gray-500 text-lg mr-8">Watch Showreel</a>-->
                        </div>
                    </div>
	                
	                <!--                    <div class="mx-auto  lg:flex lg:items-center lg:justify-center lg:mx-0" >-->
	                <!--                        <img style="transform: scaleX(-1);" class="lg:ml-auto max-w-2/5 w-full" src="/image/1cow1.png" alt="Image">-->
	                <!--                    </div>-->
										<div class="mx-auto  lg:flex lg:items-center lg:justify-center lg:mx-0">
                        <img style="max-width: 70%; transform: scaleX(-1); " class="mx-auto lg:ml-auto" src="/image/1cow1.png" alt="Image">
                    </div>
                </header>

            </div> <!-- container.// -->

        </section>
  <!-- home section //end -->
  
  <!-- feature section -->
        <section id="offers" class="py-8 md:py-16">

            <div class="container max-w-screen-xl mx-auto px-4 pt-10">
								<h1 class="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">Distinct Function</h1>

                <p class="font-normal text-gray-500 text-md md:text-lg text-center mb-12 md:mb-40">Specific role, operation, or purpose that is clearly <br> separate from others within a system, process, or organization</p>
	            
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    <div class="text-center mb-10 xl:mb-0">
                        <div class="flex items-center justify-center">
                            <div class="w-20 py-7 flex justify-center bg-purple-50 text-purple-500 rounded-md mb-5 md:mb-10">
	                              <Icon name="ph:factory" size="30" />
	                              
                            </div>
                        </div>

                        <h2 class="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Manufacturing & Production</h2>

                        <p class="font-normal text-gray-400 text-sm md:text-lg">You formulate and produce high-quality animal feeds and nutritional supplements tailored to different livestock, ensuring optimal health and productivity.</p>
                    </div>

                    <div class="text-center mb-10 md:mb-0">
                        <div class="flex items-center justify-center">
                            <div class="w-20 py-7 flex justify-center bg-red-50 text-red-500 rounded-md mb-5 md:mb-10">
                                <Icon name="ph:truck-trailer" size="30" />
                            </div>
                        </div>

                        <h2 class="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Distribution & Supply Chain</h2>

                        <p class="font-normal text-gray-400 text-sm md:text-lg">You manage logistics and distribution, ensuring timely delivery of feeds and supplements to farmers, retailers, and wholesalers.</p>
                    </div>

                    <div class="text-center">
                        <div class="flex items-center justify-center">
                            <div class="w-20 py-7 flex justify-center bg-blue-50 text-blue-500 rounded-md mb-5 md:mb-10">
                                <Icon name="ph:magnifying-glass-duotone" size="30" />
                            </div>
                        </div>

                        <h2 class="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Research & Development</h2>

                        <p class="font-normal text-gray-400 text-sm md:text-lg">You innovate new feed formulas based on scientific research, improving animal nutrition, reducing disease risks, and enhancing growth rates.</p>
                    </div>
	                 <div class="text-center">
                        <div class="flex items-center justify-center">
                            <div class="w-20 py-7 flex justify-center bg-green-50 text-[#006301] rounded-md mb-5 md:mb-10">
                               <Icon name="ph:users-duotone" size="30" />
                            </div>
                        </div>

                        <h2 class="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Farmer Education & Support</h2>

                        <p class="font-normal text-gray-400 text-sm md:text-lg">You provide training, guidance, and customer support to farmers, helping them choose the right feed, optimize feeding programs, and improve livestock performance.</p>
                    </div>
	                
                </div>

            </div> <!-- container.// -->

        </section>
  <!-- feature section //end -->

        <section id="what_we_do" class="py-8 md:py-16">

            <div class="container max-w-screen-xl mx-auto px-4">

                <h1 class="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">What we do?</h1>

                <p class="font-normal text-gray-500 text-md md:text-lg text-center mb-20 md:mb-40">Manufactures of high-quality animal mineral salts supplements. <br> Our Products have been analyzed and certified by KEBS.</p>

                <div class="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
                    <div class="mx-auto xl:mx-0 mb-20 xl:mb-0">
                       <img src="/image/2cow1.png" alt="Image" class="w-[70%] mr-auto" style="transform: scaleX(1)">
                    </div>

                    <div class="mx-auto xl:mx-0 text-center xl:text-left">
                       <h1 class="font-bold text-gray-700 text-3xl md:text-4xl mb-10">High Phosphorous Dairies <br> Mineral Supplements.</h1>

                        <ul class="font-normal space-y-5 text-gray-400 text-sm md:text-lg mb-5 list-disc list-outside">
												  <li>Excellent goat fattening booster</li>
												  <li>Professional formulated for high milk production in goats</li>
												  <li>1kg of Mavuno-Feed boost milk production about 25%</li>
												  <li>Meet the highest demand for minerals needed during milk production -Goats</li>
												  <li> Improve growth of mammary glands on goats that are about to deliver</li>
												  <li>Reduce mineral defieciency</li>
												  <li>Improve general health of a goat</li>
												  <li>Contain copper for wool growth and proper pigmentation.</li>
												</ul>
                    </div>
                </div>

                <div class="flex flex-col-reverse xl:flex-row items-center justify-between mb-20 md:mb-40">
                    <div class="mx-auto xl:mx-0 text-center xl:text-left mb-20 xl:mb-0">
                      
	                     <h1 class="font-bold text-gray-700 text-3xl md:text-4xl mb-10">High Phosphorous Goat <br> Salt Supplement.</h1>
												<ul class="font-normal space-y-5 text-gray-400 text-sm md:text-lg mb-5 list-disc list-outside">
												  <li>Excellent goat fattening booster</li>
												  <li>Professional formulated for high milk production in goats</li>
												  <li>1kg of Mavuno-Feed boost milk production about 25%</li>
												  <li>Meet the highest demand for minerals needed during milk production -Goats</li>
												  <li> Improve growth of mammary glands on goats that are about to deliver</li>
												  <li>Reduce mineral defieciency</li>
												  <li>Improve general health of a goat</li>
												  <li>Contain copper for wool growth and proper pigmentation.</li>
												</ul>
                    </div>

                    <div class="mx-auto xl:mx-0 pb-20 lg:pb-0">
	                     <img src="/image/goat.png" alt="Image" class="w-[50%] lg:ml-auto mx-auto">
                      
                    </div>
                </div>

                <div class="flex flex-col xl:flex-row items-center justify-between">
                    <div class="mx-auto xl:mx-0 mb-20 xl:mb-0">
                        <img src="/image/cowfeeds.png" alt="Image" class="w-[70%] mx-auto lg:mr-auto" style="transform: scaleX(-1)">
                    </div>

                    <div class="mx-auto xl:mx-0 text-center xl:text-left">
                        <h1 class="font-bold text-gray-700 text-3xl md:text-4xl mb-10">Mavuno High Phosphorus Meal</h1>
                         <ul class="font-normal space-y-5 text-gray-400 text-sm md:text-lg mb-5 list-disc list-outside">
												  <li>Professionally formulated for high milk production in dairy cows.</li>
												  <li>1 Kg of Mavuno- Feed boost milk production about 30%.</li>
												  <li>Meet the high demand for minerals needed during milk production.</li>
												  <li>Improve growth of mammary glands cells on cows that are about to deliver.</li>
												  <li>Reduce mineral deficiency improve general health of a cow.</li>
												</ul>
                    
                    </div>
                </div>

            </div> <!-- container.// -->

        </section>

        <section id="works" class="py-8 md:py-16">

            <div class="container max-w-screen-xl mx-auto px-4">

                <h1 class="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">Our works</h1>

                <p class="font-normal text-gray-500 text-md md:text-lg text-center mb-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit <br> anim id est laborum.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
                    <div class="space-y-2 xl:space-y-4">
                        <img src="/image/feeds.png" alt="Image" class="hover:opacity-75 transition ease-in-out duration-300">

                        <p class="font-normal text-gray-400 text-base">Design, Branding, Development</p>

                        <a href="#" class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-[#006301] transition ease-in-out duration-300">Yoga School</a>
                    </div>

                    <div class="space-y-2 xl:space-y-4">
                        <img src="/image/feeds.png" alt="Image" class="hover:opacity-75 transition ease-in-out duration-300">

                        <p class="font-normal text-gray-400 text-base">Design, Branding, Development</p>

                        <a href="#" class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-[#006301] transition ease-in-out duration-300">Yoga School</a>
                    </div>

                    <div class="space-y-2 xl:space-y-4">
                        <img src="/image/feeds.png" alt="Image" class="hover:opacity-75 transition ease-in-out duration-300">

                        <p class="font-normal text-gray-400 text-base">Design, Branding, Development</p>

                        <a href="#" class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-[#006301] transition ease-in-out duration-300">Yoga School</a>
                    </div>

                    <div class="space-y-2 xl:space-y-4">
                        <img src="/image/feeds.png" alt="Image" class="hover:opacity-75 transition ease-in-out duration-300">

                        <p class="font-normal text-gray-400 text-base">Design, Branding, Development</p>

                        <a href="#" class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-[#006301] transition ease-in-out duration-300">Yoga School</a>
                    </div>

                    <div class="space-y-2 xl:space-y-4">
                        <img src="/image/feeds.png" alt="Image" class="hover:opacity-75 transition ease-in-out duration-300">

                        <p class="font-normal text-gray-400 text-base">Design, Branding, Development</p>

                        <a href="#" class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-[#006301] transition ease-in-out duration-300">Yoga School</a>
                    </div>

                    <div class="space-y-2 xl:space-y-4 mb-10 md:mb-20">
                        <img src="/image/feeds.png" alt="Image" class="hover:opacity-75 transition ease-in-out duration-300">

                        <p class="font-normal text-gray-400 text-base">Design, Branding, Development</p>

                        <a href="#" class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-[#006301] transition ease-in-out duration-300">Yoga School</a>
                    </div>
                </div>
	            
	            <!--                <div class="flex justify-center mb-20 md:mb-40">-->
	            <!--                    <a href="#" class="px-6 py-2 md:px-8 md:py-3 flex items-center gap-3 font-medium text-[#006301] text-lg border-2 border-[#006301] rounded-md hover:bg-[#006301] hover:text-white transition ease-linear duration-300">-->
	            <!--                        See more works-->
	            <!--                        <i data-feather="arrow-up-right"></i>-->
	            <!--                    </a>-->
	            <!--                </div>-->
							 <div id="social" class="container max-w-screen-xl mx-auto px-4 pt-20">

	                <h1 class="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">Social Accounts</h1>
	
	                <p class="font-normal text-gray-500 text-md md:text-lg text-center mb-20 md:mb-40">Connect to us Through Our Socials.</p>
	
	                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ml-4 md:ml-20 xl:ml-0 mb-20 xl:mb-40">
	                    <img src="/image/brand-1.svg" alt="Image" class="mb-5 md:mb-10 xl:mb-0">
	
	                    <img src="/image/brand-2.svg" alt="Image" class="mb-5 md:mb-0">
	
	                    <img src="/image/brand-3.svg" alt="Image" class="mb-5 md:mb-10 xl:mb-0">
	
	                    <img src="/image/brand-4.svg" alt="Image" class="mb-5 md:mb-0">
	                </div>
                </div>

                <div class="flex flex-wrap md:flex-nowrap justify-between mb-8">
                    <div>
                        <p class="font-normal text-gray-500 text-md md:text-lg uppercase mb-3">Let's talk</p>

                        <h1 class="font-bold text-gray-700 text-xl md:text-4xl">Got a question?  </h1>
                    </div>

                    <div class="mt-10">
                        <a :href="`mailto:${contact.email}`" class="px-4 py-2 md:px-8 md:py-3 font-medium text-green-700 text-lg border-2 border-green-700 rounded-md hover:bg-[#006301] hover:text-white transition ease-linear duration-300">
                            Contact us now
                        </a>
                    </div>
                </div>

                <hr class="text-gray-300 mb-8">

                <p class="font-normal text-gray-500 text-md md:text-lg mb-4 md:mb-10">We’d love to hear from you! Contact us today to discuss how we can assist you. </p>

            </div> <!-- container.// -->
            
        </section>

        <footer id="contact" class="bg-green-50 py-8 md:py-16">

            <div class="container max-w-screen-xl mx-auto px-4">

                <div class="lg:flex flex-col md:flex-row text-center lg:text-left lg:justify-between">
                    <div class="mb-10 lg:mb-0">
                        <img src="/mavuno_feeds/android/mipmap-xhdpi/ic_launcher.png" alt="Image" class="mb-5 mx-auto lg:mx-0">
    
                        <p class="font-normal text-gray-400 text-md">Manufactures of high-quality animal <br> mineral salts supplements. <br> Our Products have been <br> analyzed and certified by KEBS.</p>
                    </div>
		                <div class="flex gap-12">
											 <div class="space-y-4 mb-10 lg:mb-0">
	                        <h4 class="font-semibold text-gray-500 text-lg mb-6">Our Company</h4>
	
	                        <a href="#offers" class="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">Function</a>
	
	                        <a href="#what_we_do" class="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">What We Do</a>
	
	                        <a href="#works" class="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">Works</a>
	                        <a href="#social" class="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">Social</a>
	                        <a href="#contact" class="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">Contact</a>
	                    </div>
	                    <div class="space-y-4 mb-10 lg:mb-0">
	                        <h4 class="font-semibold text-gray-500 text-lg mb-6">Contact</h4>
	
	                        <a href="#" class="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">Email: {{ contact.email }}</a>
	                        <a href="#" class="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">Phone: {{ contact.phone }}</a>
	                    </div>
		                </div>

                </div>

                <hr class="text-gray-300 mt-10">

                <p class="font-normal text-gray-400 text-md text-center mt-5">&copy; {{ new Date().getFullYear() }} Mavuno Feeds. All rights reserved.</p>

            </div> <!-- container.// -->

        </footer>
</template>

<style scoped>

</style>