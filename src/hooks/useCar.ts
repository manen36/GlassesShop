import {useState, useEffect, useMemo} from 'react'
import { db } from '../data/db'
import type { Glasses, CarItem } from '../types' 

export const useCar = () => {
    
    const initialCar = () : CarItem[] => {
        const localStorageCar = localStorage.getItem('car')
        return localStorageCar ? JSON.parse(localStorageCar) : []    
    }
    
    const [data] = useState(db)
    const [car, setCar] = useState(initialCar)
    
    const MIN_ITEMS = 1
    const MAX_ITEMS = 5
    
    useEffect(() => {
    localStorage.setItem('car', JSON.stringify(car))
    }, [car])
    
    function addToCar(item : Glasses) {
    const itemExists = car.findIndex(glasses => glasses.id === item.id)
    if(itemExists >= 0) { // existe en el carrito
        if(car[itemExists].quantity >= MAX_ITEMS) return
        const updateCar = [...car]
        updateCar[itemExists].quantity++ 
        setCar(updateCar)
    } else {
        const newItem : CarItem = {...item, quantity : 1 }
        setCar([...car, newItem])
    }
    }
    
    function removeFromCar(id : Glasses['id']){
    setCar(prevCar => prevCar.filter(glasses => glasses.id !== id) )
    }
    
    function decreaseQuantity(id : Glasses['id']) {
    const updateCar = car.map( item => {
        if(item.id === id && item.quantity > MIN_ITEMS) {
        return {
            ...item,
            quantity: item.quantity - 1
        }
        }
        return item
    })
    setCar(updateCar)
    }
    
    function increaseQuantity(id : Glasses['id']) {
    const updateCar = car.map( item => {
        if(item.id === id && item.quantity < MAX_ITEMS) {
        return {
            ...item,
            quantity: item.quantity + 1
        }
        }
        return item
    })
    setCar(updateCar)
    }
    
    function clearCar() {
    setCar([])
    }

    // State derivado
    const isEmpty = useMemo(() => car.length === 0, [car])
    const carTotal = useMemo(() => car.reduce((total, item) => total + (item.quantity * item.price), 0), [car])
    
    return {
        data,
        car,
        addToCar,
        removeFromCar,
        decreaseQuantity,
        increaseQuantity,
        clearCar,
        isEmpty,
        carTotal
    }
}