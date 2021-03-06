import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { CodeBlock, dracula } from "react-code-blocks";
import { Button, Text, Title } from "@mantine/core";
import styles from "../styles/Home.module.scss";
import { useMantineTheme } from "@mantine/core";

export default function Home() {
  const theme = useMantineTheme();
  console.log(theme);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="TRugglbEPYtaOGoRq49KJoH85POWBB0_SqI-jUGNQig"
        />
      </Head>
      <article>
        <Title order={1}>
          this will gonna be the title of the blog which will help you rich and
          reach where you wanna go.{" "}
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          fuga laborum neque aliquam voluptatem? Quibusdam, voluptatibus.
          Maiores quibusdam consequatur aut asperiores delectus enim sapiente
          dolore suscipit. Quidem impedit rerum itaque modi.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          fuga laborum neque aliquam voluptatem? Quibusdam, voluptatibus.
          Maiores quibusdam consequatur aut asperiores delectus enim sapiente
          dolore suscipit. Quidem impedit rerum itaque modi.
        </p>
        <CodeBlock
          text={`import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { CodeBlock, dracula } from
"react-code-blocks";
import { Button, Text, Title } from '@mantine/core';
import styles from '../styles/Home.module.scss';
import { useMantineTheme } from '@mantine/cor          export default function Home() {

const theme = useMantineThemconsole.log(theme)`}
          language="typescript"
          showLineNumbers={true}
          theme={dracula}
          onCopy={() => {
            console.log("copied");
          }}
        />
        <Title order={2} my={30}>
          This wil be the second text
        </Title>
        <Title order={3} mt={30} mb={0}>
          1.This is the number
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint
          dolorem iusto nisi? Dolore incidunt corrupti blanditiis, libero iure,
          fugiat id ipsam aut minus, consectetur quo officiis amet tempora. Est
          voluptatem dolorum illum fugit assumenda! Necessitatibus suscipit est
          dicta expedita id officiis temporibus iure nostrum, dolorem
          repellendus corporis vel perspiciatis quo a excepturi consequuntur
          neque fugiat, hic odio! Quae, laudantium? Reiciendis voluptatem
          quibusdam officiis ad quam. Perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint
          dolorem iusto nisi? Dolore incidunt corrupti blanditiis, libero iure,
          fugiat id ipsam aut minus, consectetur quo officiis amet tempora. Est
          voluptatem dolorum illum fugit assumenda! Necessitatibus suscipit est
          dicta expedita id officiis temporibus iure nostrum, dolorem
          repellendus corporis vel perspiciatis quo a excepturi consequuntur
          neque fugiat, hic odio! Quae, laudantium? Reiciendis voluptatem
          quibusdam officiis ad quam. Perferendis.
        </p>
        <Title order={3} mt={30} mb={0}>
          1.This is the number
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint
          dolorem iusto nisi? Dolore incidunt corrupti blanditiis, libero iure,
          fugiat id ipsam aut minus, consectetur quo officiis amet tempora. Est
          voluptatem dolorum illum fugit assumenda! Necessitatibus suscipit est
          dicta expedita id officiis temporibus iure nostrum, dolorem
          repellendus corporis vel perspiciatis quo a excepturi consequuntur
          neque fugiat, hic odio! Quae, laudantium? Reiciendis voluptatem
          quibusdam officiis ad quam. Perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint
          dolorem iusto nisi? Dolore incidunt corrupti blanditiis, libero iure,
          fugiat id ipsam aut minus, consectetur quo officiis amet tempora. Est
          voluptatem dolorum illum fugit assumenda! Necessitatibus suscipit est
          dicta expedita id officiis temporibus iure nostrum, dolorem
          repellendus corporis vel perspiciatis quo a excepturi consequuntur
          neque fugiat, hic odio! Quae, laudantium? Reiciendis voluptatem
          quibusdam officiis ad quam. Perferendis.
        </p>
        <div className={styles.imgContainer}>
          <Image
            src="/images/sample-image.png"
            alt="smaple image"
            width={800}
            height={500}
            layout="responsive"
          />
        </div>
        <Title order={3} mt={30} mb={0}>
          1.This is the number
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint
          dolorem iusto nisi? Dolore incidunt corrupti blanditiis, libero iure,
          fugiat id ipsam aut minus, consectetur quo officiis amet tempora. Est
          voluptatem dolorum illum fugit assumenda! Necessitatibus suscipit est
          dicta expedita id officiis temporibus iure nostrum, dolorem
          repellendus corporis vel perspiciatis quo a excepturi consequuntur
          neque fugiat, hic odio! Quae, laudantium? Reiciendis voluptatem
          quibusdam officiis ad quam. Perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint
          dolorem iusto nisi? Dolore incidunt corrupti blanditiis, libero iure,
          fugiat id ipsam aut minus, consectetur quo officiis amet tempora. Est
          voluptatem dolorum illum fugit assumenda! Necessitatibus suscipit est
          dicta expedita id officiis temporibus iure nostrum, dolorem
          repellendus corporis vel perspiciatis quo a excepturi consequuntur
          neque fugiat, hic odio! Quae, laudantium? Reiciendis voluptatem
          quibusdam officiis ad quam. Perferendis.
        </p>
        <Title order={3} mt={30} mb={0}>
          1.This is the number
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint
          dolorem iusto nisi? Dolore incidunt corrupti blanditiis, libero iure,
          fugiat id ipsam aut minus, consectetur quo officiis amet tempora. Est
          voluptatem dolorum illum fugit assumenda! Necessitatibus suscipit est
          dicta expedita id officiis temporibus iure nostrum, dolorem
          repellendus corporis vel perspiciatis quo a excepturi consequuntur
          neque fugiat, hic odio! Quae, laudantium? Reiciendis voluptatem
          quibusdam officiis ad quam. Perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint
          dolorem iusto nisi? Dolore incidunt corrupti blanditiis, libero iure,
          fugiat id ipsam aut minus, consectetur quo officiis amet tempora. Est
          voluptatem dolorum illum fugit assumenda! Necessitatibus suscipit est
          dicta expedita id officiis temporibus iure nostrum, dolorem
          repellendus corporis vel perspiciatis quo a excepturi consequuntur
          neque fugiat, hic odio! Quae, laudantium? Reiciendis voluptatem
          quibusdam officiis ad quam. Perferendis.
        </p>
        <Title order={3} mt={30} mb={0} id="third-title">
          1.This is the number
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint
          dolorem iusto nisi? Dolore incidunt corrupti blanditiis, libero iure,
          fugiat id ipsam aut minus, consectetur quo officiis amet tempora. Est
          voluptatem dolorum illum fugit assumenda! Necessitatibus suscipit est
          dicta expedita id officiis temporibus iure nostrum, dolorem
          repellendus corporis vel perspiciatis quo a excepturi consequuntur
          neque fugiat, hic odio! Quae, laudantium? Reiciendis voluptatem
          quibusdam officiis ad quam. Perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint
          dolorem iusto nisi? Dolore incidunt corrupti blanditiis, libero iure,
          fugiat id ipsam aut minus, consectetur quo officiis amet tempora. Est
          voluptatem dolorum illum fugit assumenda! Necessitatibus suscipit est
          dicta expedita id officiis temporibus iure nostrum, dolorem
          repellendus corporis vel perspiciatis quo a excepturi consequuntur
          neque fugiat, hic odio! Quae, laudantium? Reiciendis voluptatem
          quibusdam officiis ad quam. Perferendis.
        </p>
        <Title order={3} mt={30} mb={0}>
          1.This is the number
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint
          dolorem iusto nisi? Dolore incidunt corrupti blanditiis, libero iure,
          fugiat id ipsam aut minus, consectetur quo officiis amet tempora. Est
          voluptatem dolorum illum fugit assumenda! Necessitatibus suscipit est
          dicta expedita id officiis temporibus iure nostrum, dolorem
          repellendus corporis vel perspiciatis quo a excepturi consequuntur
          neque fugiat, hic odio! Quae, laudantium? Reiciendis voluptatem
          quibusdam officiis ad quam. Perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint
          dolorem iusto nisi? Dolore incidunt corrupti blanditiis, libero iure,
          fugiat id ipsam aut minus, consectetur quo officiis amet tempora. Est
          voluptatem dolorum illum fugit assumenda! Necessitatibus suscipit est
          dicta expedita id officiis temporibus iure nostrum, dolorem
          repellendus corporis vel perspiciatis quo a excepturi consequuntur
          neque fugiat, hic odio! Quae, laudantium? Reiciendis voluptatem
          quibusdam officiis ad quam. Perferendis.
        </p>
      </article>
    </div>
  );
}
