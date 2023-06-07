export interface IProject {
    tags: string[];
    name: string;
    github: string;
    harness: string;
    url: string;
    rum: string;
    logs: string;
}

export function getProjects(filter: string = '') {
    let results = [...projects.sort((a, b) => a.name.localeCompare(b.name))];
    if (!filter)
        return results;
    return results.filter((p) => p.tags.includes(filter))
}

const projects = [
    {
        tags: ['ui', 'tcp-admincenter', 'tcp'],
        name: 'tcp-admincenter-shell',
        github: 'https://github.com/tyler-technologies/tcp-admincenter',
        harness:
            'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/Zla8vCGFSdCXHX0PsiyNdw?CsejwCJFTtG6AyAW6tlYyQ?',
        url: 'https://{customer}-admin.{env}.com/org/admin-center/api/appconfig',
        rum: 'https://app.datadoghq.com/rum/performance-monitoring?from_ts=1685947561319&live=true&query=%40application.id%3A395cd87b-c09e-4792-b33e-3fbf83cda80b+env%3Atcpprod-1&to_ts=1686033961319',
        logs: 'https://app.datadoghq.com/logs?query=service%3Atcp-admincenter-shell&cols=host%2Cservice&index=%2A&messageDisplay=inline&stream_sort=desc&viz=stream&from_ts=1685947741896&to_ts=1686034141896&live=true'
    },
    {
        tags: ['ui', 'tcp-admincenter', 'tcp'],
        name: 'tcp-admincenter-dashboard',
        github: 'https://github.com/tyler-technologies/tcp-admincenter',
        harness:
            'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/fXUTJ1WTQe2iBLhpK7hOJA',
        url: 'https://{customer}-admin.{env}.com/org/admin-center/dashboard',
        rum: 'https://app.datadoghq.com/rum/performance-monitoring?from_ts=1685947561319&live=true&query=%40application.id%3A395cd87b-c09e-4792-b33e-3fbf83cda80b+env%3Atcpprod-1&to_ts=1686033961319',
        logs: 'https://app.datadoghq.com/logs?query=service%3Atcp-admincenter-dashboard-mfe&cols=host%2Cservice&index=%2A&messageDisplay=inline&stream_sort=desc&viz=stream&from_ts=1685947833421&to_ts=1686034233421&live=true'
    },
    {
        tags: ['ui', 'tcp-admincenter', 'tcp'],
        name: 'tcp-admincenter-usermanagement',
        github: 'https://github.com/tyler-technologies/tcp-admincenter',
        harness:
            'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/fWEyaC8jSb2_IeswVG16Nw',
        url: 'https://{customer}-admin.{env}.com/org/admin-center/users',
        rum: 'https://app.datadoghq.com/rum/performance-monitoring?from_ts=1685947561319&live=true&query=%40application.id%3A395cd87b-c09e-4792-b33e-3fbf83cda80b+env%3Atcpprod-1&to_ts=1686033961319',
        logs: 'https://app.datadoghq.com/logs?query=service%3Atcp-admincenter-user-management-mfe&cols=host%2Cservice&index=%2A&messageDisplay=inline&stream_sort=desc&viz=stream&from_ts=1685947833421&to_ts=1686034233421&live=true'
    },
    {
        tags: ['ui', 'tcp-admincenter', 'tcp'],
        name: 'tcp-admincenter-configuration',
        github: 'https://github.com/tyler-technologies/tcp-admincenter',
        harness:
            'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/ZHJvQBQZTqG0a-hc10R4qw',
        url: 'https://{customer}-admin.{env}.com/org/admin-center/configuration',
        rum: 'https://app.datadoghq.com/rum/performance-monitoring?from_ts=1685947561319&live=true&query=%40application.id%3A395cd87b-c09e-4792-b33e-3fbf83cda80b+env%3Atcpprod-1&to_ts=1686033961319',
        logs: 'https://app.datadoghq.com/logs?query=service%3Atcp-admincenter-configuration-mfe&cols=host%2Cservice&index=%2A&messageDisplay=inline&stream_sort=desc&viz=stream&from_ts=1685947833421&to_ts=1686034233421&live=true'
    },
    {
        tags: ['api', 'service', 'tcp'],
        name: 'platformservice',
        github: 'https://github.com/tyler-technologies/platformservice',
    },
    {
        tags: ['api', 'service', 'tcp'],
        name: 'branding-service',
        github: 'https://github.com/tyler-technologies/branding-service',
    },
    {
        tags: ['ui', 'tcp-ops-center', 'tcp'],
        name: 'tcp-ops-center',
        github: 'https://github.com/tyler-technologies/tcp-ops-center',
        url: 'https://admin.{env}.com/portal/ops-center'
    },
    {
        tags: ['ui', 'tcp', 'public'],
        name: 'tcp-profile-c',
        harness:
            'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/6LUaFosuQrmpkkfjQegsBA',
        github: 'https://github.com/tyler-technologies/tcp-profile-c',
        url: 'https://profile.{env}.com/portal/profile'
    },
    {
        tags: ['ui', 'tcp', 'workforce'],
        name: 'tcp-launcher-e',
        harness:
            'https://app.harness.io/#/account/NVsV7gjbTZyA3CgSgXNOcg/service-instances/app/RNgKTaZsR-2857AB3pf7Rg/service/kWCli6f-RWy1BNaSb3Xsvw',
        github: 'https://github.com/tyler-technologies/tcp-launcher-e',
        url: 'https://{customer}.{env}.com/portal/enterpriselauncher'
    },
    {
        tags: ['ui', 'tcp', 'internal'],
        name: 'tcp-product-config-viewer',
        github: 'https://github.com/tyler-technologies/tcp-product-config-viewer',
        url: 'https://admin.{env}.com/portal/product-config-viewer'
    },
    {
        tags: ['ui', 'tcp', 'workforce'],
        name: 'tcp-workforce-profile',
        github: 'https://github.com/tyler-technologies/tcp-workforce-profile',
        url: 'https://{customer}.{env}.com/portal/workforce-profile'
    }
] as IProject[];

