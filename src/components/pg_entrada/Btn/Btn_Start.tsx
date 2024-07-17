'use client'
import Link from 'next/link'
import { Botton, Btn, Left, Rigth, Top } from './styles'

export const Btn_Start = () => {
    return (
        <Link href='/home'>
            <Btn >
                <Top></Top>
                <Left></Left>
                <Rigth></Rigth>
                <Botton></Botton>
                Começar a praticar
            </Btn>
        </Link>
    )
}
