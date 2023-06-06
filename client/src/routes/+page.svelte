<script>
	import Github from '../icons/github.svelte';
	import Letter from '../icons/letter.svelte';
	import Tyler from '../icons/tyler.svelte';
	import Harness from '../icons/harness.svelte';

	const projects = [
		{
			project: 'tcp-admincenter',
			harness:
				'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/Zla8vCGFSdCXHX0PsiyNdw?CsejwCJFTtG6AyAW6tlYyQ?',
			github: 'https://github.com/tyler-technologies/tcp-admincenter'
		},
		{
			project: 'tcp-admincenter (dashboard)',
			harness:
				'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/fXUTJ1WTQe2iBLhpK7hOJA',
			baseUrl: 'https://{customer}-admin.{env}.com',
			path: '/org/admin-center/dashboard'
		},
		{
			project: 'tcp-admincenter (usermanagement)',
			harness:
				'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/fWEyaC8jSb2_IeswVG16Nw',
			github: 'https://github.com/tyler-technologies/tcp-admincenter',
			baseUrl: 'https://{customer}-admin.{env}.com',
			path: '/org/admin-center/users'
		},
		{
			project: 'tcp-admincenter (configuration)',
			harness:
				'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/ZHJvQBQZTqG0a-hc10R4qw',
			github: 'https://github.com/tyler-technologies/tcp-admincenter',
			baseUrl: 'https://{customer}-admin.{env}.com',
			path: '/org/admin-center/configuration'
		},
		{
			project: 'tcp-profile-c',
			harness:
				'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/6LUaFosuQrmpkkfjQegsBA',
			github: 'https://github.com/tyler-technologies/tcp-launcher-e',
			baseUrl: 'https://profile.{env}.com',
			path: '/portal/profile'
		},
		{
			project: 'tcp-launcher-e',
			harness:
				'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/kWCli6f-RWy1BNaSb3Xsvw',
			github: 'https://github.com/tyler-technologies/tcp-launcher-e',
			baseUrl: 'https://{customer}.{env}.com',
			path: '/portal/enterpriselauncher'
		}
	];

	const customer = 'waynecountypa';
</script>

<forge-app-bar>
	<span slot="logo">
		<Tyler />
	</span>
	<span slot="title">Tracker</span>
	<forge-app-bar-profile-button
		slot="end"
		profile-button="true"
		avatar-text="First Last"
		full-name="First Last"
		email="first.last@tylertech.com"
	/>
</forge-app-bar>
<forge-list>
	{#each projects as item}
		<forge-list-item>
			<span slot="title">{item.project}</span>
			<span slot="trailing" class="trailing">
				{#if item.github}
					<a href={item.github}><Github /></a>
				{/if}
				{#if item.harness}
					<a href={item.harness}><Harness /></a>
				{/if}
				{#if item.baseUrl}
					<a
						href={`${item.baseUrl}${item.path}`
							.replace('{env}', 'tcpci')
							.replace('{customer}', customer)}><Letter letterValue="ci" /></a
					>
					<a
						href={`${item.baseUrl}${item.path}`
							.replace('{env}', 'tcpqa')
							.replace('{customer}', customer)}><Letter letterValue="qa" /></a
					>
					<a
						href={`${item.baseUrl}${item.path}`
							.replace('{env}', 'tylerportico')
							.replace('{customer}', customer)}><Letter letterValue="prod" /></a
					>
				{/if}
			</span>
		</forge-list-item>
	{/each}
</forge-list>

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
