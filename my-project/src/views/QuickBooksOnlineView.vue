<template>
  <section>
    <div
      class="md:flex md:justify-self-center md:w-[1300px] mt-[50px] mx-[60px]"
    >
      <div class="md:w-1/2">
        <h1 class="text-[40px] font-bold text-[#515151] pt-[20px]">
          QuickBooks Online Accounting: Easy to use, saves time and money.
        </h1>
        <p class="text-[#515151] font-bold text-[17px] pt-[10px]">
          #1 Low-Cost Cloud Base Accounting Software in Cambodia, Supports up to
          25 Users.
        </p>
        <p class="text-[#515151] text-[17px] pt-[10px]">
          Reach out to us today, call 061 982 324.
        </p>
        <button
          class="mt-[40px] text-[#515151] font-medium text-[18px] border-2 border-[#53B700] rounded px-[30px] py-[10px] hover:text-[#53B700] duration-300"
        >
          Free QuickBooks Consultation
        </button>
      </div>
      <img
        class="drop-shadow shadow-lg md:w-1/2"
        src="https://cas.com.kh/wp-content/uploads/2024/01/qbo_hero.webp"
        alt=""
      />
    </div>
    <div class="border mt-[100px] border-gray-400"></div>
    <div
      class="md:w-[1300px] mt-[50px] justify-items-center md:flex md:justify-self-center md:items-center"
    >
      <h3 class="md:w-1/2 text-[20px] font-medium text-[#515151]">
        QuickBooks Online (Cambodia Version)
      </h3>
      <div class="flex mt-[20px] space-x-4">
        <button
          class="border-2 md:px-[130px] px-[50px] md:py-[15px] py-[10px] rounded border-[#53B700] font-medium bg-[#53B700] text-white"
        >
          Pricing
        </button>
        <button
          class="border-2 md:px-[130px] px-[50px] md:py-[15px] rounded border-[#53B700] text-[#515151] font-medium hover:text-white hover:bg-[#53B700]"
        >
          Feature
        </button>
      </div>
    </div>
    <div class="border mt-[50px] md:mx-[320px] border-gray-400"></div>
    <h2 class="mt-[50px] text-center text-[25px] text-[#515151] font-bold">
      There's a QuickBooks for every business
    </h2>
    <div class="flex justify-center my-[50px]">
      <button
        class="border border-gray-400 px-[40px] py-[20px] rounded-l-[50px] bg-[#53B700] font-medium text-white"
      >
        Monthly
      </button>
      <button
        class="border border-gray-400 px-[40px] py-[20px] rounded-r-[50px] font-medium"
      >
        Annual
      </button>
    </div>
    <!-- table -->
    <div class="hidden md:block container mx-auto">
      <!-- Table Header -->
      <div
        class="grid grid-cols-5 gap-5 text-center text-[#515151] text-[18px] font-bold"
      >
        <div class=""></div>
        <div class="border border-b-0 py-[50px] rounded-t-md">Simple Start</div>
        <div class="border border-b-0 py-[50px] rounded-t-md">Essentials</div>
        <div class="border border-b-0 py-[50px] rounded-t-md">Plus</div>
        <div class="border border-b-0 py-[50px] rounded-t-md">Advanced</div>
      </div>
      <div class="grid grid-cols-5 gap-5 text-center text-[#515151]">
        <div class=""></div>
        <div class="py-[50px] border border-b-0">
          <span class="text-[20px] font-bold"
            >$19.00/mo<br />Annual subscription</span
          >
        </div>
        <div class="py-[50px] border border-b-0">
          <span class="text-[20px] font-bold"
            >$28.00/mo<br />Annual subscription</span
          >
        </div>
        <div class="py-[50px] border border-b-0">
          <span class="text-[20px] font-bold"
            >$40.00/mo<br />Annual subscription</span
          >
        </div>
        <div class="py-[50px] border border-b-0">
          <span class="text-[20px] font-bold"
            >$76.00/mo<br />Annual subscription</span
          >
        </div>
      </div>
      <!-- Features -->
      <div
        class="grid grid-cols-5 gap-5 border border-l-0 border-b-0 text-[18px] font-semibold text-[#515151]"
      >
        <div class="p-4">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i>
          <button popover id="User" class="justify-self-center mt-[250px]">
            <div class="bg1">
              <div class="bg-white rounded-md">
                <h1 class="text-[50px] font-bold">User package</h1>
                <li>
                  Invite your accountant to access your books for seamless
                  collaboration.
                </li>
                <li>
                  Protect sensitive datat with user-access levels and share
                  reports without sharing a login.
                </li>
                <li>
                  Give employees specific access to features and reduce errors
                  with auto-syncing.
                </li>
              </div>
            </div>
          </button>
          <input
            type="button"
            popovertarget="User"
            value="User package"
            class="hover:underline"
          />
        </div>
        <div class="p-4 border border-y-0 text-center">1 User</div>
        <div class="p-4 border border-y-0 text-center">3 Users</div>
        <div class="p-4 border border-y-0 text-center">5 Users</div>
        <div class="p-4 border border-y-0 border-r-0 text-center">25 Users</div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Track income &
          expenses
        </div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Send custom
          invoices & quotes
        </div>
        <div class="py-[30px] border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="py-[30px] border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="py-[30px] border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="py-[30px] border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Connect your
          bank
        </div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Track VAT
        </div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Insights &
          reports
        </div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Manage
          employees
        </div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Multi-Currency
        </div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Recurring
          transactions
        </div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Track
          Inventory
        </div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Track projects
          & locations
        </div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Manage budgets
        </div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Manage Users
        </div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Automate
          workflows
        </div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Custom
          reporting fields
        </div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Customize
          dashboards
        </div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Customize role
          permissions
        </div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 border border-l-0 gap-5 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Backup online
          & restore data
        </div>
        <div class="py-[30px] border border-y-0"></div>
        <div class="py-[30px] border border-y-0"></div>
        <div class="py-[30px] border border-y-0"></div>
        <div class="py-[30px] border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 border border-l-0 gap-5 border-b-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          <i class="fa-solid fa-chevron-down text-[#53B700]"></i> Manage revenue
          recognition
        </div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0"></div>
        <div class="p-4 border border-y-0 border-r-0 text-center">
          <i class="fa-solid fa-check text-[#53B700]"></i>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5 border border-l-0">
        <div class="p-4 text-[#515151] font-medium text-[18px]">
          Tax Compliance Solution
          <button
            class="mt-[60px] bg-[#0D9589] rounded p-[10px] text-white font-semibold"
          >
            FaceAzure Online*(Add-on)
          </button>
        </div>
        <div
          class="border border-y-0 text-center py-[60px] text-[#515151] font-medium text-[18px]"
        >
          Free 30 days trail
        </div>
        <div
          class="border border-y-0 text-center py-[60px] text-[#515151] font-medium text-[18px]"
        >
          Free 30 days trail
        </div>
        <div
          class="border border-y-0 text-center py-[60px] text-[#515151] font-medium text-[18px]"
        >
          Free 30 days trail
        </div>
        <div
          class="border border-y-0 border-r-0 text-center py-[60px] text-[#515151] font-medium text-[18px]"
        >
          Free 30 days trail
        </div>
      </div>
      <!-- Add more rows here -->
      <!-- Footer -->
      <div class="grid grid-cols-5 gap-5 text-center text-[18px] font-semibold">
        <div class=""></div>
        <div class="py-[50px] border border-t-0 rounded-b-md">
          <button
            class="border-2 border-[#53B700] text-[#515151] hover:text-[#53B700] duration-300 px-4 py-2 rounded"
          >
            Free Demo
          </button>
        </div>
        <div class="py-[50px] border border-t-0 rounded-b-md">
          <button
            class="border-2 border-[#53B700] text-[#515151] hover:text-[#53B700] duration-300 px-4 py-2 rounded"
          >
            Free Demo
          </button>
        </div>
        <div class="py-[50px] border border-t-0 rounded-b-md">
          <button
            class="border-2 border-[#53B700] text-[#515151] hover:text-[#53B700] duration-300 px-4 py-2 rounded"
          >
            Free Demo
          </button>
        </div>
        <div class="py-[50px] border border-t-0 rounded-b-md">
          <button
            class="border-2 border-[#53B700] text-[#515151] hover:text-[#53B700] duration-300 px-4 py-2 rounded"
          >
            Free Demo
          </button>
        </div>
      </div>
    </div>
    <!-- table responsive -->

    <!-- all plan include -->
    <div class="mt-[100px] bg-[#0D9589] w-full pb-[80px]">
      <h2
        class="text-center pt-[80px] pb-[20px] text-white text-[30px] md:text-[40px] font-bold"
      >
        ALL PLANS INCLUDE
      </h2>
      <div class="justify-items-center space-y-5">
        <div
          class="md:w-[1200px] md:flex md:justify-center md:space-y-0 space-y-5"
        >
          <div
            class="bg-white rounded-lg md:w-1/3 mx-[10px] py-[20px] justify-items-center"
          >
            <img
              src="https://cas.com.kh/wp-content/uploads/2024/01/sbseg-AU_icons_li_utl_send_invoice.webp"
              alt=""
            />
            <h3 class="text-[25px] font-bold text-[#515151]">Invoicing</h3>
            <p class="px-[30px] text-center text-[#515151]">
              Create professional custom invoices, send payment reminders, and
              match payments to invoices, automatically.
            </p>
          </div>
          <div
            class="bg-white rounded-lg md:w-1/3 mx-[10px] py-[20px] justify-items-center"
          >
            <img
              src="https://cas.com.kh/wp-content/uploads/2024/01/sbseg-AU_icons_li_utl_cat_transaction.webp"
              alt=""
            />
            <h3 class="text-[25px] font-bold text-[#515151]">Expenses</h3>
            <p class="px-[30px] text-center text-[#515151]">
              Get set for tax time with all your expenses organised in one
              place.
            </p>
          </div>
          <div
            class="bg-white rounded-lg md:w-1/3 mx-[10px] py-[20px] justify-items-center"
          >
            <img
              src="https://cas.com.kh/wp-content/uploads/2024/01/sbseg-AU_icons_li_utl_payroll.webp"
              alt=""
            />
            <h3 class="text-[25px] font-bold text-[#515151]">Bank Feeds</h3>
            <p class="px-[30px] text-center text-[#515151]">
              Save time and reduce errors when you connect your bank to get a
              full view of your finances.
            </p>
          </div>
        </div>
        <div
          class="md:w-[1200px] md:flex md:justify-center md:space-y-0 space-y-5"
        >
          <div
            class="bg-white rounded-lg md:w-[400px] mx-[10px] py-[20px] justify-items-center"
          >
            <img
              src="https://cas.com.kh/wp-content/uploads/2024/01/vat-illo-utility-sbseg.webp"
              alt=""
            />
            <h3 class="text-[25px] font-bold text-[#515151]">GST & VAT</h3>
            <p class="px-[30px] text-center text-[#515151]">
              Easily organise expenses into tax categories and track sales tax
              on income and expenses so you know where you stand and how much
              you owe.
            </p>
          </div>
          <div
            class="bg-white rounded-lg md:w-[400px] mx-[10px] py-[20px] justify-items-center"
          >
            <img
              src="https://cas.com.kh/wp-content/uploads/2024/01/inventory-stock-report-illo-utility-sbseg.webp"
              alt=""
            />
            <h3 class="text-[25px] font-bold text-[#515151]">Inventory</h3>
            <p class="px-[30px] text-center text-[#515151]">
              Stay on top of your orders and quantities while managing your
              inventory in real-time.
            </p>
          </div>
          <div
            class="bg-white rounded-lg md:w-[400px] mx-[10px] py-[20px] justify-items-center"
          >
            <img
              src="https://cas.com.kh/wp-content/uploads/2024/01/receipt-capture-illo-utility-sbseg.webp"
              alt=""
            />
            <h3 class="text-[25px] font-bold text-[#515151]">
              Capture & organize receipts
            </h3>
            <p class="px-[30px] text-center text-[#515151]">
              Use your phone to take photos of receipts. Match them to bills to
              stay organized and ready for tax season with everything in one
              place.
            </p>
          </div>
        </div>
        <div
          class="md:w-[1200px] md:flex md:justify-center md:space-y-0 space-y-5"
        >
          <div
            class="bg-white rounded-lg md:w-[400px] mx-[10px] py-[20px] justify-items-center"
          >
            <img
              src="https://cas.com.kh/wp-content/uploads/2024/01/sbseg-AU_icons_li_utl_mobAU_icons_lie_app.webp"
              alt=""
            />
            <h3 class="text-[25px] font-bold text-[#515151]">Mobile App</h3>
            <p class="px-[30px] text-center text-[#515151]">
              Save time by running your business on-the go with your mobile
              device*.
            </p>
          </div>
          <div
            class="bg-white rounded-lg md:w-[400px] mx-[10px] py-[20px] justify-items-center"
          >
            <img
              src="https://cas.com.kh/wp-content/uploads/2024/01/sbseg-AU_icons_li_utl_report.webp"
              alt=""
            />
            <h3 class="text-[25px] font-bold text-[#515151]">
              Insights and reports
            </h3>
            <p class="px-[30px] text-center text-[#515151]">
              See how your business is doing, and how it could look in the next
              90 days, with a range of popular reports and the cash flow
              planner.
            </p>
          </div>
          <div
            class="bg-white rounded-lg md:w-[400px] mx-[10px] py-[20px] justify-items-center"
          >
            <img
              src="https://cas.com.kh/wp-content/uploads/2024/01/sbseg-AU_icons_li_utl_secure_data.webp"
              alt=""
            />
            <h3 class="text-[25px] font-bold text-[#515151]">
              Multi-currency support
            </h3>
            <p class="px-[30px] text-center text-[#515151]">
              Send invoices, record transactions and adjust reports in different
              currencies and assign currencies to different customers.
            </p>
          </div>
        </div>
        <div
          class="md:w-[1200px] md:flex md:justify-center md:space-y-0 space-y-5"
        >
          <div
            class="bg-white rounded-lg md:w-[400px] mx-[10px] py-[20px] justify-items-center"
          >
            <img
              src="https://cas.com.kh/wp-content/uploads/2024/01/sbseg-AU_icons_li_utl_secure_data.webp"
              alt=""
            />
            <h3 class="text-[25px] font-bold text-[#515151]">Security</h3>
            <p class="px-[30px] text-center text-[#515151]">
              See how we keep your information safe and compliant at all times.
            </p>
          </div>
          <div
            class="bg-white rounded-lg md:w-[400px] mx-[10px] py-[20px] justify-items-center"
          >
            <img
              src="https://cas.com.kh/wp-content/uploads/2024/01/sbseg-AU_icons_li_utl_transfer.webp"
              alt=""
            />
            <h3 class="text-[25px] font-bold text-[#515151]">
              Switch to QuickBooks
            </h3>
            <p class="px-[30px] text-center text-[#515151]">
              Switch from Xero, Excel, MYOB or Reckon Desktop to QuickBooks
              Online.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg bg-cover bg-fixed bg-no-repeat">
      <div class="bg1 py-[130px]">
        <div
          class="justify-self-center bg-[#eeeeeedf] mx-[10px] md:w-[680px] py-[50px] px-[60px] rounded-lg justify-items-center"
        >
          <h2 class="text-[38px] font-semibold text-[#515151] text-center">
            Get free consultation
          </h2>
          <p class="pt-[40px] font-medium text-[#515151] text-center">
            We are available from Monday to Friday. <br />
            Call us (Cellcard) +855 61 982 324, (Smart) +855 81 982 324, and
            info@cas.com.kh
          </p>
          <button
            class="mt-[40px] text-[18px] border-2 rounded border-[#53B700] py-[10px] px-[30px] text-[#515151] font-medium hover:text-[#53B700] duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div
      class="space-y-[100px] w-full"
      style="background-color: rgb(228, 228, 228)"
    >
      <div
        class="space-y-[50px] md:grid md:grid-cols-5 grid-cols-1 max-w-[1250px] m-auto gap-[50px] text-center"
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
        <div class="space-y-[20px]">
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
</template>

<style>
.bg {
  background-image: url(https://cas.com.kh/wp-content/uploads/2024/01/keep-in-touch-bg.webp);
}
.bg1 {
  background: rgba(239, 239, 239, 0.652);
  background-size: cover;
}
</style>
