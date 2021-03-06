import React, { Component } from 'react'
import { ThemeContext } from '../Context';
import UserContextPage from './UserContextPage';

export default class ContextTypePage extends Component {
    static contextType = ThemeContext;
    
    render() {
        const { themeColor } = this.context;
        console.log('this', this);
        return (
            <div>
                <h3 className={themeColor}>ContextTypePage</h3>
                <UserContextPage></UserContextPage>
            </div>
        )
    }
}
