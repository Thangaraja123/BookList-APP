import { createReducer, on } from "@ngrx/store";
import { detail } from "./detail.model";
import { addbook } from "./store.actions";

export const initialstate : detail[] = [];

export const addreduce = createReducer(

    initialstate, on(addbook, (state,action)=>{

        const clone : detail[] = [...state,action.values]
        
        return clone
    })
)