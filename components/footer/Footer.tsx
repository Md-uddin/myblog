import React from 'react';
import { createStyles, Container, Group, Anchor } from '@mantine/core';
import Router from 'next/router';


const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white',
    width:'100%'
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
    textTransform:'capitalize'
  },
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export function FooterSimple({ links }: FooterSimpleProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => {
        event.preventDefault()
      Router.push(link.link)}}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner} size={1350}>
        Ease
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}