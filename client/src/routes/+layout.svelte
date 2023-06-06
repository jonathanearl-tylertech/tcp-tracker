<script>
    import "../app.scss";
	import { onMount } from "svelte";
    
    onMount(async () => {
		const { defineComponents } = await import('@tylertech/forge');
		defineComponents();
	});
</script>
  
<slot />