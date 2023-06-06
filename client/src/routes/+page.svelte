<script>
	import { onMount } from 'svelte';
	import Github from '../icons/github.svelte';
	import Testtube from '../icons/testtube.svelte';
	import Letter from '../icons/letter.svelte';

	const projects = [
		{
			project: 'tcp-profile-c',
			github: 'https://github.com/tyler-technologies/tcp-launcher-e',
			ci: '',
			qa: '',
			prod: ''
		},
		{
			project: 'tcp-launcher-e',
			github: 'https://github.com/tyler-technologies/tcp-launcher-e',
			ci: '',
			qa: '',
			prod: ''
		}
	];

	onMount(async () => {
		const forge = await import('@tylertech/forge');

		forge.defineButtonComponent();
		forge.defineListComponent();
		forge.defineListItemComponent();
		forge.defineCheckboxComponent();
	});
</script>

<forge-list>
	{#each projects as item}
		<forge-list-item>
			<span slot="title">{item.project}</span>
			<span slot="trailing" class="trailing">
				<a href={item.github}><Github /></a>
				<a href={item.ci}><Letter letterValue="ci" /></a>
				<a href={item.qa}><Letter letterValue="qa" /></a>
				<a href={item.prod}><Letter letterValue="prod" /></a>
			</span>
		</forge-list-item>
	{/each}
</forge-list>

<forge-icon name="cog" external class="text-slate-700"></forge-icon>

<style>
	forge-list {
		margin: 0 auto;
		max-width: 700px;
	}

	.trailing {
		display: flex;
		gap: 12px;
		align-items: center;
	}
</style>
