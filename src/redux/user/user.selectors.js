import {createSelector} from "reselect";

const selcetUser = (state) => state.user;

export const selectCurrentUser = createSelector(
	[selcetUser],
	(user) => user.currentUser
);
