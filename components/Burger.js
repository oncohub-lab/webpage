import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileMenu } from '../actions/ctrlActions';

import styles from '../styles/Burger.module.css';

const Burger = () => {
  const toggle = useSelector((state) => state.reducer.ctrlReducer.toggle);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(toggleMobileMenu(toggle));
      }}
      className={styles.container}
    >
      <div className={styles.wrap}>
        <div
          className={toggle ? styles.line1 + ' ' + styles.unfold : styles.line1}
        ></div>
        <div
          className={toggle ? styles.line2 + ' ' + styles.unfold : styles.line2}
        ></div>
        <div
          className={toggle ? styles.line3 + ' ' + styles.unfold : styles.line3}
        ></div>
      </div>
    </div>
  );
};

export default Burger;
