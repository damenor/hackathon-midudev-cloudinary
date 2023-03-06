import { Children, CSSProperties, FC, isValidElement, ReactNode } from 'react'

export type MasonryProps = {
  children: ReactNode
  columnsCount?: number
  style?: CSSProperties
  gutter?: string
  className?: string
}

export const Masonry: FC<MasonryProps> = ({ children, columnsCount = 3, style, gutter, className }) => {
  const getColumns = () => {
    const columns: any[][] = Array.from({ length: columnsCount }, () => [])
    Children.forEach(children, (child, index) => {
      if (child && isValidElement(child)) {
        columns[index % columnsCount].push(child)
      }
    })
    return columns
  }

  const renderColumns = () => {
    return getColumns().map((column, i) => (
      <div
        key={i}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignContent: 'stretch',
          flex: 1,
          width: 0,
          gap: gutter,
        }}
      >
        {column.map(item => item)}
      </div>
    ))
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'stretch',
        boxSizing: 'border-box',
        width: '100%',
        gap: gutter,
        ...style,
      }}
      className={className}
    >
      {renderColumns()}
    </div>
  )
}

Masonry.defaultProps = {
  columnsCount: 3,
  gutter: '0',
  style: {},
}

