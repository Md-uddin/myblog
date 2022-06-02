import { ReactNode,FC } from "react";
import { MantineProvider } from '@mantine/core';

type Props = {
  name: string;
  childrens:ReactNode
}

const Layout:FC<Props> = ({childrens}) => {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Open Sans,sans serif',
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
    }}
    >
      {childrens}
    </MantineProvider>
  )
}

export default Layout