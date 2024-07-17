'use client'

import { ReactNode } from "react";
import { Container_div } from './style';


interface ContainerType {
    children: ReactNode;
}

export const Container_bk = ({ children }: ContainerType) => {
    return (
        <Container_div>
             {children}
        </Container_div>
    )
}
