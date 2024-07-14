// TODO: будет селектор чтобы объеденить юзера с его избранными и историей
import {createSelector} from "@reduxjs/toolkit";

export const getUserEntities = createSelector([getUser], userdata => {
    return userdata
})
