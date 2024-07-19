'use client'
import Link from 'next/link';
import { Alert, ButtonAlert, ButtonNext, Container_btn_alert, Stack } from './styles';

export const Alert_return = () => {
    return (
        <Stack>
            <Alert
                severity="success"
                action={
                    <Container_btn_alert>
                        <Link href={'/home'}>
                            <ButtonAlert color="inherit" size="small">
                                Return para home
                            </ButtonAlert>
                        </Link>
                        <ButtonNext color="inherit" size="small">
                            Proximo Desafio
                        </ButtonNext>
                    </Container_btn_alert>
                }
            >
                <strong>"Parabéns! Continue praticando e desafiando sua mente!"</strong>
            </Alert>
        </Stack>
    );
}
//https://mui.com/material-ui/react-alert/