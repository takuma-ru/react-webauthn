import { motion } from 'framer-motion'
import router from 'next/router'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import colors from '~/styles/colors'
import { dependsLuminanceColor } from '~/styles/dependsLuminanceColor'
import { IconNameType } from '~/types/icon/iconName'
import { PropsInterface as IconProps } from '~/components/utils/Icon/Icon'
import { Icon } from '~/components/utils/Icon'

export interface PropsInterface {
  color?: string
  icon?: IconNameType
  iconProp?: IconProps
  link?: string
  children?: ReactNode
  style?: React.CSSProperties
  onClick?: () => void
}

const Button: React.FC<PropsInterface> = (props) => {
  /*-- styled-component --*/
  const Button = styled(motion.button)`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;

    position: relative;
    z-index: 0;
    padding: 0.5rem 1.5rem;
    margin: 0.25rem;

    color: ${ dependsLuminanceColor(props.color!) };
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    background-color: ${ props.color };
    border: solid 1px #ffffff3d;
    border-radius: 0.5rem;
    cursor: pointer;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    user-select: none;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        z-index: 1;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;

        border-radius: 0.48rem;
        background-color: #ffffff20;
        opacity: 1;

        transition: all 100ms;
      }
    }

    .text {
      justify-self: center;
    }
  `

  /*-- variables --*/

  /*-- functions --*/
  const onClick = () => {
    return props.link ? router.push(props.link) : props.onClick
  }

  /*-- life cycle --*/

  /*-- element --*/
  return <>
    <Button
      whileTap={{ scale: 0.98 }}
      style={props.style}
      onClick={onClick}
    >
      {
        props.icon &&
          <Icon
            icon={props.icon}
            color={props.iconProp?.color ? props.iconProp?.color : dependsLuminanceColor(props.color!)}
            fill={props.iconProp?.fill}
            weight={props.iconProp?.weight}
            grade={props.iconProp?.grade}
            opticalSize={props.iconProp?.opticalSize}
            style={{ marginRight: '1rem' }}
          />
      }
      <span className='text'>
        { props.children }
      </span>
    </Button>
  </>
}

Button.defaultProps = {
  color: colors.blue.default,
}

export { Button }
