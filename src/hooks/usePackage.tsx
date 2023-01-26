import React from 'react';
import { PackageContext } from '../modules/package/PackageContext';
import { getPackages } from '../services/package.service';

export default function usePackage() {
	const context = React.useContext(PackageContext);

	if (!context) {
		throw Error('usePackage must be used inside an PackageProvider');
	}

	const getListPackage = React.useCallback(async () => {
		if (!context.user_id) return [];
		const result = await getPackages(context.user_id);
		if (result.status === 'ok') {
			return result.data.package;
		}
		return [];
	}, [context.user_id]);

	return { ...context, getListPackage };
}
