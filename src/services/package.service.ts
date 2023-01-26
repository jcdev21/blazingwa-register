import axios from 'axios';
import config from '../config';

export async function getPackages(user_id: number) {
	try {
		const res = await axios.get(
			`${config.apiHost}/get-register-package?user_id=${user_id}`
		);
		return res.data;
	} catch (error: any) {
		return {
			error: true,
			message: error?.message,
		};
	}
}
