export const ciUrl = (url: string, customer: string = '') => {
    let result = url.replace('{env}', 'tcpci');
    if (customer)
        result = result.replace('{customer}', customer);
    return result;
}

export const qaUrl = (url: string, customer: string = '') => {
    let result = url.replace('{env}', 'tcpqa');
    if (customer)
        result = result.replace('{customer}', customer);
    return result;
}

export const prodUrl = (url: string, customer: string = '') => {
    let result = url.replace('{env}', 'tylerportico');
    if (customer)
        result = result.replace('{customer}', customer);
    return result;
}