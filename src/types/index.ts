export type Glasses = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CarItem = Glasses & {
    quantity: number
}

export type GlassesID = Glasses['id']