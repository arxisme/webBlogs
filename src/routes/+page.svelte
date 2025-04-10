<script lang="ts">
	export let data: {
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


	<div class="flex flex-col bg-base-100 text-base-content">
		<div class="h-20 max-sm:hidden"></div>
		<div class="flex sm:justify-between max-sm:flex-col-reverse ">
			<div class="flex flex-col justify-center pt-10">
				<p class="intro-text text-2xl max-md:text-xl">Hello World! I am</p>
				<h1 class="text-5xl main-heading max-md:text-3xl">Arshad Ahmed</h1>
			</div>
			<!-- Arcs container -->
			<div class="flex justify-end">
				<div class="relative w-20 h-50 sm:w-80 sm:h-80 p-0 m-0 max-md:overflow-hidden max-md:w-80">
					<svg class="absolute top-0 left-0 w-full h-full m-0 p-0" viewBox="0 0 200 200">
						<!-- Arcs -->
						<circle
							class="arc arc-1 max-sm:hidden"
							cx="100"
							cy="100"
							r="70"
							fill="none"
							stroke="var(--color-secondary-green, blue)"
							stroke-width="2"
							stroke-dasharray="225 225"
						/>
						<circle
							class="arc arc-2 max-sm:hidden"
							cx="100"
							cy="100"
							r="58"
							fill="none"
							stroke="var(--color-base-300, blue)"
							stroke-width="2"
							stroke-dasharray="200 200"
						/>
						<circle
							class="arc arc-3"
							cx="100"
							cy="100"
							r="46"
							fill="none"
							stroke="var(--color-error, blue)"
							stroke-width="2"
							stroke-dasharray="188 188"
						/>
						<circle
							class="arc arc-4"
							cx="100"
							cy="100"
							r="34"
							fill="none"
							stroke="var(--color-success, green)"
							stroke-width="2"
							stroke-dasharray="125 125"
						/>
						<circle
							class="arc arc-5"
							cx="100"
							cy="100"
							r="20"
							fill="none"
							stroke="var(--color-warning, orange)"
							stroke-width="2"
							stroke-dasharray="62 62"
						/>
						<circle
							class="arc arc-6"
							cx="100"
							cy="100"
							r="10"
							fill="none"
							stroke="var(--color-info, orange)"
							stroke-width="2"
							stroke-dasharray="31 31"
						/>
					</svg>
				</div>
			</div>
		</div>
		<div class="flex flex-col mt-auto ">
			<div class="max-sm:h-4"></div>
			<p class="intro-text text-xl max-md:text-lg">
				A computer science student writing about anything I feel like writing, which might include
				Computer Science, physics, movies, books etc.
			</p>
			<div class="h-2"></div>
			<a href="/blog" class="main-heading text-2xl max-md:text-xl"> Go to blogs → </a>

			<!-- <footer class="mt-auto pt-13">
				<h1 class="main-heading text-xl pb-3">Recent Posts</h1>
				<div class="w-full">
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
				</div>
			</footer> -->
		</div>
	</div>

