export default function reducer(state, action) {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case 'setLoggedInUser': {
			return {
				...state,
				name: action.data.name,
				photo: action.data.photo,
			};
		}
	}
}
