import React from 'react';
import styles from './loading.module.css';

export const Loading = ({ children, ...props }) => {
  const color = { color: props.color || '#0072bc' };
  const marginLeft = { marginLeft: props.marginLeft || 'inherit' };
  const marginTop = { marginTop: props.marginTop || 'inherit' };
  const marginRight = { marginRight: props.marginRight || 'inherit' };
  const marginBottom = { marginBottom: props.marginBottom || 'inherit' };
  return (
    <div
      className={styles.loaderWrapper}
      style={{ ...marginLeft, ...marginTop, ...marginRight, ...marginBottom }}>
      <div className={styles.loader} style={{ ...color }} />
      {children}
    </div>
  );
}

export const Loader = (props) => {
  const { visible, content } = props;
  const color = props.color || '#fff'
  return (
    visible && (
      <div className="preloader">
        <Loading color={color} />
        {content && <div className="loader-content" style={{color}}>{content}</div>}
      </div>
    )
  );
}
