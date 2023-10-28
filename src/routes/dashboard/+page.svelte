<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  console.log(data);
</script>

<h2>
  {data.item[1].name}
</h2>
