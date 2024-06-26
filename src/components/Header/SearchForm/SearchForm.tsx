"use client"
import React,{FormEvent, useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'

import { BsSearch } from "react-icons/bs"

import styles from"./SearchForm.module.css"

interface iSearchInputProps{isMobile:boolean}

const valdiationQuery  = Yup.object({
    textQuery: Yup.string().required("Digite algo").min(3,"Digite no minimo 3 caracteres")
})

const SearchForm:React.FC<iSearchInputProps> = (isMobile) => {
  const [queryText,setQueryText] = useState<string>("")

  return (
    <div>
      <Formik
       initialValues={{textQuery:''}}
       validationSchema={valdiationQuery}
       onSubmit={e=>console.log("Pesquisa realizada")}
       >
        <Form className={styles.searchForm}>
          <div className='searchContainer'>
            <Field name="textQuery" type="textQuery"/>
            <ErrorMessage name='textQuery' component="span"/>
          </div>

          <button
            type='submit'
            className="absolute centerItem right-3 bg-secondColor p-1 rounded-full text-white shadow-lg">
            {isMobile?<BsSearch/>:"BUSCAR"}
          </button>
        </Form>
    </Formik>
    </div>
  )
}

export default SearchForm
