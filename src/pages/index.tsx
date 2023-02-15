import { Button, Htag, P, Tag } from 'components';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [counter, setCounter] = useState<number>(0);

  // Not use
  // if (counter > 0) {
  //   useEffect(() => {
  //     console.log('Counter' + counter);
  //     return function cleanup() {
  //       console.log('Unmount');
  //     };
  //   });
  // }

  useEffect(() => {
    if (counter > 0) {
      console.log('Counter' + counter);
    }
    return function cleanup() {
      console.log('Unmount');
    };
  });


  return (
    <div>
      <Htag tag='h1'>{counter}</Htag>

      <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Button</Button>
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
