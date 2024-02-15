import { formatISO, parse } from 'date-fns'

export function convertToIso(strDAte){
    const newDate = parse(strDAte, 'dd/MM/yyyy', new Date())

    return formatISO(newDate)
}