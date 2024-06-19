import React from 'react'
import Link from 'next/link'
import { iCatagory } from '@/types/item'
import { useState, useRef } from 'react'
import Topic from './Topic'

const Category:React.FC<iCatagory> = (category) => {
    const [visible,setVisible] = useState<boolean>(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleMouseEnter = () =>{
      if(timeoutRef.current){
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
      setVisible(true)
    }

    const handleMouseLeave = () =>{
      timeoutRef.current = setTimeout(()=>{
        setVisible(false)
      },100)
    }
  return (
      <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <Link href={"categorias/"+category.url} >
        <p>{category.name}</p></Link>
        <div className={!visible?"hidden":"flex"}>
            {category.topics.map((topic)=>(
                <Topic {...topic} url={category.url}/>
            ))}
        </div>
    </li>
  )
}

export default Category
