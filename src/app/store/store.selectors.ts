import { createFeatureSelector, createSelector } from "@ngrx/store";
import { detail } from "./detail.model";

export const selectors  = createFeatureSelector<detail[]>('count')

    export const getselect = createSelector(selectors, (state)=>{

        return state
    })