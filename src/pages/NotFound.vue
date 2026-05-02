/*
|--------------------------------------------------------------------------
| File: NotFound.vue
|--------------------------------------------------------------------------
|
| Description:
| Custom 404 page displayed when a route does not exist.
|
| Responsibilities:
| - Inform the user that the page is not found
| - Provide navigation back to valid routes
| - Maintain consistent UI with the rest of the app
|
| Notes:
| - Used as fallback route in Vue Router
| - Designed with soft minimal UI (light theme)
|
*/

<template>
  <!-- Root container -->
  <div class="relative min-h-screen overflow-hidden bg-white">

    <!-- Decorative background shapes -->
    <div class="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[#f3c9a6] opacity-30 blur-3xl"></div>
    <div class="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#9cc4b2] opacity-30 blur-3xl"></div>

    <!-- Subtle grid texture -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[size:28px_28px] opacity-30"></div>

    <!-- Main content wrapper -->
    <div class="relative z-10 mx-auto flex min-h-screen max-w-5xl items-center px-6 py-16">
      <div class="w-full">

        <!-- Badge / label -->
        <div class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] uppercase tracking-[0.25em]">
          lost in the stack
        </div>

        <!-- Header section -->
        <div class="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <!-- Title + description -->
          <div>
            <h1 class="text-6xl font-semibold leading-none text-black sm:text-7xl lg:text-8xl">
              404
            </h1>

            <p class="mt-4 max-w-xl text-base text-black/70 sm:text-lg">
              This route does not exist yet. Try the preview page or return to the home route.
            </p>
          </div>

          <!-- Navigation actions -->
          <div class="flex flex-wrap items-center gap-3">

            <!-- Go to preview -->
            <RouterLink
              to="/preview"
              class="rounded-full border border-black/15 bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-black/90"
            >
              Go to preview
            </RouterLink>

            <!-- Go to home -->
            <!-- <RouterLink
              to="/home"
              class="rounded-full border border-black/20 bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-gray-50"
            >
              Go to home
            </RouterLink> -->

          </div>
        </div>

        <!-- Info cards -->
        <div class="mt-10 grid gap-4 rounded-2xl border border-black/10 bg-white p-5 text-sm text-black/70 sm:grid-cols-3">

          <!-- Tip -->
          <div>
            <div class="text-xs uppercase tracking-widest text-black/50">Tip</div>
            <div class="mt-2">Check your URL or update the router table.</div>
          </div>

          <!-- Shortcut -->
          <div>
            <div class="text-xs uppercase tracking-widest text-black/50">Shortcut</div>
            <div class="mt-2">Use the preview page to explore the structure.</div>
          </div>

          <!-- Status -->
          <div>
            <div class="text-xs uppercase tracking-widest text-black/50">Status</div>
            <div class="mt-2">No data was loaded for this path.</div>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>