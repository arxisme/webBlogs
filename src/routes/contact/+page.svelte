<script lang="ts">
  let name = '';
  let email = '';
  let message = '';
  let success = false;
  let error = '';
</script>

<form  class="space-y-4" on:submit|preventDefault={async () => {
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

  <button class="bg-black text-white px-4 py-2 rounded" type="submit">Send</button>

  {#if success}
    <p class="text-suceess mt-2">Message sent successfully!</p>
  {/if}

  {#if error}
    <p class="text-error mt-2">{error}</p>
  {/if}
</form>
