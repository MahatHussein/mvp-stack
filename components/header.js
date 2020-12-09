export default function Header() {
  return (
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex items-center px-2 lg:px-0">
            <div class="flex-shrink-0">
              <img class="block lg:hidden h-8 w-auto" src="/mvp-stack-logo.svg" alt="MVP Stack"/>
              <img class="hidden lg:block h-8 w-auto" src="/mvp-stack-logo.svg"alt="MVP Stack"/>
            </div>
            <div class="hidden lg:block lg:ml-6">
              <div class="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a href="#" class="text-indigo-800 px-3 py-2 text-sm font-medium">Dashboard</a>
                <a href="#" class="text-gray-900 hover:text-indigo-800 px-3 py-2 rounded-md text-sm font-medium">Team</a>
                <a href="#" class="text-gray-900 hover:text-indigo-800 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                <a href="#" class="text-gray-900 hover:text-indigo-800 px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
