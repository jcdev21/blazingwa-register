import React from 'react';

type PackageStateType = {
	user_id: number | null;
	package_id: number | null;
	payment_id: number | null;
};

type ActionType =
	| { type: 'SET_USER_ID'; payload: { user_id: number } }
	| { type: 'SET_PACKAGE_ID'; payload: { package_id: number } }
	| { type: 'SET_PAYMENT_ID'; payload: { payment_id: number } };

type PackageContextStateType = PackageStateType & {
	dispatch: React.Dispatch<ActionType>;
};

const initialState = {
	user_id: null,
	package_id: null,
	payment_id: null,
} as PackageContextStateType;

export const PackageContext =
	React.createContext<PackageContextStateType>(initialState);

const authReducer = (state: PackageStateType, action: ActionType) => {
	switch (action.type) {
		case 'SET_USER_ID':
			return { ...state, user_id: action.payload.user_id };

		case 'SET_PACKAGE_ID':
			return { ...state, user_id: action.payload.package_id };

		case 'SET_PAYMENT_ID':
			return { ...state, user_id: action.payload.payment_id };

		default:
			return state;
	}
};

export default function PackageProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [state, dispatch] = React.useReducer(authReducer, initialState);

	return (
		<PackageContext.Provider value={{ ...state, dispatch }}>
			{children}
		</PackageContext.Provider>
	);
}
