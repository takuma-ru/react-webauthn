import React from 'react'
import Image from 'next/image'
import router, { useRouter } from 'next/router'
import styled from 'styled-components'
import favicon from '~/public/favicon.ico'
import { routerPathLists } from '~/scripts/utils/routerLinks'
import { Button } from '../utils/Button'
import colors from '~/styles/colors'

interface PropsInterface {
}

const Header: React.FC<PropsInterface> = (props) => {
  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: start;

    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 64px;
    padding: 1rem 2rem;

    .title-button {
      display: inline-flex;
      align-items: center;

      height: 100%;
      margin-right: 1rem;

      font-weight: bold;
      cursor: pointer;

      .img {
        position: relative;
        height: 100%;
        margin-right: 0.5rem;

        aspect-ratio: 1/1;
      }
    }

    .link-buttons {
      display: flex;

    }
  `

  const path = useRouter().pathname

  return <>
    <Header>
      <div
        className='title-button'
        onClick={() => { router.push('/') }}
      >
        <div className='img'>
          <Image
            src={favicon.src}
            alt='densan-logo'
            layout='fill'
          />
        </div>
        サイト名
      </div>
      <div className='link-buttons'>
      {
          routerPathLists.map((link, index) => {
            return <>
              <Button
                key={index}
                icon={link.icon}
                link={link.link}
                color={link.link === path ? colors.white.darken[2] : 'transparent'}
              >
                { link.node }
              </Button>
            </>
          })
        }
      </div>
    </Header>
  </>
}

Header.defaultProps = {
}

export default Header
