import { db } from "../data/db";
import type { CarItem, Glasses } from "../types";

export type CarActions = 
    { type:'add-to-cart', payload: {item: Glasses} } |
    { type:'remove-from-cart', payload: {id: Glasses['id']} } |
    { type:'decrease-quantity', payload: {id: Glasses['id']} } |
    { type:'increase-quantity', payload: {id: Glasses['id']} } |
    {type: 'clear-cart'}

    export type CarState = {
        data: Glasses[]
        car: CarItem[] 
    }

    export const initialState : CarState = {
        data: db,
        car: []
    }

    export const carReducer = (
            state: CarState = initialState,
            action: CarActions
        ) => {

            if(action.type === 'add-to-cart') {

                return {
                    ...state
                }
            }

            if(action.type === 'remove-from-cart') {
                
                return {
                    ...state
                }
            }

            if(action.type === 'decrease-quantity') {
                
                return {
                    ...state
                }
            }

            if(action.type === 'increase-quantity') {

                return {
                    ...state
                }
            }

            if(action.type === 'clear-cart') {

                return {
                    ...state
                }
            }

            return state
            
    }