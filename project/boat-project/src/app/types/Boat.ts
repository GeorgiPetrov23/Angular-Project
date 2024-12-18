export interface Boat {
    _id: string
    name: string,
    companyName: string,
    length: number,
    range: number,
    rechargeTime: number,
    imageUrl: string,
    owner: string
}

export interface BoatForCreate{
    name: string,
    companyName: string,
    length: number,
    range: number,
    rechargeTime: number,
    imageUrl: string,
    owner: string
}