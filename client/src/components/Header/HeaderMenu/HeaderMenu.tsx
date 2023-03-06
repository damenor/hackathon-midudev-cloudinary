import { FC, useRef } from 'react'
import { CgMenuLeft } from 'react-icons/cg'

import { ButtonIcon, Modal, ModalHandle } from '@/ui'
import { appPages } from '@/pages'
import { Logo } from '@/components/Logo'

import styles from './HeaderMenu.module.scss'

import { HeaderMenuLink } from './HeaderMenuLink'

export const HeaderMenu: FC = () => {
  const modalRef = useRef<ModalHandle>()

  const handleOpenMenu = () => modalRef.current?.open()
  const onCloseMenu = () => modalRef.current?.close()

  return (
    <>
      <ButtonIcon Icon={CgMenuLeft} onClick={handleOpenMenu} />
      <Modal classNameParent={styles.headerMenu_modalParent} className={styles.headerMenu_modal} ref={modalRef as any} type="left">
        <h1>Visual Web Optimizer</h1>
        <Logo />
        <div className={styles.headerMenu_content}>
          {appPages
            .filter(route => route.label)
            .map(page => (
              <HeaderMenuLink key={page.path} onClick={onCloseMenu} {...page} />
            ))}
        </div>
      </Modal>
    </>
  )
}
