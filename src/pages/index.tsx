import { Button, Htag, P, Tag } from 'components';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Htag tag='h1'>Text</Htag>

      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>

      <P size='l'>Big text</P>
      <P >Medium text</P>
      <P size='s'>Small text</P>

      <Tag size='s'>Small tag</Tag>
      <Tag size='m' color='red'>Red medium</Tag>
      <Tag size='s' color='green' href='8.8.8.8'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
    </div>
  );
}
