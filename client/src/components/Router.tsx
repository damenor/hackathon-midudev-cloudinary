import { AnimatePresence } from 'framer-motion'
import { FC, ReactNode } from 'react'
import { BrowserRouter, Routes, Route, IndexRouteProps, Navigate } from 'react-router-dom'

export type RoutePage = Omit<IndexRouteProps, 'index'> & { 
  path: string 
  label?: string
}

export type RouterProps = {
  pages: RoutePage[]
  childrenHeader?: ReactNode
}

export const Router: FC<RouterProps> = ({ pages, childrenHeader }) => {
  return (
    <BrowserRouter>
      {childrenHeader}
      <main>
        <Routes>
          {pages.map(({ ...props }) => (
            <Route key={props.path} {...props} />
          ))}
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
