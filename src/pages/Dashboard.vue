<!-- The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work. -->
<template>
    <div :class="[theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900']" class="min-h-screen transition-colors duration-300">
    <!-- Navigation -->
    <nav :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border-b border-gray-200']" class="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-colors duration-300">
    <div class="flex items-center">
    <h1 class="text-xl font-bold">TaskFlow</h1>
    </div>
    <div class="flex items-center space-x-8">
    <a href="/" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Home</a>
    <a href="/dashboard" data-readdy="true" :class="[theme === 'dark' ? 'text-blue-400' : 'text-blue-600 font-medium']" class="transition-colors cursor-pointer">Dashboard</a>
    <a href="/projects" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Projects</a>
    <a href="/settings" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Settings</a>
    <a href="/help" :class="[theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600']" class="transition-colors cursor-pointer">Help</a>
    </div>
    <div class="flex items-center space-x-4">
    <div class="flex items-center space-x-2">
    <img src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20business%20person%20with%20neutral%20expression%2C%20high%20quality%20portrait%2C%20studio%20lighting%2C%20minimalist%20background%2C%20professional%20attire&width=40&height=40&seq=avatar1&orientation=squarish" alt="User Avatar" class="w-8 h-8 rounded-full object-cover" />
    <span class="text-sm font-medium hidden md:inline">Alex Morgan</span>
    </div>
    <button
    id="themeToggle"
    :class="[theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900']"
    class="cursor-pointer transition-colors !rounded-button whitespace-nowrap"
    @click="toggleTheme"
    >
    <i :class="[theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun']"></i>
    </button>
    </div>
    </nav>
    <!-- Main Content -->
    <div class="pt-20 pb-10">
    <!-- Dashboard Header -->
    <div class="container mx-auto px-6 py-8">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
    <div>
    <h1 class="text-3xl font-bold mb-2">Dashboard</h1>
    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']">Welcome back, Alex! Here's what's happening today.</p>
    </div>
    <div class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm flex items-center">
    <i class="far fa-calendar-alt mr-2"></i> Friday, June 6, 2025
    <span class="mx-2">•</span>
    <span class="text-green-500 text-xs">Last sync: 2 min ago</span>
    </p>
    <button
    id="newTaskButton"
    @click="showNewTaskModal = true"
    class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-button cursor-pointer whitespace-nowrap transition-colors flex items-center"
    >
    <i class="fas fa-plus mr-2"></i> New Task
    </button>
    <!-- New Task Modal -->
    <div v-if="showNewTaskModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white']" class="w-full max-w-2xl rounded-lg shadow-xl p-6">
    <div class="flex justify-between items-center mb-6">
    <h3 class="text-xl font-bold">Create New Task</h3>
    <button
    id="closeNewTaskModal"
    @click="showNewTaskModal = false"
    :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']"
    class="text-2xl cursor-pointer !rounded-button whitespace-nowrap"
    >
    <i class="fas fa-times"></i>
    </button>
    </div>
    <form id="newTaskForm" @submit.prevent="createNewTask" class="space-y-6">
    <!-- Title -->
    <div>
    <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Task Title *</label>
    <input
    id="newTaskTitle"
    v-model="newTask.title"
    type="text"
    required
    :class="[theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900']"
    class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Enter task title"
    >
    </div>
    <!-- Description -->
    <div>
    <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Description *</label>
    <textarea
    id="newTaskDescription"
    v-model="newTask.description"
    required
    rows="3"
    :class="[theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900']"
    class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Enter task description"
    ></textarea>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Priority -->
    <div>
    <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Priority *</label>
    <div class="relative">
    <select
    id="newTaskPriority"
    v-model="newTask.priority"
    required
    :class="[theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900']"
    class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
    >
    <option value="High">High</option>
    <option value="Medium">Medium</option>
    <option value="Low">Low</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <i class="fas fa-chevron-down"></i>
    </div>
    </div>
    </div>
    <!-- Due Date -->
    <div>
    <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Due Date *</label>
    <input
    id="newTaskDueDate"
    v-model="newTask.dueDate"
    type="date"
    required
    :class="[theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900']"
    class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
    </div>
    <!-- Project -->
    <div>
    <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Project *</label>
    <div class="relative">
    <select
    id="newTaskProject"
    v-model="newTask.project"
    required
    :class="[theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900']"
    class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
    >
    <option v-for="project in projects" :key="project.name" :value="project.name">
    {{ project.name }}
    </option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <i class="fas fa-chevron-down"></i>
    </div>
    </div>
    </div>
    <!-- Assignees -->
    <div>
    <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Assignees *</label>
    <div class="relative">
    <div
    id="newTaskAssignees"
    :class="[theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300']"
    class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[42px] flex flex-wrap gap-2"
    >
    <div
    v-for="member in teamMembers"
    :key="member.initials"
    @click="toggleAssignee(member)"
    :class="[
    isAssigneeSelected(member) ? 'ring-2 ring-blue-500' : '',
    theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
    ]"
    class="flex items-center space-x-2 p-1 rounded-full cursor-pointer transition-colors"
    >
    <div :class="member.bgColor" class="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white">
    {{ member.initials }}
    </div>
    <span :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="text-sm">
    {{ member.name }}
    </span>
    </div>
    </div>
    </div>
    </div>
    </div>
    <!-- Attachment -->
    <div>
    <label :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-700']" class="block text-sm font-medium mb-2">Attachment</label>
    <div
    id="newTaskAttachment"
    :class="[theme === 'dark' ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-300 hover:bg-gray-50']"
    class="w-full px-4 py-4 rounded-lg border-2 border-dashed cursor-pointer transition-colors text-center"
    @click="triggerFileInput"
    >
    <i class="fas fa-cloud-upload-alt text-2xl mb-2" :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']"></i>
    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="text-sm">
    Click to upload or drag and drop files here
    </p>
    <input
    type="file"
    ref="fileInput"
    class="hidden"
    @change="handleFileUpload"
    >
    </div>
    </div>
    <!-- Action Buttons -->
    <div class="flex justify-end space-x-4 pt-4 border-t" :class="[theme === 'dark' ? 'border-gray-700' : 'border-gray-200']">
    <button
    id="cancelNewTask"
    type="button"
    @click="showNewTaskModal = false"
    :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700']"
    class="px-6 py-2 rounded-lg transition-colors !rounded-button whitespace-nowrap"
    >
    Cancel
    </button>
    <button
    id="createNewTask"
    type="submit"
    class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors !rounded-button whitespace-nowrap"
    >
    Create Task
    </button>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    <!-- Quick Stats -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
    <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="p-6 rounded-lg shadow-sm">
    <div class="flex justify-between items-start">
    <div>
    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="text-sm mb-1">Active Projects</p>
    <h3 class="text-2xl font-bold">8</h3>
    </div>
    <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
    <i class="fas fa-briefcase"></i>
    </div>
    </div>
    <div class="flex items-center mt-4">
    <span class="text-green-500 text-xs flex items-center">
    <i class="fas fa-arrow-up mr-1"></i> 12%
    </span>
    <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="text-xs ml-2">from last month</span>
    </div>
    </div>
    <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="p-6 rounded-lg shadow-sm">
    <div class="flex justify-between items-start">
    <div>
    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="text-sm mb-1">Pending Tasks</p>
    <h3 class="text-2xl font-bold">24</h3>
    </div>
    <div class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
    <i class="fas fa-tasks"></i>
    </div>
    </div>
    <div class="flex items-center mt-4">
    <span class="text-red-500 text-xs flex items-center">
    <i class="fas fa-arrow-up mr-1"></i> 8%
    </span>
    <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="text-xs ml-2">from last week</span>
    </div>
    </div>
    <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="p-6 rounded-lg shadow-sm">
    <div class="flex justify-between items-start">
    <div>
    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="text-sm mb-1">Upcoming Deadlines</p>
    <h3 class="text-2xl font-bold">7</h3>
    </div>
    <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
    <i class="far fa-calendar-check"></i>
    </div>
    </div>
    <div class="flex items-center mt-4">
    <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="text-xs">Next: Website Redesign (June 10)</span>
    </div>
    </div>
    <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="p-6 rounded-lg shadow-sm">
    <div class="flex justify-between items-start">
    <div>
    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="text-sm mb-1">Team Members</p>
    <h3 class="text-2xl font-bold">12</h3>
    </div>
    <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
    <i class="fas fa-users"></i>
    </div>
    </div>
    <div class="flex items-center mt-4">
    <div class="flex -space-x-2">
    <div class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white border-2 border-white">JD</div>
    <div class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs text-white border-2 border-white">AK</div>
    <div class="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs text-white border-2 border-white">TM</div>
    <div class="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center text-xs text-white border-2 border-white">+9</div>
    </div>
    </div>
    </div>
    </div>
    <!-- Task Management Section -->
    <div class="mb-10">
    <div class="flex justify-between items-center mb-6">
    <h2 class="text-xl font-bold">Task Management</h2>
    <div class="flex space-x-3">
    <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100']" class="relative inline-block rounded-md">
    <button
    id="filterButton"
    @click="toggleFilterDropdown"
    class="px-4 py-2 text-sm flex items-center cursor-pointer !rounded-button whitespace-nowrap"
    >
    <i class="fas fa-filter mr-2"></i> Filter
    <i class="fas fa-chevron-down ml-2 text-xs"></i>
    </button>
    <!-- Filter Dropdown -->
    <div
    v-if="showFilterDropdown"
    :class="[theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200']"
    class="absolute right-0 mt-2 w-72 rounded-lg border shadow-lg z-50"
    >
    <div class="p-4">
    <!-- Priority -->
    <div class="mb-4">
    <h3 class="font-medium mb-2">Priority</h3>
    <div class="space-y-2">
    <label class="flex items-center">
    <input type="checkbox" v-model="filters.priority" value="High" class="form-checkbox rounded text-blue-600">
    <span class="ml-2 text-sm">High</span>
    </label>
    <label class="flex items-center">
    <input type="checkbox" v-model="filters.priority" value="Medium" class="form-checkbox rounded text-blue-600">
    <span class="ml-2 text-sm">Medium</span>
    </label>
    <label class="flex items-center">
    <input type="checkbox" v-model="filters.priority" value="Low" class="form-checkbox rounded text-blue-600">
    <span class="ml-2 text-sm">Low</span>
    </label>
    </div>
    </div>
    <!-- Assignee -->
    <div class="mb-4">
    <h3 class="font-medium mb-2">Assignee</h3>
    <div class="space-y-2 max-h-32 overflow-y-auto">
    <label v-for="member in teamMembers" :key="member.initials" class="flex items-center">
    <input type="checkbox" v-model="filters.assignees" :value="member.initials" class="form-checkbox rounded text-blue-600">
    <span class="ml-2 text-sm">{{ member.name }}</span>
    </label>
    </div>
    </div>
    <!-- Due Date -->
    <div class="mb-4">
    <h3 class="font-medium mb-2">Due Date</h3>
    <div class="space-y-2">
    <label class="flex items-center">
    <input type="checkbox" v-model="filters.dueDate" value="this-week" class="form-checkbox rounded text-blue-600">
    <span class="ml-2 text-sm">This Week</span>
    </label>
    <label class="flex items-center">
    <input type="checkbox" v-model="filters.dueDate" value="next-week" class="form-checkbox rounded text-blue-600">
    <span class="ml-2 text-sm">Next Week</span>
    </label>
    <label class="flex items-center">
    <input type="checkbox" v-model="filters.dueDate" value="later" class="form-checkbox rounded text-blue-600">
    <span class="ml-2 text-sm">Later</span>
    </label>
    </div>
    </div>
    <!-- Projects -->
    <div class="mb-4">
    <h3 class="font-medium mb-2">Project</h3>
    <div class="space-y-2 max-h-32 overflow-y-auto">
    <label v-for="project in projects" :key="project.name" class="flex items-center">
    <input type="checkbox" v-model="filters.projects" :value="project.name" class="form-checkbox rounded text-blue-600">
    <span class="ml-2 text-sm">{{ project.name }}</span>
    </label>
    </div>
    </div>
    <!-- Action Buttons -->
    <div class="flex justify-end space-x-2 pt-3 border-t" :class="[theme === 'dark' ? 'border-gray-700' : 'border-gray-200']">
    <button
    @click="clearFilters"
    :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']"
    class="px-3 py-1 text-sm !rounded-button whitespace-nowrap"
    >
    Clear
    </button>
    <button
    @click="applyFilters"
    class="px-3 py-1 text-sm bg-blue-600 text-white hover:bg-blue-700 !rounded-button whitespace-nowrap"
    >
    Apply
    </button>
    </div>
    </div>
    </div>
    </div>
    <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100']" class="relative inline-block rounded-md">
    <button
    id="sortButton"
    @click="toggleSortDropdown"
    class="px-4 py-2 text-sm flex items-center cursor-pointer !rounded-button whitespace-nowrap"
    >
    <i class="fas fa-sort mr-2"></i> Sort
    <i class="fas fa-chevron-down ml-2 text-xs"></i>
    </button>
    <!-- Sort Dropdown -->
    <div
    v-if="showSortDropdown"
    :class="[theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200']"
    class="absolute right-0 mt-2 w-56 rounded-lg border shadow-lg z-50"
    >
    <div class="p-2">
    <button
    v-for="option in sortOptions"
    :key="option.value"
    @click="applySort(option.value)"
    :class="[
    theme === 'dark' ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700',
    currentSort === option.value ? (theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100') : ''
    ]"
    class="w-full px-4 py-2 text-left text-sm rounded-md transition-colors cursor-pointer"
    >
    {{ option.label }}
    </button>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
    <!-- To Do Column -->
    <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-sm">
    <div class="p-4 border-b" :class="[theme === 'dark' ? 'border-gray-700' : 'border-gray-200']">
    <div class="flex justify-between items-center">
    <h3 class="font-medium flex items-center">
    <span class="w-3 h-3 rounded-full bg-gray-400 mr-2"></span>
    To Do
    </h3>
    <span class="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">6</span>
    </div>
    </div>
    <div class="p-4 space-y-3 min-h-[400px]" ref="todoColumn">
    <div
    v-for="(task, index) in todoTasks"
    :key="`todo-${index}`"
    :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50 border border-gray-200']"
    class="p-3 rounded-lg shadow-sm cursor-pointer transition-colors task-card"
    draggable="true"
    @dragstart="dragStart($event, 'todo', index)"
    @dragover.prevent
    @drop="drop($event, 'todo')"
    >
    <div class="flex justify-between mb-2">
    <span :class="[task.priority === 'High' ? 'bg-red-100 text-red-800' : task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800']" class="text-xs px-2 py-1 rounded-full">{{ task.priority }}</span>
    <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="text-xs">{{ task.dueDate }}</span>
    </div>
    <h4 class="font-medium mb-1">{{ task.title }}</h4>
    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm mb-3">{{ task.description }}</p>
    <div class="flex justify-between items-center">
    <div class="flex -space-x-2">
    <div
    v-for="(member, mIndex) in task.assignees"
    :key="`todo-${index}-member-${mIndex}`"
    class="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white border-2 border-white"
    :class="member.bgColor"
    >
    {{ member.initials }}
    </div>
    </div>
    <div class="flex space-x-2">
    <button :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700']" class="cursor-pointer !rounded-button whitespace-nowrap">
    <i class="far fa-comment-alt"></i>
    </button>
    <button :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700']" class="cursor-pointer !rounded-button whitespace-nowrap">
    <i class="fas fa-paperclip"></i>
    </button>
    </div>
    </div>
    </div>
    <div
    :class="[theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200']"
    class="p-3 rounded-lg border border-dashed flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-colors"
    >
    <span class="text-sm flex items-center">
    <i class="fas fa-plus mr-2"></i> Add Task
    </span>
    </div>
    </div>
    </div>
    <!-- In Progress Column -->
    <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-sm">
    <div class="p-4 border-b" :class="[theme === 'dark' ? 'border-gray-700' : 'border-gray-200']">
    <div class="flex justify-between items-center">
    <h3 class="font-medium flex items-center">
    <span class="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
    In Progress
    </h3>
    <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">4</span>
    </div>
    </div>
    <div class="p-4 space-y-3 min-h-[400px]" ref="inProgressColumn">
    <div
    v-for="(task, index) in inProgressTasks"
    :key="`inprogress-${index}`"
    :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50 border border-gray-200']"
    class="p-3 rounded-lg shadow-sm cursor-pointer transition-colors task-card"
    draggable="true"
    @dragstart="dragStart($event, 'inProgress', index)"
    @dragover.prevent
    @drop="drop($event, 'inProgress')"
    >
    <div class="flex justify-between mb-2">
    <span :class="[task.priority === 'High' ? 'bg-red-100 text-red-800' : task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800']" class="text-xs px-2 py-1 rounded-full">{{ task.priority }}</span>
    <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="text-xs">{{ task.dueDate }}</span>
    </div>
    <h4 class="font-medium mb-1">{{ task.title }}</h4>
    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm mb-3">{{ task.description }}</p>
    <div class="flex justify-between items-center">
    <div class="flex -space-x-2">
    <div
    v-for="(member, mIndex) in task.assignees"
    :key="`inprogress-${index}-member-${mIndex}`"
    class="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white border-2 border-white"
    :class="member.bgColor"
    >
    {{ member.initials }}
    </div>
    </div>
    <div class="flex space-x-2">
    <button :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700']" class="cursor-pointer !rounded-button whitespace-nowrap">
    <i class="far fa-comment-alt"></i>
    </button>
    <button :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700']" class="cursor-pointer !rounded-button whitespace-nowrap">
    <i class="fas fa-paperclip"></i>
    </button>
    </div>
    </div>
    </div>
    <div
    :class="[theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200']"
    class="p-3 rounded-lg border border-dashed flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-colors"
    >
    <span class="text-sm flex items-center">
    <i class="fas fa-plus mr-2"></i> Add Task
    </span>
    </div>
    </div>
    </div>
    <!-- Review Column -->
    <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-sm">
    <div class="p-4 border-b" :class="[theme === 'dark' ? 'border-gray-700' : 'border-gray-200']">
    <div class="flex justify-between items-center">
    <h3 class="font-medium flex items-center">
    <span class="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
    Review
    </h3>
    <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">3</span>
    </div>
    </div>
    <div class="p-4 space-y-3 min-h-[400px]" ref="reviewColumn">
    <div
    v-for="(task, index) in reviewTasks"
    :key="`review-${index}`"
    :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50 border border-gray-200']"
    class="p-3 rounded-lg shadow-sm cursor-pointer transition-colors task-card"
    draggable="true"
    @dragstart="dragStart($event, 'review', index)"
    @dragover.prevent
    @drop="drop($event, 'review')"
    >
    <div class="flex justify-between mb-2">
    <span :class="[task.priority === 'High' ? 'bg-red-100 text-red-800' : task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800']" class="text-xs px-2 py-1 rounded-full">{{ task.priority }}</span>
    <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="text-xs">{{ task.dueDate }}</span>
    </div>
    <h4 class="font-medium mb-1">{{ task.title }}</h4>
    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm mb-3">{{ task.description }}</p>
    <div class="flex justify-between items-center">
    <div class="flex -space-x-2">
    <div
    v-for="(member, mIndex) in task.assignees"
    :key="`review-${index}-member-${mIndex}`"
    class="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white border-2 border-white"
    :class="member.bgColor"
    >
    {{ member.initials }}
    </div>
    </div>
    <div class="flex space-x-2">
    <button :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700']" class="cursor-pointer !rounded-button whitespace-nowrap">
    <i class="far fa-comment-alt"></i>
    </button>
    <button :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700']" class="cursor-pointer !rounded-button whitespace-nowrap">
    <i class="fas fa-paperclip"></i>
    </button>
    </div>
    </div>
    </div>
    <div
    :class="[theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200']"
    class="p-3 rounded-lg border border-dashed flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-colors"
    >
    <span class="text-sm flex items-center">
    <i class="fas fa-plus mr-2"></i> Add Task
    </span>
    </div>
    </div>
    </div>
    <!-- Completed Column -->
    <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-sm">
    <div class="p-4 border-b" :class="[theme === 'dark' ? 'border-gray-700' : 'border-gray-200']">
    <div class="flex justify-between items-center">
    <h3 class="font-medium flex items-center">
    <span class="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
    Completed
    </h3>
    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">5</span>
    </div>
    </div>
    <div class="p-4 space-y-3 min-h-[400px]" ref="completedColumn">
    <div
    v-for="(task, index) in completedTasks"
    :key="`completed-${index}`"
    :class="[theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50 border border-gray-200']"
    class="p-3 rounded-lg shadow-sm cursor-pointer transition-colors task-card"
    draggable="true"
    @dragstart="dragStart($event, 'completed', index)"
    @dragover.prevent
    @drop="drop($event, 'completed')"
    >
    <div class="flex justify-between mb-2">
    <span :class="[task.priority === 'High' ? 'bg-red-100 text-red-800' : task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800']" class="text-xs px-2 py-1 rounded-full">{{ task.priority }}</span>
    <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="text-xs">{{ task.dueDate }}</span>
    </div>
    <h4 class="font-medium mb-1 line-through opacity-70">{{ task.title }}</h4>
    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm mb-3 opacity-70">{{ task.description }}</p>
    <div class="flex justify-between items-center">
    <div class="flex -space-x-2">
    <div
    v-for="(member, mIndex) in task.assignees"
    :key="`completed-${index}-member-${mIndex}`"
    class="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white border-2 border-white"
    :class="member.bgColor"
    >
    {{ member.initials }}
    </div>
    </div>
    <div class="flex space-x-2">
    <button :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700']" class="cursor-pointer !rounded-button whitespace-nowrap">
    <i class="far fa-comment-alt"></i>
    </button>
    <button :class="[theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700']" class="cursor-pointer !rounded-button whitespace-nowrap">
    <i class="fas fa-paperclip"></i>
    </button>
    </div>
    </div>
    </div>
    <div
    :class="[theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200']"
    class="p-3 rounded-lg border border-dashed flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-colors"
    >
    <span class="text-sm flex items-center">
    <i class="fas fa-plus mr-2"></i> Add Task
    </span>
    </div>
    </div>
    </div>
    </div>
    </div>
    <!-- Project Overview and Analytics Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
    <!-- Project Overview -->
    <div class="md:col-span-2">
    <div class="flex justify-between items-center mb-6">
    <h2 class="text-xl font-bold">Project Overview</h2>
    <button class="text-sm flex items-center cursor-pointer !rounded-button whitespace-nowrap" :class="[theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700']">
    View All Projects <i class="fas fa-chevron-right ml-2"></i>
    </button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div
    v-for="(project, index) in projects"
    :key="`project-${index}`"
    :class="[theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 border border-gray-200']"
    class="p-5 rounded-lg shadow-sm cursor-pointer transition-all project-card"
    >
    <div class="flex justify-between items-start mb-4">
    <div>
    <h3 class="font-bold text-lg mb-1">{{ project.name }}</h3>
    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']" class="text-sm">{{ project.description }}</p>
    </div>
    <div :class="[project.status === 'Active' ? 'bg-green-100 text-green-800' : project.status === 'On Hold' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800']" class="text-xs px-2 py-1 rounded-full">
    {{ project.status }}
    </div>
    </div>
    <div class="mb-4">
    <div class="flex justify-between text-sm mb-1">
    <span>Progress</span>
    <span>{{ project.progress }}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
    <div
    class="h-2 rounded-full"
    :style="`width: ${project.progress}%`"
    :class="[project.progress < 30 ? 'bg-red-500' : project.progress < 70 ? 'bg-yellow-500' : 'bg-green-500']"
    ></div>
    </div>
    </div>
    <div class="flex justify-between items-center">
    <div class="flex -space-x-2">
    <div
    v-for="(member, mIndex) in project.team.slice(0, 3)"
    :key="`project-${index}-member-${mIndex}`"
    class="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white border-2 border-white"
    :class="member.bgColor"
    >
    {{ member.initials }}
    </div>
    <div v-if="project.team.length > 3" class="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center text-xs text-white border-2 border-white">
    +{{ project.team.length - 3 }}
    </div>
    </div>
    <div class="text-sm" :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']">
    <i class="far fa-calendar-alt mr-1"></i> Due: {{ project.dueDate }}
    </div>
    </div>
    </div>
    </div>
    </div>
    <!-- Performance Analytics -->
    <div>
    <div class="flex justify-between items-center mb-6">
    <h2 class="text-xl font-bold">Performance</h2>
    <div :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100']" class="relative inline-block rounded-md">
    <button class="px-3 py-1 text-sm flex items-center cursor-pointer !rounded-button whitespace-nowrap">
    This Week <i class="fas fa-chevron-down ml-2 text-xs"></i>
    </button>
    </div>
    </div>
    <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="p-5 rounded-lg shadow-sm mb-6">
    <h3 class="text-sm font-medium mb-4">Task Completion Rate</h3>
    <div ref="taskCompletionChart" class="h-48"></div>
    </div>
    <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="p-5 rounded-lg shadow-sm">
    <h3 class="text-sm font-medium mb-2">Task Distribution</h3>
    <div ref="taskDistributionChart" class="h-40"></div>
    </div>
    </div>
    </div>
    <!-- Upcoming Deadlines and Team Activity -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <!-- Upcoming Deadlines -->
    <div class="md:col-span-2">
    <div class="flex justify-between items-center mb-6">
    <h2 class="text-xl font-bold">Upcoming Deadlines</h2>
    <button class="text-sm flex items-center cursor-pointer !rounded-button whitespace-nowrap" :class="[theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700']">
    View Calendar <i class="fas fa-chevron-right ml-2"></i>
    </button>
    </div>
    <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-sm overflow-hidden">
    <div class="overflow-x-auto">
    <table class="min-w-full divide-y" :class="[theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200']">
    <thead :class="[theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50']">
    <tr>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']">Task</th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']">Project</th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']">Assignee</th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']">Due Date</th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']">Priority</th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']">Status</th>
    </tr>
    </thead>
    <tbody :class="[theme === 'dark' ? 'divide-y divide-gray-700' : 'divide-y divide-gray-200']">
    <tr v-for="(deadline, index) in upcomingDeadlines" :key="`deadline-${index}`" :class="[theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50']" class="cursor-pointer">
    <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex items-center">
    <div class="ml-4">
    <div class="text-sm font-medium">{{ deadline.task }}</div>
    </div>
    </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-900']">{{ deadline.project }}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex items-center">
    <div class="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white" :class="deadline.assignee.bgColor">
    {{ deadline.assignee.initials }}
    </div>
    <div class="ml-2 text-sm" :class="[theme === 'dark' ? 'text-gray-300' : 'text-gray-900']">{{ deadline.assignee.name }}</div>
    </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm" :class="[
    deadline.daysLeft <= 1 ? 'text-red-600 font-medium' :
    deadline.daysLeft <= 3 ? 'text-yellow-600' :
    theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
    ]">
    {{ deadline.dueDate }} <span v-if="deadline.daysLeft <= 3">({{ deadline.daysLeft }} day<span v-if="deadline.daysLeft !== 1">s</span> left)</span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
    <span :class="[
    deadline.priority === 'High' ? 'bg-red-100 text-red-800' :
    deadline.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
    'bg-green-100 text-green-800'
    ]" class="px-2 py-1 text-xs rounded-full">
    {{ deadline.priority }}
    </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
    <span :class="[
    deadline.status === 'To Do' ? 'bg-gray-100 text-gray-800' :
    deadline.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
    deadline.status === 'Review' ? 'bg-purple-100 text-purple-800' :
    'bg-green-100 text-green-800'
    ]" class="px-2 py-1 text-xs rounded-full">
    {{ deadline.status }}
    </span>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    </div>
    <!-- Team Activity -->
    <div>
    <div class="flex justify-between items-center mb-6">
    <h2 class="text-xl font-bold">Team Activity</h2>
    <button class="text-sm flex items-center cursor-pointer !rounded-button whitespace-nowrap" :class="[theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700']">
    View All <i class="fas fa-chevron-right ml-2"></i>
    </button>
    </div>
    <div :class="[theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200']" class="rounded-lg shadow-sm p-5">
    <div class="space-y-6">
    <div v-for="(activity, index) in teamActivities" :key="`activity-${index}`" class="flex">
    <div class="mr-4">
    <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs text-white" :class="activity.user.bgColor">
    {{ activity.user.initials }}
    </div>
    </div>
    <div>
    <p class="text-sm">
    <span class="font-medium">{{ activity.user.name }}</span>
    <span :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-600']">{{ activity.action }}</span>
    <span v-if="activity.target" class="font-medium">{{ activity.target }}</span>
    </p>
    <p :class="[theme === 'dark' ? 'text-gray-400' : 'text-gray-500']" class="text-xs mt-1">{{ activity.time }}</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </template>
    <script lang="ts" setup>
    import { ref, onMounted, watch } from 'vue';
    import * as echarts from 'echarts';
    // Theme management
    const theme = ref(localStorage.getItem('theme') || 'light');
    const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', theme.value);
    };
    // Task data
    const todoTasks = ref([
    {
    title: 'Update user dashboard UI',
    description: 'Implement new design for user dashboard interface',
    priority: 'High',
    dueDate: 'Jun 10',
    attachments: [],
    assignees: [
    { initials: 'AM', bgColor: 'bg-blue-500' },
    { initials: 'JD', bgColor: 'bg-purple-500' }
    ]
    },
    {
    title: 'Fix payment gateway issues',
    description: 'Resolve transaction failures in checkout process',
    priority: 'High',
    dueDate: 'Jun 8',
    assignees: [
    { initials: 'TM', bgColor: 'bg-green-500' }
    ]
    },
    {
    title: 'Create onboarding tutorial',
    description: 'Design step-by-step guide for new users',
    priority: 'Medium',
    dueDate: 'Jun 15',
    assignees: [
    { initials: 'SL', bgColor: 'bg-yellow-500' }
    ]
    },
    {
    title: 'Optimize database queries',
    description: 'Improve performance of slow-loading pages',
    priority: 'Medium',
    dueDate: 'Jun 20',
    assignees: [
    { initials: 'RB', bgColor: 'bg-red-500' },
    { initials: 'TM', bgColor: 'bg-green-500' }
    ]
    },
    {
    title: 'Update privacy policy',
    description: 'Review and update for compliance with new regulations',
    priority: 'Low',
    dueDate: 'Jun 30',
    assignees: [
    { initials: 'AM', bgColor: 'bg-blue-500' }
    ]
    },
    {
    title: 'Prepare Q2 analytics report',
    description: 'Compile user engagement and conversion metrics',
    priority: 'Low',
    dueDate: 'Jun 25',
    assignees: [
    { initials: 'JD', bgColor: 'bg-purple-500' }
    ]
    }
    ]);
    const inProgressTasks = ref([
    {
    title: 'Implement search functionality',
    description: 'Add advanced search with filters and sorting',
    priority: 'High',
    dueDate: 'Jun 12',
    attachments: [],
    assignees: [
    { initials: 'TM', bgColor: 'bg-green-500' },
    { initials: 'RB', bgColor: 'bg-red-500' }
    ]
    },
    {
    title: 'Redesign landing page',
    description: 'Update hero section and improve mobile responsiveness',
    priority: 'Medium',
    dueDate: 'Jun 18',
    assignees: [
    { initials: 'AM', bgColor: 'bg-blue-500' }
    ]
    },
    {
    title: 'Integrate social login',
    description: 'Add Google and Facebook authentication options',
    priority: 'Medium',
    dueDate: 'Jun 14',
    assignees: [
    { initials: 'TM', bgColor: 'bg-green-500' }
    ]
    },
    {
    title: 'Create email templates',
    description: 'Design notification and marketing email templates',
    priority: 'Low',
    dueDate: 'Jun 22',
    assignees: [
    { initials: 'SL', bgColor: 'bg-yellow-500' }
    ]
    }
    ]);
    const reviewTasks = ref([
    {
    title: 'User profile page',
    description: 'New design with improved settings and preferences',
    priority: 'Medium',
    dueDate: 'Jun 9',
    attachments: [],
    assignees: [
    { initials: 'JD', bgColor: 'bg-purple-500' }
    ]
    },
    {
    title: 'API documentation',
    description: 'Update developer docs with new endpoints',
    priority: 'Low',
    dueDate: 'Jun 16',
    assignees: [
    { initials: 'RB', bgColor: 'bg-red-500' }
    ]
    },
    {
    title: 'Notification system',
    description: 'Real-time alerts for user interactions',
    priority: 'Medium',
    dueDate: 'Jun 11',
    assignees: [
    { initials: 'TM', bgColor: 'bg-green-500' },
    { initials: 'AM', bgColor: 'bg-blue-500' }
    ]
    }
    ]);
    const completedTasks = ref([
    {
    title: 'Bug fixes for mobile app',
    description: 'Resolve crash issues on Android devices',
    priority: 'High',
    dueDate: 'Jun 5',
    attachments: [],
    assignees: [
    { initials: 'TM', bgColor: 'bg-green-500' }
    ]
    },
    {
    title: 'Update dependencies',
    description: 'Upgrade all packages to latest versions',
    priority: 'Medium',
    dueDate: 'Jun 3',
    assignees: [
    { initials: 'RB', bgColor: 'bg-red-500' }
    ]
    },
    {
    title: 'Create marketing assets',
    description: 'Design banners and social media graphics',
    priority: 'Low',
    dueDate: 'Jun 1',
    assignees: [
    { initials: 'SL', bgColor: 'bg-yellow-500' }
    ]
    },
    {
    title: 'User testing sessions',
    description: 'Conduct usability tests with focus group',
    priority: 'Medium',
    dueDate: 'May 30',
    assignees: [
    { initials: 'AM', bgColor: 'bg-blue-500' },
    { initials: 'JD', bgColor: 'bg-purple-500' }
    ]
    },
    {
    title: 'Setup CI/CD pipeline',
    description: 'Configure automated testing and deployment',
    priority: 'High',
    dueDate: 'May 28',
    assignees: [
    { initials: 'TM', bgColor: 'bg-green-500' }
    ]
    }
    ]);
    // Projects data
    const projects = ref([
    {
    name: 'Website Redesign',
    description: 'Modernize the company website with improved UX/UI',
    status: 'Active',
    progress: 65,
    team: [
    { initials: 'AM', bgColor: 'bg-blue-500' },
    { initials: 'JD', bgColor: 'bg-purple-500' },
    { initials: 'SL', bgColor: 'bg-yellow-500' }
    ],
    dueDate: 'Jun 30'
    },
    {
    name: 'Mobile App Development',
    description: 'Create iOS and Android versions of our platform',
    status: 'Active',
    progress: 42,
    team: [
    { initials: 'TM', bgColor: 'bg-green-500' },
    { initials: 'RB', bgColor: 'bg-red-500' },
    { initials: 'AM', bgColor: 'bg-blue-500' },
    { initials: 'JD', bgColor: 'bg-purple-500' }
    ],
    dueDate: 'Aug 15'
    },
    {
    name: 'Payment System Integration',
    description: 'Implement new payment gateways and improve checkout flow',
    status: 'On Hold',
    progress: 28,
    team: [
    { initials: 'TM', bgColor: 'bg-green-500' },
    { initials: 'RB', bgColor: 'bg-red-500' }
    ],
    dueDate: 'Jul 20'
    },
    {
    name: 'Marketing Campaign',
    description: 'Q3 product launch and promotional activities',
    status: 'Active',
    progress: 15,
    team: [
    { initials: 'SL', bgColor: 'bg-yellow-500' },
    { initials: 'JD', bgColor: 'bg-purple-500' }
    ],
    dueDate: 'Sep 5'
    }
    ]);
    // Upcoming deadlines data
    const upcomingDeadlines = ref([
    {
    task: 'Update user dashboard UI',
    project: 'Website Redesign',
    assignee: { name: 'Alex Morgan', initials: 'AM', bgColor: 'bg-blue-500' },
    dueDate: 'Jun 10, 2025',
    daysLeft: 4,
    priority: 'High',
    status: 'To Do'
    },
    {
    task: 'Fix payment gateway issues',
    project: 'Payment System Integration',
    assignee: { name: 'Tom Miller', initials: 'TM', bgColor: 'bg-green-500' },
    dueDate: 'Jun 8, 2025',
    daysLeft: 2,
    priority: 'High',
    status: 'To Do'
    },
    {
    task: 'User profile page',
    project: 'Website Redesign',
    assignee: { name: 'Jane Doe', initials: 'JD', bgColor: 'bg-purple-500' },
    dueDate: 'Jun 9, 2025',
    daysLeft: 3,
    priority: 'Medium',
    status: 'Review'
    },
    {
    task: 'Notification system',
    project: 'Mobile App Development',
    assignee: { name: 'Tom Miller', initials: 'TM', bgColor: 'bg-green-500' },
    dueDate: 'Jun 11, 2025',
    daysLeft: 5,
    priority: 'Medium',
    status: 'Review'
    },
    {
    task: 'Implement search functionality',
    project: 'Website Redesign',
    assignee: { name: 'Tom Miller', initials: 'TM', bgColor: 'bg-green-500' },
    dueDate: 'Jun 12, 2025',
    daysLeft: 6,
    priority: 'High',
    status: 'In Progress'
    },
    {
    task: 'Integrate social login',
    project: 'Mobile App Development',
    assignee: { name: 'Tom Miller', initials: 'TM', bgColor: 'bg-green-500' },
    dueDate: 'Jun 14, 2025',
    daysLeft: 8,
    priority: 'Medium',
    status: 'In Progress'
    },
    {
    task: 'Create onboarding tutorial',
    project: 'Website Redesign',
    assignee: { name: 'Sarah Lee', initials: 'SL', bgColor: 'bg-yellow-500' },
    dueDate: 'Jun 15, 2025',
    daysLeft: 9,
    priority: 'Medium',
    status: 'To Do'
    }
    ]);
    // Team activity data
    const teamActivities = ref([
    {
    user: { name: 'Tom Miller', initials: 'TM', bgColor: 'bg-green-500' },
    action: 'completed task',
    target: 'Bug fixes for mobile app',
    time: '2 hours ago'
    },
    {
    user: { name: 'Jane Doe', initials: 'JD', bgColor: 'bg-purple-500' },
    action: 'commented on',
    target: 'User profile page',
    time: '3 hours ago'
    },
    {
    user: { name: 'Alex Morgan', initials: 'AM', bgColor: 'bg-blue-500' },
    action: 'moved task to Review',
    target: 'Notification system',
    time: '5 hours ago'
    },
    {
    user: { name: 'Sarah Lee', initials: 'SL', bgColor: 'bg-yellow-500' },
    action: 'created new task',
    target: 'Create onboarding tutorial',
    time: 'Yesterday at 4:30 PM'
    },
    {
    user: { name: 'Robert Brown', initials: 'RB', bgColor: 'bg-red-500' },
    action: 'completed task',
    target: 'Update dependencies',
    time: 'Yesterday at 2:15 PM'
    },
    {
    user: { name: 'Tom Miller', initials: 'TM', bgColor: 'bg-green-500' },
    action: 'started working on',
    target: 'Implement search functionality',
    time: 'Yesterday at 10:45 AM'
    }
    ]);
    // Drag and drop functionality
    const draggedTask = ref({
    column: '',
    index: -1
    });
    const dragStart = (event: DragEvent, column: string, index: number) => {
    if (event.dataTransfer) {
    draggedTask.value = { column, index };
    event.dataTransfer.effectAllowed = 'move';
    }
    };
    const drop = (event: DragEvent, targetColumn: string) => {
    event.preventDefault();
    if (draggedTask.value.column === targetColumn) {
    return;
    }
    const sourceColumn = draggedTask.value.column;
    const sourceIndex = draggedTask.value.index;
    let task;
    // Remove from source column
    if (sourceColumn === 'todo') {
    task = todoTasks.value.splice(sourceIndex, 1)[0];
    } else if (sourceColumn === 'inProgress') {
    task = inProgressTasks.value.splice(sourceIndex, 1)[0];
    } else if (sourceColumn === 'review') {
    task = reviewTasks.value.splice(sourceIndex, 1)[0];
    } else if (sourceColumn === 'completed') {
    task = completedTasks.value.splice(sourceIndex, 1)[0];
    }
    // Add to target column
    if (task) {
    if (targetColumn === 'todo') {
    todoTasks.value.unshift(task);
    } else if (targetColumn === 'inProgress') {
    inProgressTasks.value.unshift(task);
    } else if (targetColumn === 'review') {
    reviewTasks.value.unshift(task);
    } else if (targetColumn === 'completed') {
    completedTasks.value.unshift(task);
    }
    }
    };
    // Chart references
    const taskCompletionChart = ref<HTMLElement | null>(null);
    const taskDistributionChart = ref<HTMLElement | null>(null);
    // Filter state
    const showFilterDropdown = ref(false);
    const showSortDropdown = ref(false);
    const filters = ref({
    priority: [] as string[],
    assignees: [] as string[],
    dueDate: [] as string[],
    projects: [] as string[]
    });
    const currentSort = ref('');
    // Team members list
    // Team members and new task state
    const teamMembers = ref([
    { name: 'Alex Morgan', initials: 'AM', bgColor: 'bg-blue-500' },
    { name: 'Tom Miller', initials: 'TM', bgColor: 'bg-green-500' },
    { name: 'Jane Doe', initials: 'JD', bgColor: 'bg-purple-500' },
    { name: 'Sarah Lee', initials: 'SL', bgColor: 'bg-yellow-500' },
    { name: 'Robert Brown', initials: 'RB', bgColor: 'bg-red-500' }
    ]);
    const showNewTaskModal = ref(false);
    const fileInput = ref<HTMLInputElement | null>(null);
    const attachmentInput = ref<HTMLInputElement | null>(null);
    const showAttachmentDialog = ref(false);
    const currentTask = ref<{
    title: string;
    attachments: Array<{
    name: string;
    size: number;
    type: string;
    url: string;
    }>;
    } | null>(null);
    const newTask = ref({
    title: '',
    description: '',
    priority: 'Medium',
    dueDate: '',
    project: '',
    assignees: [] as typeof teamMembers.value,
    attachment: null as File | null
    });
    // New task methods
    const toggleAssignee = (member: typeof teamMembers.value[0]) => {
    const index = newTask.value.assignees.findIndex(a => a.initials === member.initials);
    if (index === -1) {
    newTask.value.assignees.push(member);
    } else {
    newTask.value.assignees.splice(index, 1);
    }
    };
    const isAssigneeSelected = (member: typeof teamMembers.value[0]) => {
    return newTask.value.assignees.some(a => a.initials === member.initials);
    };
    const triggerFileInput = () => {
    fileInput.value?.click();
    };
    const handleFileUpload = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
    newTask.value.attachment = input.files[0];
    }
    };
    const createNewTask = () => {
    // Add the new task to the todoTasks list
    todoTasks.value.unshift({
    title: newTask.value.title,
    description: newTask.value.description,
    priority: newTask.value.priority,
    dueDate: new Date(newTask.value.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    assignees: newTask.value.assignees
    });
    // Reset form and close modal
    newTask.value = {
    title: '',
    description: '',
    priority: 'Medium',
    dueDate: '',
    project: '',
    assignees: [],
    attachment: null
    };
    showNewTaskModal.value = false;
    };
    // Filter methods
    const toggleFilterDropdown = () => {
    showFilterDropdown.value = !showFilterDropdown.value;
    };
    const clearFilters = () => {
    filters.value = {
    priority: [],
    assignees: [],
    dueDate: [],
    projects: []
    };
    applyFilters();
    };
    const applyFilters = () => {
    // Filter todoTasks
    todoTasks.value = filterTasks(todoTasks.value);
    inProgressTasks.value = filterTasks(inProgressTasks.value);
    reviewTasks.value = filterTasks(reviewTasks.value);
    completedTasks.value = filterTasks(completedTasks.value);
    showFilterDropdown.value = false;
    };
    const filterTasks = (tasks: any[]) => {
    return tasks.filter(task => {
    // Priority filter
    if (filters.value.priority.length > 0 && !filters.value.priority.includes(task.priority)) {
    return false;
    }
    // Assignee filter
    if (filters.value.assignees.length > 0) {
    const taskAssignees = task.assignees.map((a: any) => a.initials);
    if (!taskAssignees.some((initials: string) => filters.value.assignees.includes(initials))) {
    return false;
    }
    }
    // Due date filter
    if (filters.value.dueDate.length > 0) {
    const dueDate = new Date(task.dueDate);
    const today = new Date();
    const thisWeekEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    const nextWeekEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14);
    if (filters.value.dueDate.includes('this-week') && dueDate > thisWeekEnd) {
    return false;
    }
    if (filters.value.dueDate.includes('next-week') && (dueDate <= thisWeekEnd || dueDate > nextWeekEnd)) {
    return false;
    }
    if (filters.value.dueDate.includes('later') && dueDate <= nextWeekEnd) {
    return false;
    }
    }
    return true;
    });
    };
    // Sort options and methods
    const sortOptions = [
    { label: 'Due Date (Earliest first)', value: 'due-asc' },
    { label: 'Due Date (Latest first)', value: 'due-desc' },
    { label: 'Priority (High to Low)', value: 'priority-desc' },
    { label: 'Priority (Low to High)', value: 'priority-asc' },
    { label: 'Title (A-Z)', value: 'title-asc' },
    { label: 'Title (Z-A)', value: 'title-desc' }
    ];
    const toggleSortDropdown = () => {
    showSortDropdown.value = !showSortDropdown.value;
    showFilterDropdown.value = false;
    };
    const sortTasks = (tasks: any[]) => {
    const priorityOrder = { High: 3, Medium: 2, Low: 1 };
    switch (currentSort.value) {
    case 'due-asc':
    return [...tasks].sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
    case 'due-desc':
    return [...tasks].sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime());
    case 'priority-desc':
    return [...tasks].sort((a, b) => priorityOrder[b.priority as keyof typeof priorityOrder] - priorityOrder[a.priority as keyof typeof priorityOrder]);
    case 'priority-asc':
    return [...tasks].sort((a, b) => priorityOrder[a.priority as keyof typeof priorityOrder] - priorityOrder[b.priority as keyof typeof priorityOrder]);
    case 'title-asc':
    return [...tasks].sort((a, b) => a.title.localeCompare(b.title));
    case 'title-desc':
    return [...tasks].sort((a, b) => b.title.localeCompare(a.title));
    default:
    return tasks;
    }
    };
    const applySort = (sortValue: string) => {
    currentSort.value = sortValue;
    todoTasks.value = sortTasks(todoTasks.value);
    inProgressTasks.value = sortTasks(inProgressTasks.value);
    reviewTasks.value = sortTasks(reviewTasks.value);
    completedTasks.value = sortTasks(completedTasks.value);
    showSortDropdown.value = false;
    };
    // Close dropdowns when clicking outside
    onMounted(() => {
    document.addEventListener('click', (event: MouseEvent) => {
    const filterButton = document.getElementById('filterButton');
    const sortButton = document.getElementById('sortButton');
    if (!filterButton?.contains(event.target as Node)) {
    showFilterDropdown.value = false;
    }
    if (!sortButton?.contains(event.target as Node)) {
    showSortDropdown.value = false;
    }
    });
    });
    // Initialize charts
    onMounted(() => {
    // Task Completion Chart
    if (taskCompletionChart.value) {
    const chart = echarts.init(taskCompletionChart.value);
    chart.setOption({
    animation: false,
    tooltip: {
    trigger: 'axis',
    axisPointer: {
    type: 'shadow'
    }
    },
    grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '3%',
    containLabel: true
    },
    xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLine: {
    lineStyle: {
    color: theme.value === 'dark' ? '#4B5563' : '#E5E7EB'
    }
    },
    axisLabel: {
    color: theme.value === 'dark' ? '#9CA3AF' : '#6B7280'
    }
    },
    yAxis: {
    type: 'value',
    axisLine: {
    show: false
    },
    axisLabel: {
    color: theme.value === 'dark' ? '#9CA3AF' : '#6B7280'
    },
    splitLine: {
    lineStyle: {
    color: theme.value === 'dark' ? '#374151' : '#E5E7EB'
    }
    }
    },
    series: [
    {
    name: 'Completed',
    type: 'bar',
    stack: 'total',
    itemStyle: {
    color: '#10B981'
    },
    data: [5, 7, 4, 8, 6, 3, 5]
    },
    {
    name: 'Pending',
    type: 'bar',
    stack: 'total',
    itemStyle: {
    color: '#F59E0B'
    },
    data: [3, 2, 5, 1, 4, 2, 3]
    }
    ]
    });
    // Handle window resize
    window.addEventListener('resize', () => {
    chart.resize();
    });
    }
    // Task Distribution Chart
    if (taskDistributionChart.value) {
    const chart = echarts.init(taskDistributionChart.value);
    chart.setOption({
    animation: false,
    tooltip: {
    trigger: 'item'
    },
    legend: {
    bottom: '0%',
    left: 'center',
    textStyle: {
    color: theme.value === 'dark' ? '#D1D5DB' : '#4B5563'
    }
    },
    series: [
    {
    name: 'Task Status',
    type: 'pie',
    radius: ['40%', '70%'],
    avoidLabelOverlap: false,
    itemStyle: {
    borderRadius: 10,
    borderColor: theme.value === 'dark' ? '#1F2937' : '#FFFFFF',
    borderWidth: 2
    },
    label: {
    show: false,
    position: 'center'
    },
    emphasis: {
    label: {
    show: true,
    fontSize: '14',
    fontWeight: 'bold',
    color: theme.value === 'dark' ? '#FFFFFF' : '#000000'
    }
    },
    labelLine: {
    show: false
    },
    data: [
    { value: 6, name: 'To Do', itemStyle: { color: '#9CA3AF' } },
    { value: 4, name: 'In Progress', itemStyle: { color: '#3B82F6' } },
    { value: 3, name: 'Review', itemStyle: { color: '#8B5CF6' } },
    { value: 5, name: 'Completed', itemStyle: { color: '#10B981' } }
    ]
    }
    ]
    });
    // Handle window resize
    window.addEventListener('resize', () => {
    chart.resize();
    });
    }
    });
    // Watch theme changes to update chart themes
    watch(theme, (newTheme) => {
    const charts = [taskCompletionChart.value, taskDistributionChart.value];
    charts.forEach(chartRef => {
    if (chartRef) {
    const chart = echarts.getInstanceByDom(chartRef);
    if (chart) {
    const isDark = newTheme === 'dark';
    // Update Task Completion Chart
    if (chartRef === taskCompletionChart.value) {
    chart.setOption({
    xAxis: {
    axisLine: {
    lineStyle: {
    color: isDark ? '#4B5563' : '#E5E7EB'
    }
    },
    axisLabel: {
    color: isDark ? '#9CA3AF' : '#6B7280'
    }
    },
    yAxis: {
    axisLabel: {
    color: isDark ? '#9CA3AF' : '#6B7280'
    },
    splitLine: {
    lineStyle: {
    color: isDark ? '#374151' : '#E5E7EB'
    }
    }
    }
    });
    }
    // Update Task Distribution Chart
    if (chartRef === taskDistributionChart.value) {
    chart.setOption({
    legend: {
    textStyle: {
    color: isDark ? '#D1D5DB' : '#4B5563'
    }
    },
    series: [
    {
    itemStyle: {
    borderColor: isDark ? '#1F2937' : '#FFFFFF'
    },
    emphasis: {
    label: {
    color: isDark ? '#FFFFFF' : '#000000'
    }
    }
    }
    ]
    });
    }
    }
    }
    });
    });
    </script>
    <style scoped>
    /* Custom styles */
    .task-card {
    transition: all 0.2s ease;
    }
    .task-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .project-card {
    transition: all 0.2s ease;
    }
    .project-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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