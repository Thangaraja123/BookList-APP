import { createAction, props } from "@ngrx/store";
import { detail } from "./detail.model";


export const addbook = createAction(

    '[addbook] add book', props<{values : detail}>()
)