import { FC } from 'react'
// import ReactCompareImage from 'react-compare-image'

import styles from './ContainerTwoUp.module.scss'
import { ReactCompareImage, ReactCompareImageProps } from './ReactCompareImage'

export type ContainerTwoUpProps = ReactCompareImageProps & {
  leftImage: string
  rightImage: string
}

export const ContainerTwoUp: FC<ContainerTwoUpProps> = ({ leftImage, rightImage, ...compareImageProps }) => {
  return (
    <>
      <div className={styles.containerTwoUp_image}>
        <ReactCompareImage
          leftImage={leftImage}
          rightImage={rightImage}
          {...compareImageProps}
          // leftImage="https://sb.kaleidousercontent.com/67418/992x558/38748c9193/products-stunning-quality-v2.jpg"
          // rightImage="https://sb.kaleidousercontent.com/67418/992x558/a45eaf1df9/products-stunning-quality-transp.png"
        />
      </div>
    </>
  )
}
