<script lang="ts">
  import DataTable from '../../components/dataTable.svelte';
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<DataTable coinData={data.coinData} />
