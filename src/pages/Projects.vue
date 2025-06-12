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
          <router-link to="/projects" :class="[theme === 'dark' ? 'text-blue-500 font-medium' : 'text-blue-600 font-medium']" class="transition-colors cursor-pointer">Projects</router-link>
          <router-link to="/settings" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Settings</router-link>
          <router-link to="/help" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Help</router-link>
        </div>
        <div class="flex items-center space-x-4">
          <button
            id="signInButton"
            @click="showSignInModal = true"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 !rounded-button cursor-pointer whitespace-nowrap transition-colors"
          >
            Sign In
          </button>
          <!-- Sign In Modal -->
          <div v-if="showSignInModal" class="fixed inset-0 z-50 flex items-center justify-center">
            <div class="absolute inset-0 bg-black bg-opacity-50" @click="showSignInModal = false"></div>
            <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white']" class="relative w-full max-w-md p-8 rounded-lg shadow-xl">
              <button
                id="closeSignInModal"
                @click="showSignInModal = false"
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
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
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
                >
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
      <!-- Mobile nav -->
      <transition name="fade">
        <div v-if="showMobileNav" class="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 space-y-2">
          <router-link @click.native="showMobileNav = false" to="/" class="block py-2 px-4 rounded hover:bg-blue-50 dark:hover:bg-gray-700">Home</router-link>
          <router-link @click.native="showMobileNav = false" to="/dashboard" class="block py-2 px-4 rounded hover:bg-blue-50 dark:hover:bg-gray-700">Dashboard</router-link>
          <router-link @click.native="showMobileNav = false" to="/projects" class="block py-2 px-4 rounded hover:bg-blue-50 dark:hover:bg-gray-700">Projects</router-link>
          <router-link @click.native="showMobileNav = false" to="/settings" class="block py-2 px-4 rounded hover:bg-blue-50 dark:hover:bg-gray-700">Settings</router-link>
          <router-link @click.native="showMobileNav = false" to="/help" class="block py-2 px-4 rounded hover:bg-blue-50 dark:hover:bg-gray-700">Help</router-link>
        </div>
      </transition>
  
      <!-- Page Header -->
      <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border-b border-gray-200']" class="py-6 px-6 transition-colors duration-300">
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div class="flex items-center space-x-2 text-sm mb-2">
                <a href="#" :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']" class="cursor-pointer">Home</a>
                <span :class="[theme === 'dark' ? 'text-gray-500' : 'text-gray-400']">/</span>
                <span :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']">Projects</span>
              </div>
              <h1 class="text-2xl font-bold">Projects</h1>
            </div>
            <div class="mt-4 md:mt-0">
              <button 
                @click="showCreateProjectModal = true" 
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 !rounded-button flex items-center space-x-2 cursor-pointer whitespace-nowrap transition-colors"
              >
                <i class="fas fa-plus"></i>
                <span>Create New Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Search and Filters -->
      <div class="container mx-auto px-6 py-6">
        <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg p-4 mb-6 transition-colors duration-300">
          <div class="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div class="flex-1 relative">
              <input 
                v-model="searchQuery" 
                type="text" 
                placeholder="Search projects..." 
                class="w-full pl-10 pr-4 py-2 rounded border-none text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                :class="[theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900']"
              >
              <div class="absolute left-3 top-2.5 text-gray-400">
                <i class="fas fa-search"></i>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <div class="relative">
                <button 
                  @click="toggleFilterDropdown('status')" 
                  :class="[
                    theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200',
                    activeFilters.status.length > 0 ? 'border-blue-500' : ''
                  ]" 
                  class="px-4 py-2 rounded flex items-center space-x-2 border cursor-pointer whitespace-nowrap"
                >
                  <span>Status</span>
                  <i class="fas fa-chevron-down text-xs"></i>
                </button>
                <div 
                  v-if="openDropdown === 'status'" 
                  :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-white border border-gray-200']" 
                  class="absolute top-full left-0 mt-1 w-48 rounded-lg shadow-lg z-10"
                >
                  <div class="p-2">
                    <div 
                      v-for="status in statuses" 
                      :key="status.value" 
                      class="flex items-center p-2 rounded cursor-pointer"
                      :class="[theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-100']"
                      @click="toggleFilter('status', status.value)"
                    >
                      <input 
                        type="checkbox" 
                        :checked="activeFilters.status.includes(status.value)" 
                        class="mr-2"
                      >
                      <span>{{ status.label }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative">
                <button 
                  @click="toggleFilterDropdown('dueDate')" 
                  :class="[
                    theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200',
                    activeFilters.dueDate.length > 0 ? 'border-blue-500' : ''
                  ]" 
                  class="px-4 py-2 rounded flex items-center space-x-2 border cursor-pointer whitespace-nowrap"
                >
                  <span>Due Date</span>
                  <i class="fas fa-chevron-down text-xs"></i>
                </button>
                <div 
                  v-if="openDropdown === 'dueDate'" 
                  :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-white border border-gray-200']" 
                  class="absolute top-full left-0 mt-1 w-48 rounded-lg shadow-lg z-10"
                >
                  <div class="p-2">
                    <div 
                      v-for="option in dueDateOptions" 
                      :key="option.value" 
                      class="flex items-center p-2 rounded cursor-pointer"
                      :class="[theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-100']"
                      @click="toggleFilter('dueDate', option.value)"
                    >
                      <input 
                        type="checkbox" 
                        :checked="activeFilters.dueDate.includes(option.value)" 
                        class="mr-2"
                      >
                      <span>{{ option.label }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative">
                <button 
                  @click="toggleFilterDropdown('team')" 
                  :class="[
                    theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200',
                    activeFilters.team.length > 0 ? 'border-blue-500' : ''
                  ]" 
                  class="px-4 py-2 rounded flex items-center space-x-2 border cursor-pointer whitespace-nowrap"
                >
                  <span>Team Members</span>
                  <i class="fas fa-chevron-down text-xs"></i>
                </button>
                <div 
                  v-if="openDropdown === 'team'" 
                  :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-white border border-gray-200']" 
                  class="absolute top-full left-0 mt-1 w-48 rounded-lg shadow-lg z-10"
                >
                  <div class="p-2">
                    <div 
                      v-for="member in teamMembers" 
                      :key="member.id" 
                      class="flex items-center p-2 rounded cursor-pointer"
                      :class="[theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-100']"
                      @click="toggleFilter('team', member.id)"
                    >
                      <input 
                        type="checkbox" 
                        :checked="activeFilters.team.includes(member.id)" 
                        class="mr-2"
                      >
                      <span>{{ member.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                v-if="hasActiveFilters" 
                @click="clearFilters" 
                :class="[theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500']" 
                class="px-4 py-2 flex items-center space-x-1 cursor-pointer"
              >
                <i class="fas fa-times-circle"></i>
                <span>Clear Filters</span>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Projects Grid -->
        <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            :class="[theme === 'dark' ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50']"
            class="rounded-lg shadow-md border border-transparent hover:border-blue-500 transition-all duration-300 group cursor-pointer"
          >
            <div class="p-5">
              <div class="flex justify-between items-start mb-3">
                <div>
                  <h3 class="text-lg font-bold mb-1">{{ project.name }}</h3>
                  <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm line-clamp-2">{{ project.description }}</p>
                </div>
                <span 
                  :class="{
                    'bg-green-500': project.status === 'completed',
                    'bg-blue-500': project.status === 'in-progress',
                    'bg-yellow-500': project.status === 'on-hold',
                    'bg-purple-500': project.status === 'planning'
                  }"
                  class="text-white text-xs px-2 py-1 rounded-full"
                >
                  {{ getStatusLabel(project.status) }}
                </span>
              </div>
              
              <div class="mb-4">
                <div class="flex justify-between text-xs mb-1">
                  <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']">Progress</span>
                  <span :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']">{{ project.progress }}%</span>
                </div>
                <div class="w-full bg-gray-200 h-2 rounded-full">
                  <div 
                    class="h-2 rounded-full" 
                    :style="{ width: `${project.progress}%` }"
                    :class="{
                      'bg-green-500': project.progress >= 80,
                      'bg-blue-500': project.progress >= 40 && project.progress < 80,
                      'bg-yellow-500': project.progress < 40
                    }"
                  ></div>
                </div>
              </div>
              
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <div class="flex -space-x-2 mr-2">
                    <div 
                      v-for="(member, index) in project.team.slice(0, 3)" 
                      :key="index"
                      :style="{ zIndex: 10 - index }"
                      :class="getAvatarColor(member.id)"
                      class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-medium relative"
                    >
                      {{ getInitials(member.name) }}
                    </div>
                  </div>
                  <span v-if="project.team.length > 3" class="text-xs text-gray-500">+{{ project.team.length - 3 }}</span>
                </div>
                <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm">
                  <i class="far fa-calendar-alt mr-1"></i> {{ formatDate(project.dueDate) }}
                </span>
              </div>
              
              <div class="mt-4 pt-4 border-t border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="flex justify-between">
                  <button 
                    @click.stop="viewProject(project.id)" 
                    :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200']" 
                    class="px-3 py-1 rounded text-sm flex items-center space-x-1 cursor-pointer whitespace-nowrap"
                  >
                    <i class="fas fa-eye"></i>
                    <span>View</span>
                  </button>
                  <button 
                    @click.stop="editProject(project.id)" 
                    :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200']" 
                    class="px-3 py-1 rounded text-sm flex items-center space-x-1 cursor-pointer whitespace-nowrap"
                  >
                    <i class="fas fa-edit"></i>
                    <span>Edit</span>
                  </button>
                  <button 
                    @click.stop="confirmDeleteProject(project.id)" 
                    :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-red-400 hover:text-red-500' : 'bg-gray-100 hover:bg-gray-200 text-red-500 hover:text-red-600']" 
                    class="px-3 py-1 rounded text-sm flex items-center space-x-1 cursor-pointer whitespace-nowrap"
                  >
                    <i class="fas fa-trash-alt"></i>
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Empty State -->
        <div 
          v-else 
          :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" 
          class="rounded-lg p-8 text-center"
        >
          <div class="mb-6">
            <img 
              src="https://readdy.ai/api/search-image?query=A%20modern%20minimalist%20illustration%20of%20an%20empty%20project%20folder%20or%20document%2C%20with%20a%20subtle%20hint%20of%20a%20magnifying%20glass%2C%20using%20a%20clean%20and%20professional%20style%20with%20soft%20blue%20and%20gray%20colors%2C%20perfect%20for%20an%20empty%20state%20in%20a%20project%20management%20application&width=200&height=200&seq=empty-projects&orientation=squarish" 
              alt="No Projects Found" 
              class="w-40 h-40 mx-auto"
            />
          </div>
          <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-2">
            {{ searchQuery ? 'No projects match your search' : 'No projects yet' }}
          </h3>
          <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="mb-6 max-w-md mx-auto">
            {{ searchQuery 
              ? 'Try adjusting your search or filter criteria to find what you\'re looking for.' 
              : 'Get started by creating your first project to organize tasks and collaborate with your team.'
            }}
          </p>
          <button 
            v-if="!searchQuery" 
            @click="showCreateProjectModal = true" 
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
          >
            Create Your First Project
          </button>
          <button 
            v-else 
            @click="clearSearch" 
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
          >
            Clear Search
          </button>
        </div>
      </div>
  
      <!-- Create Project Modal -->
      <div v-if="showCreateProjectModal" class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="absolute inset-0 bg-black bg-opacity-50" @click="showCreateProjectModal = false"></div>
        <div 
          :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white']" 
          class="relative w-full max-w-2xl p-6 rounded-lg shadow-xl"
        >
          <button
            @click="showCreateProjectModal = false"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <i class="fas fa-times"></i>
          </button>
          <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-2xl font-bold mb-6">Create New Project</h2>
          
          <form @submit.prevent="createProject" class="space-y-4">
            <div>
              <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Project Name</label>
              <input
                v-model="newProject.name"
                type="text"
                class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                required
              >
            </div>
            
            <div>
              <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Description</label>
              <textarea
                v-model="newProject.description"
                rows="3"
                class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
              ></textarea>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Status</label>
                <div class="relative">
                  <select
                    v-model="newProject.status"
                    class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
                    :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                    required
                  >
                    <option v-for="status in statuses" :key="status.value" :value="status.value">{{ status.label }}</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
              
              <div>
                <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Due Date</label>
                <input
                  v-model="newProject.dueDate"
                  type="date"
                  class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                  :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                  required
                >
              </div>
            </div>
            
            <div>
              <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Team Members</label>
              <div class="border rounded overflow-y-auto max-h-40"
                :class="[theme === 'dark' ? 'border-gray-600' : 'border-gray-300']"
              >
                <div 
                  v-for="member in teamMembers" 
                  :key="member.id"
                  class="flex items-center p-3 border-b last:border-b-0 cursor-pointer"
                  :class="[
                    theme === 'dark' ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50',
                    newProject.team.includes(member.id) ? theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50' : ''
                  ]"
                  @click="toggleTeamMember(member.id)"
                >
                  <div 
                    :class="getAvatarColor(member.id)"
                    class="w-8 h-8 rounded-full flex items-center justify-center text-xs text-white font-medium mr-3"
                  >
                    {{ getInitials(member.name) }}
                  </div>
                  <div class="flex-1">
                    <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="font-medium">{{ member.name }}</p>
                    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">{{ member.role }}</p>
                  </div>
                  <div v-if="newProject.team.includes(member.id)" class="text-blue-500">
                    <i class="fas fa-check-circle"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="pt-4 flex justify-end space-x-3">
              <button
                type="button"
                @click="showCreateProjectModal = false"
                :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300']"
                class="px-4 py-2 !rounded-button cursor-pointer whitespace-nowrap transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
              >
                Create Project
              </button>
            </div>
          </form>
        </div>
      </div>
  
      <!-- Delete Confirmation Modal -->
      <div v-if="showDeleteModal" class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="absolute inset-0 bg-black bg-opacity-50" @click="showDeleteModal = false"></div>
        <div 
          :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white']" 
          class="relative w-full max-w-md p-6 rounded-lg shadow-xl"
        >
          <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-4">Confirm Deletion</h2>
          <p :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-600']" class="mb-6">
            Are you sure you want to delete this project? This action cannot be undone.
          </p>
          <div class="flex justify-end space-x-3">
            <button
              @click="showDeleteModal = false"
              :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300']"
              class="px-4 py-2 !rounded-button cursor-pointer whitespace-nowrap transition-colors"
            >
              Cancel
            </button>
            <button
              @click="deleteProject"
              class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed, onMounted, watch } from 'vue';
  import { RouterLink } from 'vue-router';
  
  // Theme management
  const theme = ref(localStorage.getItem('theme') || 'dark');
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', theme.value);
  };
  
  // Authentication modals
  const showSignInModal = ref(false);
  const signInForm = ref({
    email: '',
    password: '',
    remember: false
  });
  
  const handleSignIn = () => {
    console.log('Sign in form submitted:', signInForm.value);
    showSignInModal.value = false;
  };
  
  // Project management
  const searchQuery = ref('');
  const openDropdown = ref('');
  const showCreateProjectModal = ref(false);
  const showDeleteModal = ref(false);
  const projectToDelete = ref<string | null>(null);
  
  // Filter options
  const statuses = [
    { value: 'planning', label: 'Planning' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'on-hold', label: 'On Hold' },
    { value: 'completed', label: 'Completed' }
  ];
  
  const dueDateOptions = [
    { value: 'today', label: 'Due Today' },
    { value: 'this-week', label: 'Due This Week' },
    { value: 'next-week', label: 'Due Next Week' },
    { value: 'overdue', label: 'Overdue' }
  ];
  
  const teamMembers = [
    { id: '1', name: 'John Doe', role: 'Project Manager' },
    { id: '2', name: 'Sarah Lee', role: 'UI/UX Designer' },
    { id: '3', name: 'Michael Johnson', role: 'Frontend Developer' },
    { id: '4', name: 'Emily Chen', role: 'Backend Developer' },
    { id: '5', name: 'Robert Kim', role: 'QA Engineer' },
    { id: '6', name: 'Amanda Taylor', role: 'Product Owner' },
    { id: '7', name: 'David Wilson', role: 'DevOps Engineer' }
  ];
  
  // Active filters
  const activeFilters = ref({
    status: [] as string[],
    dueDate: [] as string[],
    team: [] as string[]
  });
  
  // New project form
  const newProject = ref({
    name: '',
    description: '',
    status: 'planning',
    dueDate: new Date().toISOString().split('T')[0],
    team: [] as string[],
    progress: 0
  });
  
  // Sample projects data
  const projects = ref([
    {
      id: '1',
      name: 'Website Redesign',
      description: 'Revamp the company website with a modern design, improved user experience, and mobile responsiveness.',
      status: 'in-progress',
      progress: 65,
      dueDate: '2025-07-15',
      team: [
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Sarah Lee' },
        { id: '3', name: 'Michael Johnson' }
      ]
    },
    {
      id: '2',
      name: 'Mobile App Development',
      description: 'Create a cross-platform mobile application for iOS and Android with core functionality for customer engagement.',
      status: 'planning',
      progress: 25,
      dueDate: '2025-08-30',
      team: [
        { id: '3', name: 'Michael Johnson' },
        { id: '4', name: 'Emily Chen' },
        { id: '7', name: 'David Wilson' }
      ]
    },
    {
      id: '3',
      name: 'Product Launch Campaign',
      description: 'Plan and execute marketing campaign for the new product launch, including social media, email, and PR activities.',
      status: 'on-hold',
      progress: 40,
      dueDate: '2025-07-01',
      team: [
        { id: '6', name: 'Amanda Taylor' },
        { id: '2', name: 'Sarah Lee' }
      ]
    },
    {
      id: '4',
      name: 'API Integration',
      description: 'Integrate third-party payment and shipping APIs into the existing e-commerce platform.',
      status: 'in-progress',
      progress: 80,
      dueDate: '2025-06-20',
      team: [
        { id: '4', name: 'Emily Chen' },
        { id: '7', name: 'David Wilson' }
      ]
    },
    {
      id: '5',
      name: 'User Testing',
      description: 'Conduct usability testing sessions with focus groups to gather feedback on the new interface design.',
      status: 'completed',
      progress: 100,
      dueDate: '2025-06-10',
      team: [
        { id: '2', name: 'Sarah Lee' },
        { id: '5', name: 'Robert Kim' },
        { id: '6', name: 'Amanda Taylor' }
      ]
    },
    {
      id: '6',
      name: 'Database Migration',
      description: 'Migrate existing database to a new cloud infrastructure with improved security and performance.',
      status: 'in-progress',
      progress: 45,
      dueDate: '2025-07-25',
      team: [
        { id: '4', name: 'Emily Chen' },
        { id: '5', name: 'Robert Kim' },
        { id: '7', name: 'David Wilson' }
      ]
    }
  ]);
  
  // Computed properties
  const hasActiveFilters = computed(() => {
    return (
      activeFilters.value.status.length > 0 ||
      activeFilters.value.dueDate.length > 0 ||
      activeFilters.value.team.length > 0
    );
  });
  
  const filteredProjects = computed(() => {
    let result = [...projects.value];
    
    // Apply search filter
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase();
      result = result.filter(project => 
        project.name.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query)
      );
    }
    
    // Apply status filter
    if (activeFilters.value.status.length > 0) {
      result = result.filter(project => 
        activeFilters.value.status.includes(project.status)
      );
    }
    
    // Apply due date filter
    if (activeFilters.value.dueDate.length > 0) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const endOfWeek = new Date(today);
      endOfWeek.setDate(today.getDate() + (7 - today.getDay()));
      
      const endOfNextWeek = new Date(endOfWeek);
      endOfNextWeek.setDate(endOfWeek.getDate() + 7);
      
      result = result.filter(project => {
        const dueDate = new Date(project.dueDate);
        dueDate.setHours(0, 0, 0, 0);
        
        return activeFilters.value.dueDate.some(filter => {
          if (filter === 'today') {
            return dueDate.getTime() === today.getTime();
          } else if (filter === 'this-week') {
            return dueDate >= today && dueDate <= endOfWeek;
          } else if (filter === 'next-week') {
            return dueDate > endOfWeek && dueDate <= endOfNextWeek;
          } else if (filter === 'overdue') {
            return dueDate < today;
          }
          return false;
        });
      });
    }
    
    // Apply team member filter
    if (activeFilters.value.team.length > 0) {
      result = result.filter(project => 
        project.team.some(member => 
          activeFilters.value.team.includes(member.id)
        )
      );
    }
    
    return result;
  });
  
  // Methods
  const toggleFilterDropdown = (type: string) => {
    openDropdown.value = openDropdown.value === type ? '' : type;
  };
  
  const toggleFilter = (type: string, value: string) => {
    const filters = activeFilters.value[type as keyof typeof activeFilters.value] as string[];
    const index = filters.indexOf(value);
    
    if (index === -1) {
      filters.push(value);
    } else {
      filters.splice(index, 1);
    }
  };
  
  const clearFilters = () => {
    activeFilters.value = {
      status: [],
      dueDate: [],
      team: []
    };
  };
  
  const clearSearch = () => {
    searchQuery.value = '';
  };
  
  const getStatusLabel = (status: string): string => {
    const statusObj = statuses.find(s => s.value === status);
    return statusObj ? statusObj.label : status;
  };
  
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase();
  };
  
  const getAvatarColor = (id: string): string => {
    const colors = [
      'bg-blue-500',
      'bg-purple-500',
      'bg-green-500',
      'bg-red-500',
      'bg-yellow-500',
      'bg-pink-500',
      'bg-indigo-500'
    ];
    
    const colorIndex = parseInt(id, 10) % colors.length;
    return colors[colorIndex];
  };
  
  const toggleTeamMember = (memberId: string) => {
    const index = newProject.value.team.indexOf(memberId);
    if (index === -1) {
      newProject.value.team.push(memberId);
    } else {
      newProject.value.team.splice(index, 1);
    }
  };
  
  const createProject = () => {
    const projectId = (projects.value.length + 1).toString();
    
    // Create team members array from selected IDs
    const team = newProject.value.team.map(id => {
      const member = teamMembers.find(m => m.id === id);
      return { id, name: member ? member.name : '' };
    });
    
    // Add new project to the list
    projects.value.unshift({
      id: projectId,
      name: newProject.value.name,
      description: newProject.value.description,
      status: newProject.value.status,
      progress: newProject.value.status === 'completed' ? 100 : 0,
      dueDate: newProject.value.dueDate,
      team
    });
    
    // Reset form and close modal
    newProject.value = {
      name: '',
      description: '',
      status: 'planning',
      dueDate: new Date().toISOString().split('T')[0],
      team: [],
      progress: 0
    };
    
    showCreateProjectModal.value = false;
  };
  
  const viewProject = (id: string) => {
    // Navigate to project details page
    console.log('View project:', id);
    window.location.href = '/projects';
  };
  
  const editProject = (id: string) => {
    // Open edit project modal
    console.log('Edit project:', id);
  };
  
  const confirmDeleteProject = (id: string) => {
    projectToDelete.value = id;
    showDeleteModal.value = true;
  };
  
  const deleteProject = () => {
    if (projectToDelete.value) {
      const index = projects.value.findIndex(p => p.id === projectToDelete.value);
      if (index !== -1) {
        projects.value.splice(index, 1);
      }
      showDeleteModal.value = false;
      projectToDelete.value = null;
    }
  };
  
  // Close dropdowns when clicking outside
  onMounted(() => {
    document.addEventListener('click', (event) => {
      if (openDropdown.value && !event.target) {
        openDropdown.value = '';
      }
    });
  });
  
  // Watch for escape key to close modals
  watch(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (showCreateProjectModal.value) showCreateProjectModal.value = false;
        if (showDeleteModal.value) showDeleteModal.value = false;
        if (showSignInModal.value) showSignInModal.value = false;
        if (openDropdown.value) openDropdown.value = '';
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });
  
  const showMobileNav = ref(false);
  </script>
  
  <style scoped>
  /* Custom styles */
  .bg-gray-750 {
    background-color: #2d3748;
  }
  
  /* Project card hover effect */
  .project-card {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
  }
  
  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  /* Line clamp for descriptions */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
  
  /* Custom date input styling */
  input[type="date"] {
    appearance: none;
  }
  
  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(0.5);
    cursor: pointer;
  }
  </style>
  