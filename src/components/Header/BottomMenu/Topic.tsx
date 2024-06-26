import React from 'react'
import Link from 'next/link'
import { useState,useRef } from 'react'

import { iCategoryTopics } from '@/types/item'

const Topic = (topic:iCategoryTopics) => {
  const [visible,setVisible] = useState(false)
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
      },200)
    }
  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Link href={topic.url}>{topic.topic}</Link>
      <ul className={(visible?"flex":"hidden")}>
          {topic.types.map((topicType,index)=>(
          <li key={index}>
            <Link href={topicType.url}>{topicType.type}</Link>
          </li>))}
      </ul>
  </li>
  )
}

export default Topic
