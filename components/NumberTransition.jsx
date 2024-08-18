'use client'

import CountUp, { CountUpProps } from 'react-countup'

export const NumberTransition = (CountUpProps) => {
    return <CountUp {...CountUpProps}  className="fs-2 my-2 fw-bold" />
}