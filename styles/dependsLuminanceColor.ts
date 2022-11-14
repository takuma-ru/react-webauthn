import colors from './colors'

/**
 * 背景色から輝度を求め、テキストのカラーを返す関数
 * @param backgroundColor 背景色（#RRGGBB）
 * @returns テキストカラー（#RRGGBB）
 */
export const dependsLuminanceColor = (backgroundColor: string) => {
  const red = backgroundColor.substring(1, 3)
  const green = backgroundColor.substring(3, 5)
  const blue = backgroundColor.substring(5, 7)

  let luminance = Math.floor((parseInt(red, 16) * 0.299) + (parseInt(green, 16) * 0.587) + (parseInt(blue, 16) * 0.114))
  luminance = luminance / 255

  const isWhite = luminance < 0.6

  return isWhite ? colors.white.default : colors.black.default
}
