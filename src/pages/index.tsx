import { Button, Htag } from 'components';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' className='test'>Button</Button>
      <Button appearance='ghost'>Button</Button>
    </div>
  );
}
