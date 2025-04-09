<script>
    import { page } from '$app/stores';
    import Logo from './Logo.svelte';
    import { onMount, onDestroy } from 'svelte';

    let showNavbar = true;
    let prevScrollY = 0;

    const handleScroll = () => {
        // Ensure `window.scrollY` is defined
        if (typeof window === 'undefined') return;

        const currentScrollY = window.scrollY;

        // Hide navbar when scrolling down, show when scrolling up
        if (currentScrollY > prevScrollY && currentScrollY > 50) {
            showNavbar = false; // Scrolling down
        } else {
            showNavbar = true; // Scrolling up
        }

        // Update the previous scroll position
        prevScrollY = currentScrollY;
    };

    onMount(() => {
        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component destroy
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<nav
    class={`fixed w-full top-0 bg-base-100 z-50  transition-transform duration-300 ease-in-out ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
    }`}
>
    <div class="container mx-auto max-w-4xl px-4">
        <div class="flex justify-between h-16">
            <div class="flex items-center text-lg max-md:text-md space-x-6">
                <a href="/" class={$page.url.pathname === '/' ? 'underline ' : ''}> Home </a>
                <a href="/blog" class={$page.url.pathname === '/blog' ? 'underline' : ''}> Blog </a>
                <a href="/contact" class={$page.url.pathname === '/contact' ? 'underline' : ''}>
                    Contact
                </a>
            </div>
            <div class="flex items-center">
                <a href="/" class="flex items-center">
                    <Logo size={40} />
                </a>
            </div>
        </div>
    </div>
</nav>
