import { memo } from 'react';
import styles from './NotFound404.module.css';

import notFoundImage from '../../images/404.png';

import { Link } from 'react-router-dom';

const NotFound404 = () => {
    return (
        <section className={styles.NotFound}>
            <section className={styles.Container}>
                <img src={notFoundImage} alt="not-found" />
                <Link to='/' className={`text text_type_main-default text_color_inactive ${styles.Link} mt-10`}>Вернуться на орбитную станцию</Link>
            </section>
        </section>
    );
};

export default memo(NotFound404);