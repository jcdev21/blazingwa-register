import axios from 'axios';
import config from '../config';

type PayloadType = {
	firstname: string;
	lastname: string;
	email: string;
	mobile_code: number;
	mobile: number;
	country: number;
	password: string;
	password_confirmation: string;
};

export async function createMember(payload: PayloadType) {
	try {
		const res = await axios.post(`${config.apiHost}/register`, payload);
		return res.data;
	} catch (error: any) {
		return {
			error: true,
			message: error?.message,
		};
	}
}
