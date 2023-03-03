import { FC } from 'react'
import 'two-up-element'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'two-up': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

export type ContainerTwoUpProps = {}

export const ContainerTwoUp: FC<ContainerTwoUpProps> = props => {
  return (

    <>
      <two-up  style={{ borderRadius: '8px', overflow: 'hidden' }}>
        <img
          style={{ width: '100%', maxWidth: '450px' }}
          src="/images/kyra.jpg"
          alt="Imagen original subida por el usuario"
        />
        <img
          style={{ 
            width: '100%',
            maxWidth: '450px',
            background: 'rgba(0,0,0, 0.2)',
          }}
          src="/images/kyra.png"
          alt="Imagen sin fondo subida por el usuario"
        />
      </two-up>
    </>
  )
}
