type GetClassNameVariants = { [key: string]: boolean | undefined | null }

type GetClassNameArgs = {
  parent: string
  styles: {[key: string]: string}
  variants?: GetClassNameVariants
}

type GetMultipleClassNameArgs = {
  styles: {[key: string]: string}
  classes: { parent: string, variants?: GetClassNameVariants }[]
}

export const getClassName = ({ styles, parent, variants = {} }: GetClassNameArgs) => {
  let className = styles[parent]
  Object.keys(variants).forEach(key => {
    const included = variants[key]
    if (!included) return
    className = `${className} ${styles[`${parent}__${key}`]}`
  })
  return className
}

export const mergeClassName = (classNames: string[]) => classNames.join(' ')

export const getMultipleClassName = ({ styles, classes }: GetMultipleClassNameArgs): { [key: string]: string } => {
  const classesObj = classes.reduce((accumulator, current ) => {
    return { ...accumulator, [current.parent]: getClassName({ styles, ...current }) }
  }, {})
  return classesObj
}