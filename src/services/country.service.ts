import axios from 'axios';
import config from '../config';

export async function getCountries() {
	try {
		const res = await axios.get(`${config.apiHost}/get-country`);
		return res.data;
	} catch (error: any) {
		return {
			error: true,
			message: error?.message,
		};
	}
}
