<script>
  import Header from '../../components/header.svelte';
  import Footer from '../../components/footer.svelte';
  import { page } from '$app/stores';
</script>

<Header session={$page.data.session?.user} />
<slot />
<Footer />
