"use client"
import React, { useEffect } from 'react'
import StyledComponentsRegistry from '@/services/base/antdRegistry'
import {Provider} from 'react-redux';
import {store} from '@/store'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/global';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import {themes} from "@/styles/themes"
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

export default function Providers({children}: {children:React.ReactNode}) {
    return (
        <StyledComponentsRegistry>
            <Provider store={store}>
                <ThemeProvider theme={themes.default}>
                    <GlobalStyle/>
                    <AntdRegistry>
                        {children}
                    </AntdRegistry>
                </ThemeProvider>
            </Provider>
        </StyledComponentsRegistry>
    )
}
