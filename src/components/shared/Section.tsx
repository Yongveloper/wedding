import classNames from 'classnames/bind';
import React from 'react';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

function Section({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
}) {
  return (
    <section className={cx(['container', className])}>
      {title && <div className={cx('txt-title')}>{title}</div>}
      {children}
    </section>
  );
}

export default Section;
