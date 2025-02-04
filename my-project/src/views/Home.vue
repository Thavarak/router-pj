<template>
  <section>
    <swiper
      :slidesPerView="1.2"
      :spaceBetween="30"
      :loop="true"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        class="swiper-slide bg-[url('https://cas.com.kh/wp-content/uploads/2024/11/QuickBooks-Online.webp')] h-[700px] bg-no-repeat bg-cover"
        ><div class="pt-[250px] pl-[50px] space-y-[20px]">
          <h2 class="text-3xl text-black font-bold m-auto">
            Cloud-based Accounting <br />
            Software for Small Business
          </h2>
          <p class="text-xl m-auto">
            Streamline finances from invoicing to reporting in one <br />
            intuitive platform to grow your Business.
          </p>
          <div class="pt-[50px]">
            <a
              href="https://cas.com.kh/products/quickbooks-online-cambodia/"
              class="border-2 border-[#53B700] hover:bg-white rounded py-[15px] px-[25px] text-[#5C5C5C] hover:text-[#53B700]"
              >Learn More</a
            >
          </div>
        </div></swiper-slide
      >
      <swiper-slide
        class="swiper-slide bg-[url('https://cas.com.kh/wp-content/uploads/2024/11/FaceAzure.webp')] h-[700px] bg-no-repeat bg-cover"
        ><div class="pt-[250px] pl-[50px] space-y-[20px]">
          <h2 class="text-3xl text-black font-bold m-auto">
            Tax Compliance Solution <br />
            for QuickBooks in Cambodia
          </h2>
          <p class="text-xl m-auto">
            Experience seamless printing of tax invoices with ease by saving
            <br />
            your time and money.
          </p>
          <div class="pt-[50px]">
            <a
              href="https://faceazure.com/"
              class="border-2 border-[#53B700] hover:bg-white rounded py-[15px] px-[25px] text-[#5C5C5C] hover:text-[#53B700]"
              >Learn More</a
            >
          </div>
        </div></swiper-slide
      >
      <swiper-slide
        class="swiper-slide bg-[url('https://cas.com.kh/wp-content/uploads/2024/11/ABSS.webp')] h-[700px] bg-no-repeat bg-cover"
        ><div class="pt-[250px] pl-[50px] space-y-[20px]">
          <h2 class="text-3xl text-black font-bold m-auto">
            Best accounting software for small <br />
            and medium-sized businesses
          </h2>
          <p class="text-xl m-auto">
            An easy-to-use and cost-effective accounting software by improves
            the accuracy of <br />
            your financial data significantly.
          </p>
          <div class="pt-[50px]">
            <a
              href="https://int.abssasia.com/"
              class="border-2 border-[#53B700] hover:bg-white rounded py-[15px] px-[25px] text-[#5C5C5C] hover:text-[#53B700]"
              >Learn More</a
            >
          </div>
        </div></swiper-slide
      >
      <swiper-slide
        class="swiper-slide bg-[url('https://cas.com.kh/wp-content/uploads/2024/11/Acumatica.webp')] h-[700px] bg-no-repeat bg-cover"
        ><div class="pt-[250px] pl-[50px] space-y-[20px]">
          <h2 class="text-3xl text-black font-bold m-auto">
            Easy-to-use customizable <br />
            Cloud ERP software
          </h2>
          <p class="text-xl m-auto">
            Truly fits your need to improve profitability, efficiency, and more
            to <br />
            secure powerful flexibility for today and tomorrow.
          </p>
          <div class="pt-[50px]">
            <a
              href="https://www.acumatica.com/"
              class="border-2 border-[#53B700] hover:bg-white rounded py-[15px] px-[25px] text-[#5C5C5C] hover:text-[#53B700]"
              >Learn More</a
            >
          </div>
        </div></swiper-slide
      >
      <swiper-slide
        class="swiper-slide bg-[url('https://cas.com.kh/wp-content/uploads/2024/11/Education.webp')] h-[700px] bg-no-repeat bg-cover"
        ><div class="pt-[250px] pl-[50px] space-y-[20px]">
          <h2 class="text-3xl text-black font-bold m-auto">
            A new way of learning and getting <br />
            certified at your own pace.
          </h2>
          <p class="text-xl m-auto">
            From career ready to managing business: our learning courses are
            recognized <br />
            nationally and 148 countries international.
          </p>
          <div class="pt-[50px]">
            <a
              href="https://cas.com.kh/education/certification/"
              class="border-2 border-[#53B700] hover:bg-white rounded py-[15px] px-[25px] text-[#5C5C5C] hover:text-[#53B700]"
              >Learn More</a
            >
          </div>
        </div></swiper-slide
      >
    </swiper>
    <!-- border -->
    <div class="bg-[#EFEFEF] mt-[100px] w-full">
      <h1
        class="text-5xl font-bold pt-[50px] text-[#5C5C5C] text-center m-auto"
      >
        Empowering Your Business with seamless
      </h1>
      <br />
      <h2 class="text-5xl font-bold text-[#53B700] text-center m-auto">
        Business Solutions
      </h2>
      <p class="text-center pt-[30px] pb-[180px] text-[#5C5C5C] m-auto">
        We provide tools and services to help you succeed with confidence.
      </p>
    </div>
    <div
      class="main-card md:w-[1220px] m-auto md:flex md:space-x-5 space-x-0 space-y-5 md:space-y-0 md:mt-[-150px] mt-[-150px] px-[10px]"
    >
      <div
        class="card border bg-white md:w-[280px] h-[280px] rounded-xl pt-[30px] pl-[30px] shadow-2xl"
      >
        <img
          src="https://cas.com.kh/wp-content/uploads/2024/11/Migrate.webp"
          alt=""
          width="60px"
        />
        <h2 class="text-xl pt-[20px] font-bold text-[#373737]">
          Data Migration
        </h2>
        <p class="pt-[20px] text-[#5C5C5C]">
          Seamlessly transfers your data<br />
          with expect assistance.
        </p>
        <div class="pt-[25px]">
          <a href="#" class="text-[#5C5C5C] hover:text-[#53B700] duration-500"
            >Learn More</a
          >
        </div>
      </div>
      <div
        class="mt-[50px] card border bg-white md:w-[280px] h-[280px] rounded-xl pt-[30px] pl-[30px] shadow-2xl"
      >
        <img
          src="https://cas.com.kh/wp-content/uploads/2024/11/Implement.webp"
          alt=""
          width="60px"
        />
        <h2 class="text-xl pt-[20px] font-bold text-[#373737]">
          Implementation
        </h2>
        <p class="pt-[20px] text-[#5C5C5C]">
          Tailored our solutions implemented seamlessly.
        </p>
        <div class="pt-[25px]">
          <a href="#" class="text-[#5C5C5C] hover:text-[#53B700] duration-500"
            >Learn More</a
          >
        </div>
      </div>
      <div
        class="card border bg-white md:w-[280px] h-[280px] rounded-xl pt-[30px] pl-[30px] shadow-2xl"
      >
        <img
          src="https://cas.com.kh/wp-content/uploads/2024/11/Cloud-Hosting.webp"
          alt=""
          width="60px"
        />
        <h2 class="text-xl pt-[20px] font-bold text-[#373737]">
          Cloud Hosting
        </h2>
        <p class="pt-[20px] text-[#5C5C5C]">
          Reliable and scalable solution to access your data 24/7 availability.
        </p>
        <div class="pt-[25px]">
          <a href="#" class="text-[#5C5C5C] hover:text-[#53B700] duration-500"
            >Learn More</a
          >
        </div>
      </div>
      <div
        class="card border bg-white md:w-[280px] h-[280px] rounded-xl pt-[30px] pl-[30px] shadow-2xl"
      >
        <img
          src="https://cas.com.kh/wp-content/uploads/2024/11/Support.webp"
          alt=""
          width="60px"
        />
        <h2 class="text-xl font-bold pt-[20px] text-[#373737]">
          Complete Tech Support
        </h2>
        <p class="pt-[20px] text-[#5C5C5C]">
          Our Complete support to keep <br />
          your business running smoothly.
        </p>
        <div class="pt-[25px]">
          <a href="#" class="text-[#5C5C5C] hover:text-[#53B700] duration-500"
            >Learn More</a
          >
        </div>
      </div>
    </div>
    <!-- section2 -->
    <div class="mt-[100px] w-full" style="background-color: rgb(246, 248, 251)">
      <h1
        class="flex justify-center font-bold text-5xl pt-[90px] text-[#373737]"
      >
        SMEs Solutions
      </h1>
      <div class="flex justify-center pt-[30px] px-[10px]">
        <div
          class="banner bg-[url('https://cas.com.kh/wp-content/uploads/2024/11/01-QuickBooks-Enterprise.webp')] w-[1200px] h-[600px] rounded-xl shadow-2xl"
        >
          <h2 class="text-center font-bold text-2xl pt-[30px] text-[#373737]">
            QuickBooks Enterprise
          </h2>
          <p class="text-center pt-[10px] text-[#5C5C5C]">
            Comprehensive accounting software for complex business.
          </p>
          <div class="flex justify-center pt-[20px]">
            <a
              href="#"
              class="border-2 border-[#53B700] hover:bg-white rounded py-[15px] px-[25px] text-[#5C5C5C] hover:text-[#53B700] duration-500"
              >Learn More</a
            >
          </div>
        </div>
      </div>
      <div
        class="md:w-[1200px] px-[10px] m-auto md:space-x-[20px] space-y-[20px] md:space-y-0 md:flex md:justify-center pt-[20px]"
      >
        <div
          class="banner2 md:w-1/2 bg-[url('https://cas.com.kh/wp-content/uploads/2024/11/02-QuickBooks-Online-1.webp')] rounded-xl shadow-2xl w-full h-[400px]"
        >
          <h2 class="pt-[30px] pl-[30px] font-bold text-2xl text-[#373737]">
            QuickBooks Online
          </h2>
          <p class="pl-[30px] text-[#5C5C5C] pt-[20px]">
            Cloud-based accounting software for <br />
            small and medium businesses.
          </p>
          <div class="pl-[30px] pt-[210px]">
            <a
              href="#"
              class="border-2 border-[#53B700] hover:bg-white rounded py-[15px] px-[25px] text-[#5C5C5C] hover:text-[#53B700] duration-500"
              >Learn More</a
            >
          </div>
        </div>
        <div
          class="banner2 md:w-1/2 bg-[url('https://cas.com.kh/wp-content/uploads/2024/11/03-ABSS.webp')] h-[400px] rounded-xl shadow-2xl w-full"
        >
          <h2 class="pt-[30px] pl-[30px] font-bold text-2xl text-[#373737]">
            ABSS
          </h2>
          <p class="pl-[30px] text-[#5C5C5C] pt-[20px]">
            Best accounting software for <br />small and medium businesses.
          </p>
          <div class="pl-[30px] pt-[210px]">
            <a
              href="#"
              class="border-2 border-[#53B700] hover:bg-white rounded py-[15px] px-[25px] text-[#5C5C5C] hover:text-[#53B700] duration-500"
              >Learn More</a
            >
          </div>
        </div>
      </div>
      <div
        class="md:w-[1200px] px-[10px] md:space-x-[20px] space-y-[20px] md:space-y-0 md:flex md:justify-center pb-[80px] pt-[20px] m-auto"
      >
        <!-- Product Box with spacing -->
        <div
          class="banner3 md:w-1/2 bg-[url('https://cas.com.kh/wp-content/uploads/2024/11/04-FaceAzure-Online.webp')] rounded-xl shadow-2xl w-full h-[400px]"
        >
          <div>
            <h2 class="pt-[30px] pl-[30px] font-bold text-2xl text-[#373737]">
              FaceAzure Online
            </h2>
            <p class="text-[#5C5C5C] pt-[20px] pl-[30px]">
              cloud-based tax compliance software <br />for QuickBooks Online.
            </p>
          </div>
          <div class="pl-[30px] pt-[210px]">
            <a
              href="#"
              class="border-2 border-[#53B700] hover:bg-white rounded py-[15px] px-[25px] text-[#5C5C5C] hover:text-[#53B700] duration-500"
              >Learn More</a
            >
          </div>
        </div>
        <div
          class="banner3 md:w-1/2 bg-[url('https://cas.com.kh/wp-content/uploads/2024/11/05-FaceAzure-Desktop.webp')] h-[400px] rounded-xl shadow-2xl w-full"
        >
          <h2 class="pt-[30px] pl-[30px] font-bold text-2xl text-[#373737]">
            FaceAzure Desktop
          </h2>
          <p class="pl-[30px] pt-[20px] text-[#5C5C5C]">
            Cambodia's tax compliance software <br />for QuickBooks Desktop.
          </p>
          <div class="pl-[30px] pt-[210px]">
            <a
              href="#"
              class="border-2 border-[#53B700] hover:bg-white rounded py-[15px] px-[25px] text-[#5C5C5C] hover:text-[#53B700] duration-500"
              >Learn More</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- section3 -->
    <div class="bg-[#EFEFEF] w-full m-auto">
      <h1 class="text-center text-5xl font-bold pt-[50px] text-[#373737]">
        ERP Solution
      </h1>
      <p class="text-center pt-[20px] text-[#373737]">
        Optimize your operations with robust ERP solutions.
      </p>
      <h2 class="text-center font-bold text-2xl pt-[20px] text-[#373737]">
        Acumatic a full suite of business management applications
      </h2>
      <div class="text-center pt-[40px]">
        <a
          href="#"
          class="border-2 border-[#53B700] hover:bg-white rounded py-[15px] px-[25px] text-[#5C5C5C] hover:text-[#53B700] duration-500"
          >Learn More</a
        >
      </div>

      <!-- Mobile responsive with width  -->
      <div
        class="py-[100px] m-auto px-[10px] md:px-0 md:flex space-x-[30px] md:w-[1200px]"
      >
        <div class="vdo self-center md:mr-[-80px] md:w-1/2 z-10">
          <iframe
            class="rounded-xl shadow-2xl h-[400px]"
            width="100%"
            src="https://www.youtube.com/embed/B4Flt9bRu6s?si=eajqoPTYalQgZL0t"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="md:w-1/2 inline">
          <img
            class="rounded-xl shadow-2xl w-full md:h-full"
            src="https://cas.com.kh/wp-content/uploads/2024/11/ERP-Solution_V2-768x835.webp"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- section4 -->
    <div style="background-color: rgb(246, 248, 251)" class="pb-[100px]">
      <h1 class="text-5xl font-bold text-center pt-[100px] text-[#373737]">
        Education Solutions
      </h1>
      <p class="text-center pt-[20px] text-[#5C5C5C]">
        Advanced your skills and knowledge at your own pace.
      </p>
      <div
        class="pt-[20px] px-[10px] md:space-x-[20px] space-y-[20px] md:space-y-0 md:w-[1200px] md:flex m-auto"
      >
        <div
          class="banner4 bg-[url('https://cas.com.kh/wp-content/uploads/2024/11/Certiport.webp')] md:w-1/2 w-full h-[400px] shadow-2xl rounded-xl"
        >
          <h2 class="pt-[30px] pl-[30px] font-bold text-2xl text-[#373737]">
            Certiport
          </h2>
          <p class="pt-[20px] pl-[30px] text-[#5C5C5C]">
            Accredited learning provider with <br />comprehensive courses.
          </p>
          <div class="pt-[210px] pl-[30px]">
            <a
              href="#"
              style="color: rgb(55, 55, 55)"
              class="border-2 border-[#53B700] hover:bg-white rounded py-[15px] px-[25px] text-[#5C5C5C] hover:text-[#53B700] duration-500"
              >Learn More</a
            >
          </div>
        </div>
        <div
          class="banner4 bg-[url('https://cas.com.kh/wp-content/uploads/2024/11/Training.webp')] md:w-1/2 w-full h-[400px] rounded-xl shadow-2xl"
        >
          <h2 class="font-bold text-2xl pt-[30px] pl-[30px] text-[#373737]">
            Training
          </h2>
          <p class="pt-[20px] pl-[30px] text-[#5C5C5C]">
            Expert-led training to enhance your <br />financial management
            skills.
          </p>
          <div class="pt-[210px] pl-[30px]">
            <a
              href="#"
              class="border-2 border-[#53B700] hover:bg-white rounded py-[15px] px-[25px] text-[#5C5C5C] hover:text-[#53B700] duration-500"
              style="color: rgb(55, 55, 55)"
              >Learn More</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div
      class="space-y-[100px] w-full"
      style="background-color: rgb(228, 228, 228)"
    >
      <div
        class="space-y-[50px] grid max-w-[1250px] m-auto gap-[50px] text-center"
        style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))"
      >
        <!-- ERP Solution -->
        <div class="space-y-[20px] pt-[48px]">
          <h3 class="font-bold text-[#373737]">ERP Solution</h3>
          <ul>
            <li>
              <a href="#" class="text-[#373737] hover:text-[#53B700]"
                >Acumatica</a
              >
            </li>
          </ul>
        </div>

        <!-- SMEs Solutions -->
        <div class="space-y-[20px]">
          <h3 class="font-bold text-[#373737]">SMEs Solutions</h3>
          <ul class="space-y-[20px] text-[#373737]">
            <li>
              <a href="#" class="text-[#373737] hover:text-[#53B700]"
                >QuickBooks Online</a
              >
            </li>
            <li>
              <a href="#" class="text-[#373737] hover:text-[#53B700]"
                >QuickBooks Online US</a
              >
            </li>
            <li>
              <a href="#" class="text-[#373737] hover:text-[#53B700]"
                >QuickBooks Enterprise</a
              >
            </li>
            <li>
              <a href="#" class="text-[#373737] hover:text-[#53B700]">ABSS</a>
            </li>
          </ul>
        </div>
        <!-- Compliance Solutions-->
        <div class="space-y-[20px]">
          <h3 class="font-bold text-[#373737]">Compliance Solutions</h3>
          <ul class="space-y-[20px] text-[#373737]">
            <li>
              <a href="#" class="text-[#373737] hover:text-[#53B700]"
                >FaceAzure</a
              >
            </li>
          </ul>
        </div>
        <!--Company-->
        <div class="space-y-[20px]">
          <h3 class="font-bold text-[#373737]">Company</h3>
          <ul class="space-y-[20px] [#373737]">
            <li><a href="#" class="hover:text-[#53B700]">About Us</a></li>
            <li><a href="#" class="hover:text-[#53B700]">Our Partners</a></li>
            <li>
              <a href="#" class="hover:text-[#53B700]">Partner With Us</a>
            </li>
            <li>
              <a href="#" class="hover:text-[#53B700]">Join Our Team</a>
            </li>
          </ul>
        </div>
        <!--Keep in touch with us-->
        <div class="space-y-[20px]">
          <h3 class="font-bold text-[#373737]">Keep in touch with us</h3>
          <ul class="font-bold text-[#373737]">
            <li>
              <a href="#" class="hover:text-[#53B700]"
                ><i class="fa-solid fa-phone"></i>+855 81 982 324 </a
              ><br />
              <a href="#" class="hover:text-[#53B700]">+855 61 982 324</a>
            </li>
            <li>
              <a href="#" class="hover:text-[#53B700]"
                ><i class="fa-solid fa-phone"></i>+855 63 965 359 </a
              ><br />
              <a href="#" class="hover:text-[#53B700]">+855 23 982 324</a>
            </li>
            <li>
              <a href="#" class="hover:text-[#53B700]"
                ><i class="fa-solid fa-envelope"></i> info@cas.com.kh</a
              >
            </li>
          </ul>
        </div>
        <!-- Education Solution -->
        <div class="space-y-[20px]">
          <h3 class="font-bold text-[#373737]">Education Solution</h3>
          <ul class="text-[#373737]">
            <li><a href="#" class="hover:text-[#53B700]">Certiport</a></li>
          </ul>
        </div>

        <!-- Other Useful Solutions -->
        <div class="space-y-[20px]">
          <h3 class="font-bold text-[#373737]">Other Useful Solutions</h3>
          <ul class="space-y-[20px] text-[#373737]">
            <li>
              <a href="#" class="hover:text-[#53B700]">Terminal Service Plus</a>
            </li>
            <li><a href="#" class="hover:text-[#53B700]">Techsmith</a></li>
            <li><a href="#" class="hover:text-[#53B700]">WinRAR</a></li>
            <li><a href="#" class="hover:text-[#53B700]">Avast</a></li>
          </ul>
        </div>
        <!--Service-->
        <div class="space-y-[20px]">
          <h3 class="font-bold text-[#373737]">Service</h3>
          <ul class="space-y-[20px] text-[#373737]">
            <li><a href="#" class="hover:text-[#53B700]">Consulting</a></li>
            <li>
              <a href="#" class="hover:text-[#53B700]">Implementation</a>
            </li>
            <li>
              <a href="#" class="hover:text-[#53B700]">Technical Support</a>
            </li>
            <li>
              <a href="#" class="hover:text-[#53B700]">Data Migration</a>
            </li>
            <li>
              <a href="#" class="hover:text-[#53B700]">Cloud Hosting</a>
            </li>
          </ul>
        </div>
        <!--Training-->
        <div class="space-y-[20px]">
          <h3 class="font-bold text-[#373737]">Training</h3>
          <ul class="space-y-[20px] text-[#373737]">
            <li>
              <a href="#" class="hover:text-[#53B700]"
                >Training for QuickBooks Desktop</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-[#53B700]"
                >Training for QuickBooks Online</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-[#53B700]"
                >Training for QuickBooks for NGO</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-[#53B700]"
                >Training for QuickBooks for Contractor</a
              >
            </li>
          </ul>
        </div>
        <!--Follow Us-->
        <div class="space-x-[5px]">
          <h3 class="font-bold text-[#373737]">Follow Us</h3>
          <a href="https://www.facebook.com/casbiz/?_rdc=1&_rdr"
            ><i class="fa-brands fa-facebook fa-lg text-[#373737]"></i
          ></a>

          <a href="https://www.pinterest.com/casbiz/"
            ><i class="fa-brands fa-pinterest fa-lg text-[#373737]"></i
          ></a>

          <a href="https://www.linkedin.com/company/casbiz/"
            ><i class="fa-brands fa-linkedin fa-lg text-[#373737]"></i
          ></a>

          <a href="https://x.com/casbizasia?mx=2"
            ><i class="fa-brands fa-square-x-twitter fa-lg text-[#373737]"></i
          ></a>

          <a href="https://www.youtube.com/c/CASBIZTechnologyCoLtdSiemReap"
            ><i class="fa-brands fa-youtube fa-lg text-[#373737]"></i
          ></a>

          <a href="https://www.tiktok.com/@casbizasia"
            ><i class="fa-brands fa-tiktok text-[#373737]"></i
          ></a>

          <h3 class="font-bold text-[#373737]">
            Siem Reap Office (headquarters)
          </h3>
          <ul class="text-[#373737]">
            <li>
              <i class="fa-sharp fa-solid fa-location-dot text-[#373737]"></i>
              Ground floor, Chrey Village, Kandaek Commune, Prasat Bakong
              District, Siem Reap Province, Kingdom of Cambodia
            </li>
          </ul>
          <h3 class="font-bold" style="color: rgb(55, 55, 55)">
            Phnom Penh Office
          </h3>
          <ul class="text-[#373737]">
            <li>
              <i class="fa-sharp fa-solid fa-location-dot text-[#373737]"></i>
              Borey Vimean Phnom Penh, Street 598, #31D, Sangkat Chrang Chamres
              II, Khan Russey Keo, Phnom Penh, 120705, Kingdom Of Cambodia
            </li>
          </ul>
        </div>
      </div>
      <div class="border border-gray-400 max-w-[1400px] m-auto"></div>
      <!-- Footer -->
      <div class="pb-[50px]">
        <a
          href="#"
          class="flex justify-center font-bold text-[#373737] hover:text-[#53B700]"
          >Terms of Use | Privacy Policy</a
        >
        <p class="flex justify-center font-bold text-[#5C5C5C]">
          ©2024 CAS-BIZ Technology. All Rights Reserved
        </p>
      </div>
    </div>
  </section>
  <!--swipper slide-->
</template>

<style>
.swiper-button-prev,
.swiper-button-next {
  color: rgb(83, 183, 0) !important;
  background-color: rgba(231, 231, 231, 0.896);
  border-radius: 10px;
  padding: 30px;
  font-weight: 700;
}
.swiper-pagination {
  position: static !important;
  padding-top: 20px;
}
.swiper-pagination-bullet {
  background: rgb(83, 183, 0) !important;
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
