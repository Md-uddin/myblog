import React, { useState, useMemo } from "react";
import { createStyles, Box, Text, Group } from "@mantine/core";
import { ListSearch } from "tabler-icons-react";
import { useRouter } from "next/router";

const LINK_HEIGHT = 38;
const INDICATOR_SIZE = 10;
const INDICATOR_OFFSET = (LINK_HEIGHT - INDICATOR_SIZE) / 2;

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: "block",

    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    lineHeight: `${LINK_HEIGHT}px`,
    fontSize: theme.fontSizes.sm,
    height: LINK_HEIGHT,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `2px solid ${
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.grape[2]
    }`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.grape[0],
    },
  },

  linkActive: {
    fontWeight: 500,
    // color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    color: theme.colors.grape[5],
  },

  links: {
    position: "relative",
    textTransform: "uppercase",
  },

  indicator: {
    transition: "transform 150ms ease",
    border: `2px solid ${
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7]
    }`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    height: INDICATOR_SIZE,
    width: INDICATOR_SIZE,
    borderRadius: INDICATOR_SIZE,
    position: "absolute",
    left: -INDICATOR_SIZE / 2 + 1,
    background: theme.colors.grape[6],
  },
}));
type linkType = { label: string; link: string; order: number };
interface TableOfContentsFloatingProps {
  links?: linkType[] | null;
}
type item = {
  link: string;
  label: string;
  order: number;
};
export function TableOfContentsFloating({
  links,
}: TableOfContentsFloatingProps) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(1);
  const router = useRouter();
  let route = router.asPath.slice(1);
  console.log(route);
  useMemo(() => {
    links?.map((item: item, index: number) => {
      if (item.link === route) {
        // console.log("one found", item);
        setActive(index);
      }
    });
  }, [router]);

  const items = links?.map((item: item, index: number) => (
    <Box<"a">
      component="a"
      href={item.link}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
        router.push(item.link);
      }}
      key={item.label}
      className={cx(classes.link, { [classes.linkActive]: active === index })}
      sx={(theme) => ({ paddingLeft: item.order * theme.spacing.lg })}
    >
      {item.label}
    </Box>
  ));

  return (
    <div>
      <Group mb="md">
        <ListSearch size={18} />
        <Text>List of tags</Text>
      </Group>
      <div className={classes.links}>
        <div
          className={classes.indicator}
          style={{
            transform: `translateY(${
              active * LINK_HEIGHT + INDICATOR_OFFSET
            }px)`,
          }}
        />
        {items}
      </div>
    </div>
  );
}
