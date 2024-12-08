import classNames from 'classnames/bind';

import Section from '@shared/Section';
import styles from './ImageGallery.module.scss';
import ImageViewer from '../ImageViewer';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const open = selectedIndex > -1;

  const handleSelectedImage = (idx: number) => {
    setSelectedIndex(idx);
  };

  const handleClose = () => {
    setSelectedIndex(-1);
  };

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, index) => (
            <li
              key={index}
              className={cx('wrap-image')}
              onClick={() => {
                handleSelectedImage(index);
              }}
            >
              <img src={src} alt={`사진첩 이미지 ${index + 1}`} />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIndex={selectedIndex}
        onClose={handleClose}
      />
    </>
  );
}

export default ImageGallery;
