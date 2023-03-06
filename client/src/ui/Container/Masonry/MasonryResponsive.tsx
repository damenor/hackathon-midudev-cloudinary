import { useMemo, CSSProperties, FC, ReactNode } from 'react'

import { useWindowWidth } from './hooks'
import { Masonry, MasonryProps } from './Masonry'

export type MasonryResponsiveProps = MasonryProps & {
  children: ReactNode
  columnsCountBreakPoints?: { [key: number]: number }
  className?: string
  style?: CSSProperties
}

const DEFAULT_COLUMNS_COUNT = 1

export const MasonryResponsive: FC<MasonryResponsiveProps> = ({
  columnsCountBreakPoints = {
    350: 1,
    750: 2,
    900: 3,
  },
  children,
  className,
  style,
  ...masonryProps
}) => {
  const windowWidth = useWindowWidth()
  const columnsCount = useMemo(() => {
    const breakPoints = Object.keys(columnsCountBreakPoints)
      .map(col => Number(col))
      .sort((a, b) => Number(a) - Number(b))
    let count = breakPoints.length > 0 ? columnsCountBreakPoints[breakPoints[0]] : DEFAULT_COLUMNS_COUNT

    breakPoints.forEach(breakPoint => {
      if (breakPoint < windowWidth) {
        count = columnsCountBreakPoints[breakPoint]
      }
    })

    return count
  }, [windowWidth, columnsCountBreakPoints])

  return (
    <div className={className} style={style}>
      <Masonry columnsCount={columnsCount} {...masonryProps}>{children}</Masonry>
      {/* {
        Children.map(children, (child, index) => <Masonry columnsCount={columnsCount} {...masonryProps}>{children}</Masonry>
        // cloneElement(child as any, {
        //   key: index,
        //   columnsCount: columnsCount,
        // })
      )} */}
    </div>
  )
}
