import React, { Fragment, useState } from 'react';
import logo from './img/logo.png';
import logoWhiteIcon from './img/logo_white.png';
import BgIcon from './img/bg_01.png';
import FinanceIcon from './img/finance.png';
import TransparencyIcon from './img/transparency.png';
import './App.css';
import { AboutArtemis, ArtemisProject, Cg, Coins, CommunityHub, Decentralized, Discord, Features, HowPg, HowWorks, Right, Risk, Telegram, Twitter } from './img/FileImports';

const links = [
    { id: 'home', label: 'About ARTEMIS' },
    { id: 'features', label: 'Features' },
    { id: 'work', label: 'How ARTEMIS Works' },
    { id: 'project', label: 'ARTEMIS Project' },
    { id: 'join', label: 'Join ARTEMIS' },
    { id: 'cg', label: 'C & G' },
]

const twitterUrl = "https://x.com/artemis_defi"
const discordUrl = "https://discord.gg/6e8jn6EEb4"
const telegramUrl = "https://t.me/+HQxrWimNxjhhYjZh"

function App() {

    const [tabPos, setTabPos] = useState<number>(0);

    const skipAction = (index: number) => {
        setTabPos(index)
    }

    return (
        <div className='relative leading-8'>
            <div className=' absolute top-0 right-0'>
                <img src={BgIcon} />
            </div>
            <div className='relative z-30 text-white'>

                <section className='py-4  max-w-5xl px-4 m-auto flex items-center'>
                    <img className='object-fill w-20' alt='' src={logo} />
                    <div className='flex-1'></div>
                    <ul className="hidden lg:flex font-medium text-sm gap-14  mt-3 mr-6">
                        {
                            links.map((item: any, index: number) => {
                                return <a href={'#' + item.id} onClick={() => skipAction(index)} key={item.id} className={` rounded-xl py-3 cursor-pointer transition-all hover:text-sky-400 hover:scale-105 `}>
                                    <div >{item.label}</div>
                                    <div className={`m-auto ${tabPos != index ? 'bg-none' : 'bg-white'} w-10 h-0.5 mt-2`}></div>
                                </a>

                            })
                        }
                    </ul>

                    <ul className="flex lg:hidden font-medium text-sm gap-6">
                        <a href={telegramUrl} target='_blank'><img className='w-8 cursor-pointer active:scale-95 hover:scale-110 transition-all' src={Telegram} /></a>
                        <a href={discordUrl} target='_blank'><img className='w-8 cursor-pointer active:scale-95 hover:scale-110 transition-all' src={Discord} /></a>
                        <a href={twitterUrl} target='_blank'><img className='w-8 cursor-pointer active:scale-95 hover:scale-110 transition-all' src={Twitter} /></a>
                    </ul>
                </section>

                <section className='flex  max-w-5xl px-4 m-auto flex-col items-center pt-20 md:pt-32'>

                    <img className=' w-40' src={logoWhiteIcon} />

                    <div className='mt-20 text-2xl text-center md:text-4xl font-medium'>
                        <div>Empowering Decentralized Finance</div>
                        <div className='mt-3'>with Intelligent Risk Management</div>
                    </div>

                </section>

                <section id='home' className='flex m-auto flex-col items-center pt-20 md:pt-64'>

                    <div className='relative'>
                        <img className='relative z-10 h-7 md:h-9' src={AboutArtemis} />
                        <div className=' absolute text-center top-0 left-0 right-0 z-20 text-xl md:text-2xl font-medium'>About ARTEMIS</div>
                    </div>


                    <div className='bg-[#05113A] w-full py-14 mt-10'>
                        <div className='max-w-5xl px-4 m-auto'>
                            <div className='grid grid-cols-1 text-sm md:grid-cols-2 gap-20'>
                                <div className=' flex flex-col items-center justify-center '>
                                    <img src={FinanceIcon} className='w-16' />
                                    <div className='mt-14 leading-6 text-center font-medium'>
                                        Explore the cutting-edge Automated Trading and Risk
                                        Management System revolutionizing decentralized finance
                                    </div>

                                </div>
                                <div className=' flex flex-col items-center justify-center '>
                                    <img src={TransparencyIcon} className='w-16' />
                                    <div className='mt-14  leading-6 text-center font-medium'>
                                        Learn how ARTEMIS brings transparency and
                                        intelligence to the world of decentralized derivatives
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section id='features' className='flex text-lg m-auto flex-col leading-8 items-center pt-24'>

                    <div className='relative'>
                        <img className='relative z-10 h-7 md:h-9' src={Features} />
                        <div className=' absolute text-center top-0 left-0 right-0 z-20 text-xl md:text-2xl font-medium'>Features</div>
                    </div>

                    <div className='max-w-5xl px-4 m-auto mt-20'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20 font-medium'>
                            <div>
                                <div className='text-[#0053FB] font-semibold'>Automated Risk Management</div>
                                <div className='hidden md:block text-sm mt-1 text-[#5880B6]'>Discover how ARTEMIS employs advanced<br />
                                    algorithms for automated risk assessment<br />
                                    and management, ensuring a secure trading<br />
                                    environment</div>
                                <div className='block md:hidden text-sm mt-1 text-[#5880B6]'>Discover how ARTEMIS employs advanced
                                    algorithms for automated risk assessment
                                    and management, ensuring a secure trading
                                    environment</div>
                                <div className='bg-[#0053FB] lg:block mt-2 w-px h-14 ml-20 hidden'>

                                </div>
                                <div className='ml-20 -mb-1 hidden lg:block'>
                                    <div className='bg-[#0053FB] -ml-[3px] w-[7px] h-[7px] rounded-full'>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='text-[#0053FB] font-semibold'>Derivatives Showcase</div>
                                <div className='hidden md:block text-sm mt-1 text-[#5880B6]'>Explore our unique derivatives products, including exotic options like single-sided and double-sided shark fin options, and range-accrual options. Learn how these products introduce
                                    controlled risk within the decentralized ecosystem
                                </div>
                                <div className='block md:hidden text-sm mt-1 text-[#5880B6]'>Explore our unique derivatives products, including exotic options like single-sided and double-sided shark fin options, and range-accrual options. Learn how these products introduce
                                    controlled risk within the decentralized ecosystem</div>

                                <div className='lg:flex flex-col items-end  hidden'>
                                    <div className='bg-[#0053FB] mt-2  w-px h-14 mr-32'>

                                    </div>
                                    <div className='mr-32 -mb-1  hidden lg:block'>
                                        <div className='bg-[#0053FB] -mr-[3px] w-[7px] h-[7px] rounded-full'>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#0053FB] h-px w-full  hidden lg:block'></div>
                    <div className='max-w-5xl px-4 lg:m-auto w-full lg:w-auto font-medium mt-6 lg:mt-0'>
                        <div className='flex-col items-center  hidden lg:flex'>
                            <div className='-mt-1'>
                                <div className='bg-[#0053FB] -ml-[1px] w-[7px] h-[7px] rounded-full'>

                                </div>
                            </div>
                            <div className='bg-[#0053FB] w-px h-14'>

                            </div>
                        </div>
                        <div className='text-[#0053FB] font-semibold text-left'>Transparent Liquidity Provision</div>
                        <div className='hidden md:block text-sm mt-1 text-[#5880B6]'>Dive into the innovative liquidity model <br />
                            inspired by Uniswap, offering transparent <br />
                            and quantifiable liquidity provision for a <br />
                            wide range of assets</div>
                        <div className='block md:hidden text-sm mt-1 text-[#5880B6]'>Dive into the innovative liquidity model
                            inspired by Uniswap, offering transparent
                            and quantifiable liquidity provision for a
                            wide range of assets</div>

                    </div>

                </section>

                <section id='work' className='flex max-w-5xl px-4 m-auto  flex-col items-center pt-24'>

                    <div className='relative'>
                        <img className='relative z-10 h-7 md:h-9' src={HowWorks} />
                        <div className=' absolute text-center top-0 left-0 right-0 z-20 text-xl md:text-2xl font-medium'>How ARTEMIS Works</div>
                    </div>



                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 font-medium mt-24'>

                        <img src={HowPg} />
                        <div>
                            <div className='flex items-center'>
                                <img className=' w-7 h-7' src={Right} />
                                <div className='ml-3 text-2xl font-medium'>Risk Modeling</div>
                            </div>
                            <div className='text-sm leading-5 mt-5 text-[#5880B6]'>
                                Understand the robust risk modeling framework that underpins ARTEMIS,
                                providing real-time insights into market risks and enabling adaptive risk
                                management
                            </div>
                            <div className='flex items-center mt-5'>
                                <img className=' w-7 h-7' src={Right} />
                                <div className='ml-3 text-2xl font-medium'>Dynamic Pricing</div>
                            </div>
                            <div className='text-sm leading-5 mt-5 text-[#5880B6]'>
                                Explore the market-driven pricing mechanism, allowing multiple market
                                participants to compete based on safety levels. Learn how ARTEMIS ensures attractive pricing without compromising security
                            </div>
                            <div className='flex items-center mt-5'>
                                <img className=' w-7 h-7' src={Right} />
                                <div className='ml-3 text-2xl font-medium'>Transparency in Action</div>
                            </div>
                            <div className='text-sm leading-5 mt-5 text-[#5880B6]'>
                                Witness the transparency of ARTEMIS as it openly displays market participants' hedging positions, coverage probabilities, and more. See how this transparency benefits both traders and liquidity providers
                            </div>
                        </div>


                    </div>

                </section>


                <section id='project' className='flex m-auto flex-col items-center pt-32'>

                    <div className='relative  mb-24'>
                        <img className='relative z-10 h-7 md:h-9' src={ArtemisProject} />
                        <div className=' absolute text-center top-0 left-0 right-0 z-20 text-xl md:text-2xl font-medium'>ARTEMIS Project</div>
                    </div>


                    <div className='max-w-5xl px-4 m-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                            <div className=' flex flex-col'>
                                <img src={Risk} className='w-10' />
                                <div className='mt-6 text-2xl font-semibold'>
                                    Controllable Derivative Risks
                                </div>
                                <div className='mt-6 text-sm font-medium text-[#5880B6]'>
                                    Delve into the Artemis project, showcasing how decentralized exchanges (DEX) can control risks associated with non-linear derivative products.
                                    Understand the philosophy behind transparent risk exposure for market
                                    participants
                                </div>

                            </div>
                            <div className=' flex flex-col  '>
                                <img src={Coins} className='w-10' />
                                <div className='mt-6 text-2xl font-semibold'>
                                    Innovative Derivative Products
                                </div>
                                <div className='mt-6 text-sm font-medium text-[#5880B6]'>
                                    Learn about our initial products, featuring "singular" derivatives with
                                    embedded profit constraints. Explore how these derivatives attract investors while maintaining dynamic risk observation and an upper limit for liquidity
                                    providers

                                </div>
                            </div>
                        </div>
                    </div>


                </section>

                <section id='cg' className='flex m-auto flex-col items-center pt-32'>

                    <div className='relative mb-24'>
                        <img className='relative z-10 h-7 md:h-9' src={Cg} />
                        <div className=' absolute text-center top-0 left-0 right-0 z-20 text-xl md:text-2xl font-medium'>C&G</div>
                    </div>

                    <div className='bg-[#05113A] w-full py-14'>
                        <div className='max-w-5xl px-4 m-auto'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                                <div className=' flex flex-col items-center justify-center '>
                                    <img src={Decentralized} className='w-16' />
                                    <div className='mt-14 text-xl text-center font-semibold'>
                                        Decentralized Governance Framework
                                    </div>
                                    <div className='mt-6 leading-5  text-sm text-center font-medium'>
                                        Understand how ARTEMIS integrates decentralized governance for community-driven decision-making. Learn how you can be part of shaping the future of decentralized finance

                                    </div>

                                </div>
                                <div className=' flex flex-col items-center justify-center '>
                                    <img src={CommunityHub} className='w-16' />
                                    <div className='mt-14 text-xl text-center font-semibold'>
                                        Community Hub
                                    </div>
                                    <div className='mt-6 leading-5  text-sm text-center font-medium'>
                                        Connect with other users and stay updated on the latest
                                        developments, discussions, and events within the ARTEMIS
                                        community

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section id='join' className='flex m-auto flex-col items-center my-20'>

                    <ul className="flex font-medium text-sm gap-10">
                        <a href={telegramUrl} target='_blank'><img className='w-10 cursor-pointer active:scale-95 hover:scale-110 transition-all' src={Telegram} /></a>
                        <a href={discordUrl} target='_blank'><img className='w-10 cursor-pointer active:scale-95 hover:scale-110 transition-all' src={Discord} /></a>
                        <a href={twitterUrl} target='_blank'> <img className='w-10 cursor-pointer active:scale-95 hover:scale-110 transition-all' src={Twitter} /></a>
                    </ul>

                </section>


            </div>
        </div>
    );

}

export default App;
