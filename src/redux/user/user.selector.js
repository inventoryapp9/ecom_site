import { createSelector } from "reselect";

const stelectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [stelectUser],

  user => user.currentUser
);
