type breakpointsT ={
    xs: number,
    s: number, 
    m: number,
    l: number, 
    xl: number
}
const breakpoints: breakpointsT = {
    xs: 375,
    s: 576, 
    m: 768,
    l: 992, 
    xl: 1200
}

export const mq = (bp: keyof breakpointsT)=> {
    const val = breakpoints[bp];
    return `@media (min-width: ${val}px)`
}