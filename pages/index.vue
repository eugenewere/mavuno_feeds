<script setup lang="ts">
useHead({
	title: 'Mavuno Feeds'
})
const contact = {
	email: 'mavunofeeds@gmail.com',
	phone: '0722718092',
	office: {
		name: 'Industial Area, Likoni Road, Nairobi, Kenya',
		link: 'https://maps.app.goo.gl/5w188bZLxs1T9v846',
	},
	social: {
		facebook: 'https://www.facebook.com/mavunofeeds',
	}
}
const navbarOpen = ref(false)
</script>

<template>
  <!-- home section -->
				<section class="py-8 md:py-16 h-[100dvh] lg:h-[80dvh] relative bg-[url('/image/banner.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
				    <div class="absolute inset-0 bg-black bg-opacity-30"></div>

		        <div class="relative z-10 h-full flex flex-col justify-between container max-w-screen-xl mx-auto px-4">
	
	                <nav class="flex-wrap lg:flex items-center justify-between">
	                    <div class="flex items-center justify-between mb-10 lg:mb-0">
		                    <div class="flex gap-1 lg:gap-3 items-center">
			                    <img src="/mavuno_feeds/android/mipmap-xhdpi/ic_launcher.png" class="w-[40px] lg:w-[140px]" alt="Mavuno Feeds Industries">
			                    <h2 class="text-xs sm:text-sm md:text-lg lg:text-3xl font-bold tracking-tight text-white">Mavuno Feeds Industries</h2>
		                    </div>
		                    <button class="flex items-center justify-center border border-white lg:w-10 lg:h-10 w-6 h-6 text-white rounded-md outline-none lg:hidden ml-auto" @click="navbarOpen = !navbarOpen">
	                            <Icon name="ph:list-bold" class="text-white" />
	                        </button>
	                    </div>
		                
		                <!--                    <ul class="hidden lg:block lg:flex flex-col lg:flex-row lg:items-center lg:space-x-20" :class="{'hidden':!navbarOpen,'flex':navbarOpen}">-->
	                    <ul class="bg-white lg:bg-transparent p-4 lg:p-0 rounded-lg lg:block lg:flex flex-col lg:flex-row lg:items-center lg:space-x-10" :class=" navbarOpen ? 'flex' : 'hidden'">
	                        <li class="font-medium lg:text-white text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mr-0 lg:mb-0 text-center">
	                            <a href="#about">About</a>
	                        </li>
	
	                        <li class="font-medium lg:text-white text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0 text-center">
	                            <a href="#service">Services</a>
	                        </li>
	
<!--	                        <li class="font-medium lg:text-white text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0 text-center">-->
<!--	                            <a href="#work">Works</a>-->
<!--	                        </li>-->
		                    <li class="font-medium lg:text-white text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0 text-center">
	                            <a href="#products">Products</a>
	                        </li>
		                    <li class="font-medium lg:text-white text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0 text-center">
	                            <a href="#social">Social</a>
	                        </li>
		                    
		                      <li class="px-8 py-3 font-medium lg:text-white text-lg text-center border-2 lg:border-white rounded-md hover:bg-white hover:text-white transition ease-linear duration-300">
	                            <a href="#contact">Contact</a>
	                       </li>
	                    </ul>
	                </nav>
	
	                <header class="flex-col h-fit lg:pt-20 xl:flex-row flex items-center w-full" style="width: 100%;">
	
	                    <div class="mx-auto flex-1 text-center h-fit">
	                       <h1 class="font-bold text-white text-2xl md:text-6xl leading-tight mb-10">Mavuno Feeds</h1>
	
	                        <p class="font-normal text-white text-xs md:text-lg mb-10">Manufactures of high-quality animal mineral salts supplements. <br> Our Products have been analyzed & certified by KEBS.</p>
	
	                        <div class="">
	                            <a href="#about" class="lg:px-8 lg:py-3 px-5 py-2 bg-[#006301] font-medium text-white text-md md:text-lg rounded-md hover:bg-green-700 transition ease-in-out duration-300">About</a>
	                        </div>
	                    </div>
	                </header>
			            <div></div>
	
	          </div> <!-- container.// -->
	       
        </section>
	
        <section id="about" class="py-8 md:py-16">

            <div class="container max-w-screen-xl mx-auto px-4">

                <h1 class="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">About Us</h1>

                <p class="font-normal text-gray-500 text-md md:text-lg text-center mb-10 md:mb-20">What we do in our company.</p>

                <div class="flex flex-col lg:grid grid-cols-2 ">
                    <div class="mx-auto flex-shrink-0  xl:mx-0 mb-20 xl:mb-0">
                       <img src="/image/1cow1.png" alt="Image" class="w-[50%] lg:w-[70%] mx-auto lg:mr-auto" style="transform: scaleX(1)">
                    </div>

                    <div class="mx-auto  xl:mx-0 text-center xl:text-left">
<!--                       <h1 class="font-bold text-gray-700 text-3xl md:text-4xl mb-10">High Phosphorous Dairies <br> Mineral Supplements.</h1>-->

                        <p class="font-normal text-gray-600 text-sm md:text-lg">
	                        Manufacturers of High-Quality Animal Mineral Salt Supplements
													We are a leading manufacturer of premium animal mineral salt supplements, dedicated to enhancing livestock health and productivity. Our products are scientifically formulated to meet the nutritional needs of various livestock species, ensuring optimal growth, improved immunity, and enhanced production efficiency.
													
													With a commitment to quality and safety, our supplements undergo rigorous testing and quality control measures. Each product has been thoroughly analyzed and certified by the Kenya Bureau of Standards (KEBS), affirming compliance with industry standards and regulatory requirements.
													
													By leveraging advanced manufacturing processes and high-quality raw materials, we deliver mineral supplements that support bone development, reproductive health, and overall well-being in livestock. Our solutions cater to farmers, feed manufacturers, and the broader agricultural sector, providing a reliable source of essential minerals tailored to different animal species and production systems.
													
													For farmers seeking superior nutrition solutions, our mineral salt supplements are the ideal choice for boosting animal health and maximizing returns on investment.
                        </p>
                    </div>
                </div>
            </div> <!-- container.// -->

        </section>

  <!-- feature section -->
        <section id="service" class="py-8 md:py-16">

            <div class="container max-w-screen-xl mx-auto px-4 pt-10">
								<h1 class="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">Services</h1>

                <p class="font-normal text-gray-500 text-md md:text-lg text-center mb-12 md:mb-40">What we offer within our organization</p>
	            
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    <div class="text-center mb-10 xl:mb-0">
                        <div class="flex items-center justify-center">
                            <div class="w-20 py-7 flex justify-center bg-purple-50 text-purple-500 rounded-md mb-5 md:mb-10">
	                              <Icon name="ph:align-bottom-fill" size="30" />
	                              
                            </div>
                        </div>

                        <h2 class="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Custom Formulation</h2>

                        <p class="font-normal text-gray-400 text-sm md:text-lg">Tailor-made mineral supplements for different livestock species.</p>
                    </div>
                    <div class="text-center mb-10 md:mb-0">
                        <div class="flex items-center justify-center">
                            <div class="w-20 py-7 flex justify-center bg-red-50 text-red-500 rounded-md mb-5 md:mb-10">
                                <Icon name="ph:circle-wavy-question-fill" size="30" />
                            </div>
                        </div>

                        <h2 class="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Quality Assurance </h2>

                        <p class="font-normal text-gray-400 text-sm md:text-lg">Certified by KEBS, ensuring safety and compliance.</p>
                    </div>
                    <div class="text-center">
                        <div class="flex items-center justify-center">
                            <div class="w-20 py-7 flex justify-center bg-blue-50 text-blue-500 rounded-md mb-5 md:mb-10">
                                <Icon name="ph:factory-fill" size="30" />
                            </div>
                        </div>

                        <h2 class="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Bulk Manufacturing & Private Labeling</h2>

                        <p class="font-normal text-gray-400 text-sm md:text-lg">Large-scale production and branding solutions.</p>
                    </div>
	                  <div class="text-center">
                        <div class="flex items-center justify-center">
                            <div class="w-20 py-7 flex justify-center bg-stone-50 text-stone-500 rounded-md mb-5 md:mb-10">
                               <Icon name="ph:user-sound-fill" size="30" />
                            </div>
                        </div>

                        <h2 class="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Technical Support & Consultancy </h2>

                        <p class="font-normal text-gray-400 text-sm md:text-lg">Expert advice on livestock nutrition and supplementation.</p>
                    </div>
	                  <div class="text-center">
                        <div class="flex items-center justify-center">
                            <div class="w-20 py-7 flex justify-center bg-yellow-50 text-yellow-500 rounded-md mb-5 md:mb-10">
                               <Icon name="ph:truck-trailer-fill" size="30" />
                            </div>
                        </div>

                        <h2 class="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Distribution & Supply</h2>

                        <p class="font-normal text-gray-400 text-sm md:text-lg">Efficient logistics for timely delivery.</p>
                    </div>
	                  <div class="text-center">
                        <div class="flex items-center justify-center">
                            <div class="w-20 py-7 flex justify-center bg-green-50 text-green-500 rounded-md mb-5 md:mb-10">
                               <Icon name="ph:magnifying-glass-fill" size="30" />
                            </div>
                        </div>

                        <h2 class="font-semibold text-gray-700 text-xl md:text-3xl mb-5">Research & Innovation</h2>

                        <p class="font-normal text-gray-400 text-sm md:text-lg">Continuous improvement in animal nutrition solutions.</p>
                    </div>
	                
                </div>

            </div> <!-- container.// -->

        </section>
  <!-- feature section //end -->

        <section id="work" class="hidden py-8 md:py-16">

            <div class="container max-w-screen-xl mx-auto px-4">

                <h1 class="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">What we do?</h1>

                <p class="font-normal text-gray-500 text-md md:text-lg text-center mb-20 md:mb-40">Manufactures of high-quality animal mineral salts supplements. <br> Our Products have been analyzed and certified by KEBS.</p>

                <div class="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
                    <div class="flex lg:justify-start  justify-center">
                       <img src="/image/2cow1.png" alt="Image" class="w-[70%]" style="transform: scaleX(1)">
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

                    <div class="flex lg:justify-end  justify-center">
	                     <img src="/image/goat.png" alt="Image" class="w-[70%]" style="transform: scaleX(-1)">
                      
                    </div>
                </div>

                <div class="flex flex-col xl:flex-row items-center justify-between">
                    <div class="flex lg:justify-start  justify-center">
                        <img src="/image/cowfeeds.png" alt="Image" class="w-[70%] " style="transform: scaleX(-1)">
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

        <section id="products" class="py-8 md:py-16">

            <div class="container max-w-screen-xl mx-auto px-4">

                <h1 class="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">Products</h1>

                <p class="font-normal text-gray-500 text-md md:text-lg text-center mb-20">Sample of animal feeds we sell</p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
                    <div class="space-y-2 xl:space-y-4">
                        <img src="/image/products/product1.jpeg" alt="Image" class="hover:opacity-75 min-h-[430px] rounded-lg max-h-[430px] w-full object-cover transition ease-in-out duration-300">

<!--												<p class="font-normal text-gray-400 text-base">Design, Branding, Development</p>-->
                        <a href="#" class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-[#006301] transition ease-in-out duration-300">Mavuno Feeds</a>
                    </div>

                    <div class="space-y-2 xl:space-y-4">
                        <img src="/image/products/product2.jpeg" alt="Image" class="hover:opacity-75 min-h-[430px] rounded-lg max-h-[430px] w-full object-cover transition ease-in-out duration-300">
<!--												<p class="font-normal text-gray-400 text-base">Design, Branding, Development</p>-->

                        <a href="#" class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-[#006301] transition ease-in-out duration-300">Reimer Feed Mill</a>
                    </div>

                    <div class="space-y-2 xl:space-y-4">
                        <img src="/image/products/product3.jpeg" alt="Image" class="hover:opacity-75 min-h-[430px] rounded-lg max-h-[430px] w-full object-cover transition ease-in-out duration-300">

<!--                        <p class="font-normal text-gray-400 text-base">Design, Branding, Development</p>-->

                        <a href="#" class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-[#006301] transition ease-in-out duration-300">BelMill Ranch Cubes</a>
                    </div>

                    <div class="space-y-2 xl:space-y-4">
                        <img src="/image/products/product4.jpeg" alt="Image" class="hover:opacity-75 min-h-[430px] rounded-lg max-h-[430px] w-full object-cover transition ease-in-out duration-300">

<!--                        <p class="font-normal text-gray-400 text-base">Design, Branding, Development</p>-->

                        <a href="#" class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-[#006301] transition ease-in-out duration-300">Cattlehos - Heat Booster</a>
                    </div>

                    <div class="space-y-2 xl:space-y-4">
                        <img src="/image/products/product5.jpeg" alt="Image" class="hover:opacity-75 min-h-[430px] rounded-lg max-h-[430px] w-full object-cover transition ease-in-out duration-300">

<!--                        <p class="font-normal text-gray-400 text-base">Design, Branding, Development</p>-->

                        <a href="#" class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-[#006301] transition ease-in-out duration-300">Cattlehos - Heat Booster</a>
                    </div>

                    <div class="space-y-2 xl:space-y-4 mb-10 md:mb-20">
                        <img src="/image/products/product6.jpeg" alt="Image" class="hover:opacity-75 min-h-[430px] rounded-lg max-h-[430px] w-full object-cover transition ease-in-out duration-300">

<!--                        <p class="font-normal text-gray-400 text-base">Design, Branding, Development</p>-->

                        <a href="#" class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-[#006301] transition ease-in-out duration-300">Milk Booster - PR</a>
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
	
	                <p class="font-normal text-gray-500 text-md md:text-lg text-center mb-20 md:mb-30">Connect to us Through Our Socials.</p>
	
	                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ml-4 md:ml-20 xl:ml-0 mb-20 xl:mb-40">
		                <a :href="contact.social.facebook" target="_blank">
			                <div class="">
				                <img src="/image/social/facebook.png" alt="Image" class="w-[40%] mx-auto mb-5 md:mb-10 xl:mb-0">
			                </div>
		                </a>
		                <a :href="contact.social.facebook" target="_blank">
			                 <div class="">
				                <img src="/image/social/instagram.png" alt="Image" class="w-[40%] mx-auto mb-5 md:mb-0">
			                </div>
		                </a>
	                </div>
                </div>

                <div class="flex flex-wrap md:flex-nowrap justify-between mb-2">
                    <div>
                        <p class="font-normal text-gray-500 text-md md:text-lg uppercase mb-3">Let's talk</p>

                        <h1 class="font-bold text-gray-700 text-xl md:text-4xl pb-20">Got a question?  </h1>
                    </div>

                    <div class="mt-10">
                        <a :href="`mailto:${contact.email}`" class="px-4 py-2 md:px-8 md:py-3 font-medium text-green-700 text-lg border-2 border-green-700 rounded-md hover:bg-[#006301] hover:text-white transition ease-linear duration-300">
                            Contact us now
                        </a>
                    </div>
                </div>
	             

                <p class="font-normal text-gray-500 text-md md:text-lg mb-4 md:mb-10">We’d love to hear from you! Contact us today to discuss how we can assist you. </p>
	             <hr class="text-gray-300 mb-8">
                <div class="flex flex-wrap md:flex-nowrap justify-between mb-8">
                    <div class="space-y-6">
                        <p class="font-normal text-gray-500 text-md md:text-lg uppercase mb-3">Working Hours</p>
												<div class="space-y-4">
		                      <p class="font-normal text-gray-500 text-md md:text-lg "><strong>Monday - Thursday</strong> - 8:00am - 5:30 pm </p>
		                      <p class="font-normal text-gray-500 text-md md:text-lg "><strong>Friday</strong> - 8:00am - 5:00 pm </p>
		                      <p class="font-normal text-gray-500 text-md md:text-lg "><strong>Saturday</strong> - 8:00 am - 1:00 pm </p>
		                      <p class="font-normal text-gray-500 text-md md:text-lg "><strong>Sunday</strong> - Closed </p>
												</div>
                    </div>

                    
                </div>
								

                <p class="font-normal text-gray-500 text-md md:text-lg mb-4 md:mb-10">
	                Visit us at <a :href="contact.office.link" target="_blank" class="block font-normal text-gray-400 text-lg hover:text-gray-700 transition ease-in-out duration-300 text-green-500">  {{ contact.office.name }} </a>
                </p>
                <hr class="text-gray-300 mb-8">

            </div> <!-- container.// -->
            
        </section>

        <footer id="contact" class="bg-green-50 py-8 md:py-16">

            <div class="container max-w-screen-xl mx-auto px-4">

                <div class="lg:flex flex-col md:flex-row text-center lg:text-left lg:justify-between">
                    <div class="mb-10 lg:mb-0">
                        <img src="/mavuno_feeds/android/mipmap-xhdpi/ic_launcher.png" alt="Image" class="mb-5 mx-auto lg:mx-0">
    
                        <p class="font-normal text-gray-400 text-lg">Manufactures of high-quality animal <br> mineral salts supplements. <br> Our Products have been <br> analyzed and certified by KEBS.</p>
                    </div>
		                <div class="flex gap-12">
											 <div class="space-y-4 mb-10 lg:mb-0">
	                        <h4 class="font-semibold text-gray-500 text-lg mb-6">Our Company</h4>
	
	                        <a href="#about" class="block font-normal text-gray-400 text-lg hover:text-gray-700 transition ease-in-out duration-300">About</a>
	                        <a href="#service" class="block font-normal text-gray-400 text-lg hover:text-gray-700 transition ease-in-out duration-300">Services</a>
<!--	                        <a href="#work" class="block font-normal text-gray-400 text-lg hover:text-gray-700 transition ease-in-out duration-300">Works</a>-->
	                        <a href="#products" class="block font-normal text-gray-400 text-lg hover:text-gray-700 transition ease-in-out duration-300">Products</a>
	                        <a href="#social" class="block font-normal text-gray-400 text-lg hover:text-gray-700 transition ease-in-out duration-300">Social</a>
	                        <a href="#contact" class="block font-normal text-gray-400 text-lg hover:text-gray-700 transition ease-in-out duration-300">Contact</a>
	                    </div>
	                    <div class="space-y-4 mb-10 lg:mb-0">
	                        <h4 class="font-semibold text-gray-500 text-lg mb-6">Contact</h4>
	
	                        <a :href="`mailto:${contact.email}`" class="block font-normal text-gray-400 text-lg hover:text-gray-700 transition ease-in-out duration-300">Email: <span class="text-green-500">{{ contact.email }}</span> </a>
	                        <a :href="`tel:${contact.phone}`" class="block font-normal text-gray-400 text-lg hover:text-gray-700 transition ease-in-out duration-300">Phone:  <span class="text-green-500">{{ contact.phone }}</span>  </a>
	                        <a :href="contact.office.link" target="_blank" class="block font-normal text-gray-400 text-lg hover:text-gray-700 transition ease-in-out duration-300">Office:  <span class="text-green-500">{{ contact.office.name }}</span>  </a>
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