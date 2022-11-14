import { motion } from 'framer-motion'
import type { NextPageWithLayout } from 'next'
import styled from 'styled-components'
import Layout from '~/layouts/Layout'

const Index: NextPageWithLayout  = () => {
  /*-- styled-component --*/
  const IndexMain = styled.div`
  `

  /*-- variables --*/

  /*-- functions --*/

  /*-- life cycle --*/

  /*-- element --*/
  return <>
    <IndexMain>
      index
    </IndexMain>
  </>
}

Index.getLayout = (page) => <Layout metaTitle='index'>{ page }</Layout>

export default Index
