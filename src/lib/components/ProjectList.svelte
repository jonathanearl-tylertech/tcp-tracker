<script lang="ts">
	import Github from '$lib/icons/github.svelte';
	import Letter from '$lib/icons/letter.svelte';
	import Harness from '$lib/icons/harness.svelte';
	import type { IProject } from '$lib/data/projects';
	import { ciUrl, qaUrl, prodUrl } from '$lib/helper';
	export let projects: IProject[];
	export let customer: string;
</script>

<forge-list dense>
	{#each projects as item}
		<forge-list-item>
			<span slot="title">{item.name}</span>
			<span slot="trailing" class="trailing">
				{#if item.github}
					<a href={item.github}><Github /></a>
				{/if}
				{#if item.harness}
					<a href={item.harness}><Harness /></a>
				{/if}
				{#if item.rum}
					<a class="rum" href={item.rum}><Letter letterValue="rum" /></a>
				{/if}
				{#if item.logs}
					<a href={item.logs}><Letter letterValue="logs" /></a>
				{/if}
				{#if item.url}
					<a class="ci" href={ciUrl(item.url, customer)}><Letter letterValue="ci" /></a>
					<a href={qaUrl(item.url, customer)}><Letter letterValue="qa" /></a>
					<a href={prodUrl(item.url, customer)}><Letter letterValue="prod" /></a>
				{/if}
			</span>
		</forge-list-item>
	{/each}
</forge-list>

<style>
	forge-list {
		max-width: 900px;
		margin: 0 1em;
	}

	.trailing {
		display: flex;
		gap: 12px;
		align-items: center;
	}

	.rum,
	.ci {
		margin-left: 1em;
	}
</style>
