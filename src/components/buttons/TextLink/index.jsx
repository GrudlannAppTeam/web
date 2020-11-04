import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './index.module.scss';
import clsx from 'clsx';

const propTypes = {
    text: PropTypes.string,
    target: PropTypes.string,
    withIcon: PropTypes.bool,
    icon: PropTypes.node,
    className: PropTypes.string,
};

const TextLink = ({ text, target, withIcon, icon, className }) => {
    return (
        <small className={clsx(styles.start, className)}>
            <Link to={target}>{withIcon && <FontAwesomeIcon icon={icon || faAngleLeft} size='lg'/>}
                {text}
            </Link>
        </small>
    );
};

TextLink.propTypes = propTypes;

export default TextLink;