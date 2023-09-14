import React from 'react';
import Img from 'react-cool-img';
import notFound from 'src/assets/images/not-found.svg';

import s from './not-found.module.scss';

const NotFound: React.FC = () => (
  <div className={s.notFound}>
    <Img src={notFound} alt="Not Found" />
  </div>
);

export { NotFound };
