import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './App.module.scss';
import FullScreenMessage from '@shared/FullScreenMessage';
import Heading from './components/sections/Heading';
import Video from './components/sections/Video';
import { IWedding } from './models/wedding';
import ImageGallery from './components/sections/ImageGallery';

const cx = classNames.bind(styles);

function App() {
  const [wedding, setWedding] = useState<IWedding | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // 1. wedding 데이터 호출
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8888/wedding')
      .then((response) => {
        if (response.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.');
        }
        return response.json();
      })
      .then((data) => {
        setWedding(data);
      })
      .catch((e) => {
        setError(true);
        console.error(e, '에러발생 ');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <FullScreenMessage type="loading" />;
  }

  if (error) {
    return <FullScreenMessage type="error" />;
  }

  if (wedding === null) {
    return null;
  }

  const { date, galleryImages } = wedding;

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <ImageGallery images={galleryImages} />
    </div>
  );
}

export default App;
