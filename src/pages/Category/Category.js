import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './category.scss'


function Category() {

  let { keyword } = useParams();

  return (
    <div>
      <Header />
      this is category {keyword}
    </div>
  )
}

export default Category