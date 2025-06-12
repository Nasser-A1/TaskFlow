<!-- The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work. -->
<template>
  <div :class="[theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900']" class="min-h-screen transition-colors duration-300">
  <!-- Navigation -->
  <nav :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border-b border-gray-200']" class="px-6 py-4 flex items-center justify-between transition-colors duration-300">
  <div class="flex items-center">
  <h1 class="text-xl font-bold">TaskFlow</h1>
  </div>
  <!-- Hamburger for mobile -->
  <button @click="showMobileNav = !showMobileNav" class="md:hidden ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
  <span class="sr-only">Open main menu</span>
  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
  </button>
  <!-- Nav links -->
  <div class="hidden md:flex items-center space-x-8">
  <router-link to="/" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Home</router-link>
  <router-link to="/dashboard" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Dashboard</router-link>
  <router-link to="/projects" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Projects</router-link>
  <router-link to="/settings" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Settings</router-link>
  <router-link to="/help" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Help</router-link>
  </div>
  <div class="flex items-center space-x-4">
  <button
  id="signInButton"
  @click="showSignInModal = true"
  class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-button cursor-pointer whitespace-nowrap transition-colors">
  Sign In
  </button>
  <button
  id="themeToggle"
  :class="[theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900']"
  class="cursor-pointer transition-colors"
  @click="toggleTheme"
  >
  <i :class="[theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun']"></i>
  </button>
  </div>
  </nav>
  <!-- Mobile nav -->
  <transition name="fade">
  <div v-if="showMobileNav" class="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 space-y-2">
  <router-link @click.native="showMobileNav = false" to="/" class="block py-2 px-4 rounded hover:bg-blue-50 dark:hover:bg-gray-700">Home</router-link>
  <router-link @click.native="showMobileNav = false" to="/dashboard" class="block py-2 px-4 rounded hover:bg-blue-50 dark:hover:bg-gray-700">Dashboard</router-link>
  <router-link @click.native="showMobileNav = false" to="/projects" class="block py-2 px-4 rounded hover:bg-blue-50 dark:hover:bg-gray-700">Projects</router-link>
  <router-link @click.native="showMobileNav = false" to="/settings" class="block py-2 px-4 rounded hover:bg-blue-50 dark:hover:bg-gray-700">Settings</router-link>
  <router-link @click.native="showMobileNav = false" to="/help" class="block py-2 px-4 rounded hover:bg-blue-50 dark:hover:bg-gray-700">Help</router-link>
  <button @click="showSignInModal = true; showMobileNav = false" class="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-button cursor-pointer whitespace-nowrap transition-colors mt-2">Sign In</button>
  </div>
  </transition>
  <!-- Hero Section -->
  <div class="relative overflow-hidden">
  <div class="absolute inset-0 z-0">
  <img
  src="https://readdy.ai/api/search-image?query=Modern%20abstract%20geometric%20background%20with%20flowing%20gradient%20waves%2C%20deep%20blue%20and%20purple%20colors%2C%20professional%20and%20elegant%20design%2C%20subtle%20technology%20pattern%20overlay%2C%20clean%20minimalist%20style%2C%20perfect%20for%20hero%20section%20background&width=1440&height=600&seq=hero2&orientation=landscape"
  alt="Task Management Background"
  class="w-full h-full object-cover object-top"
  />
  </div>
  <div class="relative z-10 container mx-auto px-6 py-20">
  <div class="flex flex-col md:flex-row items-center">
  <div :class="[theme === 'dark' ? 'bg-gray-800 bg-opacity-95' : 'bg-white bg-opacity-95']" class="md:w-1/2 mb-10 md:mb-0 p-8 rounded-lg shadow-lg transition-colors duration-300">
  <h1 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300">Streamline Your Workflow</h1>
  <p :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-600']" class="text-xl mb-8 transition-colors duration-300">Manage tasks, collaborate with your team, and boost productivity with our intuitive task management platform.</p>
  <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
  <button
  id="getStartedButton"
  @click="showSignUpModal = true"
  class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
  Get Started Free
  </button>
  <!-- Sign Up Modal -->
  <div v-if="showSignUpModal" class="fixed inset-0 z-50 flex items-center justify-center">
  <div class="absolute inset-0 bg-black bg-opacity-50" @click="showSignUpModal = false"></div>
  <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white']" class="relative w-full max-w-md p-8 rounded-lg shadow-xl">
  <button
  id="closeSignUpModal"
  @click="showSignUpModal = false"
  class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
  <i class="fas fa-times"></i>
  </button>
  <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-2xl font-bold mb-6">Create Your Account</h2>
  <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="mb-6">Start your 14-day free trial. No credit card required.</p>
  <form @submit.prevent="handleSignUp" class="space-y-4">
  <div>
  <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Full Name</label>
  <input
  id="signUpName"
  v-model="signUpForm.name"
  type="text"
  class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
  :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
  required
  >
  </div>
  <div>
  <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Email Address</label>
  <input
  id="signUpEmail"
  v-model="signUpForm.email"
  type="email"
  class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
  :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
  required
  >
  </div>
  <div>
  <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Password</label>
  <input
  id="signUpPassword"
  v-model="signUpForm.password"
  type="password"
  class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
  :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
  required
  >
  </div>
  <div>
  <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Confirm Password</label>
  <input
  id="signUpConfirmPassword"
  v-model="signUpForm.confirmPassword"
  type="password"
  class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
  :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
  required
  >
  </div>
  <div class="flex items-center">
  <input
  id="agreeToTerms"
  v-model="signUpForm.agreeToTerms"
  type="checkbox"
  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
  required
  >
  <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="ml-2 block text-sm">
  I agree to the <a href="#" class="text-blue-600 hover:text-blue-500">Terms of Service</a> and <a href="#" class="text-blue-600 hover:text-blue-500">Privacy Policy</a>
  </label>
  </div>
  <button
  id="createAccountButton"
  type="submit"
  class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-button font-medium transition-colors">
  Create Account
  </button>
  </form>
  <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="mt-6 text-center text-sm">
  Already have an account?
  <a
  href="#"
  @click.prevent="showSignUpModal = false; showSignInModal = true"
  :class="[theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500']"
  class="font-medium">
  Sign in
  </a>
  </p>
  </div>
  </div>
  <button :class="[theme === 'dark' ? 'border-blue-500 text-blue-400 hover:bg-blue-500' : 'border-blue-600 text-blue-600 hover:bg-blue-600']" class="border hover:text-white px-6 py-3 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
  Watch Demo
  </button>
  </div>
  </div>
  </div>
  </div>
  </div>
  <!-- Features Section -->
  <div class="container mx-auto px-6 py-16">
  <div class="text-center mb-16">
  <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-3xl font-bold mb-4">Powerful Features for Teams</h2>
  <p :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-600']" class="text-xl max-w-3xl mx-auto">Everything you need to manage projects, organize tasks, and collaborate effectively with your team.</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div :class="[theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200']" class="p-6 rounded-lg shadow-lg border transition-colors duration-300">
  <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
  <i class="fas fa-tasks text-xl text-white"></i>
  </div>
  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-3">Task Organization</h3>
  <p :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-600']">Create, organize, and prioritize tasks with intuitive drag-and-drop functionality.</p>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200']" class="p-6 rounded-lg shadow-lg border transition-colors duration-300">
  <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
  <i class="fas fa-users text-xl text-white"></i>
  </div>
  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-3">Team Collaboration</h3>
  <p :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-600']">Work together seamlessly with real-time updates, comments, and file sharing.</p>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200']" class="p-6 rounded-lg shadow-lg border transition-colors duration-300">
  <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
  <i class="fas fa-chart-line text-xl text-white"></i>
  </div>
  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-3">Progress Tracking</h3>
  <p :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-600']">Monitor project progress with visual dashboards and detailed analytics.</p>
  </div>
  </div>
  </div>
  <!-- App Interface Preview -->
  <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50']" class="py-20">
  <div class="container mx-auto px-6">
  <div class="text-center mb-16">
  <h2 class="text-3xl font-bold mb-4">Intuitive Interface</h2>
  <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xl max-w-3xl mx-auto">A clean, modern design that makes task management simple and efficient.</p>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-900' : 'bg-white']" class="rounded-xl overflow-hidden shadow-2xl">
  <div class="flex items-center bg-gray-800 px-4 py-2">
  <div class="flex space-x-2">
  <div class="w-3 h-3 rounded-full bg-red-500"></div>
  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
  <div class="w-3 h-3 rounded-full bg-green-500"></div>
  </div>
  <div class="ml-4 text-sm text-gray-400">TaskFlow - Project Dashboard</div>
  </div>
  <div class="p-4">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white']" class="rounded-lg p-4 transition-colors duration-300 border border-gray-200">
  <div class="flex justify-between items-center mb-4">
  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-bold">Task Boards</h3>
  <button :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']" class="cursor-pointer">
  <i class="fas fa-ellipsis-h"></i>
  </button>
  </div>
  <div class="space-y-3">
  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']" class="p-3 rounded transition-colors duration-300 border border-gray-200">
  <div class="flex justify-between mb-2">
  <span :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">Website Redesign</span>
  <span class="bg-blue-600 text-white text-xs px-2 py-1 rounded">In Progress</span>
  </div>
  <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">Update homepage layout and improve mobile responsiveness</p>
  <div class="flex justify-between items-center mt-3">
  <div class="flex -space-x-2">
  <div class="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs text-white">JD</div>
  <div class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs text-white">AK</div>
  </div>
  <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">June 15</span>
  </div>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']" class="p-3 rounded transition-colors duration-300 border border-gray-200">
  <div class="flex justify-between mb-2">
  <span :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">API Integration</span>
  <span class="bg-yellow-600 text-white text-xs px-2 py-1 rounded">Pending</span>
  </div>
  <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">Connect payment gateway and implement webhook handlers</p>
  <div class="flex justify-between items-center mt-3">
  <div class="flex -space-x-2">
  <div class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white">TM</div>
  </div>
  <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">June 20</span>
  </div>
  </div>
  </div>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white']" class="rounded-lg p-4 transition-colors duration-300 border border-gray-200">
  <div class="flex justify-between items-center mb-4">
  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-bold">Team Tasks</h3>
  <button :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']" class="cursor-pointer">
  <i class="fas fa-ellipsis-h"></i>
  </button>
  </div>
  <div class="space-y-3">
  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']" class="p-3 rounded transition-colors duration-300 border border-gray-200">
  <div class="flex justify-between mb-2">
  <span :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">User Testing</span>
  <span class="bg-green-600 text-white text-xs px-2 py-1 rounded">Completed</span>
  </div>
  <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">Conduct usability tests with focus group and document findings</p>
  <div class="flex justify-between items-center mt-3">
  <div class="flex -space-x-2">
  <div class="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-xs text-white">SL</div>
  <div class="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-xs text-white">RB</div>
  </div>
  <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">June 10</span>
  </div>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']" class="p-3 rounded transition-colors duration-300 border border-gray-200">
  <div class="flex justify-between mb-2">
  <span :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">Content Creation</span>
  <span class="bg-blue-600 text-white text-xs px-2 py-1 rounded">In Progress</span>
  </div>
  <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">Write copy for landing page and create promotional materials</p>
  <div class="flex justify-between items-center mt-3">
  <div class="flex -space-x-2">
  <div class="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs text-white">MJ</div>
  </div>
  <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">June 18</span>
  </div>
  </div>
  </div>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white']" class="rounded-lg p-4 transition-colors duration-300 border border-gray-200">
  <div class="flex justify-between items-center mb-4">
  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-bold">My Projects</h3>
  <button :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']" class="cursor-pointer">
  <i class="fas fa-ellipsis-h"></i>
  </button>
  </div>
  <div class="space-y-3">
  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']" class="p-3 rounded transition-colors duration-300 border border-gray-200">
  <div class="flex justify-between mb-2">
  <span :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">Mobile App</span>
  <span class="bg-blue-600 text-white text-xs px-2 py-1 rounded">In Progress</span>
  </div>
  <div class="w-full bg-gray-200 h-2 rounded-full mt-2 mb-1">
  <div class="bg-blue-500 h-2 rounded-full" style="width: 65%"></div>
  </div>
  <div class="flex justify-between text-xs" :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']">
  <span>65% Complete</span>
  <span>Due: June 30</span>
  </div>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']" class="p-3 rounded transition-colors duration-300 border border-gray-200">
  <div class="flex justify-between mb-2">
  <span :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">Marketing Campaign</span>
  <span class="bg-purple-600 text-white text-xs px-2 py-1 rounded">Planning</span>
  </div>
  <div class="w-full bg-gray-200 h-2 rounded-full mt-2 mb-1">
  <div class="bg-purple-500 h-2 rounded-full" style="width: 25%"></div>
  </div>
  <div class="flex justify-between text-xs" :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']">
  <span>25% Complete</span>
  <span>Due: July 15</span>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  <!-- Analytics Dashboard -->
  <div class="container mx-auto px-6 py-20">
  <div class="text-center mb-16">
  <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-3xl font-bold mb-4">Track Your Progress</h2>
  <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xl max-w-3xl mx-auto">Visualize team performance and project metrics with our powerful analytics dashboard.</p>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-xl p-6 shadow-xl">
  <div class="flex justify-between items-center mb-8">
  <h3 class="text-xl font-bold">Project Analytics</h3>
  <div class="flex space-x-4">
  <button :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200']" class="px-4 py-2 rounded-button text-sm cursor-pointer whitespace-nowrap transition-colors">
  Last 7 Days
  </button>
  <button :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200']" class="px-4 py-2 rounded-button text-sm cursor-pointer whitespace-nowrap transition-colors">
  Export
  </button>
  </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-white border border-gray-200']" class="p-4 rounded-lg">
  <div class="flex justify-between items-center mb-2">
  <h4 :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm">Tasks Completed</h4>
  <span class="text-green-500">
  <i class="fas fa-arrow-up text-xs"></i>
  <span class="text-xs ml-1">12%</span>
  </span>
  </div>
  <p class="text-3xl font-bold">78</p>
  <div ref="tasksChart" class="h-32 mt-4"></div>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-white border border-gray-200']" class="p-4 rounded-lg">
  <div class="flex justify-between items-center mb-2">
  <h4 :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm">Team Productivity</h4>
  <span class="text-green-500">
  <i class="fas fa-arrow-up text-xs"></i>
  <span class="text-xs ml-1">8%</span>
  </span>
  </div>
  <p class="text-3xl font-bold">92%</p>
  <div ref="productivityChart" class="h-32 mt-4"></div>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-white border border-gray-200']" class="p-4 rounded-lg">
  <div class="flex justify-between items-center mb-2">
  <h4 :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm">Upcoming Deadlines</h4>
  <span class="text-yellow-500">
  <i class="fas fa-exclamation-circle text-xs"></i>
  <span class="text-xs ml-1">3 urgent</span>
  </span>
  </div>
  <p class="text-3xl font-bold">12</p>
  <div ref="deadlinesChart" class="h-32 mt-4"></div>
  </div>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-white border border-gray-200']" class="p-6 rounded-lg">
  <h4 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-bold mb-4">Project Timeline</h4>
  <div ref="timelineChart" class="h-64"></div>
  </div>
  </div>
  </div>
  </div>
  <!-- Testimonials -->
  <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100']" class="py-20">
  <div class="container mx-auto px-6">
  <div class="text-center mb-16">
  <h2 class="text-3xl font-bold mb-4">What Our Users Say</h2>
  <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xl max-w-3xl mx-auto">Teams of all sizes use TaskFlow to streamline their workflows and boost productivity.</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-white shadow-lg']" class="p-6 rounded-lg">
  <div class="flex items-center mb-4">
  <div class="text-yellow-400">
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  </div>
  </div>
  <p :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-600']" class="mb-6">"TaskFlow has transformed how our team collaborates. The intuitive interface and powerful features have significantly improved our productivity."</p>
  <div class="flex items-center">
  <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold text-white mr-3">JD</div>
  <div>
  <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-medium">James Donovan</p>
  <p class="text-sm text-gray-400">Product Manager, TechCorp</p>
  </div>
  </div>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-white border border-gray-200']" class="p-6 rounded-lg">
  <div class="flex items-center mb-4">
  <div class="text-yellow-400">
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  </div>
  </div>
  <p :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-600']" class="mb-6">"The analytics dashboard gives us valuable insights into our team's performance. We can easily identify bottlenecks and optimize our workflow."</p>
  <div class="flex items-center">
  <div class="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold text-white mr-3">SL</div>
  <div>
  <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-medium">Sarah Lee</p>
  <p class="text-sm text-gray-400">Team Lead, InnovateCo</p>
  </div>
  </div>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-white border border-gray-200']" class="p-6 rounded-lg">
  <div class="flex items-center mb-4">
  <div class="text-yellow-400">
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star-half-alt"></i>
  </div>
  </div>
  <p :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-600']" class="mb-6">"As a freelancer, TaskFlow helps me stay organized and meet deadlines. The interface is clean and the learning curve is minimal."</p>
  <div class="flex items-center">
  <div class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-sm font-bold text-white mr-3">MJ</div>
  <div>
  <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-medium">Michael Johnson</p>
  <p class="text-sm text-gray-400">Independent Designer</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  <!-- Pricing -->
  <div class="container mx-auto px-6 py-20">
  <div class="text-center mb-16">
  <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
  <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xl max-w-3xl mx-auto">Choose the plan that works best for your team. No hidden fees or surprises.</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg overflow-hidden">
  <div class="p-6">
  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-2">Starter</h3>
  <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="mb-6">Perfect for individuals and small teams</p>
  <div class="flex items-end mb-6">
  <span :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-4xl font-bold">$9</span>
  <span class="text-gray-400 ml-2">/ month per user</span>
  </div>
  <ul class="space-y-3 mb-8">
  <li class="flex items-center">
  <i class="fas fa-check text-green-500 mr-2"></i>
  <span :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-600']">Up to 10 projects</span>
  </li>
  <li class="flex items-center">
  <i class="fas fa-check text-green-500 mr-2"></i>
  <span>Basic task management</span>
  </li>
  <li class="flex items-center">
  <i class="fas fa-check text-green-500 mr-2"></i>
  <span>5GB storage</span>
  </li>
  <li class="flex items-center">
  <i class="fas fa-check text-green-500 mr-2"></i>
  <span>Email support</span>
  </li>
  </ul>
  <button class="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
  Get Started
  </button>
  </div>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white']" class="rounded-lg overflow-hidden border-2 border-blue-500 transform scale-105">
  <div class="bg-blue-600 py-2 text-center">
  <span class="text-sm font-medium text-white">MOST POPULAR</span>
  </div>
  <div class="p-6">
  <h3 class="text-xl font-bold mb-2">Professional</h3>
  <p class="text-gray-400 mb-6">Ideal for growing teams and businesses</p>
  <div class="flex items-end mb-6">
  <span class="text-4xl font-bold">$19</span>
  <span class="text-gray-400 ml-2">/ month per user</span>
  </div>
  <ul class="space-y-3 mb-8">
  <li class="flex items-center">
  <i class="fas fa-check text-green-500 mr-2"></i>
  <span>Unlimited projects</span>
  </li>
  <li class="flex items-center">
  <i class="fas fa-check text-green-500 mr-2"></i>
  <span>Advanced task management</span>
  </li>
  <li class="flex items-center">
  <i class="fas fa-check text-green-500 mr-2"></i>
  <span>20GB storage</span>
  </li>
  <li class="flex items-center">
  <i class="fas fa-check text-green-500 mr-2"></i>
  <span>Priority support</span>
  </li>
  <li class="flex items-center">
  <i class="fas fa-check text-green-500 mr-2"></i>
  <span>Advanced analytics</span>
  </li>
  </ul>
  <button class="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
  Get Started
  </button>
  </div>
  </div>
  <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg overflow-hidden">
  <div class="p-6">
  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-2">Enterprise</h3>
  <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="mb-6">For large organizations with complex needs</p>
  <div class="flex items-end mb-6">
  <span class="text-4xl font-bold">$49</span>
  <span class="text-gray-400 ml-2">/ month per user</span>
  </div>
  <ul class="space-y-3 mb-8">
  <li class="flex items-center">
  <i class="fas fa-check text-green-500 mr-2"></i>
  <span>Everything in Professional</span>
  </li>
  <li class="flex items-center">
  <i class="fas fa-check text-green-500 mr-2"></i>
  <span>Unlimited storage</span>
  </li>
  <li class="flex items-center">
  <i class="fas fa-check text-green-500 mr-2"></i>
  <span>24/7 dedicated support</span>
  </li>
  <li class="flex items-center">
  <i class="fas fa-check text-green-500 mr-2"></i>
  <span>Custom integrations</span>
  </li>
  <li class="flex items-center">
  <i class="fas fa-check text-green-500 mr-2"></i>
  <span>Advanced security features</span>
  </li>
  </ul>
  <button class="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
  Contact Sales
  </button>
  </div>
  </div>
  </div>
  </div>
  <!-- CTA -->
  <div class="bg-gradient-to-r from-blue-700 to-purple-700 py-16 text-white">
  <div class="container mx-auto px-6 text-center">
  <h2 class="text-3xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
  <p class="text-xl mb-8 max-w-2xl mx-auto">Join thousands of teams that use TaskFlow to streamline their projects and boost productivity.</p>
  <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
  <button class="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
  Start Free Trial
  </button>
  <button class="border border-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
  Schedule Demo
  </button>
  </div>
  </div>
  </div>
  <!-- Footer -->
  <footer :class="[theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100']" class="pt-16 pb-8">
  <div class="container mx-auto px-6">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
  <div>
  <h3 class="text-xl font-bold mb-4">TaskFlow</h3>
  <p class="text-gray-400 mb-4">Streamline your workflow and boost team productivity with our intuitive task management platform.</p>
  <div class="flex space-x-4">
  <a href="#" class="text-gray-400 hover:text-white cursor-pointer">
  <i class="fab fa-twitter"></i>
  </a>
  <a href="#" class="text-gray-400 hover:text-white cursor-pointer">
  <i class="fab fa-facebook"></i>
  </a>
  <a href="#" class="text-gray-400 hover:text-white cursor-pointer">
  <i class="fab fa-linkedin"></i>
  </a>
  <a href="#" class="text-gray-400 hover:text-white cursor-pointer">
  <i class="fab fa-instagram"></i>
  </a>
  </div>
  </div>
  <div>
  <h4 class="font-bold mb-4">Product</h4>
  <ul class="space-y-2">
  <li><a href="#" class="text-gray-400 hover:text-white cursor-pointer">Features</a></li>
  <li><a href="#" class="text-gray-400 hover:text-white cursor-pointer">Pricing</a></li>
  <li><a href="#" class="text-gray-400 hover:text-white cursor-pointer">Integrations</a></li>
  <li><a href="#" class="text-gray-400 hover:text-white cursor-pointer">Roadmap</a></li>
  <li><a href="#" class="text-gray-400 hover:text-white cursor-pointer">What's New</a></li>
  </ul>
  </div>
  <div>
  <h4 class="font-bold mb-4">Resources</h4>
  <ul class="space-y-2">
  <li><a href="#" class="text-gray-400 hover:text-white cursor-pointer">Documentation</a></li>
  <li><a href="#" class="text-gray-400 hover:text-white cursor-pointer">Guides</a></li>
  <li><a href="#" class="text-gray-400 hover:text-white cursor-pointer">Blog</a></li>
  <li><a href="#" class="text-gray-400 hover:text-white cursor-pointer">Support Center</a></li>
  <li><a href="#" class="text-gray-400 hover:text-white cursor-pointer">Webinars</a></li>
  </ul>
  </div>
  <div>
  <h4 class="font-bold mb-4">Company</h4>
  <ul class="space-y-2">
  <li><a href="#" class="text-gray-400 hover:text-white cursor-pointer">About Us</a></li>
  <li><a href="#" class="text-gray-400 hover:text-white cursor-pointer">Careers</a></li>
  <li><a href="#" class="text-gray-400 hover:text-white cursor-pointer">Contact</a></li>
  <li><a href="#" class="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</a></li>
  <li><a href="#" class="text-gray-400 hover:text-white cursor-pointer">Terms of Service</a></li>
  </ul>
  </div>
  </div>
  <div class="border-t border-gray-800 pt-8">
  <div class="flex flex-col md:flex-row justify-between items-center">
  <p class="text-gray-400 text-sm mb-4 md:mb-0">© 2025 TaskFlow. All rights reserved.</p>
  <div class="flex space-x-4">
  <div class="text-gray-400 flex items-center">
  <i class="fab fa-cc-visa text-xl mr-2"></i>
  <i class="fab fa-cc-mastercard text-xl mr-2"></i>
  <i class="fab fa-cc-amex text-xl mr-2"></i>
  <i class="fab fa-cc-paypal text-xl"></i>
  </div>
  </div>
  </div>
  </div>
  </div>
  </footer>
  </div>
  </template>
  <script lang="ts" setup>
  import { ref, onMounted, watch } from 'vue';
  import * as echarts from 'echarts';
  // Chart references
  const tasksChart = ref<HTMLElement | null>(null);
  const productivityChart = ref<HTMLElement | null>(null);
  const deadlinesChart = ref<HTMLElement | null>(null);
  const timelineChart = ref<HTMLElement | null>(null);
  // Theme management
  const theme = ref(localStorage.getItem('theme') || 'dark');
  const showSignInModal = ref(false);
  const showSignUpModal = ref(false);
  const signInForm = ref({
  email: '',
  password: '',
  remember: false
  });
  const signUpForm = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
  });
  const handleSignIn = () => {
  // Handle sign in logic here
  console.log('Sign in form submitted:', signInForm.value);
  showSignInModal.value = false;
  };
  const handleSignUp = () => {
  // Validate passwords match
  if (signUpForm.value.password !== signUpForm.value.confirmPassword) {
  console.error('Passwords do not match');
  return;
  }
  // Handle sign up logic here
  console.log('Sign up form submitted:', signUpForm.value);
  showSignUpModal.value = false;
  // Reset form
  signUpForm.value = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
  };
  };
  const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', theme.value);
  };
  // Watch theme changes to update chart themes
  watch(theme, (newTheme) => {
  const charts = [tasksChart.value, productivityChart.value, deadlinesChart.value, timelineChart.value];
  charts.forEach(chartRef => {
  if (chartRef) {
  const chart = echarts.getInstanceByDom(chartRef);
  if (chart) {
  chart.setOption({
  textStyle: {
  color: '#D1D5DB'
  },
  legend: {
  textStyle: {
  color: '#D1D5DB'
  }
  },
  xAxis: {
  axisLine: {
  lineStyle: {
  color: '#4B5563'
  }
  },
  axisLabel: {
  color: '#D1D5DB'
  }
  },
  yAxis: {
  axisLine: {
  lineStyle: {
  color: '#4B5563'
  }
  },
  axisLabel: {
  color: '#D1D5DB'
  },
  splitLine: {
  lineStyle: {
  color: '#374151'
  }
  }
  }
  });
  }
  }
  });
  });
  onMounted(() => {
  // Tasks Completed Chart
  if (tasksChart.value) {
  const chart = echarts.init(tasksChart.value);
  chart.setOption({
  animation: false,
  grid: {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5,
  containLabel: false
  },
  xAxis: {
  type: 'category',
  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  show: false
  },
  yAxis: {
  type: 'value',
  show: false
  },
  series: [
  {
  data: [12, 15, 9, 18, 10, 8, 16],
  type: 'line',
  smooth: true,
  symbol: 'none',
  lineStyle: {
  color: '#3B82F6'
  },
  areaStyle: {
  color: {
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [
  {
  offset: 0,
  color: 'rgba(59, 130, 246, 0.5)'
  },
  {
  offset: 1,
  color: 'rgba(59, 130, 246, 0.1)'
  }
  ]
  }
  }
  }
  ]
  });
  }
  // Productivity Chart
  if (productivityChart.value) {
  const chart = echarts.init(productivityChart.value);
  chart.setOption({
  animation: false,
  grid: {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5,
  containLabel: false
  },
  xAxis: {
  type: 'category',
  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  show: false
  },
  yAxis: {
  type: 'value',
  show: false
  },
  series: [
  {
  data: [85, 90, 88, 95, 92, 89, 92],
  type: 'line',
  smooth: true,
  symbol: 'none',
  lineStyle: {
  color: '#10B981'
  },
  areaStyle: {
  color: {
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [
  {
  offset: 0,
  color: 'rgba(16, 185, 129, 0.5)'
  },
  {
  offset: 1,
  color: 'rgba(16, 185, 129, 0.1)'
  }
  ]
  }
  }
  }
  ]
  });
  }
  // Deadlines Chart
  if (deadlinesChart.value) {
  const chart = echarts.init(deadlinesChart.value);
  chart.setOption({
  animation: false,
  grid: {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5,
  containLabel: false
  },
  xAxis: {
  type: 'category',
  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  show: false
  },
  yAxis: {
  type: 'value',
  show: false
  },
  series: [
  {
  data: [2, 1, 3, 0, 2, 1, 3],
  type: 'bar',
  barWidth: '60%',
  itemStyle: {
  color: '#F59E0B'
  }
  }
  ]
  });
  }
  // Timeline Chart
  if (timelineChart.value) {
  const chart = echarts.init(timelineChart.value);
  chart.setOption({
  animation: false,
  tooltip: {
  trigger: 'axis',
  axisPointer: {
  type: 'shadow'
  }
  },
  legend: {
  data: ['Planning', 'Development', 'Testing', 'Deployment'],
  textStyle: {
  color: '#D1D5DB'
  }
  },
  grid: {
  left: '3%',
  right: '4%',
  bottom: '3%',
  containLabel: true
  },
  xAxis: {
  type: 'category',
  data: ['Project A', 'Project B', 'Project C', 'Project D'],
  axisLine: {
  lineStyle: {
  color: '#4B5563'
  }
  },
  axisLabel: {
  color: '#D1D5DB'
  }
  },
  yAxis: {
  type: 'value',
  axisLine: {
  lineStyle: {
  color: '#4B5563'
  }
  },
  axisLabel: {
  color: '#D1D5DB'
  },
  splitLine: {
  lineStyle: {
  color: '#374151'
  }
  }
  },
  series: [
  {
  name: 'Planning',
  type: 'bar',
  stack: 'total',
  emphasis: {
  focus: 'series'
  },
  data: [5, 3, 4, 6],
  itemStyle: {
  color: '#3B82F6'
  }
  },
  {
  name: 'Development',
  type: 'bar',
  stack: 'total',
  emphasis: {
  focus: 'series'
  },
  data: [10, 12, 8, 9],
  itemStyle: {
  color: '#8B5CF6'
  }
  },
  {
  name: 'Testing',
  type: 'bar',
  stack: 'total',
  emphasis: {
  focus: 'series'
  },
  data: [4, 5, 3, 2],
  itemStyle: {
  color: '#EC4899'
  }
  },
  {
  name: 'Deployment',
  type: 'bar',
  stack: 'total',
  emphasis: {
  focus: 'series'
  },
  data: [2, 1, 3, 2],
  itemStyle: {
  color: '#10B981'
  }
  }
  ]
  });
  // Handle window resize
  window.addEventListener('resize', () => {
  chart.resize();
  });
  }
  });
  </script>
  <style scoped>
  /* Custom styles */
  .task-management__card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }
  /* Theme transition */
  .transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  }
  .task-management__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  }
  /* Remove number input arrows */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
  input[type="number"] {
  -moz-appearance: textfield;
  }
  </style>