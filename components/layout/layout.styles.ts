import { createStyles } from "@mantine/core";


export const useStyles = createStyles((theme, _params, getRef) => ({
  
  wrapper: {
    // subscribe to color scheme changes right in your styles
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    maxWidth: '100%',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding:0,
    borderRadius: theme.radius.sm,

  
  },

  child: {
    width: '100%',
    maxWidth: 1140,
    margin: '0 auto',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white',
    display: 'flex',
    flexDirection: 'row',
    // position: 'relative',

  },
  sidebar: {
    maxWidth: '300px',
    boxSizing: 'border-box',
    padding: '5px 1rem',
    position: 'sticky',
    top:'1rem',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    display:'none'
    },
    borderRight: '2px solid #d6d6d6',
    minWidth:'max-content'
  },
  main: {
    width: '100%',
    // padding:0,
    paddingTop: '1rem', 
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding:0
      },
  }
}));