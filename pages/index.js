import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Malik Baker</title>
				<meta
					name='description'
					content="Malik Baker's personal website"
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='bg-white px-10'>
				<section className='min-h-screen'>
					<nav className='py-10 mb-12 flex justify-between'>
						<h1></h1>
						<ul className='flex items-center'>
							{/* <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li> */}
							<li>
								<a
									className='bg-gradient-to-r from-indigo-600 to-indigo-400 text-white px-4 py-2 rounded-md ml-8'
									href='/MalikBaker_Resume.pdf'
									target='_blank'
									rel='noopener noreferrer'
								>
									Resume
								</a>
							</li>
						</ul>
					</nav>
					<div className='text-center p-10'>
						<h2 className='text-5xl py-2 text-indigo-600 font-medium'>
							Hi, I&apos;m Malik
						</h2>
						<h3 className='text-2xl py-2'>
							Student, developer, thought-haver.
						</h3>
						<p className='text-md py-5 leading-8 text-gray-800'>
							I&apos;m currently in my Senior year (almost done!)
							studying Computer Science at Boston University, with
							an expected graduation date in Spring 2024. When
							I&apos;m not in class or spending many hours in
							front of my laptop, you&apos;ll probably find me at
							home watching TV, or flipping through the catalogue
							of a local record store.{" "}
						</p>

						<p className='text-md py-2 leading-8 text-gray-800'>
							Career-wise, I have a passion for software
							engineering and system administration. Some of my
							passions include Linux systems and other open-source
							software. Recently, I&apos;ve been learning more
							about React, TypeScript, and Go. I&apos;m currently
							pursuing full-time Software Engineering roles with a
							2024 start date.
						</p>

						<p className='text-md py-5 leading-8 text-gray-800'>
							Please check the links below to contact me and learn
							more about what I do!
						</p>
					</div>

					<div className='text-5xl flex justify-center gap-16 py-3 pb-10 text-indigo-600'>
						<a
							href='https://www.linkedin.com/in/malbaker'
							target='_blank'
							rel='noreferrer noopener'
						>
							<AiFillLinkedin />
						</a>
						<a
							href='https://www.github.com/malbaker'
							target='_blank'
							rel='noreferrer noopener'
						>
							<AiFillGithub />
						</a>
						<a
							href='mailto:malikbaker75@gmail.com'
							target='_blank'
							rel='noreferrer noopener'
						>
							<AiFillMail />
						</a>
					</div>

					<footer className='relative my-10 flex flex-col text-center gap-2 xs:gap-0 xs:flex-row xs:text-justify justify-between'>
						<div className='text-gray-700 text-xl'>
							© 2024{" "}
							<a
								className='text-xl hover:underline transition-all'
								href='https://github.com/malbaker/malbaker.me'
								target='_blank'
								rel='noreferrer noopener'
							>
								Malik Baker
							</a>
						</div>
					</footer>
				</section>
			</main>
		</div>
	);
}
