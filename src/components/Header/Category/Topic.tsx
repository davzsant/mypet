import React from 'react'
import Link from 'next/link'
import { useState,useRef } from 'react'

import { iCategoryTopics } from '@/types/item'

const Topic = (topic:iCategoryTopics,url:string) => {
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
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Link href={"categorias/"+url+topic.url}>{topic.topic}</Link>
      <div className={(visible?"flex":"hidden")}>
          {topic.types.map(topicType=>(
          <Link href={topicType.url}>{topicType.type}</Link>))}
      </div>
  </div>
  )
}

export default Topic
