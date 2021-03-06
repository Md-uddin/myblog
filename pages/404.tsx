import React from "react";
import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
    height: "90vh",
    display: "grid",
    placeItems: "center",
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none ",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none ",
    },
  },
}));

export default function NotFoundImage() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
      >
        <div className={classes.mobileImage}>
          <Image
            src="/images/404.svg"
            layout="intrinsic"
            width={250}
            height={200}
            alt="you are not wrong url, click to return to home"
          />
        </div>
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Link href="/importantHtmlTags">
            <Button
              variant="outline"
              size="md"
              mt="xl"
              className={classes.control}
            >
              Get back to home page
            </Button>
          </Link>
        </div>
        <div className={classes.desktopImage}>
          <Image
            src="/images/404.svg"
            layout="intrinsic"
            width={450}
            height={300}
            alt="you are not wrong url, click to return to home"
          />
        </div>
      </SimpleGrid>
    </Container>
  );
}
