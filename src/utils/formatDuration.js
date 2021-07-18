export const formatDuration = (duration) => {
	let durationString = '';
	const unitsAmount = 60;
	const hours = Math.floor(duration / unitsAmount);
	let minutes = duration % unitsAmount;

	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	durationString += `${hours}:${minutes}`;

	return durationString;
};
