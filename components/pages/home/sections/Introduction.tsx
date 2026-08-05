import React from 'react'
import { PortfolioCard } from '../utils'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

const Introduction = () => {
  return (
    <section className='w-full flex justify-center py-14 bg-gradient-to-b from-[20%] to-60% from-gray-700 to-white px-5 md:px-8 lg:px-10 xl:px-14'>
        <div className='max-w-[1440px] flex flex-col items-center'>
            <div className='flex flex-col items-center w-full md:max-w-[900px]'>
                <PortfolioCard preHeading='Meet Sunday Solomon' headingText='introduction' subheadingText='The Person Behind the Code' />
                <p className='w-[96%] md:w-full text-center text-lg text-white'>I&apos;m Sunday Solomon, a Software Engineer and student at the National Institute for Information Technology (NIIT) with over five years of experience designing and building modern digital products. My journey has taken me across both Web2 and Web3, where I&apos;ve developed everything from responsive business websites and e-commerce platforms to decentralized applications and blockchain solutions.</p>
            </div>

            <div className='w-full flex flex-col md:flex-row justify-between py-20 gap-5 lg:gap-10'>
                <div className='md:w-[48%] lg:w-3/10 flex flex-col gap-y-5 justify-between'>
                    <h2 className='text-7xl font-[family-name:var(--font-poppins)]'>Building Digital <span className='text-[#f835a7]'>Products</span> that <span className='text-primary'>Scale</span>.</h2>
                    <p className='pr-3'> Regardless of the technology, my focus has always remained creating products that are intuitive, scalable, and built with long-term maintainability in mind.</p>

                    <div className='py-7 md:pl-5 ld:pl-10 bg-gradient-to-r mt-5 lg:w-[216%] xl:w-[228%] rounded-2xl from-[20%] to-60% from-gray-200 to-gray-50 relative'>
                        <div className='w-4/5'>
                            <p>Beyond writing code, I think like a product builder. I care deeply about user experience, performance, accessibility, and creating solutions that solve real business problems rather than simply delivering features.</p>
                            <Link
                                href={'https://wa.me/+2348101123098'}
                                target='_blank'
                                className='inline-flex gap-x-4 items-center text-white text-lg py-3 px-6 rounded-full cursor-pointer mt-6 bg-black'
                            >
                                Let&apos;s Build Together <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-[45%] h-full lg:w-[70%] flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-10'>
                    <div className='w-full lg:w-[48%] h-[400px] lg:h-[450px] bg-white rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.2)]'>
                        <p className='p-5 text-sm text-gray-500'>I enjoy transforming complex ideas into clean user experiences through modern technologies like <span className='text-primary font-semibold'><Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank'>JavaScript</Link>, <Link href="https://www.typescriptlang.org/" target='_blank'>TypeScript</Link>, <Link href="https://react.dev/" target='_blank'>React</Link>, <Link href="https://nextjs.org/" target='_blank'>Next.js</Link>, <Link href="https://tailwindcss.com/" target='_blank'>Tailwind CSS</Link>, <Link href="https://www.soliditylang.org/" target='_blank'>Solidity,</Link></span></p>

                        <div className='relative pt-5'>
                            <Link href="https://www.proconomic.com/value-tracker" target='_blank'> <Image src="/homepage/acedboard-value-tracker-section-mockup.png" alt='acedboard value tracker section mockup' width={1000} height={1000} /></Link>
                        </div>
                    </div>
                    <div className='w-full lg:w-[48%] flex flex-col gap-y-10 relative mt-8 lg:m-0'>
                        <p className='p-5 text-sm text-gray-500 bg-white rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.2)]'>and a variety of no-code and <span className='text-primary'>CMS platforms</span> including <span className='text-primary font-semibold'><Link href='https://wordpress.com/'>WordPress</Link>, <Link href='https://elementor.com/'>Elementor</Link>, <Link href='https://www.elegantthemes.com/gallery/divi/'>Divi</Link>, and <Link href='https://www.figma.com/'>Figma</Link>.</span></p>

                        <div className='w-full h-[230px] lg:h-[600px] xl:h-[630px] bg-white relative overflow-hidden rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.2)]'>
                            <div className='relative'>
                                <Link href="https://audiocreeb.com/about-us/" target='_blank'> <Image src="/homepage/audiocreeb-about-page-desktop.jpeg" alt='acedboard value tracker section mockup' width={1000} height={1000} /></Link>

                                <Link href="https://audiocreeb.com/" target='_blank'> <Image src="/homepage/audiocreeb-home-page-mobile.jpeg" alt='acedboard value tracker section mockup' width={100} height={400} className='object-fit shadow-[-10px_10px_20px_rgba(0,0,0,0.2)] absolute top-8 right-1' /></Link>
                            </div>

                            <div className='top-10 hidden lg:flex'>
                                <Link href="https://www.schickcollections.com/" target='_blank'> <Image src="/homepage/schickcollection-homepage.png" alt='acedboard value tracker section mockup' width={1000} height={400} className='object-fit shadow-[-10px_10px_20px_rgba(0,0,0,0.2)] absolute top-[55%] left-1 bg-no-repeat' /></Link>

                                <div className=''>
                                    <Link href="https://www.schickcollections.com/" target='_blank'> <Image src="/homepage/schickcollection-homepage.png" alt='acedboard value tracker section mockup' width={110} height={400} className='object-fit shadow-[0px_10px_20px_rgba(0,0,0,0.2)] absolute bottom-[-5%] left-4 bg-no-repeat' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Introduction