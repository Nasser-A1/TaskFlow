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
          <a href="/dashboard" data-readdy="true" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Dashboard</a>
          <a href="/projects" data-readdy="true" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Projects</a>
          <a href="/settings" data-readdy="true" :class="[theme === 'dark' ? 'text-blue-500 font-medium' : 'text-blue-600 font-medium']" class="transition-colors cursor-pointer">Settings</a>
          <a href="/help" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Help</a>
        </div>
        <div class="flex items-center space-x-4">
          <button
            id="signInButton"
            @click="showSignInModal = true"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 !rounded-button cursor-pointer whitespace-nowrap transition-colors">
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
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors">
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
  
      <!-- Settings Page Container -->
      <div class="container mx-auto px-6 py-8">
        <!-- Breadcrumb -->
        <div class="flex items-center text-sm mb-6">
          <a href="#" class="text-gray-500 hover:text-blue-600 cursor-pointer">Home</a>
          <span class="mx-2 text-gray-500">/</span>
          <span :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']">Settings</span>
        </div>
  
        <!-- Page Header -->
        <div class="mb-10">
          <h1 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-3xl font-bold mb-2">Settings</h1>
          <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']">Customize your TaskFlow experience and manage your account preferences.</p>
        </div>
  
        <!-- Settings Content -->
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Settings Navigation Sidebar -->
          <div class="md:w-1/4">
            <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-sm sticky top-8">
              <ul>
                <li v-for="(section, index) in settingsSections" :key="index">
                  <button 
                    @click="activeSection = section.id" 
                    :class="[
                      activeSection === section.id 
                        ? theme === 'dark' 
                          ? 'bg-gray-700 text-white' 
                          : 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                        : theme === 'dark'
                          ? 'text-gray-300 hover:bg-gray-700'
                          : 'text-gray-700 hover:bg-gray-50',
                      'w-full px-4 py-3 text-left flex items-center transition-colors duration-200 cursor-pointer whitespace-nowrap'
                    ]"
                  >
                    <i :class="['mr-3 text-lg', section.icon]"></i>
                    <span>{{ section.name }}</span>
                  </button>
                </li>
                <li>
                  <a 
                    data-readdy="true"
                    :class="[
                      theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-700 hover:bg-gray-50',
                      'w-full px-4 py-3 text-left flex items-center transition-colors duration-200 cursor-pointer whitespace-nowrap'
                    ]"
                  >
                    <i class="fas fa-arrow-left mr-3 text-lg"></i>
                    <span>Back to Original Page</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          <!-- Settings Content Area -->
          <div class="md:w-3/4">
            <!-- Profile Settings -->
            <div v-show="activeSection === 'profile'" :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-sm p-6 mb-8">
              <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-6">Profile Settings</h2>
              
              <div class="mb-8">
                <div class="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                  <div class="relative">
                    <div class="w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
                      <img 
                        :src="profileImage || 'https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20placeholder%20with%20neutral%20background%20minimalist%20design%20avatar%20simple%20clean%20modern%20professional%20headshot&width=200&height=200&seq=profile1&orientation=squarish'" 
                        alt="Profile" 
                        class="w-full h-full object-cover object-top"
                      />
                    </div>
                    <button 
                      class="absolute bottom-0 right-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors cursor-pointer"
                      @click="triggerFileInput"
                    >
                      <i class="fas fa-camera"></i>
                    </button>
                    <input 
                      ref="fileInput" 
                      type="file" 
                      accept="image/*" 
                      class="hidden" 
                      @change="handleFileUpload"
                    />
                  </div>
                  <div>
                    <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-1">Profile Photo</h3>
                    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm mb-3">Upload a photo to personalize your account.</p>
                    <div class="flex space-x-3">
                      <button 
                        @click="triggerFileInput"
                        class="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 !rounded-button cursor-pointer whitespace-nowrap transition-colors"
                      >
                        Upload New
                      </button>
                      <button 
                        v-if="profileImage"
                        @click="removeProfileImage"
                        class="text-sm bg-transparent border border-gray-300 hover:bg-gray-100 px-3 py-1 !rounded-button cursor-pointer whitespace-nowrap transition-colors"
                        :class="[theme === 'dark' ? 'text-gray-300 border-gray-600 hover:bg-gray-700' : 'text-gray-700']"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  
              <form @submit.prevent="saveProfileSettings" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      v-model="profileForm.name"
                      type="text"
                      class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                      :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                    />
                  </div>
                  <div>
                    <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Display Name</label>
                    <input
                      v-model="profileForm.displayName"
                      type="text"
                      class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                      :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                    />
                  </div>
                  <div>
                    <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      v-model="profileForm.email"
                      type="email"
                      class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                      :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                    />
                  </div>
                  <div>
                    <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Job Title</label>
                    <input
                      v-model="profileForm.jobTitle"
                      type="text"
                      class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                      :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                    />
                  </div>
                  <div>
                    <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      v-model="profileForm.phone"
                      type="tel"
                      class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                      :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                    />
                  </div>
                  <div>
                    <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Time Zone</label>
                    <div class="relative">
                      <select
                        v-model="profileForm.timezone"
                        class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                        :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                      >
                        <option v-for="(tz, index) in timezones" :key="index" :value="tz.value">{{ tz.label }}</option>
                      </select>
                      <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <i class="fas fa-chevron-down text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div>
                  <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Bio</label>
                  <textarea
                    v-model="profileForm.bio"
                    rows="4"
                    class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                    :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                  ></textarea>
                </div>
  
                <div class="flex justify-end">
                  <button
                    type="submit"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
  
            <!-- Account Preferences -->
            <div v-show="activeSection === 'account'" :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-sm p-6 mb-8">
              <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-6">Account Preferences</h2>
              
              <form @submit.prevent="saveAccountSettings" class="space-y-6">
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Language & Region</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Language</label>
                      <div class="relative">
                        <select
                          v-model="accountForm.language"
                          class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                          :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                        >
                          <option v-for="(lang, index) in languages" :key="index" :value="lang.value">{{ lang.label }}</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <i class="fas fa-chevron-down text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Date Format</label>
                      <div class="relative">
                        <select
                          v-model="accountForm.dateFormat"
                          class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                          :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                        >
                          <option v-for="(format, index) in dateFormats" :key="index" :value="format.value">{{ format.label }}</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <i class="fas fa-chevron-down text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Default Views</h3>
                  <div class="space-y-4">
                    <div>
                      <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Default Dashboard View</label>
                      <div class="relative">
                        <select
                          v-model="accountForm.defaultDashboard"
                          class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                          :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                        >
                          <option value="tasks">My Tasks</option>
                          <option value="projects">Projects Overview</option>
                          <option value="calendar">Calendar View</option>
                          <option value="analytics">Analytics Dashboard</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <i class="fas fa-chevron-down text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Default Project View</label>
                      <div class="relative">
                        <select
                          v-model="accountForm.defaultProjectView"
                          class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                          :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                        >
                          <option value="board">Kanban Board</option>
                          <option value="list">List View</option>
                          <option value="gantt">Gantt Chart</option>
                          <option value="calendar">Calendar View</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <i class="fas fa-chevron-down text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Startup Preferences</h3>
                  <div class="space-y-3">
                    <div class="flex items-center">
                      <input
                        id="startupDashboard"
                        v-model="accountForm.startupPage"
                        type="radio"
                        value="dashboard"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                      />
                      <label for="startupDashboard" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="ml-2 block text-sm cursor-pointer">Start with Dashboard</label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="startupLastView"
                        v-model="accountForm.startupPage"
                        type="radio"
                        value="lastView"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                      />
                      <label for="startupLastView" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="ml-2 block text-sm cursor-pointer">Start with last viewed page</label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="startupProjects"
                        v-model="accountForm.startupPage"
                        type="radio"
                        value="projects"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                      />
                      <label for="startupProjects" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="ml-2 block text-sm cursor-pointer">Start with Projects page</label>
                    </div>
                  </div>
                </div>
  
                <div class="flex justify-end">
                  <button
                    type="submit"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
  
            <!-- Notification Settings -->
            <div v-show="activeSection === 'notifications'" :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-sm p-6 mb-8">
              <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-6">Notification Settings</h2>
              
              <form @submit.prevent="saveNotificationSettings" class="space-y-6">
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Email Notifications</h3>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <div>
                        <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">Task assignments</p>
                        <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">Receive emails when you're assigned to a task</p>
                      </div>
                      <div class="relative">
                        <button 
                          type="button"
                          @click="notificationForm.emailTaskAssignments = !notificationForm.emailTaskAssignments"
                          :class="[
                            notificationForm.emailTaskAssignments ? 'bg-blue-600' : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300',
                            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer'
                          ]"
                        >
                          <span
                            :class="[
                              notificationForm.emailTaskAssignments ? 'translate-x-6' : 'translate-x-1',
                              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
                            ]"
                          ></span>
                        </button>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">Task comments</p>
                        <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">Receive emails when someone comments on your tasks</p>
                      </div>
                      <div class="relative">
                        <button 
                          type="button"
                          @click="notificationForm.emailTaskComments = !notificationForm.emailTaskComments"
                          :class="[
                            notificationForm.emailTaskComments ? 'bg-blue-600' : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300',
                            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer'
                          ]"
                        >
                          <span
                            :class="[
                              notificationForm.emailTaskComments ? 'translate-x-6' : 'translate-x-1',
                              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
                            ]"
                          ></span>
                        </button>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">Project updates</p>
                        <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">Receive emails about project status changes</p>
                      </div>
                      <div class="relative">
                        <button 
                          type="button"
                          @click="notificationForm.emailProjectUpdates = !notificationForm.emailProjectUpdates"
                          :class="[
                            notificationForm.emailProjectUpdates ? 'bg-blue-600' : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300',
                            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer'
                          ]"
                        >
                          <span
                            :class="[
                              notificationForm.emailProjectUpdates ? 'translate-x-6' : 'translate-x-1',
                              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
                            ]"
                          ></span>
                        </button>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">Due date reminders</p>
                        <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">Receive emails about upcoming task deadlines</p>
                      </div>
                      <div class="relative">
                        <button 
                          type="button"
                          @click="notificationForm.emailDueDateReminders = !notificationForm.emailDueDateReminders"
                          :class="[
                            notificationForm.emailDueDateReminders ? 'bg-blue-600' : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300',
                            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer'
                          ]"
                        >
                          <span
                            :class="[
                              notificationForm.emailDueDateReminders ? 'translate-x-6' : 'translate-x-1',
                              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
                            ]"
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Push Notifications</h3>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <div>
                        <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">Task assignments</p>
                        <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">Receive push notifications when you're assigned to a task</p>
                      </div>
                      <div class="relative">
                        <button 
                          type="button"
                          @click="notificationForm.pushTaskAssignments = !notificationForm.pushTaskAssignments"
                          :class="[
                            notificationForm.pushTaskAssignments ? 'bg-blue-600' : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300',
                            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer'
                          ]"
                        >
                          <span
                            :class="[
                              notificationForm.pushTaskAssignments ? 'translate-x-6' : 'translate-x-1',
                              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
                            ]"
                          ></span>
                        </button>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">Task comments</p>
                        <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">Receive push notifications when someone comments on your tasks</p>
                      </div>
                      <div class="relative">
                        <button 
                          type="button"
                          @click="notificationForm.pushTaskComments = !notificationForm.pushTaskComments"
                          :class="[
                            notificationForm.pushTaskComments ? 'bg-blue-600' : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300',
                            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer'
                          ]"
                        >
                          <span
                            :class="[
                              notificationForm.pushTaskComments ? 'translate-x-6' : 'translate-x-1',
                              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
                            ]"
                          ></span>
                        </button>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">Project updates</p>
                        <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">Receive push notifications about project status changes</p>
                      </div>
                      <div class="relative">
                        <button 
                          type="button"
                          @click="notificationForm.pushProjectUpdates = !notificationForm.pushProjectUpdates"
                          :class="[
                            notificationForm.pushProjectUpdates ? 'bg-blue-600' : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300',
                            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer'
                          ]"
                        >
                          <span
                            :class="[
                              notificationForm.pushProjectUpdates ? 'translate-x-6' : 'translate-x-1',
                              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
                            ]"
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Notification Frequency</h3>
                  <div class="space-y-3">
                    <div class="flex items-center">
                      <input
                        id="notifyRealtime"
                        v-model="notificationForm.frequency"
                        type="radio"
                        value="realtime"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                      />
                      <label for="notifyRealtime" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="ml-2 block text-sm cursor-pointer">Real-time (Immediate)</label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="notifyHourly"
                        v-model="notificationForm.frequency"
                        type="radio"
                        value="hourly"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                      />
                      <label for="notifyHourly" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="ml-2 block text-sm cursor-pointer">Hourly digest</label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="notifyDaily"
                        v-model="notificationForm.frequency"
                        type="radio"
                        value="daily"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                      />
                      <label for="notifyDaily" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="ml-2 block text-sm cursor-pointer">Daily digest</label>
                    </div>
                  </div>
                </div>
  
                <div class="flex justify-end">
                  <button
                    type="submit"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
  
            <!-- Theme Customization -->
            <div v-show="activeSection === 'theme'" :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-sm p-6 mb-8">
              <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-6">Theme Customization</h2>
              
              <form @submit.prevent="saveThemeSettings" class="space-y-6">
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Theme Mode</h3>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      @click="themeForm.mode = 'light'"
                      :class="[
                        themeForm.mode === 'light' ? 'ring-2 ring-blue-500' : '',
                        'bg-white border border-gray-200 rounded-lg p-4 cursor-pointer'
                      ]"
                    >
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-gray-900 font-medium">Light</span>
                        <div class="w-4 h-4 rounded-full flex items-center justify-center" :class="[themeForm.mode === 'light' ? 'bg-blue-500' : 'border border-gray-300']">
                          <i v-if="themeForm.mode === 'light'" class="fas fa-check text-white text-xs"></i>
                        </div>
                      </div>
                      <div class="h-24 bg-gray-100 rounded-md border border-gray-200 flex items-center justify-center">
                        <i class="fas fa-sun text-yellow-500 text-xl"></i>
                      </div>
                    </div>
                    <div 
                      @click="themeForm.mode = 'dark'"
                      :class="[
                        themeForm.mode === 'dark' ? 'ring-2 ring-blue-500' : '',
                        'bg-gray-900 border border-gray-700 rounded-lg p-4 cursor-pointer'
                      ]"
                    >
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-white font-medium">Dark</span>
                        <div class="w-4 h-4 rounded-full flex items-center justify-center" :class="[themeForm.mode === 'dark' ? 'bg-blue-500' : 'border border-gray-300']">
                          <i v-if="themeForm.mode === 'dark'" class="fas fa-check text-white text-xs"></i>
                        </div>
                      </div>
                      <div class="h-24 bg-gray-800 rounded-md border border-gray-700 flex items-center justify-center">
                        <i class="fas fa-moon text-blue-400 text-xl"></i>
                      </div>
                    </div>
                    <div 
                      @click="themeForm.mode = 'system'"
                      :class="[
                        themeForm.mode === 'system' ? 'ring-2 ring-blue-500' : '',
                        'bg-gradient-to-r from-white to-gray-900 border border-gray-200 rounded-lg p-4 cursor-pointer'
                      ]"
                    >
                      <div class="flex items-center justify-between mb-2">
                        <span class="font-medium">System</span>
                        <div class="w-4 h-4 rounded-full flex items-center justify-center" :class="[themeForm.mode === 'system' ? 'bg-blue-500' : 'border border-gray-300']">
                          <i v-if="themeForm.mode === 'system'" class="fas fa-check text-white text-xs"></i>
                        </div>
                      </div>
                      <div class="h-24 bg-gradient-to-r from-gray-100 to-gray-800 rounded-md border border-gray-200 flex items-center justify-center">
                        <i class="fas fa-laptop text-gray-600 text-xl"></i>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Color Scheme</h3>
                  <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
                    <div 
                      v-for="(color, index) in colorSchemes" 
                      :key="index"
                      @click="themeForm.colorScheme = color.value"
                      :class="[
                        themeForm.colorScheme === color.value ? 'ring-2 ring-offset-2' : '',
                        'rounded-full h-10 w-10 cursor-pointer ring-offset-gray-900'
                      ]"
                      :style="{ backgroundColor: color.color }"
                    ></div>
                  </div>
                </div>
  
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Font Preferences</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Font Family</label>
                      <div class="relative">
                        <select
                          v-model="themeForm.fontFamily"
                          class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                          :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                        >
                          <option v-for="(font, index) in fontFamilies" :key="index" :value="font.value">{{ font.label }}</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <i class="fas fa-chevron-down text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Font Size</label>
                      <div class="relative">
                        <select
                          v-model="themeForm.fontSize"
                          class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                          :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                        >
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <i class="fas fa-chevron-down text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Layout Density</h3>
                  <div class="space-y-3">
                    <div class="flex items-center">
                      <input
                        id="densityCompact"
                        v-model="themeForm.density"
                        type="radio"
                        value="compact"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                      />
                      <label for="densityCompact" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="ml-2 block text-sm cursor-pointer">Compact</label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="densityComfortable"
                        v-model="themeForm.density"
                        type="radio"
                        value="comfortable"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                      />
                      <label for="densityComfortable" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="ml-2 block text-sm cursor-pointer">Comfortable</label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="densitySpacious"
                        v-model="themeForm.density"
                        type="radio"
                        value="spacious"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                      />
                      <label for="densitySpacious" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="ml-2 block text-sm cursor-pointer">Spacious</label>
                    </div>
                  </div>
                </div>
  
                <div class="flex justify-end">
                  <button
                    type="submit"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
  
            <!-- Security Options -->
            <div v-show="activeSection === 'security'" :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-sm p-6 mb-8">
              <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-6">Security Options</h2>
              
              <div class="space-y-8">
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Change Password</h3>
                  <form @submit.prevent="changePassword" class="space-y-4">
                    <div>
                      <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Current Password</label>
                      <input
                        v-model="securityForm.currentPassword"
                        type="password"
                        class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                        :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                        required
                      />
                    </div>
                    <div>
                      <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">New Password</label>
                      <input
                        v-model="securityForm.newPassword"
                        type="password"
                        class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                        :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                        required
                      />
                    </div>
                    <div>
                      <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Confirm New Password</label>
                      <input
                        v-model="securityForm.confirmPassword"
                        type="password"
                        class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                        :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                        required
                      />
                    </div>
                    <div class="flex justify-end">
                      <button
                        type="submit"
                        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
                      >
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>
  
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']" class="p-4 rounded-lg mb-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">Two-Factor Authentication</p>
                        <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">Add an extra layer of security to your account</p>
                      </div>
                      <div class="relative">
                        <button 
                          type="button"
                          @click="securityForm.twoFactorEnabled = !securityForm.twoFactorEnabled"
                          :class="[
                            securityForm.twoFactorEnabled ? 'bg-blue-600' : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300',
                            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer'
                          ]"
                        >
                          <span
                            :class="[
                              securityForm.twoFactorEnabled ? 'translate-x-6' : 'translate-x-1',
                              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
                            ]"
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div v-if="securityForm.twoFactorEnabled" class="space-y-4">
                    <div>
                      <p :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="text-sm mb-2">Scan this QR code with your authenticator app:</p>
                      <div class="bg-white p-4 inline-block rounded">
                        <img src="https://readdy.ai/api/search-image?query=QR%20code%20for%20two%20factor%20authentication%20simple%20clean%20minimalist%20design%20with%20blue%20accents%20on%20white%20background&width=150&height=150&seq=qrcode1&orientation=squarish" alt="2FA QR Code" class="w-32 h-32" />
                      </div>
                    </div>
                    <div>
                      <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Verification Code</label>
                      <div class="flex space-x-4">
                        <input
                          v-model="securityForm.verificationCode"
                          type="text"
                          placeholder="Enter 6-digit code"
                          class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                          :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                        />
                        <button
                          @click="verifyTwoFactor"
                          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
                        >
                          Verify
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Session Management</h3>
                  <div :class="[theme === 'dark' ? 'bg-gray-700 divide-gray-600' : 'bg-white divide-gray-200']" class="rounded-lg border divide-y">
                    <div v-for="(session, index) in activeSessions" :key="index" class="p-4">
                      <div class="flex items-center justify-between">
                        <div class="flex items-center">
                          <div class="mr-3">
                            <i :class="[session.device === 'desktop' ? 'fas fa-desktop' : session.device === 'mobile' ? 'fas fa-mobile-alt' : 'fas fa-tablet-alt', 'text-xl', theme === 'dark' ? 'text-gray-400' : 'text-gray-500']"></i>
                          </div>
                          <div>
                            <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">{{ session.browser }} on {{ session.os }}</p>
                            <div class="flex items-center text-xs mt-1">
                              <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']">{{ session.location }}</span>
                              <span class="mx-2">•</span>
                              <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']">{{ session.lastActive }}</span>
                              <span v-if="session.current" class="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Current</span>
                            </div>
                          </div>
                        </div>
                        <button 
                          v-if="!session.current"
                          @click="terminateSession(index)"
                          class="text-sm text-red-600 hover:text-red-800 cursor-pointer"
                        >
                          Terminate
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 flex justify-end">
                    <button
                      @click="terminateAllSessions"
                      class="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 !rounded-button cursor-pointer whitespace-nowrap transition-colors"
                    >
                      Terminate All Other Sessions
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Workspace Settings -->
            <div v-show="activeSection === 'workspace'" :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-sm p-6 mb-8">
              <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-6">Workspace Settings</h2>
              
              <div class="space-y-8">
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Team Member Management</h3>
                  <div class="overflow-x-auto">
                    <table class="min-w-full divide-y" :class="[theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200']">
                      <thead :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']">
                        <tr>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-500']">
                            Name
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-500']">
                            Email
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-500']">
                            Role
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-500']">
                            Status
                          </th>
                          <th scope="col" class="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-500']">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody :class="[theme === 'dark' ? 'divide-y divide-gray-700 bg-gray-800' : 'divide-y divide-gray-200 bg-white']">
                        <tr v-for="(member, index) in teamMembers" :key="index">
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <span :class="[theme === 'dark' ? 'text-gray-800' : 'text-gray-600']">{{ member.initials }}</span>
                              </div>
                              <div class="ml-4">
                                <div :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">{{ member.name }}</div>
                                <div :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="text-sm">{{ member.title }}</div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="text-sm">{{ member.email }}</div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="relative">
                              <select
                                v-model="member.role"
                                class="w-full px-2 py-1 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer text-sm"
                                :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                              >
                                <option value="admin">Admin</option>
                                <option value="member">Member</option>
                                <option value="viewer">Viewer</option>
                              </select>
                              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <i class="fas fa-chevron-down text-gray-400 text-xs"></i>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" 
                              :class="{
                                'bg-green-100 text-green-800': member.status === 'active',
                                'bg-yellow-100 text-yellow-800': member.status === 'pending',
                                'bg-gray-100 text-gray-800': member.status === 'inactive'
                              }">
                              {{ member.status.charAt(0).toUpperCase() + member.status.slice(1) }}
                            </span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button class="text-blue-600 hover:text-blue-900 mr-3 cursor-pointer">Edit</button>
                            <button class="text-red-600 hover:text-red-900 cursor-pointer">Remove</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="mt-4 flex justify-end">
                    <button
                      @click="showInviteModal = true"
                      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
                    >
                      <i class="fas fa-user-plus mr-2"></i>
                      Invite Team Member
                    </button>
                  </div>
                </div>
  
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Permission Controls</h3>
                  <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']" class="p-4 rounded-lg space-y-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">Allow members to invite others</p>
                        <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">Team members can invite new users to the workspace</p>
                      </div>
                      <div class="relative">
                        <button 
                          type="button"
                          @click="workspaceForm.allowMemberInvites = !workspaceForm.allowMemberInvites"
                          :class="[
                            workspaceForm.allowMemberInvites ? 'bg-blue-600' : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300',
                            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer'
                          ]"
                        >
                          <span
                            :class="[
                              workspaceForm.allowMemberInvites ? 'translate-x-6' : 'translate-x-1',
                              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
                            ]"
                          ></span>
                        </button>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">Allow members to create projects</p>
                        <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">Team members can create new projects</p>
                      </div>
                      <div class="relative">
                        <button 
                          type="button"
                          @click="workspaceForm.allowMemberProjects = !workspaceForm.allowMemberProjects"
                          :class="[
                            workspaceForm.allowMemberProjects ? 'bg-blue-600' : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300',
                            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer'
                          ]"
                        >
                          <span
                            :class="[
                              workspaceForm.allowMemberProjects ? 'translate-x-6' : 'translate-x-1',
                              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
                            ]"
                          ></span>
                        </button>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">Allow public sharing</p>
                        <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">Projects can be shared with people outside your organization</p>
                      </div>
                      <div class="relative">
                        <button 
                          type="button"
                          @click="workspaceForm.allowPublicSharing = !workspaceForm.allowPublicSharing"
                          :class="[
                            workspaceForm.allowPublicSharing ? 'bg-blue-600' : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300',
                            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer'
                          ]"
                        >
                          <span
                            :class="[
                              workspaceForm.allowPublicSharing ? 'translate-x-6' : 'translate-x-1',
                              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
                            ]"
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Project Templates</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="(template, index) in projectTemplates" :key="index" 
                      :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50 border border-gray-200']" 
                      class="p-4 rounded-lg transition-colors cursor-pointer"
                    >
                      <div class="flex justify-between items-start">
                        <div>
                          <h4 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-md font-medium mb-1">{{ template.name }}</h4>
                          <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm">{{ template.description }}</p>
                        </div>
                        <div class="flex space-x-2">
                          <button class="text-blue-600 hover:text-blue-800 cursor-pointer">
                            <i class="fas fa-edit"></i>
                          </button>
                          <button class="text-red-600 hover:text-red-800 cursor-pointer">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 flex justify-end">
                    <button
                      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
                    >
                      <i class="fas fa-plus mr-2"></i>
                      Create New Template
                    </button>
                  </div>
                </div>
  
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Custom Fields</h3>
                  <div :class="[theme === 'dark' ? 'bg-gray-700 divide-gray-600' : 'bg-white divide-gray-200']" class="rounded-lg border divide-y">
                    <div v-for="(field, index) in customFields" :key="index" class="p-4">
                      <div class="flex items-center justify-between">
                        <div>
                          <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">{{ field.name }}</p>
                          <div class="flex items-center text-xs mt-1">
                            <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']">Type: {{ field.type }}</span>
                            <span class="mx-2">•</span>
                            <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']">{{ field.scope }}</span>
                          </div>
                        </div>
                        <div class="flex space-x-3">
                          <button class="text-blue-600 hover:text-blue-800 cursor-pointer">
                            <i class="fas fa-edit"></i>
                          </button>
                          <button class="text-red-600 hover:text-red-800 cursor-pointer">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 flex justify-end">
                    <button
                      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
                    >
                      <i class="fas fa-plus mr-2"></i>
                      Add Custom Field
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Integration Preferences -->
            <div v-show="activeSection === 'integrations'" :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-sm p-6 mb-8">
              <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-xl font-bold mb-6">Integration Preferences</h2>
              
              <div class="space-y-8">
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Connected Apps</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="(app, index) in connectedApps" :key="index" 
                      :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-white border border-gray-200']" 
                      class="p-4 rounded-lg"
                    >
                      <div class="flex items-center justify-between">
                        <div class="flex items-center">
                          <div :class="[theme === 'dark' ? 'bg-gray-600' : 'bg-gray-100']" class="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                            <i :class="[app.icon, 'text-lg', app.color]"></i>
                          </div>
                          <div>
                            <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">{{ app.name }}</p>
                            <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">{{ app.status }}</p>
                          </div>
                        </div>
                        <button 
                          :class="[app.connected ? 'text-red-600 hover:text-red-800' : 'text-blue-600 hover:text-blue-800']"
                          class="text-sm font-medium cursor-pointer"
                        >
                          {{ app.connected ? 'Disconnect' : 'Connect' }}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 flex justify-end">
                    <button
                      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
                    >
                      <i class="fas fa-puzzle-piece mr-2"></i>
                      Browse More Integrations
                    </button>
                  </div>
                </div>
  
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">API Keys</h3>
                  <div :class="[theme === 'dark' ? 'bg-gray-700 divide-gray-600' : 'bg-white divide-gray-200']" class="rounded-lg border divide-y">
                    <div v-for="(key, index) in apiKeys" :key="index" class="p-4">
                      <div class="flex items-center justify-between">
                        <div>
                          <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">{{ key.name }}</p>
                          <div class="flex items-center text-xs mt-1">
                            <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']">Created: {{ key.created }}</span>
                            <span class="mx-2">•</span>
                            <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']">Last used: {{ key.lastUsed }}</span>
                          </div>
                        </div>
                        <div class="flex space-x-3">
                          <button class="text-blue-600 hover:text-blue-800 cursor-pointer">
                            <i class="fas fa-eye"></i>
                          </button>
                          <button class="text-red-600 hover:text-red-800 cursor-pointer">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 flex justify-end">
                    <button
                      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
                    >
                      <i class="fas fa-key mr-2"></i>
                      Generate New API Key
                    </button>
                  </div>
                </div>
  
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Webhook Configuration</h3>
                  <div :class="[theme === 'dark' ? 'bg-gray-700 divide-gray-600' : 'bg-white divide-gray-200']" class="rounded-lg border divide-y">
                    <div v-for="(webhook, index) in webhooks" :key="index" class="p-4">
                      <div class="flex items-center justify-between">
                        <div>
                          <p :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-sm font-medium">{{ webhook.name }}</p>
                          <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-xs">{{ webhook.url }}</p>
                          <div class="flex items-center text-xs mt-1">
                            <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']">Events: {{ webhook.events.join(', ') }}</span>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div class="relative mr-2">
                            <button 
                              type="button"
                              @click="webhook.active = !webhook.active"
                              :class="[
                                webhook.active ? 'bg-blue-600' : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300',
                                'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer'
                              ]"
                            >
                              <span
                                :class="[
                                  webhook.active ? 'translate-x-6' : 'translate-x-1',
                                  'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
                                ]"
                              ></span>
                            </button>
                          </div>
                          <button class="text-blue-600 hover:text-blue-800 cursor-pointer">
                            <i class="fas fa-edit"></i>
                          </button>
                          <button class="text-red-600 hover:text-red-800 cursor-pointer">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 flex justify-end">
                    <button
                      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
                    >
                      <i class="fas fa-plus mr-2"></i>
                      Add Webhook
                    </button>
                  </div>
                </div>
  
                <div>
                  <h3 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-lg font-medium mb-4">Import/Export Tools</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-white border border-gray-200']" class="p-4 rounded-lg">
                      <h4 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-md font-medium mb-2">Import Data</h4>
                      <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm mb-4">Import tasks, projects, and user data from other platforms or files.</p>
                      <div class="flex space-x-3">
                        <button class="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 !rounded-button cursor-pointer whitespace-nowrap transition-colors">
                          <i class="fas fa-file-import mr-1"></i>
                          Import CSV
                        </button>
                        <button 
                          :class="[theme === 'dark' ? 'text-gray-300 border-gray-600 hover:bg-gray-600' : 'text-gray-700 border-gray-300 hover:bg-gray-100']"
                          class="text-sm bg-transparent border px-3 py-1 !rounded-button cursor-pointer whitespace-nowrap transition-colors"
                        >
                          <i class="fas fa-cloud-download-alt mr-1"></i>
                          Import from Service
                        </button>
                      </div>
                    </div>
                    <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-white border border-gray-200']" class="p-4 rounded-lg">
                      <h4 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-md font-medium mb-2">Export Data</h4>
                      <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm mb-4">Export your tasks, projects, and user data for backup or migration.</p>
                      <div class="flex space-x-3">
                        <button class="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 !rounded-button cursor-pointer whitespace-nowrap transition-colors">
                          <i class="fas fa-file-export mr-1"></i>
                          Export CSV
                        </button>
                        <button 
                          :class="[theme === 'dark' ? 'text-gray-300 border-gray-600 hover:bg-gray-600' : 'text-gray-700 border-gray-300 hover:bg-gray-100']"
                          class="text-sm bg-transparent border px-3 py-1 !rounded-button cursor-pointer whitespace-nowrap transition-colors"
                        >
                          <i class="fas fa-file-pdf mr-1"></i>
                          Export PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Invite Team Member Modal -->
      <div v-if="showInviteModal" class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="absolute inset-0 bg-black bg-opacity-50" @click="showInviteModal = false"></div>
        <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white']" class="relative w-full max-w-md p-8 rounded-lg shadow-xl">
          <button
            @click="showInviteModal = false"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <i class="fas fa-times"></i>
          </button>
          <h2 :class="[theme === 'dark' ? 'text-white' : 'text-gray-900']" class="text-2xl font-bold mb-6">Invite Team Member</h2>
          <form @submit.prevent="inviteTeamMember" class="space-y-4">
            <div>
              <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Email Address</label>
              <input
                v-model="inviteForm.email"
                type="email"
                class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                placeholder="colleague@example.com"
                required
              />
            </div>
            <div>
              <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Role</label>
              <div class="relative">
                <select
                  v-model="inviteForm.role"
                  class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                  :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                >
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                  <option value="viewer">Viewer</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <i class="fas fa-chevron-down text-gray-400"></i>
                </div>
              </div>
            </div>
            <div>
              <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Personal Message (Optional)</label>
              <textarea
                v-model="inviteForm.message"
                rows="3"
                class="w-full px-4 py-2 rounded border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                :class="[theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900']"
                placeholder="I'd like to invite you to join our workspace..."
              ></textarea>
            </div>
            <div class="flex justify-end">
              <button
                type="submit"
                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap transition-colors"
              >
                Send Invitation
              </button>
            </div>
          </form>
        </div>
      </div>
  
      <!-- Footer -->
      <footer :class="[theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100']" class="pt-16 pb-8 mt-16">
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
  import { ref, onMounted } from 'vue';
  
  // Theme management
  const theme = ref(localStorage.getItem('theme') || 'dark');
  const showSignInModal = ref(false);
  const showSignUpModal = ref(false);
  const showInviteModal = ref(false);
  
  // Settings sections
  const settingsSections = [
    { id: 'profile', name: 'Profile Settings', icon: 'fas fa-user' },
    { id: 'account', name: 'Account Preferences', icon: 'fas fa-cog' },
    { id: 'notifications', name: 'Notification Settings', icon: 'fas fa-bell' },
    { id: 'theme', name: 'Theme Customization', icon: 'fas fa-paint-brush' },
    { id: 'security', name: 'Security Options', icon: 'fas fa-shield-alt' },
    { id: 'workspace', name: 'Workspace Settings', icon: 'fas fa-users-cog' },
    { id: 'integrations', name: 'Integration Preferences', icon: 'fas fa-plug' },
  ];
  
  const activeSection = ref('profile');
  
  // Form data
  const signInForm = ref({
    email: '',
    password: '',
    remember: false
  });
  
  const profileForm = ref({
    name: 'John Doe',
    displayName: 'johndoe',
    email: 'john.doe@example.com',
    jobTitle: 'Product Manager',
    phone: '+1 (555) 123-4567',
    bio: 'Experienced product manager with a passion for creating intuitive user experiences.',
    timezone: 'America/New_York'
  });
  
  const accountForm = ref({
    language: 'en',
    dateFormat: 'MM/DD/YYYY',
    defaultDashboard: 'tasks',
    defaultProjectView: 'board',
    startupPage: 'dashboard'
  });
  
  const notificationForm = ref({
    emailTaskAssignments: true,
    emailTaskComments: true,
    emailProjectUpdates: true,
    emailDueDateReminders: true,
    pushTaskAssignments: true,
    pushTaskComments: false,
    pushProjectUpdates: true,
    frequency: 'realtime'
  });
  
  const themeForm = ref({
    mode: theme.value,
    colorScheme: 'blue',
    fontFamily: 'inter',
    fontSize: 'medium',
    density: 'comfortable'
  });
  
  const securityForm = ref({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: false,
    verificationCode: ''
  });
  
  const workspaceForm = ref({
    allowMemberInvites: false,
    allowMemberProjects: true,
    allowPublicSharing: false
  });
  
  const inviteForm = ref({
    email: '',
    role: 'member',
    message: ''
  });
  
  // Profile image
  const profileImage = ref('');
  const fileInput = ref<HTMLInputElement | null>(null);
  
  // Data for selects
  const timezones = [
    { value: 'America/New_York', label: 'Eastern Time (ET)' },
    { value: 'America/Chicago', label: 'Central Time (CT)' },
    { value: 'America/Denver', label: 'Mountain Time (MT)' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
    { value: 'Europe/London', label: 'Greenwich Mean Time (GMT)' },
    { value: 'Europe/Paris', label: 'Central European Time (CET)' },
    { value: 'Asia/Tokyo', label: 'Japan Standard Time (JST)' },
    { value: 'Australia/Sydney', label: 'Australian Eastern Time (AET)' }
  ];
  
  const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'zh', label: 'Chinese' },
    { value: 'ja', label: 'Japanese' }
  ];
  
  const dateFormats = [
    { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
    { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
    { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
    { value: 'MMM D, YYYY', label: 'MMM D, YYYY' }
  ];
  
  const colorSchemes = [
    { value: 'blue', color: '#3B82F6' },
    { value: 'indigo', color: '#6366F1' },
    { value: 'purple', color: '#8B5CF6' },
    { value: 'pink', color: '#EC4899' },
    { value: 'red', color: '#EF4444' },
    { value: 'orange', color: '#F59E0B' },
    { value: 'green', color: '#10B981' },
    { value: 'teal', color: '#14B8A6' },
    { value: 'cyan', color: '#06B6D4' },
    { value: 'gray', color: '#6B7280' },
    { value: 'custom1', color: 'linear-gradient(to right, #3B82F6, #8B5CF6)' },
    { value: 'custom2', color: 'linear-gradient(to right, #10B981, #06B6D4)' }
  ];
  
  const fontFamilies = [
    { value: 'inter', label: 'Inter' },
    { value: 'roboto', label: 'Roboto' },
    { value: 'opensans', label: 'Open Sans' },
    { value: 'montserrat', label: 'Montserrat' },
    { value: 'poppins', label: 'Poppins' }
  ];
  
  // Active sessions
  const activeSessions = [
    { 
      device: 'desktop', 
      browser: 'Chrome', 
      os: 'Windows', 
      location: 'New York, USA', 
      lastActive: 'Now', 
      current: true 
    },
    { 
      device: 'mobile', 
      browser: 'Safari', 
      os: 'iOS', 
      location: 'New York, USA', 
      lastActive: '2 days ago', 
      current: false 
    },
    { 
      device: 'tablet', 
      browser: 'Firefox', 
      os: 'iPadOS', 
      location: 'Boston, USA', 
      lastActive: '5 days ago', 
      current: false 
    }
  ];
  
  // Team members
  const teamMembers = [
    { 
      name: 'John Doe', 
      email: 'john.doe@example.com', 
      title: 'Product Manager', 
      role: 'admin', 
      status: 'active',
      initials: 'JD'
    },
    { 
      name: 'Jane Smith', 
      email: 'jane.smith@example.com', 
      title: 'UX Designer', 
      role: 'member', 
      status: 'active',
      initials: 'JS'
    },
    { 
      name: 'Robert Johnson', 
      email: 'robert.johnson@example.com', 
      title: 'Developer', 
      role: 'member', 
      status: 'active',
      initials: 'RJ'
    },
    { 
      name: 'Emily Davis', 
      email: 'emily.davis@example.com', 
      title: 'Marketing Specialist', 
      role: 'viewer', 
      status: 'pending',
      initials: 'ED'
    }
  ];
  
  // Project templates
  const projectTemplates = [
    {
      name: 'Software Development',
      description: 'Template for software development projects with predefined stages and task types.'
    },
    {
      name: 'Marketing Campaign',
      description: 'Structured workflow for planning and executing marketing campaigns.'
    },
    {
      name: 'Product Launch',
      description: 'Comprehensive template for managing product launches from planning to post-launch.'
    },
    {
      name: 'Client Onboarding',
      description: 'Streamlined process for onboarding new clients with clear milestones.'
    }
  ];
  
  // Custom fields
  const customFields = [
    {
      name: 'Priority Level',
      type: 'Dropdown',
      scope: 'Tasks'
    },
    {
      name: 'Estimated Hours',
      type: 'Number',
      scope: 'Tasks'
    },
    {
      name: 'Client',
      type: 'Text',
      scope: 'Projects'
    },
    {
      name: 'Department',
      type: 'Dropdown',
      scope: 'Projects'
    }
  ];
  
  // Connected apps
  const connectedApps = [
    {
      name: 'Google Calendar',
      icon: 'fab fa-google',
      color: 'text-red-500',
      status: 'Connected on Jun 2, 2025',
      connected: true
    },
    {
      name: 'Slack',
      icon: 'fab fa-slack',
      color: 'text-purple-500',
      status: 'Connected on May 15, 2025',
      connected: true
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      color: 'text-gray-700',
      status: 'Not connected',
      connected: false
    },
    {
      name: 'Dropbox',
      icon: 'fab fa-dropbox',
      color: 'text-blue-500',
      status: 'Not connected',
      connected: false
    }
  ];
  
  // API keys
  const apiKeys = [
    {
      name: 'Production API Key',
      created: 'Apr 12, 2025',
      lastUsed: 'Today'
    },
    {
      name: 'Development API Key',
      created: 'May 3, 2025',
      lastUsed: 'Yesterday'
    },
    {
      name: 'Testing API Key',
      created: 'May 20, 2025',
      lastUsed: '3 days ago'
    }
  ];
  
  // Webhooks
  const webhooks = [
    {
      name: 'Task Updates Webhook',
      url: 'https://example.com/webhook/tasks',
      events: ['task.created', 'task.updated', 'task.completed'],
      active: true
    },
    {
      name: 'Project Webhook',
      url: 'https://example.com/webhook/projects',
      events: ['project.created', 'project.updated'],
      active: false
    }
  ];
  
  // Functions
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    themeForm.value.mode = theme.value;
    localStorage.setItem('theme', theme.value);
  };
  
  const handleSignIn = () => {
    // Handle sign in logic here
    console.log('Sign in form submitted:', signInForm.value);
    showSignInModal.value = false;
  };
  
  const triggerFileInput = () => {
    if (fileInput.value) {
      fileInput.value.click();
    }
  };
  
  const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          profileImage.value = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  const removeProfileImage = () => {
    profileImage.value = '';
    if (fileInput.value) {
      fileInput.value.value = '';
    }
  };
  
  const saveProfileSettings = () => {
    console.log('Profile settings saved:', profileForm.value);
    // Show success message or handle API call
  };
  
  const saveAccountSettings = () => {
    console.log('Account settings saved:', accountForm.value);
    // Show success message or handle API call
  };
  
  const saveNotificationSettings = () => {
    console.log('Notification settings saved:', notificationForm.value);
    // Show success message or handle API call
  };
  
  const saveThemeSettings = () => {
    console.log('Theme settings saved:', themeForm.value);
    theme.value = themeForm.value.mode;
    localStorage.setItem('theme', theme.value);
    // Show success message or handle API call
  };
  
  const changePassword = () => {
    if (securityForm.value.newPassword !== securityForm.value.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    console.log('Password changed');
    securityForm.value.currentPassword = '';
    securityForm.value.newPassword = '';
    securityForm.value.confirmPassword = '';
    // Show success message or handle API call
  };
  
  const verifyTwoFactor = () => {
    console.log('Two-factor authentication verified');
    securityForm.value.verificationCode = '';
    // Show success message or handle API call
  };
  
  const terminateSession = (index: number) => {
    console.log('Session terminated:', activeSessions[index]);
    activeSessions.splice(index, 1);
    // Show success message or handle API call
  };
  
  const terminateAllSessions = () => {
    const currentSession = activeSessions.find(session => session.current);
    activeSessions.length = 0;
    if (currentSession) {
      activeSessions.push(currentSession);
    }
    console.log('All other sessions terminated');
    // Show success message or handle API call
  };
  
  const inviteTeamMember = () => {
    console.log('Team member invited:', inviteForm.value);
    showInviteModal.value = false;
    // Show success message or handle API call
    inviteForm.value = {
      email: '',
      role: 'member',
      message: ''
    };
  };
  
  onMounted(() => {
    // Initialize any components or load data
  });
  </script>
  
  <style scoped>
  /* Custom styles */
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
  