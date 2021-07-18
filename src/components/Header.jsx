import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import 'semantic-ui-css/semantic.min.css'
import { Container, Input, Menu } from 'semantic-ui-react'
import Link from 'next/link'

export default function Header(props) {
  const {handleItemClick, item} = props;
  const items = [
	'about',
	'company',
	'recruit',
	'services',,
  ];
  return (
    <Container fluid>
      <Head>
        <title>Now Good Sow</title>
        <meta name="description" content="今をよりよく" />
        <link rel="icon" href="/favicon.png" />
      </Head>
	  <Container fluid>
		<Menu inverted>
		  <Link href="/">
			<Menu.Item name="top" active={'top' === item} />
		  </Link>
		  {
			items.map((i,k) => (
			  <Link href={`/${i}`} key={k}>
				<Menu.Item name={i} active={i === item} />
			  </Link>
			))
		  }
		</Menu>
	  </Container>
    </Container>
  )
}
