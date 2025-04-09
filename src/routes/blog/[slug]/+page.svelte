<script lang="ts">
  export let data: {
    meta: {
      title: string;
      date: string;
    };
    content: string;
    recentPosts: {
      slug: string;
      title: string;
      date: string;
    }[];
  };

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

<div class="flex flex-col md:flex-row">
  <!-- Main content -->
  <article class="prose flex-grow max-w-2xl">
    <h1 class="main-heading text-3xl max-md:text-3xl">{data.meta.title}</h1>
    <p class="text-sm text-gray-500">{formatDate(data.meta.date)}</p>
    <div class="h-6"></div>
    <div class="intro-text text-lg max-md:text-sm prose prose-neutral text-justify">
      {@html data.content}
    </div>
  </article>

  <!-- Sidebar -->
  <aside class="w-full md:w-1/4 md:pl-8 mt-8 md:mt-0 sticky-sidebar">
    <h2 class="text-lg max-sm:text-md mid-bold mb-4">Recent Posts</h2>
    <ul class="space-y-2">
      {#each data.recentPosts as post}
      <li>
        <a href={`/blog/${post.slug}`} class="text-red-400 mid-bold hover:underline">
          {post.title}
        </a>
        <p class="text-light text-sm text-gray-500">{formatDate(post.date)}</p>
      </li>
      {/each}
    </ul>
  </aside>
</div>
