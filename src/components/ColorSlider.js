import React from 'react'
import PropTypes from 'prop-types'
import styles from './ColorBrowser.module.css'

const ColorSlider = ({name, label, min, max, value, onChange}) => {
    return (
        <div>
            <label
                className={styles.label}
                style={{ color: name }}
                htmlFor="{name}">{label}:
            </label>
            <input
                className={styles.range}
                type="range"
                name={name}
                id={name}
                value={value}
                min={min}
                max={max}
                onChange={onChange}
            />
            <label className={styles.label}>{value}</label>
        </div>
    )
}

ColorSlider.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.number,
    onChange: PropTypes.func
}

ColorSlider.defaultProps = {
    value: 0
}

export default ColorSlider
