import { FC, useRef, useState } from 'react'
import { MdFilterList } from 'react-icons/md'
import { improve } from '@cloudinary/url-gen/actions/adjust'

import { Button, ButtonIcon, MasonryResponsive } from '@/ui'
import { WebAnalyzeImageType } from '@/types'
import { useLoadingContext } from '@/contexts'
import { cloudinary } from '@/tools'
import { cloudinaryUploadImage, getImageData } from '@/services'

import styles from './WebAnalyzeImages.module.scss'
import { WebAnalyzeImagesItem } from './WebAnalyzeImagesItem'

const onImproveImage = async (fileUrl: string) => {
  const response = await cloudinaryUploadImage(fileUrl)
  const imageCloudinary = cloudinary.image(response.public_id).adjust(improve())
  return await getImageData(imageCloudinary.toURL())
}

export type WebAnalyzeImagesProps = {
  images: any[]
}

export const WebAnalyzeImages: FC<WebAnalyzeImagesProps> = ({ images }) => {
  const [selected, setSelected] = useState<WebAnalyzeImageType[]>([])
  const [imagesImprove, setImagesImprove] = useState<WebAnalyzeImageType[]>([])
  const [tabSelected, setTabSelected] = useState(0)
  const { showLoading, hideLoading } = useLoadingContext()

  if (images.length === 0) return <></>

  const addToSelected = (image: WebAnalyzeImageType) => setSelected(prevState => [...prevState, image])
  const removeToSelected = (image: WebAnalyzeImageType) => setSelected(prevState => prevState.filter(prev => prev.url !== image.url))

  const onImproveImages = async () => {
    showLoading()
    const imagesImproveTemp: WebAnalyzeImageType[] = []
    const promises = selected.map(async imageSelected => {
      const image = await onImproveImage(imageSelected.url)
      imagesImproveTemp.push(image)
    })
    await Promise.all(promises)
    setImagesImprove(imagesImproveTemp)
    setSelected([])
    hideLoading()
  }

  const imagesToRender = tabSelected === 1 ? imagesImprove : images

  return (
    <>
      <div className={styles.webAnalyzeImages}>
        <h2 className={styles.webAnalyzeImages_title}>Estas son las imagenes que encontramos</h2>

        {imagesImprove.length > 0 && (
          <div className={styles.webAnalyzeImages_tabs}>
            <Button backgroundColor={tabSelected === 0 ? 'primary' : 'bg'} onClick={() => setTabSelected(0)}>
              Originales
            </Button>
            <Button backgroundColor={tabSelected === 1 ? 'primary' : 'bg'} onClick={() => setTabSelected(1)}>
              Mejoradas
            </Button>
          </div>
        )}

        <div className={styles.webAnalyzeImages_filter}>
          <p>{selected.length} seleccionadas</p>
          <div className={styles.webAnalyzeImages_filterButtons}>
            {selected.length > 0 && <Button onClick={onImproveImages}>Mejorar</Button>}
            {/* <ButtonIcon Icon={MdFilterList} /> */}
          </div>
        </div>

        <MasonryResponsive columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }} className={styles.webAnalyzeImages_masonry} gutter="16px">
          {imagesToRender.map((image: any) => (
            <WebAnalyzeImagesItem
              key={image.url}
              isSelected={selected.includes(image)}
              onClick={() => (selected.includes(image) ? removeToSelected(image) : addToSelected(image))}
              isImprove={tabSelected === 1}
              {...image}
            />
          ))}
        </MasonryResponsive>
      </div>
      {/* <Modal ref={modalRef as any}>
        {imagesImprove.length > 0 && (
          <div style={{ maxWidth: '90%', maxHeight: '90%', backgroundColor: 'var(--color-bg)' }}>
            <img style={{ width: '100%' }} src={imagesImprove[modalImageSelected].url} alt="" />
            <Button onClick={() => setModalImageSelected(prevState => prevState - 1)}>Anterior</Button>
            <Button onClick={() => setModalImageSelected(prevState => prevState + 1)}>Siguiente</Button>
          </div>
        )}
      </Modal> */}
    </>
  )
}
