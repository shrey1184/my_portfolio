"use client"

import React, { useContext, useEffect, useRef, useState } from "react"
import {
	motion,
	useAnimationFrame,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
} from "motion/react"
import { cn } from "@/lib/utils"

const wrap = (min, max, v) => {
	const rangeSize = max - min
	return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const ScrollVelocityContext = React.createContext(null)

// Project data from GitHub pinned repos
const projects = [
	{
		id: 1,
		title: "Sampark",
		description: "Modular Offline Data Collection Toolkit for Panchayats. Offline-first web application for rural Panchayat survey data collection with automatic sync.",
		tech: ["React", "FastAPI", "PostgreSQL", "IndexedDB"],
		github: "https://github.com/namanxdev/Sampark",
		image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80",
		link: "https://sampark-delta.vercel.app/"
	},
	{
		id: 2,
		title: "2D Adventure Game",
		description: "A tile-based 2D adventure game built with Java Swing featuring smooth player movement, sprite animations, and collision detection in a 50x50 tile world.",
		tech: ["Java", "Swing", "Game Development"],
		github: "https://github.com/shrey1184/2D-adventure",
		image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop&q=80",
		link: null
	},
	{
		id: 3,
		title: "NASA Climate Trends Prediction",
		description: "LSTM-based ML model for climate anomaly prediction using NASA POWER data. Predicts temperature and precipitation anomalies with high accuracy.",
		tech: ["Python", "TensorFlow", "LSTM", "NASA API"],
		github: "https://github.com/shrey1184/nasa-ml-model",
		image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop&q=80",
		link: null
	},
	{
		id: 4,
		title: "Portfolio Website",
		description: "Personal portfolio website showcasing projects, skills, and experience with modern animations and 3D elements.",
		tech: ["React", "Vite", "Three.js", "Framer Motion"],
		github: "https://github.com/shrey1184/my_portfolio",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
		link: null
	},
	{
		id: 5,
		title: "Agentic Loan Processing System",
		description: "Multi-agent loan application system with LangGraph workflow. Features 6 decision agents for automated KYC, credit assessment, and sanction letter generation.",
		tech: ["FastAPI", "LangGraph", "PostgreSQL", "Next.js"],
		github: "https://github.com/shrey1184/ey-folder",
		image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&q=80",
		link: null
	},
	{
		id: 6,
		title: "Metro Kochi Data Ingestion",
		description: "Data ingestion pipeline for metro systems with ML-based predictive analytics for passenger flow and maintenance scheduling.",
		tech: ["TypeScript", "Python", "Jupyter", "FastAPI"],
		github: "https://github.com/shrey1184/metrokochi-dataingestion",
		image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop&q=80",
		link: null
	}
]

function ProjectCard({ project }) {
	return (
		<div 
			className="project-card"
			style={{
				minWidth: '400px',
				maxWidth: '400px',
				height: '500px',
				margin: '0 2rem',
				background: 'rgba(15, 23, 42, 0.8)',
				border: '1px solid rgba(59, 130, 246, 0.3)',
				borderRadius: '1rem',
				padding: '2rem',
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
				backdropFilter: 'blur(10px)',
				transition: 'all 0.3s ease',
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.8)'
				e.currentTarget.style.transform = 'translateY(-5px)'
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
				e.currentTarget.style.transform = 'translateY(0)'
			}}
		>
			{/* Image placeholder */}
			<div 
				style={{
					width: '100%',
					height: '200px',
					background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)',
					borderRadius: '0.5rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '3rem',
					color: 'rgba(59, 130, 246, 0.5)',
					border: '1px solid rgba(59, 130, 246, 0.2)',
				}}
			>
				{project.image ? (
					<img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
				) : (
					'📁'
				)}
			</div>

			{/* Title */}
			<h3 
				style={{
					fontSize: '1.5rem',
					fontWeight: 'bold',
					color: 'rgba(59, 130, 246, 0.9)',
					margin: 0,
				}}
			>
				{project.title}
			</h3>

			{/* Description */}
			<p 
				style={{
					fontSize: '0.9rem',
					color: 'rgba(255, 255, 255, 0.7)',
					lineHeight: '1.5',
					flex: 1,
					overflow: 'hidden',
					textOverflow: 'ellipsis',
				}}
			>
				{project.description}
			</p>

			{/* Tech stack */}
			<div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
				{project.tech.map((tech, index) => (
					<span 
						key={index}
						style={{
							fontSize: '0.75rem',
							padding: '0.25rem 0.75rem',
							background: 'rgba(59, 130, 246, 0.2)',
							border: '1px solid rgba(59, 130, 246, 0.3)',
							borderRadius: '9999px',
							color: 'rgba(59, 130, 246, 0.9)',
						}}
					>
						{tech}
					</span>
				))}
			</div>

			{/* Links */}
			<div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', flexWrap: 'wrap' }}>
				<a 
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					style={{
						padding: '0.5rem 1rem',
						background: 'rgba(59, 130, 246, 0.2)',
						border: '1px solid rgba(59, 130, 246, 0.5)',
						borderRadius: '0.5rem',
						color: 'rgba(59, 130, 246, 0.9)',
						textDecoration: 'none',
						fontSize: '0.9rem',
						transition: 'all 0.3s ease',
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.background = 'rgba(59, 130, 246, 0.3)'
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)'
					}}
				>
					GitHub →
				</a>
				{project.link && (
					<a 
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						style={{
							padding: '0.5rem 1rem',
							background: 'rgba(147, 51, 234, 0.2)',
							border: '1px solid rgba(147, 51, 234, 0.5)',
							borderRadius: '0.5rem',
							color: 'rgba(147, 51, 234, 0.9)',
							textDecoration: 'none',
							fontSize: '0.9rem',
							transition: 'all 0.3s ease',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background = 'rgba(147, 51, 234, 0.3)'
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background = 'rgba(147, 51, 234, 0.2)'
						}}
					>
						Live Demo →
					</a>
				)}
			</div>
		</div>
	)
}

function ScrollVelocityContainer({ children, className, ...props }) {
	const { scrollY } = useScroll()
	const scrollVelocity = useVelocity(scrollY)
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	})
	const velocityFactor = useTransform(smoothVelocity, (v) => {
		const sign = v < 0 ? -1 : 1
		const magnitude = Math.min(5, (Math.abs(v) / 1000) * 5)
		return sign * magnitude
	})

	return (
		<ScrollVelocityContext.Provider value={velocityFactor}>
			<div className={cn("relative w-full", className)} {...props}>
				{children}
			</div>
		</ScrollVelocityContext.Provider>
	)
}

function ScrollVelocityRow({ children, baseVelocity = 1, direction = 1, className, ...props }) {
	const sharedVelocityFactor = useContext(ScrollVelocityContext)
	const containerRef = useRef(null)
	const blockRef = useRef(null)
	const [numCopies, setNumCopies] = useState(1)
	const [isPaused, setIsPaused] = useState(false)

	const baseX = useMotionValue(0)
	const baseDirectionRef = useRef(direction >= 0 ? 1 : -1)
	const currentDirectionRef = useRef(direction >= 0 ? 1 : -1)
	const unitWidth = useMotionValue(0)

	const isInViewRef = useRef(true)
	const isPageVisibleRef = useRef(true)
	const prefersReducedMotionRef = useRef(false)

	useEffect(() => {
		const container = containerRef.current
		const block = blockRef.current
		if (!container || !block) return

		const updateSizes = () => {
			const cw = container.offsetWidth || 0
			const bw = block.scrollWidth || 0
			unitWidth.set(bw)
			const nextCopies = bw > 0 ? Math.max(3, Math.ceil(cw / bw) + 2) : 1
			setNumCopies((prev) => (prev === nextCopies ? prev : nextCopies))
		}

		updateSizes()

		const ro = new ResizeObserver(updateSizes)
		ro.observe(container)
		ro.observe(block)

		const io = new IntersectionObserver(([entry]) => {
			isInViewRef.current = entry.isIntersecting
		})
		io.observe(container)

		const handleVisibility = () => {
			isPageVisibleRef.current = document.visibilityState === "visible"
		}
		document.addEventListener("visibilitychange", handleVisibility, {
			passive: true,
		})
		handleVisibility()

		const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
		const handlePRM = () => {
			prefersReducedMotionRef.current = mq.matches
		}
		mq.addEventListener("change", handlePRM)
		handlePRM()

		return () => {
			ro.disconnect()
			io.disconnect()
			document.removeEventListener("visibilitychange", handleVisibility)
			mq.removeEventListener("change", handlePRM)
		}
	}, [children, unitWidth])

	const x = useTransform([baseX, unitWidth], ([v, bw]) => {
		const width = Number(bw) || 1
		const offset = Number(v) || 0
		return `${-wrap(0, width, offset)}px`
	})

	useAnimationFrame((_, delta) => {
		if (!isInViewRef.current || !isPageVisibleRef.current || isPaused) return
		const dt = delta / 1000
		const vf = sharedVelocityFactor ? sharedVelocityFactor.get() : 0
		const absVf = Math.min(5, Math.abs(vf))
		const speedMultiplier = prefersReducedMotionRef.current ? 1 : 1 + absVf

		if (absVf > 0.1 && sharedVelocityFactor) {
			const scrollDirection = vf >= 0 ? 1 : -1
			currentDirectionRef.current = baseDirectionRef.current * scrollDirection
		}

		const bw = unitWidth.get() || 0
		if (bw <= 0) return
		const pixelsPerSecond = (bw * baseVelocity) / 100
		const moveBy =
			currentDirectionRef.current * pixelsPerSecond * speedMultiplier * dt
		baseX.set(baseX.get() + moveBy)
	})

	return (
		<div
			ref={containerRef}
			className={cn("w-full overflow-hidden whitespace-nowrap", className)}
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
			{...props}
		>
			<motion.div
				className="inline-flex transform-gpu items-center will-change-transform select-none"
				style={{ x }}
			>
				{Array.from({ length: numCopies }).map((_, i) => (
					<div
						key={i}
						ref={i === 0 ? blockRef : null}
						aria-hidden={i !== 0}
						className="inline-flex shrink-0 items-center"
					>
						{children}
					</div>
				))}
			</motion.div>
		</div>
	)
}

export default function ProjectsSection() {
	return (
		<>
			<section 
				id="projects" 
				className="projects-section"
				style={{
					minHeight: '100vh',
					padding: '4rem 2rem',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '3rem',
					position: 'relative',
				}}
			>
				{/* Section Title */}
				<div style={{ textAlign: 'center', zIndex: 10 }}>
					<h2
						className="projects-title"
						style={{
							fontSize: '4.5em',
							fontWeight: 'bold',
							background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text',
							marginBottom: '1rem',
						}}
					>
						Featured Projects
					</h2>
					<p className="projects-subtitle" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.1rem' }}>
						Explore my latest work and contributions
					</p>
				</div>

				{/* Scrolling Projects Container */}
				<div style={{ width: '100%', position: 'relative', zIndex: 10 }}>
					<ScrollVelocityContainer className="w-full">
						<ScrollVelocityRow baseVelocity={10} direction={1}>
							{projects.map((project) => (
								<ProjectCard key={project.id} project={project} />
							))}
						</ScrollVelocityRow>
					</ScrollVelocityContainer>

					{/* Gradient overlays for fade effect */}
					<div 
						className="project-gradient-left"
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '200px',
							height: '100%',
							background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
							pointerEvents: 'none',
							zIndex: 20,
						}}
					/>
					<div 
						className="project-gradient-right"
						style={{
							position: 'absolute',
							top: 0,
							right: 0,
							width: '200px',
							height: '100%',
							background: 'linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
							pointerEvents: 'none',
							zIndex: 20,
						}}
					/>
				</div>
			</section>

			<style>{`
				/* Responsive Projects Section */
				@media (max-width: 768px) {
					.projects-section {
						padding: 2rem 1rem !important;
					}
					
					.projects-title {
						font-size: 2rem !important;
					}
					
					.projects-subtitle {
						font-size: 1.2rem !important;
					}
					
					.project-card {
						min-width: 300px !important;
						max-width: 300px !important;
						height: auto !important;
						min-height: 450px !important;
						margin: 0 1rem !important;
						padding: 1.5rem !important;
					}
					
					.project-gradient-left,
					.project-gradient-right {
						width: 100px !important;
					}
				}

				@media (max-width: 480px) {
					.projects-section {
						padding: 1.5rem 0.5rem !important;
						gap: 2rem !important;
					}
					
					.projects-title {
						font-size: 3.2rem !important;
					}
					
					.project-card {
						min-width: 260px !important;
						max-width: 260px !important;
						padding: 1rem !important;
					}
					
					.project-gradient-left,
					.project-gradient-right {
						width: 50px !important;
					}
				}
			`}</style>
		</>
	)
}
