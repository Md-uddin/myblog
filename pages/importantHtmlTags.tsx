import { useContext, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { CodeBlock, dracula } from "react-code-blocks";
import { Title } from "@mantine/core";
import styles from "../styles/Home.module.scss";

import { UseContext } from "../components/useContext/useContext";

export default function Important_html_tags() {
  const { sidebarLinks, setSidebarLinks } = useContext(UseContext);
  useEffect(() => {
    setSidebarLinks([
      { link: "#base", label: "base", order: 1 },
      { link: "#datalist", label: "datalist", order: 1 },
      { link: "#details", label: "details", order: 1 },
      { link: "#dialog", label: "dialog", order: 1 },
      { link: "#picture", label: "picture", order: 1 },
    ]);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          5 Important/usefull html tags you must start using them in your
          projects.
        </title>
        <meta
          name="description"
          content="Here i will share you the 5 most important/usefull html tags that you can start using in your projects.This html tags are not mostly used by developer but it can some time really useful and time saving. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Title order={1}>
          5 Important/usefull html tags you must start using them in your
          projects.
        </Title>
        <hr className={styles.hr} />
        <Image
          src="/images/landing.jpg"
          width={600}
          height={400}
          layout="responsive"
          alt="important html tags to improve productivity"
        />
        <hr className={styles.hr} />

        <Title order={3}>Introduction</Title>
        <p>
          As a web developer, it is nowadays really difficult to master one
          language to its full potential as we have to be familiar with every
          new technology. but knowing the useful, important, time-saving and
          handy features will be a great idea to upgrade oneself. Especially
          using the unknown and less popular features will make you ahead of the
          crowd in your job or circle.
        </p>
        <Title order={2} my={30}>
          Here are the 5 tags
        </Title>
        <article className={styles.content}>
          <Title order={3} mt={30} mb={0} id="base">
            1.&lt;base&gt;
          </Title>
          <p>
            Many times we encountered the situation where we are hardcoding the
            same URL in HTML throughout the entire project. It happens usually
            with a website having many pages on a single domain and is used on
            the entire application to route the user.
          </p>
          <p>
            Now the most appropriate and awesome way to handle it is by using
            <span className={styles.codeBlock}> &lt;base&gt; </span>
            tag.
          </p>
          <p>
            <span className={styles.codeBlock}> &lt;base&gt; </span>
            tag is used to specify a most common url in the
            <span className={styles.codeBlock}> &lt;head&gt; </span>
            tag so that in the entire application we can use the relative path.
          </p>

          <Title className={styles.attributeTitle} order={4} mt={5} mb={0}>
            Tags and attributes required:
          </Title>
          <p className={styles.attributes}>
            <span>href</span> : for setting up the most common url.
          </p>
          <p className={styles.attributes}>
            <span>target</span>: optional , we can specify the target for all
            links using relative path.
          </p>

          <Title className={styles.codeHeader} order={4} mt={5} mb={4}>
            Code Example:-
          </Title>
          <CodeBlock
            text={`   <head>
          <base href="https://mywebsite.com/" target="_blank" >
        </head>
        <body>
          <a href="posts/id">using relative path</a>
        </body>`}
            language="html"
            showLineNumbers={true}
            theme={dracula}
            // onCopy={()=>{console.log('copied')}}
          />
        </article>
        {/* ///////////////////////////////////////2-article        */}
        <article className={styles.content}>
          <Title order={3} mt={30} mb={0}>
            2.&lt;datalist&gt;
          </Title>
          <p>
            The inputs for searching a product, city, state, person, and more
            are most commonly used nowadays to easily navigate or show the user
            in no time. But the user always doesn’t know what to enter mostly
            when he/she is searching for products. To give the user the hints
            and promote the top products you can use
            <span className={styles.codeBlock}> &lt;datalist&gt; </span>
            tag.
          </p>
          <p>
            <span className={styles.codeBlock}> &lt;datalist&gt; </span>
            can be provided with the many options which will get automatically
            filtered as the user types.
          </p>

          <Title className={styles.attributeTitle} order={4} mt={5} mb={0}>
            Tags and attributes required:
          </Title>
          <p className={styles.attributes}>
            <span>value: </span> : for setting up the most common url.
          </p>
          <p className={styles.attributes}>
            <span>&lt;option&gt;:</span>this tag is used to add the number of
            options you wish.
          </p>
          <p className={styles.attributes}>
            <span>list: </span> on search input you should put this tag defining
            th list id to be used.
          </p>

          <Title className={styles.codeHeader} order={4} mt={5} mb={4}>
            Code Example:-
          </Title>
          <CodeBlock
            text={`  <img src="image.jpg" alt="desk" usemap="#desk" >
        <map name="desk">
          <area
            shape="rect"
            coords="34,65,270,350"
            alt="laptop"
            href="lapto.htm"
          >
        </map>`}
            language="html"
            showLineNumbers={true}
            theme={dracula}
            // onCopy={()=>{console.log('copied')}}
          />
        </article>
        {/* /////////////////////////////3-article///////////////// */}
        <article className={styles.content}>
          <Title order={3} mt={30} mb={0} id="details">
            2.&lt;details&gt;
          </Title>
          <p>
            Nowadays accordions are pretty much used in every website but they
            are built with huge CSS or js. There is a solution to this problem.
            It is not the ideal solution styling wise but it can be really
            time-saving and handy to use.
          </p>
          <p>
            <span className={styles.codeBlock}> &lt;details&gt; </span>
            this tag can be used to give a word or statement on click which the
            summary is visible or hidden.no js or CSS just HTML.
          </p>

          <Title className={styles.attributeTitle} order={4} mt={5} mb={0}>
            Tags and attributes required:
          </Title>
          <p className={styles.attributes}>
            <span>&lt;summary&gt;: </span> this tag is used to give a heading
            click in which the content is revealed or hidden
          </p>
          <p className={styles.attributes}>
            <span>&lt;p&gt;:</span>this is used to wrap the description.
          </p>

          <Title className={styles.codeHeader} order={4} mt={5} mb={4}>
            Code Example:-
          </Title>
          <CodeBlock
            text={` <details>
            <summary>click to reveal or hide the below content.</summary>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into .
            </p>
          </details>`}
            language="html"
            showLineNumbers={true}
            theme={dracula}
            // onCopy={()=>{console.log('copied')}}
          />
        </article>
        {/* ////////////////////////////////////////4th-article/////////// */}
        <article className={styles.content}>
          <Title order={3} mt={30} mb={0} id="dialog">
            4.&lt;dialog&gt;
          </Title>
          <p>
            The most common way to indicate the user on a successful or
            unsuccessful event is to show a dialog with respective messages.
            These days instead of popups we are mostly using the inline text
            which is showing an error message or success on an event. Now to
            make this work we have to deal with many things if we are using
            vanilla js.
          </p>
          <p>
            To make a simple dialog with just one attribute open or close we can
            prefer<span className={styles.codeBlock}> &lt;dialog&gt; </span>
            in which everything works same as div the only difference is that
            the text inside the dialog can be visible or hidden based on the
            attribute passed.
          </p>

          <Title className={styles.attributeTitle} order={4} mt={5} mb={0}>
            Tags and attributes required:
          </Title>
          <p className={styles.attributes}>
            <span>open or close :</span>this attribute can be statically or
            dynamically passed to a dialog element to show or hide content.
          </p>

          <Title className={styles.codeHeader} order={4} mt={5} mb={4}>
            Code Example:-
          </Title>
          <CodeBlock
            text={`<dialog open>password cannot be empty!</dialog>`}
            language="html"
            showLineNumbers={true}
            theme={dracula}
            // onCopy={()=>{console.log('copied')}}
          />
        </article>
        {/* ////////////////////////////////////////5th-article/////////// */}
        <article className={styles.content}>
          <Title order={3} mt={30} mb={0} id="picture">
            5.&lt;picture&gt;
          </Title>
          <p>
            In your development journey, you may have come across the use of
            <span className={styles.codeBlock}> &lt;picture&gt; </span>
            tag or at least listen to it while learning HTML. It can be the most
            powerful tool for placing the perfect image in your design.
          </p>
          <p>
            Most of the developers use
            <span className={styles.codeBlock}> &lt;img&gt; </span>
            tag (including me 😅) and style it with media queries to adapt a
            decent look in most the screen size. The images and graphics are
            really impacting the look and feel of the website, Hence the
            <span className={styles.codeBlock}> &lt;img&gt; </span>
            usage does not offer a good solution.
          </p>
          <p>
            <span className={styles.codeBlock}> &lt;picture&gt; </span>
            is similar to a video tag providing multiple sources for a single
            image to give the browser more power to nicely select the one best
            fit for the current screen size.it also uses
            <span className={styles.codeBlock}> &lt;img&gt; </span>
            tag as a fallback element if none of the sources matches
          </p>

          <Title className={styles.attributeTitle} order={4} mt={5} mb={0}>
            Tags and attributes required:
          </Title>
          <p className={styles.attributes}>
            <span>&ltsource&gt; : </span>can provide one or more sources to use.
          </p>
          <p className={styles.attributes}>
            <span>&lt;img&gt; : </span>as a fallback image if none of the
            sources matches at the bottom.
          </p>
          <p className={styles.attributes}>
            <span>media : </span> to provide a media querry based on which
            browser uses the image.
          </p>
          <p className={styles.attributes}>
            <span>Srcset: </span> to give an absolute or relative path of the
            image.
          </p>

          <Title className={styles.codeHeader} order={4} mt={5} mb={4}>
            Code Example:-
          </Title>
          <CodeBlock
            text={`<picture>
  <source   media="(min-width:746px)"   srcset="big_image.jpg" >
  <source   media="(min-width:465px)"    srcset="medium_image.jpg" >
  <img   src="small_image.jpg"  alt="image" >
</picture>`}
            language="html"
            showLineNumbers={true}
            theme={dracula}
            // onCopy={()=>{console.log('copied')}}
          />
        </article>
        <Title order={3}>Conclusion:</Title>
        <p>
          Html has many tags which are not well known by every developer and it
          is updating itself constantly. And every new update in technologies is
          making life easier, So this can be the best deal to keep yourself
          updated and avoid the tags which are No more supported by browsers. Do
          not forget to share with your friend if it was helpful for you. Thanks
          :)
        </p>
      </section>
    </div>
  );
}
