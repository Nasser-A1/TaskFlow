<!-- The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work. -->

<template>
    <div :class="[theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900']" class="min-h-screen transition-colors duration-300">
      <!-- Navigation -->
      <nav :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border-b border-gray-200']" class="px-6 py-4 flex items-center justify-between transition-colors duration-300">
        <div class="flex items-center">
          <h1 class="text-xl font-bold">TaskFlow</h1>
        </div>
        <div class="flex items-center space-x-8">
          <a href="/" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Home</a>
          <a href="/dashboard" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Dashboard</a>
          <a href="/projects" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Projects</a>
          <a href="/settings" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Settings</a>
          <a href="/help" :class="[theme === 'dark' ? 'text-blue-500 font-medium' : 'text-blue-600 font-medium']" class="transition-colors cursor-pointer">Help</a>
        </div>
        <div class="flex items-center space-x-4">
          <button
            id="signInButton"
            @click="showSignInModal = true"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-button cursor-pointer whitespace-nowrap transition-colors">
            Sign In
          </button>
          <!-- Sign In Modal -->
          <div v-if="showSignInModal" class="fixed inset-0 z-50 flex items-center justify-center">
            <div class="absolute inset-0 bg-black bg-opacity-50" @click="showSignInModal = false"></div>
            <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white']" class="relative w-full max-w-md p-8 rounded-lg shadow-xl">
              <button
                id="closeSignInModal"
                @click="showSignInModal = false"
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer">
                <i class="fas fa-times"></i>
              </button>
              <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-2xl font-bold mb-6">Sign In</h2>
              <form @submit.prevent="handleSignIn" class="space-y-4">
                <div>
                  <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Email or Username</label>
                  <input
                    id="signInEmail"
                    v-model="signInForm.email"
                    type="text"
                    class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                    :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                    required
                  >
                </div>
                <div>
                  <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Password</label>
                  <input
                    id="signInPassword"
                    v-model="signInForm.password"
                    type="password"
                    class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                    :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                    required
                  >
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="rememberMe"
                      v-model="signInForm.remember"
                      type="checkbox"
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    >
                    <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="ml-2 block text-sm">Remember me</label>
                  </div>
                  <a href="#" :class="[theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500']" class="text-sm font-medium cursor-pointer">Forgot password?</a>
                </div>
                <button
                  id="submitSignIn"
                  type="submit"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-button font-medium transition-colors cursor-pointer whitespace-nowrap">
                  Sign In
                </button>
              </form>
              <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="mt-6 text-center text-sm">
                Don't have an account?
                <a href="#" :class="[theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500']" class="font-medium cursor-pointer">Sign up</a>
              </p>
            </div>
          </div>
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
  
      <!-- Help Center Header -->
      <div class="relative overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20abstract%20geometric%20background%20with%20flowing%20gradient%20waves%2C%20deep%20blue%20and%20purple%20colors%2C%20professional%20and%20elegant%20design%2C%20subtle%20technology%20pattern%20overlay%2C%20clean%20minimalist%20style%2C%20perfect%20for%20help%20center%20hero%20section%20background%2C%20soft%20light%20effect&width=1440&height=300&seq=helpherobg&orientation=landscape"
            alt="Help Center Background"
            class="w-full h-full object-cover object-top"
          />
        </div>
        <div class="relative z-10 container mx-auto px-6 py-12">
          <div class="max-w-4xl mx-auto text-center">
            <h1 :class="[theme === 'dark' ? 'text-white' : 'text-white']" class="text-4xl md:text-5xl font-bold mb-6 text-shadow">Help Center</h1>
            <p :class="[theme === 'dark' ? 'text-gray-200' : 'text-gray-100']" class="text-xl mb-8 text-shadow">Find answers, tutorials, and resources to help you get the most out of TaskFlow</p>
            
            <!-- Search Bar -->
            <div class="relative max-w-3xl mx-auto mb-8">
              <input
                type="text"
                placeholder="Search for help articles..."
                class="w-full px-5 py-4 pr-12 rounded-lg border-none shadow-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                :class="[theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900']"
              >
              <button class="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                <i class="fas fa-search text-gray-400"></i>
              </button>
            </div>
            
            <!-- Quick Action Buttons -->
            <div class="flex flex-wrap justify-center gap-4">
              <button class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors flex items-center">
                <i class="fas fa-headset mr-2"></i> Contact Support
              </button>
              <button class="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors flex items-center">
                <i class="fas fa-ticket-alt mr-2"></i> Submit Ticket
              </button>
              <button class="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors flex items-center">
                <i class="fas fa-comment-dots mr-2"></i> Live Chat
              </button>
              <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors flex items-center">
                <i class="fas fa-users mr-2"></i> Community Forums
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Main Content Layout -->
      <div class="container mx-auto px-6 py-12">
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Left Sidebar Categories -->
          <div class="md:w-1/4">
            <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-lg p-5 sticky top-24">
              <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-bold mb-4">Help Topics</h3>
              
              <ul class="space-y-1">
                <li v-for="(category, index) in helpCategories" :key="index">
                  <div 
                    @click="toggleCategory(index)"
                    :class="[
                      theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100', 
                      expandedCategories[index] ? (theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100') : ''
                    ]" 
                    class="flex items-center justify-between p-2 rounded cursor-pointer transition-colors"
                  >
                    <div class="flex items-center">
                      <i :class="[category.icon, 'mr-3', theme === 'dark' ? 'text-blue-400' : 'text-blue-600']"></i>
                      <span>{{ category.name }}</span>
                    </div>
                    <i :class="[expandedCategories[index] ? 'fas fa-chevron-down' : 'fas fa-chevron-right', 'text-sm']"></i>
                  </div>
                  
                  <div v-if="expandedCategories[index]" class="pl-10 pr-2 py-2 space-y-1">
                    <a 
                      v-for="(subcategory, subIndex) in category.subcategories" 
                      :key="subIndex"
                      href="#"
                      :class="[theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900']"
                      class="block py-1 text-sm cursor-pointer"
                    >
                      {{ subcategory }}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Main Content Area -->
          <div class="md:w-3/4">
            <!-- Breadcrumb -->
            <div class="flex items-center text-sm mb-6">
              <a href="/" :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']" class="cursor-pointer">Home</a>
              <i class="fas fa-chevron-right mx-2 text-gray-400 text-xs"></i>
              <a data-readdy="true" :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']" class="cursor-pointer">Help Center</a>
            </div>
  
            <!-- Popular Articles Section -->
            <section class="mb-12">
              <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-2xl font-bold mb-6">Popular Articles</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="(article, index) in popularArticles" :key="index" :class="[theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 border border-gray-200']" class="rounded-lg p-5 transition-colors cursor-pointer shadow-md">
                  <div class="flex items-start">
                    <div :class="['w-10 h-10 rounded-full flex items-center justify-center mr-4', article.iconBg]">
                      <i :class="[article.icon, 'text-white']"></i>
                    </div>
                    <div>
                      <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-bold mb-2">{{ article.title }}</h3>
                      <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm mb-3">{{ article.description }}</p>
                      <div class="flex items-center text-xs text-gray-400">
                        <span class="mr-4">Last updated: {{ article.updated }}</span>
                        <span class="mr-4">{{ article.readTime }} min read</span>
                        <div class="flex items-center">
                          <i class="fas fa-thumbs-up mr-1"></i>
                          <span>{{ article.helpfulRating }}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
            <!-- Getting Started Section -->
            <section class="mb-12">
              <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-2xl font-bold mb-6">Getting Started</h2>
              <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-lg p-6 mb-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div v-for="(tutorial, index) in videoTutorials" :key="index" class="cursor-pointer">
                    <div class="relative rounded-lg overflow-hidden mb-3">
                      <img :src="tutorial.thumbnail" :alt="tutorial.title" class="w-full h-40 object-cover">
                      <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div class="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                          <i class="fas fa-play text-blue-600"></i>
                        </div>
                      </div>
                    </div>
                    <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-bold mb-1">{{ tutorial.title }}</h3>
                    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm">{{ tutorial.duration }}</p>
                  </div>
                </div>
                <div class="mt-6 text-center">
                  <button :class="[theme === 'dark' ? 'border-blue-500 text-blue-400 hover:bg-blue-500' : 'border-blue-600 text-blue-600 hover:bg-blue-600']" class="border hover:text-white px-6 py-2 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
                    View All Tutorials
                  </button>
                </div>
              </div>
              
              <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-lg p-6">
                <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-4">Quick Start Guides</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div v-for="(guide, index) in quickStartGuides" :key="index" :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']" class="p-4 rounded-lg cursor-pointer">
                    <div class="flex items-center">
                      <div :class="['w-10 h-10 rounded-full flex items-center justify-center mr-3', guide.iconBg]">
                        <i :class="[guide.icon, 'text-white']"></i>
                      </div>
                      <div>
                        <h4 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-medium">{{ guide.title }}</h4>
                        <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm">{{ guide.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
            <!-- FAQ Section -->
            <section class="mb-12">
              <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-lg p-6">
                <div class="space-y-4">
                  <div v-for="(faq, index) in faqs" :key="index" :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']" class="rounded-lg overflow-hidden">
                    <div 
                      @click="toggleFaq(index)"
                      class="flex justify-between items-center p-4 cursor-pointer"
                      :class="[expandedFaqs[index] ? (theme === 'dark' ? 'bg-blue-600' : 'bg-blue-600 text-white') : '']"
                    >
                      <h3 :class="[expandedFaqs[index] ? 'text-white' : (theme === 'dark' ? 'text-white' : 'text-gray-900')]" class="font-medium">{{ faq.question }}</h3>
                      <i :class="[expandedFaqs[index] ? 'fas fa-minus' : 'fas fa-plus', expandedFaqs[index] ? 'text-white' : (theme === 'dark' ? 'text-white' : 'text-gray-900')]"></i>
                    </div>
                    <div v-if="expandedFaqs[index]" :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']" class="p-4 border-t border-gray-200">
                      <p :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-600']">{{ faq.answer }}</p>
                      <div class="mt-3 flex items-center justify-between">
                        <div class="flex items-center text-sm">
                          <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']">Was this helpful?</span>
                          <button class="ml-2 text-gray-400 hover:text-green-500 cursor-pointer">
                            <i class="far fa-thumbs-up"></i>
                          </button>
                          <button class="ml-2 text-gray-400 hover:text-red-500 cursor-pointer">
                            <i class="far fa-thumbs-down"></i>
                          </button>
                        </div>
                        <div class="flex items-center text-sm">
                          <button :class="[theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500']" class="flex items-center cursor-pointer">
                            <i class="fas fa-print mr-1"></i> Print
                          </button>
                          <button :class="[theme === 'dark' ? 'text-blue-400 hover:text-blue-300 ml-3' : 'text-blue-600 hover:text-blue-500 ml-3']" class="flex items-center cursor-pointer">
                            <i class="fas fa-share-alt mr-1"></i> Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-6 text-center">
                  <button :class="[theme === 'dark' ? 'border-blue-500 text-blue-400 hover:bg-blue-500' : 'border-blue-600 text-blue-600 hover:bg-blue-600']" class="border hover:text-white px-6 py-2 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
                    View All FAQs
                  </button>
                </div>
              </div>
            </section>
  
            <!-- Knowledge Base -->
            <section class="mb-12">
              <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-2xl font-bold mb-6">Knowledge Base</h2>
              <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-lg p-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div v-for="(category, index) in knowledgeBaseCategories" :key="index" :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100 border border-gray-200']" class="p-5 rounded-lg text-center transition-colors cursor-pointer">
                    <div :class="['w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-4', category.iconBg]">
                      <i :class="[category.icon, 'text-white']"></i>
                    </div>
                    <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-bold mb-2">{{ category.title }}</h3>
                    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm mb-3">{{ category.description }}</p>
                    <span :class="[theme === 'dark' ? 'text-blue-400' : 'text-blue-600']" class="text-sm font-medium">{{ category.articleCount }} articles</span>
                  </div>
                </div>
                
                <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-bold mb-4">Recent Articles</h3>
                <div class="space-y-4">
                  <div v-for="(article, index) in recentArticles" :key="index" :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100']" class="p-4 rounded-lg transition-colors cursor-pointer">
                    <div class="flex justify-between">
                      <div>
                        <h4 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-medium mb-1">{{ article.title }}</h4>
                        <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm mb-2">{{ article.excerpt }}</p>
                        <div class="flex items-center text-xs">
                          <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="mr-3">{{ article.category }}</span>
                          <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="mr-3">Updated: {{ article.updated }}</span>
                          <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']">{{ article.readTime }} min read</span>
                        </div>
                      </div>
                      <div class="flex items-center">
                        <i class="fas fa-chevron-right text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mt-6 text-center">
                  <button :class="[theme === 'dark' ? 'border-blue-500 text-blue-400 hover:bg-blue-500' : 'border-blue-600 text-blue-600 hover:bg-blue-600']" class="border hover:text-white px-6 py-2 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
                    Browse All Articles
                  </button>
                </div>
              </div>
            </section>
  
            <!-- Need More Help Section -->
            <section>
              <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-2xl font-bold mb-6">Need More Help?</h2>
              <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-lg overflow-hidden">
                <div class="grid grid-cols-1 md:grid-cols-2">
                  <div class="p-8">
                    <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-4">Contact Our Support Team</h3>
                    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="mb-6">Our dedicated support team is ready to help you with any questions or issues you may have.</p>
                    
                    <div class="space-y-4">
                      <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']" class="p-4 rounded-lg">
                        <div class="flex items-center">
                          <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                            <i class="fas fa-ticket-alt text-white"></i>
                          </div>
                          <div>
                            <h4 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-medium mb-1">Submit a Support Ticket</h4>
                            <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm">Get a response within 24 hours</p>
                          </div>
                        </div>
                        <button class="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
                          Create Ticket
                        </button>
                      </div>
                      
                      <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']" class="p-4 rounded-lg">
                        <div class="flex items-center">
                          <div class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-4">
                            <i class="fas fa-comment-dots text-white"></i>
                          </div>
                          <div>
                            <h4 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-medium mb-1">Live Chat Support</h4>
                            <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm">Available Monday-Friday, 9am-5pm EST</p>
                          </div>
                        </div>
                        <button class="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
                          Start Chat
                        </button>
                      </div>
                      
                      <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']" class="p-4 rounded-lg">
                        <div class="flex items-center">
                          <div class="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-4">
                            <i class="fas fa-phone-alt text-white"></i>
                          </div>
                          <div>
                            <h4 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-medium mb-1">Phone Support</h4>
                            <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm">Premium users only</p>
                          </div>
                        </div>
                        <button class="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
                          Call Support
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50']" class="p-8">
                    <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-4">Community Resources</h3>
                    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="mb-6">Connect with other TaskFlow users to share tips, ask questions, and learn best practices.</p>
                    
                    <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white']" class="rounded-lg p-6 mb-6">
                      <h4 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-bold mb-4">Community Forums</h4>
                      <div class="space-y-3 mb-4">
                        <div :class="[theme === 'dark' ? 'border-gray-700' : 'border-gray-200']" class="flex justify-between items-center py-2 border-b">
                          <div>
                            <h5 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-medium">General Discussion</h5>
                            <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">1,245 topics • 8,372 posts</p>
                          </div>
                          <i class="fas fa-chevron-right text-gray-400"></i>
                        </div>
                        <div :class="[theme === 'dark' ? 'border-gray-700' : 'border-gray-200']" class="flex justify-between items-center py-2 border-b">
                          <div>
                            <h5 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-medium">Tips & Tricks</h5>
                            <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">876 topics • 5,129 posts</p>
                          </div>
                          <i class="fas fa-chevron-right text-gray-400"></i>
                        </div>
                        <div :class="[theme === 'dark' ? 'border-gray-700' : 'border-gray-200']" class="flex justify-between items-center py-2 border-b">
                          <div>
                            <h5 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-medium">Feature Requests</h5>
                            <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">543 topics • 3,217 posts</p>
                          </div>
                          <i class="fas fa-chevron-right text-gray-400"></i>
                        </div>
                      </div>
                      <button :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-600 hover:bg-blue-700 text-white']" class="w-full py-2 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
                        Visit Forums
                      </button>
                    </div>
                    
                    <div class="flex items-center justify-between">
                      <div>
                        <h4 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-bold mb-1">Join Our Webinars</h4>
                        <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm">Learn from TaskFlow experts in our weekly webinars</p>
                      </div>
                      <button :class="[theme === 'dark' ? 'border-blue-500 text-blue-400 hover:bg-blue-500' : 'border-blue-600 text-blue-600 hover:bg-blue-600']" class="border hover:text-white px-4 py-2 rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
                        View Schedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
                <li><a class="text-gray-400 hover:text-white cursor-pointer">Features</a></li>
                <li><a class="text-gray-400 hover:text-white cursor-pointer">Pricing</a></li>
                <li><a class="text-gray-400 hover:text-white cursor-pointer">Integrations</a></li>
                <li><a class="text-gray-400 hover:text-white cursor-pointer">Roadmap</a></li>
                <li><a class="text-gray-400 hover:text-white cursor-pointer">What's New</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4">Resources</h4>
              <ul class="space-y-2">
                <li><a class="text-gray-400 hover:text-white cursor-pointer">Documentation</a></li>
                <li><a class="text-gray-400 hover:text-white cursor-pointer">Guides</a></li>
                <li><a class="text-gray-400 hover:text-white cursor-pointer">Blog</a></li>
                <li><a data-readdy="true" class="text-blue-400 hover:text-blue-300 cursor-pointer">Support Center</a></li>
                <li><a class="text-gray-400 hover:text-white cursor-pointer">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4">Company</h4>
              <ul class="space-y-2">
                <li><a class="text-gray-400 hover:text-white cursor-pointer">About Us</a></li>
                <li><a class="text-gray-400 hover:text-white cursor-pointer">Careers</a></li>
                <li><a class="text-gray-400 hover:text-white cursor-pointer">Contact</a></li>
                <li><a class="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</a></li>
                <li><a class="text-gray-400 hover:text-white cursor-pointer">Terms of Service</a></li>
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
  import { ref, onMounted } from 'vue';
  
  // Theme management
  const theme = ref(localStorage.getItem('theme') || 'dark');
  const showSignInModal = ref(false);
  const signInForm = ref({
    email: '',
    password: '',
    remember: false
  });
  
  // FAQ expansion state
  const expandedFaqs = ref<boolean[]>([true, false, false, false, false]);
  const toggleFaq = (index: number) => {
    expandedFaqs.value[index] = !expandedFaqs.value[index];
  };
  
  // Category expansion state
  const expandedCategories = ref<boolean[]>([true, false, false, false, false, false, false]);
  const toggleCategory = (index: number) => {
    expandedCategories.value[index] = !expandedCategories.value[index];
  };
  
  // Help Categories
  const helpCategories = ref([
    {
      name: 'Getting Started',
      icon: 'fas fa-rocket',
      subcategories: ['Account Setup', 'First Project', 'Team Onboarding', 'Interface Overview']
    },
    {
      name: 'Account & Settings',
      icon: 'fas fa-user-cog',
      subcategories: ['Profile Management', 'Security Settings', 'Notifications', 'Billing & Subscriptions']
    },
    {
      name: 'Projects & Tasks',
      icon: 'fas fa-tasks',
      subcategories: ['Creating Projects', 'Task Management', 'Deadlines & Reminders', 'Kanban Boards']
    },
    {
      name: 'Team Management',
      icon: 'fas fa-users',
      subcategories: ['Inviting Members', 'Roles & Permissions', 'Collaboration Tools', 'Activity Tracking']
    },
    {
      name: 'Integrations',
      icon: 'fas fa-plug',
      subcategories: ['Available Integrations', 'API Documentation', 'Webhooks', 'Third-party Apps']
    },
    {
      name: 'Billing & Plans',
      icon: 'fas fa-credit-card',
      subcategories: ['Pricing Plans', 'Payment Methods', 'Invoices', 'Upgrades & Downgrades']
    },
    {
      name: 'Security & Privacy',
      icon: 'fas fa-shield-alt',
      subcategories: ['Data Protection', 'Access Control', 'Compliance', 'Backup & Recovery']
    }
  ]);
  
  // Popular Articles
  const popularArticles = ref([
    {
      title: 'How to Create Your First Project',
      description: 'Learn how to set up and organize your first project in TaskFlow with this step-by-step guide.',
      icon: 'fas fa-project-diagram',
      iconBg: 'bg-blue-600',
      updated: 'June 2, 2025',
      readTime: 5,
      helpfulRating: 98
    },
    {
      title: 'Team Collaboration Best Practices',
      description: 'Discover effective strategies for collaborating with your team and maximizing productivity.',
      icon: 'fas fa-users',
      iconBg: 'bg-green-600',
      updated: 'June 1, 2025',
      readTime: 8,
      helpfulRating: 95
    },
    {
      title: 'Understanding Task Dependencies',
      description: 'Learn how to set up and manage task dependencies to create efficient workflows.',
      icon: 'fas fa-link',
      iconBg: 'bg-purple-600',
      updated: 'May 28, 2025',
      readTime: 6,
      helpfulRating: 92
    },
    {
      title: 'Advanced Reporting Features',
      description: 'Explore the powerful reporting tools to gain insights into team performance and project progress.',
      icon: 'fas fa-chart-bar',
      iconBg: 'bg-indigo-600',
      updated: 'May 25, 2025',
      readTime: 7,
      helpfulRating: 90
    }
  ]);
  
  // Video Tutorials
  const videoTutorials = ref([
    {
      title: 'TaskFlow Quickstart Guide',
      duration: '5:32',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%2520screencast%2520of%2520project%2520management%2520software%2520interface%2520with%2520clean%2520design%252C%2520showing%2520task%2520boards%2520and%2520project%2520timeline%252C%2520high%2520quality%2520tutorial%2520thumbnail%252C%2520blue%2520accent%2520colors%252C%2520minimal%2520style&width=400&height=225&seq=video1&orientation=landscape'
    },
    {
      title: 'Team Collaboration Features',
      duration: '7:15',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%2520screencast%2520showing%2520team%2520collaboration%2520features%2520in%2520project%2520management%2520software%252C%2520multiple%2520users%2520working%2520together%252C%2520chat%2520and%2520comment%2520features%2520visible%252C%2520high%2520quality%2520tutorial%2520thumbnail&width=400&height=225&seq=video2&orientation=landscape'
    },
    {
      title: 'Advanced Project Analytics',
      duration: '8:47',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%2520screencast%2520of%2520project%2520analytics%2520dashboard%2520with%2520charts%2520and%2520graphs%252C%2520data%2520visualization%252C%2520performance%2520metrics%252C%2520high%2520quality%2520tutorial%2520thumbnail%252C%2520clean%2520interface%2520design&width=400&height=225&seq=video3&orientation=landscape'
    }
  ]);
  
  // Quick Start Guides
  const quickStartGuides = ref([
    {
      title: 'Setting Up Your Account',
      description: 'Complete your profile and configure basic settings',
      icon: 'fas fa-user-plus',
      iconBg: 'bg-blue-600'
    },
    {
      title: 'Creating Your First Project',
      description: 'Learn how to create and organize projects',
      icon: 'fas fa-folder-plus',
      iconBg: 'bg-green-600'
    },
    {
      title: 'Inviting Team Members',
      description: 'Add your colleagues and assign roles',
      icon: 'fas fa-user-friends',
      iconBg: 'bg-purple-600'
    },
    {
      title: 'Task Management Basics',
      description: 'Create, assign, and track tasks effectively',
      icon: 'fas fa-clipboard-check',
      iconBg: 'bg-indigo-600'
    }
  ]);
  
  // FAQs
  const faqs = ref([
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, click on the "Forgot Password" link on the login page. You will receive an email with instructions to create a new password. For security reasons, password reset links expire after 24 hours.'
    },
    {
      question: 'Can I change my subscription plan?',
      answer: 'Yes, you can upgrade or downgrade your subscription at any time. Go to Settings > Billing to view available plans and make changes. When upgrading, you\'ll be charged the prorated difference for the remainder of your billing cycle. When downgrading, changes will take effect at the end of your current billing period.'
    },
    {
      question: 'How do I add users to my team?',
      answer: 'To add users, go to Team Settings and click "Invite Members." Enter email addresses of people you want to invite and assign appropriate roles. New users will receive an email invitation to join your team. You can manage user permissions and roles from the Team Settings page.'
    },
    {
      question: 'Is there a limit to the number of projects I can create?',
      answer: 'The number of projects you can create depends on your subscription plan. Free plans allow up to 3 projects, while paid plans offer different limits based on the tier. Professional plans include 20 projects, and Enterprise plans offer unlimited projects. You can view your current limits in the Account Settings.'
    },
    {
      question: 'How do I export my data from TaskFlow?',
      answer: 'You can export your data by going to Settings > Data Management > Export. You can choose to export specific projects or all data. Exports are available in CSV, Excel, or JSON formats. For large exports, you\'ll receive an email when your export is ready to download. Note that some data relationships may not be preserved in exported files.'
    }
  ]);
  
  // Knowledge Base Categories
  const knowledgeBaseCategories = ref([
    {
      title: 'Account Management',
      description: 'User profiles, security, and preferences',
      icon: 'fas fa-user-shield',
      iconBg: 'bg-blue-600',
      articleCount: 28
    },
    {
      title: 'Project Tools',
      description: 'Project creation and management features',
      icon: 'fas fa-project-diagram',
      iconBg: 'bg-green-600',
      articleCount: 42
    },
    {
      title: 'Team Collaboration',
      description: 'Working together effectively',
      icon: 'fas fa-users-cog',
      iconBg: 'bg-purple-600',
      articleCount: 35
    }
  ]);
  
  // Recent Articles
  const recentArticles = ref([
    {
      title: 'Using Custom Fields for Advanced Project Management',
      excerpt: 'Learn how to create and use custom fields to track specialized information for your projects and tasks.',
      category: 'Project Management',
      updated: 'June 5, 2025',
      readTime: 6
    },
    {
      title: 'Setting Up Single Sign-On (SSO) for Enterprise Teams',
      excerpt: 'A comprehensive guide to implementing SSO authentication for improved security and user management.',
      category: 'Security',
      updated: 'June 3, 2025',
      readTime: 8
    },
    {
      title: 'Automating Workflows with TaskFlow Triggers',
      excerpt: 'Discover how to create automated workflows that trigger actions based on specific events or conditions.',
      category: 'Automation',
      updated: 'June 1, 2025',
      readTime: 7
    }
  ]);
  
  const handleSignIn = () => {
    console.log('Sign in form submitted:', signInForm.value);
    showSignInModal.value = false;
  };
  
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', theme.value);
  };
  
  onMounted(() => {
    // Initialize any components that need it
  });
  </script>
  
  <style scoped>
  /* Custom styles */
  .text-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  /* Theme transition */
  .transition-colors {
    transition-property: background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
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
  