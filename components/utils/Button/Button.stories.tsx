import { ComponentPropsWithoutRef } from 'react'
import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'
import { Button } from './Button'
import colors from '~/styles/colors'

type T = typeof Button
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

// PropsInterfaceに追記した場合は、この変数にStoryBookで表示する際の初期値を設定しておく
const args: ComponentPropsWithoutRef<T> = {
  color: colors.blue.default,
  icon: 'add',
  iconProp: undefined,
  link: undefined,
  children: 'children',
  style: undefined,
  onClick: () => {},
}

export default {
  title: 'components/utils/Button',
  component: Button,
  args,
} as Meta

export const ButtonDefault: Story = {}
