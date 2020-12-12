const MILISECONDS_IN_DAY = 86400000;

export function setLocalStorage(key, value, time = MILISECONDS_IN_DAY) {
	const now = new Date();

	const item = {
		value: value,
		expiry: now.getTime() + time,
    };

	localStorage.setItem(key, JSON.stringify(item));
}

export function getFromLocalStorage(key) {
    const itemStr = localStorage.getItem(key);

	if (!itemStr) {
		return null;
	}
	const item = JSON.parse(itemStr);
	const now = new Date();

    if (now.getTime() > item.expiry) {
		localStorage.removeItem(key);
		return null;
	}
	return item.value;
}

export async function getConfig() {
	const token = await getFromLocalStorage('token');

	return { headers: { Authorization: `Bearer ${token}` }};
}