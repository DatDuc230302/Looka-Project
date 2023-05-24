import { combineReducers } from 'redux';
import { pick0 } from './pick0';
import { pick1 } from './pick1';
import { pick2 } from './pick2';
import { pick3 } from './pick3';
import { backOnboard } from './backOnboard';
import { show } from './show';
import { toggleForm } from './toggleForm';
import { turnFeature } from './turnFeature';
import { apiPick1 } from './dat/apiPick1';
import { AddFavorite } from './khang/AddFavorite';
import { StoreStateFavorite } from './khang/StoreStateFavorite';
import { storeLike } from './storeLike';
import { apiLogo } from './dat/apiLogo';
export const allReducers = combineReducers({
    pick0,
    pick1,
    pick2,
    pick3,
    backOnboard,
    show,
    toggleForm,
    turnFeature,
    StoreStateFavorite,
    apiPick1,
    AddFavorite,
    storeLike,
    apiLogo,
});
