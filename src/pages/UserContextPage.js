import React, {useContext} from 'react'
import { ThemeContext } from '../Context'

export default function UserContextPage() {
    const context = useContext(ThemeContext)
    console.log(context); 
    const {themeColor} = context
    return (
        <div>
            <h3 className={themeColor}>UserContextPage</h3>
        </div>
    )
}
