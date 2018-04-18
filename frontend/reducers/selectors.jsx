
export const getDMServer = (servers) => {
	let result = [];

	for (let id in servers) {
		if (servers[id].is_dm === true) {
			result.push(id);
		}
	}

	return result[0];

};

export const getServerIds = (servers) => {
	let result = [];
	for (let id in servers) {
		if (servers[id].is_dm === false) {
			result.push(id);
		}
	}
	return result;

};
