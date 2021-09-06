import React, { Component } from 'react'
import { ThemeConsumer } from '../Context'

export default class ConsummerPage extends Component {
    render() {
        return (
            <div className="border">
                <ThemeConsumer>
                    {themeContext => (
                        <div className={themeContext.themeColor}>ThemeConsumer</div>
                    )}
                </ThemeConsumer>
            </div>
        )
    }
}
