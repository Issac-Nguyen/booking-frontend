export function get(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function set(key, data) {
    return localStorage.setItem(key, JSON.stringify(data));
}

export function remove(key) {
    return localStorage.removeItem(key);
}

export function clear() {
    return localStorage.clear();
}