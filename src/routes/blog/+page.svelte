<script lang="ts">
  export let data;
  let posts: { slug: string; title: string; date: string }[] = [];
  data.posts.then((resolvedPosts) => {
    posts = resolvedPosts;
  });

  // Function to format the date
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const daySuffix = getDaySuffix(day);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${day}${daySuffix} ${month}, ${year}`;
  }

  // Helper function to get the day suffix (st, nd, rd, th)
  function getDaySuffix(day: number): string {
    if (day >= 11 && day <= 13) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
</script>
{#if posts.length > 0}
  <ul class="space-y-3">
    {#each posts as post}
      <li>
        <a href={`/blog/${post.slug}`} class="text-red-400 mid-bold hover:underline">
          {post.title}
        </a>
        <p class="text-light text-sm text-gray-500">{formatDate(post.date)}</p>
      </li>
    {/each}
  </ul>
{:else}
  <p>Loading posts...</p>
{/if}
