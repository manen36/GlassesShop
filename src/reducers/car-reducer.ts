import { db } from "../data/db";
import type { CarItem, Glasses } from "../types";

export type CarActions = 
    { type:'add-to-cart', payload: {item: Glasses} } |
    { type:'remove-from-cart', payload: {id: Glasses['id']} } |
    { type:'decrease-quantity', payload: {id: Glasses['id']} } |
    { type:'increase-quantity', payload: {id: Glasses['id']} } |
    { type:'clear-cart'}

    export type CarState = {
        data: Glasses[]
        car: CarItem[] 
    }

    const initialCar = () : CarItem[] => {
        const localStorageCar = localStorage.getItem('car')
        return localStorageCar ? JSON.parse(localStorageCar) : []    
    }

    export const initialState : CarState = {
        data: db,
        car: initialCar()
    }

    const MIN_ITEMS = 1
    const MAX_ITEMS = 5

    export const carReducer = (
            state: CarState = initialState,
            action: CarActions
        ) => {

            if(action.type === 'add-to-cart') {
                const itemExists = state.car.find(glasses => glasses.id === action.payload.item.id)
                    let updatedCar : CarItem[] = []
                    if(itemExists) { // existe en el carrito
                        updatedCar = state.car.map(item => {
                            if(item.id === action.payload.item.id) {
                                if(item.quantity < MAX_ITEMS) {
                                    return {...item, quantity: item.quantity +1}
                                } else {
                                    return item
                                }
                            } else {
                                return item
                            }
                        })
                    } else {
                        const newItem : CarItem = {...action.payload.item, quantity : 1 }
                        updatedCar = [...state.car, newItem ]
                    }

                return {
                    ...state,
                    car: updatedCar
                }
            }

            if(action.type === 'remove-from-cart') {
                const car = state.car.filter(item => item.id !== action.payload.id)
                return {
                    ...state,
                    car
                }
            }

            if(action.type === 'decrease-quantity') {
                const car = state.car.map( item => {
                    if(item.id === action.payload.id && item.quantity > MIN_ITEMS) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    return item
                })
                
                return {
                    ...state,
                    car
                }
            }

            if(action.type === 'increase-quantity') {
                const car = state.car.map( item => {
                    if(item.id === action.payload.id && item.quantity < MAX_ITEMS) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item
                })

                return {
                    ...state,
                    car
                }
            }

            if(action.type === 'clear-cart') {
                
                return {
                    ...state,
                    car: []
                }
            }

            return state
            
    }