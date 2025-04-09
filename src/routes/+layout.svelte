<script>
  import "../app.css";
  import Nav from "../lib/components/Nav.svelte";
  import Footer from "../lib/components/Footer.svelte";

</script>


<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
<title>Arshad Ahmed</title>
<div class="flex flex-col min-h-screen font-display info-text  bg-base-100 text-base-content ">
  <Nav />
  <div class="h-14"></div>

  <main class="flex-grow container  max-w-4xl mx-auto px-4 py-8  ">
    <slot />
  </main>
  <Footer />
</div>