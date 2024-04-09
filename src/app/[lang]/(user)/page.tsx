"use client"
import { ButtonCommonDemo } from '@/components/common/DemoButton/demo.styles'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Home() {
    const route = useRouter();
    return (
        <center>
            <h3>USER HOME PAGE</h3>
            <div>
                <ButtonCommonDemo
                $color='blue'
                onClick={() => route.push("/user/demopage")}
                >DEMO PAGE</ButtonCommonDemo>
            </div>
        </center>
    )
}
