<script lang="ts">
	import Github from '../icons/github.svelte';
	import Letter from '../icons/letter.svelte';
	import Harness from '../icons/harness.svelte';

	const projects = [
		{
			project: 'tcp-admincenter-shell',
			github: 'https://github.com/tyler-technologies/tcp-admincenter',
			harness:
				'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/Zla8vCGFSdCXHX0PsiyNdw?CsejwCJFTtG6AyAW6tlYyQ?',
			baseUrl: 'https://{customer}-admin.{env}.com',
			path: '/org/admin-center/api/appconfig',
			rum: 'https://app.datadoghq.com/rum/performance-monitoring?from_ts=1685947561319&live=true&query=%40application.id%3A395cd87b-c09e-4792-b33e-3fbf83cda80b+env%3Atcpprod-1&to_ts=1686033961319',
			logs: 'https://app.datadoghq.com/logs?query=service%3Atcp-admincenter-shell&cols=host%2Cservice&index=%2A&messageDisplay=inline&stream_sort=desc&viz=stream&from_ts=1685947741896&to_ts=1686034141896&live=true',
		},
		{
			project: 'tcp-admincenter-dashboard',
			github: 'https://github.com/tyler-technologies/tcp-admincenter',
			harness:
				'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/fXUTJ1WTQe2iBLhpK7hOJA',
			baseUrl: 'https://{customer}-admin.{env}.com',
			path: '/org/admin-center/dashboard',
			rum: 'https://app.datadoghq.com/rum/performance-monitoring?from_ts=1685947561319&live=true&query=%40application.id%3A395cd87b-c09e-4792-b33e-3fbf83cda80b+env%3Atcpprod-1&to_ts=1686033961319',
			logs: 'https://app.datadoghq.com/logs?query=service%3Atcp-admincenter-dashboard-mfe&cols=host%2Cservice&index=%2A&messageDisplay=inline&stream_sort=desc&viz=stream&from_ts=1685947833421&to_ts=1686034233421&live=true',
		},
		{
			project: 'tcp-admincenter-usermanagement',
			github: 'https://github.com/tyler-technologies/tcp-admincenter',
			harness:
				'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/fWEyaC8jSb2_IeswVG16Nw',
			baseUrl: 'https://{customer}-admin.{env}.com',
			path: '/org/admin-center/users',
			rum: 'https://app.datadoghq.com/rum/performance-monitoring?from_ts=1685947561319&live=true&query=%40application.id%3A395cd87b-c09e-4792-b33e-3fbf83cda80b+env%3Atcpprod-1&to_ts=1686033961319',
			logs: 'https://app.datadoghq.com/logs?query=service%3Atcp-admincenter-user-management-mfe&cols=host%2Cservice&index=%2A&messageDisplay=inline&stream_sort=desc&viz=stream&from_ts=1685947833421&to_ts=1686034233421&live=true'
		},
		{
			project: 'tcp-admincenter-configuration',
			github: 'https://github.com/tyler-technologies/tcp-admincenter',
			harness:
				'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/ZHJvQBQZTqG0a-hc10R4qw',
			baseUrl: 'https://{customer}-admin.{env}.com',
			path: '/org/admin-center/configuration',
			rum: 'https://app.datadoghq.com/rum/performance-monitoring?from_ts=1685947561319&live=true&query=%40application.id%3A395cd87b-c09e-4792-b33e-3fbf83cda80b+env%3Atcpprod-1&to_ts=1686033961319',
			logs: 'https://app.datadoghq.com/logs?query=service%3Atcp-admincenter-configuration-mfe&cols=host%2Cservice&index=%2A&messageDisplay=inline&stream_sort=desc&viz=stream&from_ts=1685947833421&to_ts=1686034233421&live=true',
		},
		{
			project: 'tcp-profile-c',
			harness:
				'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/6LUaFosuQrmpkkfjQegsBA',
			github: 'https://github.com/tyler-technologies/tcp-profile-c',
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
	const ciUrl = (baseUrl: string, path: string) =>
		`${baseUrl}${path}`.replace('{env}', 'tcpci').replace('{customer}', customer);
	const qaUrl = (baseUrl: string, path: string) =>
		`${baseUrl}${path}`.replace('{env}', 'tcpqa').replace('{customer}', customer);
	const prodUrl = (baseUrl: string, path: string) =>
		`${baseUrl}${path}`.replace('{env}', 'tylerportico').replace('{customer}', customer);
</script>

<forge-list dense>
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
				{#if item.rum}
					<a class="rum" href={item.rum}><Letter letterValue="rum"/></a>
				{/if}
				{#if item.logs}
					<a href={item.logs}><Letter letterValue="logs"/></a>
				{/if}
				{#if item.baseUrl}
					<a class="ci" href={ciUrl(item.baseUrl, item.path)}><Letter letterValue="ci" /></a>
					<a href={qaUrl(item.baseUrl, item.path)}><Letter letterValue="qa" /></a>
					<a href={prodUrl(item.baseUrl, item.path)}><Letter letterValue="prod" /></a>
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

	.rum, .ci {
		margin-left: 1em;
	}
</style>
