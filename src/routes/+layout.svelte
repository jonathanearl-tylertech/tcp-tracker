<script lang="ts">
	import '../app.scss';
	import { onMount } from 'svelte';
	import Tyler from '$lib/icons/tyler.svelte';

	onMount(async () => {
		const { defineComponents } = await import('@tylertech/forge');
		defineComponents();
	});
</script>

<forge-scaffold>
	<div slot="header" class="header">
		<forge-app-bar>
			<span slot="logo">
				<Tyler />
			</span>
			<span slot="title">Tracker</span>
			<!-- <forge-app-bar-profile-button
				slot="end"
				profile-button="true"
				avatar-text="First Last"
				full-name="First Last"
				email="first.last@tylertech.com"
			/> -->
		</forge-app-bar>
	</div>

	<main slot="body" class="app-body">
		<slot />
	</main>
</forge-scaffold>