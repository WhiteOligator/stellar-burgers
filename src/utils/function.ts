import { TIngredientItem } from "./TypesAndIntareface";


export const getCost = (list: string[], ingredients: TIngredientItem[]): number => {
    let cost: number = 0
    list.map((el) => {
        let ingredient = ingredients.filter((ingr) => ingr._id === el)
            if (ingredient[0] !== undefined) {
                cost = cost + ingredient[0].price
            }
       
    })
    return cost
}

//2023-04-16T18:32:36.570Z

export const dateСhange = (startData: string): string => {
    
    const time = startData.slice(11, 16)
    const years = Number(startData.slice(0, 4))
    const mounths = Number(startData.slice(5, 7)) - 1
    const days = Number(startData.slice(8, 10))

    const now = new Date();
    const nowYear = now.getFullYear()
    const nowMounth = now.getMonth()
    const nowDays = now.getDate()

    if (years !== nowYear) {
        return `${nowYear - years} года назад, ${time}`
    } else if (mounths !== nowMounth) {
        return `${nowMounth - mounths} месяца назад, ${time}`
    } else if (days !== nowDays && days  !== nowDays - 1) {
        return `${nowDays - days} дня назад, ${time}`
    } else if (days !== nowDays) {
        return `Вчера, ${time}`
    } else if (days === nowDays) {
        return `Сегодня, ${time}`
    } else {
        return ''
    }

}