import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import logo from '../../public/img/logo.png'
import headerImg from '../../public/img/undraw_augmented_reality_heuy.svg'
import cs from 'classnames'
import { useRouter } from 'next/router'
import { Flags } from './Flags'
import styles from './Header.module.css'

export const Header: React.FC = () => {
  const [isMenuToggled, setMenuToggled] = useState(false)
  const [isRainbowActive, setRainbowActive] = useState(false)
  const router = useRouter()

  const onClickPride = () => {
    setRainbowActive(true)
    setTimeout(() => setRainbowActive(false), 10000)
  }

  const renderButton = () => {
    if (!router.pathname.includes('contact')) {
      return (
        <button
          type='button'
          className='font-medium font-Lexend border-[#f23cfa] border-4 h-10 rounded-full text-[#f23cfa] w-1/2 hover:bg-[#f23cfa] hover:text-white transition-all duration-300'
          name='button'
          dir='rtl'
          onClick={() => {
            document
              .querySelector('#about')
              ?.scrollIntoView({ behavior: 'smooth' })
            setMenuToggled(false)
          }}
        >
          عرض المزيد
        </button>
      )
    }
    return null
  }

  const renderAbout = () => {
    if (router.pathname.includes('contact')) {
      return (
        <Link
          href='/#about'
          className='hover:text-[#ECB5F5] transition-all duration-300 rtl'
        >
          <button onClick={() => setMenuToggled(false)}>عنا</button>
        </Link>
      )
    }
    return (
      <button
        className='hover:text-[#ECB5F5] transition-all duration-300'
        dir='rtl'
        onClick={() => {
          document
            .querySelector('#about')
            ?.scrollIntoView({ behavior: 'smooth' })
          setMenuToggled(false)
        }}
      >
        عنا
      </button>
    )
  }

  return (
    <header
      className={cs('min-h-screen w-full relative mb-[10%]', styles.gradient, {
        [styles.gradientActive]: isRainbowActive,
      })}
    >
      <nav className='!bg-transparent w-full ml-auto flex font-Lexend pl-4 pr-6 py-2 text-white'>
        <Link
          className='flex items-center lg:min-w-[600px] font-medium text-xl'
          href='/'
        >
          <Image
            className='w-[15%] p-[2%] rtl'
            src={logo}
            alt='LOGO'
            priority
          />
          <span dir='rtl'>IMMERSIVE شركة</span>
        </Link>
        <button
          className='items-left ml-auto lg:hidden'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setMenuToggled(!isMenuToggled)}
        >
          <div
            className={cs('tham tham-e-squeeze tham-w-6', {
              'tham-active': isMenuToggled,
            })}
          >
            <div className='tham-box'>
              <div className='tham-inner bg-white/50' />
            </div>
          </div>
        </button>

        <ul className='max-lg:hidden ml-auto justify-end flex font-medium items-center gap-4'>
          <li>{renderAbout()}</li>
          <li>
            <Link
              href='/contact#contact'
              className='hover:text-[#ECB5F5] transition-all duration-300'
              dir='rtl'
            >
              <button dir='rtl' onClick={() => setMenuToggled(false)}>
                الاتصال
              </button>
            </Link>
          </li>
          <Flags onClickPride={onClickPride} />
        </ul>
      </nav>
      <nav
        className={cs('text-white font-Lexend font-medium text-center', {
          hidden: !isMenuToggled,
        })}
      >
        <ul className='py-8'>
          <li>{renderAbout()}</li>
        </ul>
        <ul>
          <li>
            <Link
              href='/contact#contact'
              className='hover:text-[#ECB5F5] transition-all duration-300'
              dir='rtl'
            >
              <button dir='rtl' onClick={() => setMenuToggled(false)}>
                الاتصال
              </button>
            </Link>
          </li>
          <Flags onClickPride={onClickPride} />
        </ul>
      </nav>
      <div className='w-full sm:max-w-[640] px-4 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:mx-w-[1536px] mx-auto'>
        <div
          className={cs('flex lg:mt-[10%] flex-wrap pl-4', {
            'mt-[10%]': !isMenuToggled,
          })}
        >
          <div className='basis-full lg:basis-1/3 px-4'>
            <div dir='rtl' className='mr-[10%] text-white leading-6'>
              <h1
                dir='rtl'
                className='font-Dela text-3xl mb-4 lg:mb-3 max-lg:pt-12 rtl'
              >
                التكنولوجيا المركزة على الإنسان للواقع المعزز والمختلط
                والافتراضي
              </h1>
              <p dir='rtl' className='font-Lexend mb-4 rtl font-medium'>
                حلول آسرة لك ولشركتك
              </p>
              {renderButton()}
            </div>
          </div>
          <div className='basis-full lg:basis-2/3 px-4'>
            <div className='text-center mt-[25%] lg:mt-[5%] ml-[10%] w-[90%]'>
              <Image
                src={headerImg}
                className='lg:w-[80%] -scale-x-100'
                alt='ar-img'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
