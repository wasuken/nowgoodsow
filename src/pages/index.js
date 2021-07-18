import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import 'semantic-ui-css/semantic.min.css'
import NavHeader from '../components/Header'
import { Menu, Rail, Header, Segment, Container, Grid, Item } from 'semantic-ui-react'

export default function Index() {
  const comp_kvs = [
	{
	  key: '会社名',
	  value: '株式会社Now Good Sow',
	},
	{
	  key: '創立',
	  value: '2020-10-10',
	},
	{
	  key: '代表者',
	  value: '代表取締役 野駒 総多郎',
	},
	{
	  key: '資本金',
	  value: '100,00百万円',
	},
	{
	  key: '従業員数',
	  value: '50人',
	},
	{
	  key: '所在地',
	  value: '福井県福井市板垣町58-17',
	},
	{
	  key: '事業内容',
	  value: '夢を追い掛ける',
	},
	{
	  key: '売上',
	  value: '10円',
	},
  ];
  const values = [
	{
	  key: 'Toilet is sanctuary.',
	  value: 'トイレはきれいに使う。ドアを勢い良く閉めるな。',
	},
	{
	  key: "You can't help it, it's a baby.",
	  value: 'しょうがねーだろ、赤ちゃんなんだから。',
	},
	{
	  key: 'Just Do It.',
	  value: 'そうはいっても、明日やりたい。',
	},
  ];
  return (
    <div style={{background: 'gray'}}>
	  <Container fluid>
		<Head>
          <title>株式会社Now Good Sow</title>
          <meta name="description" content="今をよりよく" />
          <link rel="icon" href="/favicon.png" />
		</Head>
		<Container fluid>
		  <Menu inverted fixed='top'>
			<Menu.Item name="株式会社Now Good Sow" as='h2'/>
		  </Menu>
		</Container>
      </Container>
	  <Segment vertical fluid style={{ paddingTop: '0px', marginBottom: '2em', paddingBottom: '2em' }}>
		<div className="img-box">
		  <img alt="" src="/cat1.png" className="ui fluid image" />
		  <div className="top-top-msg msg">
			<i aria-hidden="true">
			  <div>
				もっと良い、今を手に。もっと良い、未来を手に。
			  </div>
			</i>
		  </div>
		  <div className="top-bottom-msg msg">
			<i aria-hidden="true">
			  <div>
				We have sow good,
			  </div>
			  <div style={{paddingTop: '20px'}}>
				We are so good.
			  </div>
			</i>
		  </div>
		</div>
		<div className="img-box" style={{paddingTop: '5px'}}>
		  <img alt="" src="/cat2.jpg" className="ui fluid image" />
		  <div className="company-top-msg msg">
			<i>
			  Company
			</i>
		  </div>
		  <div className="company-center-msg msg" style={{width: '80%'}}>
			<Grid style={{width: '100%'}} padded columns={comp_kvs.length}>
			  {
				comp_kvs.map((v,i) => (
				  <Grid.Row width={12} key={i}>
					<Grid.Column width={4}>
					  {v.key}
					</Grid.Column>
					<Grid.Column width={8}>
					  {v.value}
					</Grid.Column>
				  </Grid.Row>
				))
			  }
			</Grid>
		  </div>
		</div>
		<div className="img-box" style={{paddingTop: '5px'}}>
		  <img alt="" src="/tiger1.jpg" className="ui fluid image" />
		  <div className="company-top-msg msg">
			<i>
			  Value
			</i>
		  </div>
		  <div className="company-center-msg msg" style={{width: '80%'}}>
			<Grid style={{width: '100%'}} padded >
			  {
				values.map((v,i) => (
				  <Grid.Row width={12} key={i}>
					<Grid.Column width={12}>
					  {v.key}
					</Grid.Column>
					<hr/>
					<Grid.Column width={12}>
					  {v.value}
					</Grid.Column>
				  </Grid.Row>
				))
			  }
			</Grid>
		  </div>
		</div>
		<div className="img-box" style={{paddingTop: '5px'}}>
		  <img alt="" src="/cat3.jpg" className="ui fluid image" />
		  <div className="company-top-msg msg">
			<i style={{color: 'white !important'}}>
			  <h2>
				Contact
			  </h2>
			</i>
		  </div>
		  <div className="company-center-msg msg" style={{width: '80%'}}>
			詳細は
			<Link href="/contact">こちら</Link>
			まで。
		  </div>
		</div>
	  </Segment>
    </div>
  )
}
