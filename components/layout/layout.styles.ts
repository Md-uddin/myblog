import { createStyles } from "@mantine/core";


export const useStyles = createStyles((theme, _params, getRef) => ({
  
  wrapper: {
    // subscribe to color scheme changes right in your styles
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    maxWidth: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    
    borderRadius: theme.radius.sm,

  
  },

  child: {
    width: '100%',
    maxWidth: 1400,
    margin: '0 auto',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white',
    display: 'flex',
    flexDirection: 'row',

  },
  sidebar: {
    maxWidth: '300px',
    boxSizing: 'border-box',
    padding:'5px 1rem',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    display:'none'
    },
  },
  main: {
    width:'100%'
  }
}));