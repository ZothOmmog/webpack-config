import { useEffect, useState } from 'react';
import style from './app.scss';

export const App = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const lazyLoad = async () => {
      const { default: _ } = await import('lodash');
      const value = _.join(['Hello', 'webpack'], ' ');

      setValue(value);
    };

    lazyLoad();
  }, []);

  return <main className={style.hello}>{value}</main>;
};
