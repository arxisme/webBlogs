<script lang="ts">
  let name = '';
  let email = '';
  let message = '';
  let success = false;
  let error = '';
</script>

<!-- Add Font Awesome CDN -->
<svelte:head>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />
</svelte:head>

<div>
  <!-- Social Links Section -->
  <div class="text-center mb-8">
    <h1 class="main-heading text-3xl   md:text-2xl mb-4 pb-">Connect with me</h1>

    <div class="socials flex justify-center space-x-6">
      <a href="https://twitter.com/arsh11100" target="_blank" class="text-gray-800 text-4xl hover:opacity-80">
        <i class="fab fa-x-twitter font-sans "></i>
      </a>
      <a href="https://bsky.app/arsh11100" target="_blank" class="text-blue-300 text-4xl hover:opacity-80">
        <i class="fab fa-bluesky"></i>
      </a>
      <a href="https://github.com/arxisme" target="_blank" class="text-gray-800 text-4xl hover:opacity-80">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/arsh11100" target="_blank" class="text-cyan-500 text-4xl hover:opacity-80">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="mailto:arsh11100arsh@gmail.com" class="text-teal-500 text-4xl hover:opacity-80">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </div>
  <div class="text-center mt-18">
    <h1 class="main-heading text-3xl   md:text-2xl  ">Send me a message</h1>
  </div>
  <!-- Contact Form -->
  <form class="space-y-4" on:submit|preventDefault={async () => {
    const res = await fetch('/contact', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
      success = true;
      name = email = message = '';
    } else {
      error = 'Something went wrong. Please try again.';
    }
  }}>
    <div>
      <label class="block font-medium" for="name">Name</label>
      <input id="name" class="border rounded px-3 py-2 w-full" bind:value={name} required />
    </div>

    <div>
      <label class="block font-medium" for="email">Email</label>
      <input id="email" class="border rounded px-3 py-2 w-full" type="email" bind:value={email} required />
    </div>

    <div>
      <label class="block font-medium" for="message">Message</label>
      <textarea id="message" class="border rounded px-3 py-2 w-full" bind:value={message} required></textarea>
    </div>

   <div class="w-full flex justify-center">
    <button class="bg-gray-900 hover:bg-1200 text-white px-4 py-2 rounded" type="submit">Send</button>
   </div>

    {#if success}
      <p class="text-success mt-2">Message sent successfully!</p>
    {/if}

    {#if error}
      <p class="text-error mt-2">{error}</p>
    {/if}
  </form>
</div>
