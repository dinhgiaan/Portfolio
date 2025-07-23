// import { useRef, useEffect } from "react"
// import * as THREE from "three"

// interface StarUserData {
//       originalOpacity: number
//       twinkleSpeed: number
//       twinkleOffset: number
// }

// interface BrightStarUserData extends StarUserData {
//       pulseSpeed: number
//       pulseOffset: number
// }

// interface MeteorUserData {
//       velocity: THREE.Vector3
//       life: number
//       fadeSpeed: number
//       trailId: string
// }

// interface TrailParticleUserData {
//       life: number
//       maxLife: number
//       fadeSpeed: number
//       trailId: string
// }

// export const SpaceBackground: React.FC = () => {
//       const mountRef = useRef<HTMLDivElement>(null)
//       const sceneRef = useRef<THREE.Scene | null>(null)
//       const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
//       const starsRef = useRef<THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>[]>([])
//       const brightStarsRef = useRef<THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>[]>([])
//       const meteorsRef = useRef<THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>[]>([])
//       const trailParticlesRef = useRef<THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>[]>([])
//       const animationRef = useRef<number | null>(null)
//       const lastMeteorWaveRef = useRef<number>(0)

//       const starColors: string[] = ["#ffffff", "#ffffcc", "#ffcccc", "#ccccff", "#ccffff"]
//       const brightStarColors: string[] = ["#ffffff", "#ffffaa", "#ffaaaa", "#aaaaff", "#aaffff", "#ffff88"]

//       useEffect(() => {
//             if (!mountRef.current) return

//             // Setup scene
//             const scene = new THREE.Scene()
//             sceneRef.current = scene

//             // Setup camera
//             const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//             camera.position.z = 1

//             // Setup renderer
//             const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
//             renderer.setSize(window.innerWidth, window.innerHeight)
//             renderer.setClearColor(0x000011, 1)
//             rendererRef.current = renderer
//             mountRef.current.appendChild(renderer.domElement)

//             // Create regular stars
//             const createStars = (): void => {
//                   const stars: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>[] = []
//                   for (let i = 0; i < 800; i++) {
//                         const geometry = new THREE.SphereGeometry(Math.random() * 0.003 + 0.001, 8, 8)
//                         const material = new THREE.MeshBasicMaterial({
//                               color: starColors[Math.floor(Math.random() * starColors.length)],
//                               transparent: true,
//                               opacity: 1
//                         })

//                         const star = new THREE.Mesh(geometry, material)
//                         star.position.x = (Math.random() - 0.5) * 4
//                         star.position.y = (Math.random() - 0.5) * 4
//                         star.position.z = (Math.random() - 0.5) * 4

//                         const userData: StarUserData = {
//                               originalOpacity: material.opacity,
//                               twinkleSpeed: Math.random() * 0.02 + 0.005,
//                               twinkleOffset: Math.random() * Math.PI * 2,
//                         }
//                         star.userData = userData

//                         scene.add(star)
//                         stars.push(star)
//                   }
//                   starsRef.current = stars
//             }

//             // Create bright prominent stars
//             const createBrightStars = (): void => {
//                   const brightStars: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>[] = []
//                   for (let i = 0; i < 20; i++) {
//                         let size: number
//                         const sizeType = Math.random()
//                         if (sizeType < 0.6) {
//                               size = Math.random() * 0.004 + 0.008
//                         } else if (sizeType < 0.85) {
//                               size = Math.random() * 0.005 + 0.015
//                         } else {
//                               size = Math.random() * 0.01 + 0.025
//                         }

//                         const geometry = new THREE.SphereGeometry(size, 12, 12)
//                         const material = new THREE.MeshBasicMaterial({
//                               color: brightStarColors[Math.floor(Math.random() * brightStarColors.length)],
//                               transparent: true,
//                               opacity: Math.random() * 0.4 + 0.6,
//                         })

//                         const star = new THREE.Mesh(geometry, material)
//                         star.position.x = (Math.random() - 0.5) * 5
//                         star.position.y = (Math.random() - 0.5) * 5
//                         star.position.z = (Math.random() - 0.5) * 3

//                         const userData: BrightStarUserData = {
//                               originalOpacity: material.opacity,
//                               twinkleSpeed: Math.random() * 0.015 + 0.008,
//                               twinkleOffset: Math.random() * Math.PI * 2,
//                               pulseSpeed: Math.random() * 0.01 + 0.005,
//                               pulseOffset: Math.random() * Math.PI * 2,
//                         }
//                         star.userData = userData

//                         scene.add(star)
//                         brightStars.push(star)
//                   }
//                   brightStarsRef.current = brightStars
//             }

//             // Create trail particle
//             const createTrailParticle = (position: THREE.Vector3, trailId: string, intensity = 1): void => {
//                   // Tạo 2 lớp vệt sáng để có hiệu ứng glow
//                   for (let layer = 0; layer < 2; layer++) {
//                         const size =
//                               layer === 0
//                                     ? Math.random() * 0.005 + 0.004
//                                     : // Lớp trong lớn hơn
//                                     Math.random() * 0.008 + 0.006 // Lớp ngoài lớn hơn nữa

//                         const geometry = new THREE.SphereGeometry(size, 8, 8)

//                         // Màu sắc rực rỡ hơn với hiệu ứng glow
//                         const colors =
//                               layer === 0
//                                     ? ["#ffffff", "#ffffee", "#ffeeaa"]
//                                     : // Lớp trong sáng trắng
//                                     ["#aaffff", "#aaeeff", "#88ddff"] // Lớp ngoài có màu xanh nhạt

//                         const material = new THREE.MeshBasicMaterial({
//                               color: colors[Math.floor(Math.random() * colors.length)],
//                               transparent: true,
//                               opacity:
//                                     layer === 0
//                                           ? Math.min(1.0, 1.0 * intensity)
//                                           : // Lớp trong sáng tối đa
//                                           Math.min(0.7, 0.6 * intensity), // Lớp ngoài trong suốt hơn
//                         })

//                         const particle = new THREE.Mesh(geometry, material)
//                         particle.position.copy(position)

//                         // Thêm một chút offset ngẫu nhiên cho lớp ngoài
//                         if (layer === 1) {
//                               particle.position.x += (Math.random() - 0.5) * 0.01
//                               particle.position.y += (Math.random() - 0.5) * 0.01
//                         }

//                         const maxLife = 2.0 + Math.random() * 1.0 // Tăng thời gian sống lên 2-3 giây
//                         const userData: TrailParticleUserData = {
//                               life: maxLife,
//                               maxLife: maxLife,
//                               fadeSpeed: 0.006 + Math.random() * 0.003, // Giảm tốc độ mờ đi hơn nữa
//                               trailId: trailId,
//                         }
//                         particle.userData = userData

//                         scene.add(particle)
//                         trailParticlesRef.current.push(particle)
//                   }
//             }

//             // Create meteor with trail system
//             const createMeteor = (): void => {
//                   const size = Math.random() * 0.004 + 0.004 // Tăng kích thước sao băng gấp đôi
//                   const geometry = new THREE.SphereGeometry(size, 12, 12) // Tăng độ chi tiết

//                   // Tạo hiệu ứng glow cho sao băng bằng cách tạo 2 lớp
//                   const materials = [
//                         new THREE.MeshBasicMaterial({
//                               color: "#ffffff",
//                               transparent: true,
//                               opacity: 1,
//                         }),
//                         new THREE.MeshBasicMaterial({
//                               color: "#aaffff",
//                               transparent: true,
//                               opacity: 1,
//                         }),
//                   ]

//                   // Tạo sao băng chính
//                   const meteor = new THREE.Mesh(geometry, materials[0])

//                   // Tạo lớp glow xung quanh
//                   const glowGeometry = new THREE.SphereGeometry(size * 1.5, 12, 12)
//                   const glowMeteor = new THREE.Mesh(glowGeometry, materials[1])

//                   const trailId = `meteor_${Date.now()}_${Math.random()}`

//                   // ... giữ nguyên logic positioning và velocity ...

//                   const pattern = Math.floor(Math.random() * 8)
//                   const baseSpeed = 0.001 + Math.random() * 0.005

//                   switch (pattern) {
//                         case 0:
//                               meteor.position.set(-3, 2.5, Math.random() - 0.5)
//                               glowMeteor.position.set(-3, 2.5, Math.random() - 0.5)
//                               break
//                         case 1:
//                               meteor.position.set(3, 2.5, Math.random() - 0.5)
//                               glowMeteor.position.set(3, 2.5, Math.random() - 0.5)
//                               break
//                         case 2:
//                               meteor.position.set(-3, -2.5, Math.random() - 0.5)
//                               glowMeteor.position.set(-3, -2.5, Math.random() - 0.5)
//                               break
//                         case 3:
//                               meteor.position.set(3, -2.5, Math.random() - 0.5)
//                               glowMeteor.position.set(3, -2.5, Math.random() - 0.5)
//                               break
//                         case 4:
//                               meteor.position.set(-3, Math.random() * 2 - 1, Math.random() - 0.5)
//                               glowMeteor.position.set(-3, Math.random() * 2 - 1, Math.random() - 0.5)
//                               break
//                         case 5:
//                               meteor.position.set(3, Math.random() * 2 - 1, Math.random() - 0.5)
//                               glowMeteor.position.set(3, Math.random() * 2 - 1, Math.random() - 0.5)
//                               break
//                         case 6:
//                               meteor.position.set(Math.random() * 2 - 1, 2.5, Math.random() - 0.5)
//                               glowMeteor.position.set(Math.random() * 2 - 1, 2.5, Math.random() - 0.5)
//                               break
//                         case 7:
//                               meteor.position.set(Math.random() * 2 - 1, 2.5, Math.random() - 0.5)
//                               glowMeteor.position.set(Math.random() * 2 - 1, 2.5, Math.random() - 0.5)
//                               break
//                   }

//                   // Set velocity based on pattern
//                   let velocity: THREE.Vector3
//                   switch (pattern) {
//                         case 0:
//                               velocity = new THREE.Vector3(baseSpeed, -baseSpeed * 0.8, 0)
//                               break
//                         case 1:
//                               velocity = new THREE.Vector3(-baseSpeed, -baseSpeed * 0.8, 0)
//                               break
//                         case 2:
//                               velocity = new THREE.Vector3(baseSpeed, baseSpeed * 0.8, 0)
//                               break
//                         case 3:
//                               velocity = new THREE.Vector3(-baseSpeed, baseSpeed * 0.8, 0)
//                               break
//                         case 4:
//                               velocity = new THREE.Vector3(baseSpeed, -baseSpeed * 0.3, 0)
//                               break
//                         case 5:
//                               velocity = new THREE.Vector3(-baseSpeed, -baseSpeed * 0.3, 0)
//                               break
//                         case 6:
//                               velocity = new THREE.Vector3(baseSpeed * 0.4, -baseSpeed, 0)
//                               break
//                         case 7:
//                               velocity = new THREE.Vector3(-baseSpeed * 0.4, -baseSpeed, 0)
//                               break
//                         default:
//                               velocity = new THREE.Vector3(baseSpeed, -baseSpeed * 0.8, 0)
//                   }

//                   const userData: MeteorUserData = {
//                         velocity,
//                         life: 1.0,
//                         fadeSpeed: 0.003 + Math.random() * 0.002, // Giảm tốc độ mờ để sao băng sáng lâu hơn
//                         trailId: trailId,
//                   }
//                   meteor.userData = userData
//                   glowMeteor.userData = userData

//                   scene.add(meteor)
//                   scene.add(glowMeteor)
//                   meteorsRef.current.push(meteor)
//                   meteorsRef.current.push(glowMeteor) // Thêm cả lớp glow vào mảng
//             }

//             // Create multiple meteors at once (meteor wave)
//             const createMeteorWave = (): void => {
//                   const count = 17 // Tăng lên 12 sao băng mỗi đợt
//                   for (let i = 0; i < count; i++) {
//                         setTimeout(() => createMeteor(), i * (Math.random() * 100 + 50)) // Giảm thời gian delay hơn nữa
//                   }
//             }

//             // Animation loop
//             const animate = (): void => {
//                   animationRef.current = requestAnimationFrame(animate)
//                   const time = Date.now() * 0.001

//                   // Animate regular stars twinkling
//                   starsRef.current.forEach((star) => {
//                         const userData = star.userData as StarUserData
//                         const twinkle = Math.sin(time * userData.twinkleSpeed + userData.twinkleOffset) * 0.3 + 0.7
//                         star.material.opacity = userData.originalOpacity * twinkle
//                   })

//                   // Animate bright stars with more complex twinkling
//                   brightStarsRef.current.forEach((star) => {
//                         const userData = star.userData as BrightStarUserData
//                         const twinkle = Math.sin(time * userData.twinkleSpeed + userData.twinkleOffset) * 0.4 + 0.6
//                         const pulse = Math.sin(time * userData.pulseSpeed + userData.pulseOffset) * 0.2 + 0.8
//                         star.material.opacity = userData.originalOpacity * twinkle * pulse

//                         if (star.geometry.parameters.radius && star.geometry.parameters.radius > 0.02) {
//                               const scale = 1 + Math.sin(time * userData.pulseSpeed + userData.pulseOffset) * 0.1
//                               star.scale.setScalar(scale)
//                         }
//                   })

//                   // Check for meteor wave timing
//                   if (time - lastMeteorWaveRef.current > 5) {
//                         // Cố định 5 giây
//                         if (meteorsRef.current.length < 25) {
//                               // Tăng giới hạn số lượng sao băng lên 25
//                               createMeteorWave()
//                               lastMeteorWaveRef.current = time
//                         }
//                   }

//                   // Animate meteors and create trails
//                   meteorsRef.current.forEach((meteor, index) => {
//                         const userData = meteor.userData as MeteorUserData

//                         // Create trail particles behind the meteor
//                         if (userData.life > 0.1) {
//                               // Tăng số lượng hạt vệt sáng từ 4 lên 6
//                               for (let i = 0; i < 6; i++) {
//                                     const trailPosition = meteor.position.clone()
//                                     // Add some randomness to trail position
//                                     trailPosition.x += (Math.random() - 0.5) * 0.02
//                                     trailPosition.y += (Math.random() - 0.5) * 0.02
//                                     trailPosition.z += (Math.random() - 0.5) * 0.02

//                                     const intensity = userData.life * (0.9 + Math.random() * 0.3) // Tăng cường độ sáng hơn nữa
//                                     createTrailParticle(trailPosition, userData.trailId, intensity)
//                               }
//                         }

//                         meteor.position.add(userData.velocity)
//                         userData.life -= userData.fadeSpeed
//                         meteor.material.opacity = userData.life

//                         // Remove dead meteors
//                         if (userData.life <= 0 || Math.abs(meteor.position.x) > 4 || Math.abs(meteor.position.y) > 4) {
//                               scene.remove(meteor)
//                               meteorsRef.current.splice(index, 1)
//                         }
//                   })

//                   // Animate trail particles
//                   trailParticlesRef.current.forEach((particle, index) => {
//                         const userData = particle.userData as TrailParticleUserData
//                         userData.life -= userData.fadeSpeed

//                         // Fade out effect - giữ độ sáng cao hơn trong thời gian dài hơn
//                         const fadeRatio = userData.life / userData.maxLife
//                         particle.material.opacity = Math.pow(fadeRatio, 0.5) * 0.98 // Giữ độ sáng gần tối đa

//                         // Slight shrinking effect - giảm tốc độ thu nhỏ hơn nữa
//                         const scale = 0.8 + fadeRatio * 0.4
//                         particle.scale.setScalar(scale)

//                         // Remove dead trail particles
//                         if (userData.life <= 0) {
//                               scene.remove(particle)
//                               trailParticlesRef.current.splice(index, 1)
//                         }
//                   })

//                   renderer.render(scene, camera)
//             }

//             // Handle window resize
//             const handleResize = (): void => {
//                   camera.aspect = window.innerWidth / window.innerHeight
//                   camera.updateProjectionMatrix()
//                   renderer.setSize(window.innerWidth, window.innerHeight)
//             }

//             // Initialize
//             createStars()
//             createBrightStars()
//             animate()

//             window.addEventListener("resize", handleResize)

//             // Cleanup
//             return () => {
//                   window.removeEventListener("resize", handleResize)
//                   if (animationRef.current) {
//                         cancelAnimationFrame(animationRef.current)
//                   }
//                   if (mountRef.current && renderer.domElement) {
//                         mountRef.current.removeChild(renderer.domElement)
//                   }
//                   renderer.dispose()
//             }
//       }, [])

//       return (
//             <div
//                   ref={mountRef}
//                   style={{
//                         position: "fixed",
//                         top: 0,
//                         left: 0,
//                         width: "100%",
//                         height: "100%",
//                         zIndex: -1,
//                         overflow: "hidden",
//                   }}
//             />
//       )
// }
