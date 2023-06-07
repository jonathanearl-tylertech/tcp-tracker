<script lang="ts">
	import ProjectList from '$lib/components/ProjectList.svelte';
	import { getCustomer } from '$lib/data/customers';
	import { getProjects } from '$lib/data/projects';
	import Tyler from '$lib/icons/tyler.svelte';
	let customer = getCustomer();
	let projects = [...getProjects()];
	let filter = '';
	function setFilter(f: string = '') {
		filter = f;
		projects = [...getProjects(f)];
	}
	const navigation = [
		{ name: 'All', href: '', icon: Tyler, filter: '' },
		{ name: 'Admin-center', href: '#tcp-admincenter', icon: Tyler, filter: 'tcp-admincenter' },
		{ name: 'UI', href: '#ui', icon: Tyler, filter: 'ui' },
		{ name: 'Services', href: '#services', icon: Tyler, filter: 'service' }
	];
</script>

<forge-scaffold>
	<aside slot="body-left">
		<forge-list dense>
			{#each navigation as item}
				<a href="/" on:click={() => setFilter(item.filter)}>
					<forge-list-item selected={filter === item.filter}>
						<span>{item.name}</span>
						<span class="tyler" slot="leading">
							<Tyler />
						</span>
					</forge-list-item>
				</a>
			{/each}
		</forge-list>
	</aside>

	<section slot="body">
		<ProjectList bind:projects {customer} />
	</section>
</forge-scaffold>

<style>
	section {
		max-width: 900px;
		margin: 0 1em;
	}
	forge-list-item {
		font-weight: 500;
	}
	.tyler {
		height: 24px;
		width: 24px;
	}
	aside {
		width: 256px;
		border-right: 1px solid #ddd;
		height: 100vh;
	}
</style>
