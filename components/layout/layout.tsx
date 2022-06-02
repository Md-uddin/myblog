import { ReactNode,FC } from "react";
import { MantineProvider } from '@mantine/core';
import {useStyles} from './layout.styles'

type Props = {
  name: string;
  children:ReactNode
}

const Layout:FC<Props> = ({children}) => {
  const {classes} = useStyles();


  return (
    <MantineProvider
      theme={{
        fontFamily: 'Open Sans,sans serif',
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
        colorScheme: 'dark',
        colors: {
          // Add your color
          'deep-blue': ['#E9EDFC', '#C1CCF6', '#99ABF0' /* 7 other shades */],
          // or replace default theme color
          blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* 7 other shades */],
        },
    }}
    >
      <div className={classes.wrapper}>
        <div className={classes.child}>
          
          {children}
          childrens
      </div>
      </div>
    </MantineProvider>
  )
}

export default Layout