import { Button, Htag } from 'components';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
    </div>
  );
}
