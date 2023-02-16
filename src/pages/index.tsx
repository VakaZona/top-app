import { Button, Htag, P, Rating, Tag } from 'components';
import { Layout } from 'layout/Layout';
import React, { useState } from 'react';

export default function Home() {
  const [rating, setRating] = useState<number>(4);

  return (
    <Layout>
      <Htag tag='h1'>Test</Htag>

      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>

      <P size='l'>Big text</P>
      <P >Medium text</P>
      <P size='s'>Small text</P>

      <Tag size='s' >Small tag</Tag>
      <Tag size='m' color='red'>Red medium</Tag>
      <Tag size='s' color='green' href='8.8.8.8'>Green</Tag>
      <Tag color='primary'>Primary</Tag>

      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </Layout>
  );
}
