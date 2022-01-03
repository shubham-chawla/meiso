import Router from 'next/router'
import { useEffect } from 'react'

function Index() {
  useEffect(() => {
    Router.replace('/')
  }, [])

  return null
}

export default Index
