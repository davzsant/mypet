import React from 'react'
import styles from './CategoryPromotion.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { iPromotion,iPromotionProps } from '@/types/item';

const CategoryPromotion:React.FC<iPromotionProps> = (promotion) => {
  return (
    <div className={styles.promotion}>
      <p>{promotion.animal}</p>
      <div>
        <Link href={promotion.mainPromotion.link} className='mainPromotion'>
            <Image
            src={promotion.mainPromotion.image}
            alt={promotion.mainPromotion.desc}
            width={100} height={100}
            />
        </Link>
        <div>
            <Link href={promotion.secondPromotion.link}>
                <Image
                src={promotion.secondPromotion.image}
                alt={promotion.secondPromotion.desc}
                width={100} height={100}
                />
            </Link>

            <Link href={promotion.thirdPromotion.link}>
                <Image
                src={promotion.thirdPromotion.image}
                alt={promotion.thirdPromotion.desc}
                width={100} height={100}
                />
            </Link>

            <Link href={promotion.fourtyPromotion.link}>
                <Image
                src={promotion.fourtyPromotion.image}
                alt={promotion.fourtyPromotion.desc}
                width={100} height={100}
                />
            </Link>

            <Link href={promotion.fiftyPromotion.link}>
                <Image
                src={promotion.fiftyPromotion.image}
                alt={promotion.fiftyPromotion.desc}
                width={100} height={100}
                />
            </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryPromotion
