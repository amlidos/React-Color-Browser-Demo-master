import React, { useState } from 'react'
import ColorSlider from './ColorSlider'
import ColorOutput from './ColorOutput'
import styles from './ColorBrowser.module.css'

const ColorBrowser = () => {
    const [state, setState] = useState({
        red: Math.floor(Math.random() * 256), 
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256)
    });

    const updateColor = (e) => {
        setState({
            ...state,
           [e.target.name]: Number(e.target.value)
        })
    }
    const getRandomColor = () => {
        setState({
            red: Math.floor(Math.random() * 256),
            green: Math.floor(Math.random() * 256),
            blue: Math.floor(Math.random() * 256)
        })
    }
    return (
        <section className={styles["color-browser"]}>
            <h1>Welcome to the Color Browser</h1>
            <div className={styles.sliders}>
                <ColorSlider
                    name="red"
                    label="Red"
                    min={0}
                    max={255}
                    value={state.red}
                    onChange={updateColor}
                />
                <ColorSlider
                    name="green"
                    label="Green"
                    min={0}
                    max={255}
                    value={state.green}
                    onChange={updateColor}
                />
                <ColorSlider
                    name="blue"
                    label="Blue"
                    min={0}
                    max={255}
                    value={state.blue}
                    onChange={updateColor}
                />
            </div>

            <ColorOutput
                red={state.red}
                green={state.green}
                blue={state.blue}
            />
            <br/>
            <button onClick={getRandomColor}>Random Color</button>
        </section>
    )
}

export default ColorBrowser
