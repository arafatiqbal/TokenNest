<script lang="ts">
  import DashboardNav from '../../../components/dashboardNav.svelte';
  import type { LayoutServerData } from '../dashboard/$types';
  export let data: LayoutServerData;
</script>

<DashboardNav session={data.session.user} />
<slot />
