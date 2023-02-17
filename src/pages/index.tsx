import { Button, Htag, P, Rating, Tag } from 'components';
import { Layout, withLayout } from 'layout/Layout';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import axios from 'axios';
import { MenuItem } from 'interfaces/menu.interface';

function Home({ menu }: HomeProps) {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
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

      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <ul>
        {menu.map(item => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
