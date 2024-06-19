
import React from 'react'

import styles from "@/styles/Category.module.css"

import categories from '@/database/category'
import Category from './Category'

interface iProps{
    isActivated: boolean
}

const Categories:React.FC<iProps> = ({isActivated}) => {
    return (
        <nav className={"w-[100%] " + (isActivated ? "":"hidden")}>
            <ul className={styles.category}>
            {categories.map((category, index)=>(
                <Category key={index} {...category}/>
            ))}
            </ul>
        </nav>
    )
    }

export default Categories
