
export const SubtleGridBackground = () => {
      return (
            <div className="fixed inset-0 -z-10 overflow-hidden">
                  <section className="relative w-full h-screen dark:bg-black bg-white overflow-hidden">
                        <div className="absolute pointer-events-none bg-[#5e5e5e] w-1/3 h-16 blur-3xl mt-36 rotate-20"
                        ></div>
                  </section>

                  <div
                        className="absolute inset-0 opacity-25 dark:hidden"
                        style={{
                              backgroundImage: `
            linear-gradient(rgba(71, 85, 105, 0.4) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(71, 85, 105, 0.4) 0.5px, transparent 0.5px)
          `,
                              backgroundSize: '30px 30px',
                        }}
                  />

                  <div
                        className="absolute inset-0 opacity-40 hidden dark:block"
                        style={{
                              backgroundImage: `
            linear-gradient(rgba(243, 242, 242, 0.8) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(243, 242, 242, 0.8) 0.5px, transparent 0.5px)
          `,
                              backgroundSize: '30px 30px',
                        }}
                  />

                  <div
                        className="absolute inset-0 opacity-60"
                        style={{
                              background: `
            radial-gradient(ellipse 150% 120% at 0% 0%,
              rgba(255, 255, 255, 0.08) 0%,
              rgba(255, 255, 255, 0.04) 30%,
              rgba(255, 255, 255, 0.02) 50%,
              transparent 70%
            )
          `
                        }}
                  />

                  <div
                        className="absolute inset-0 opacity-30"
                        style={{
                              background: `
            linear-gradient(135deg,
              rgba(255, 255, 255, 0.05) 0%,
              rgba(255, 255, 255, 0.02) 25%,
              transparent 50%
            )
          `
                        }}
                  />

                  <div
                        className="absolute inset-0 opacity-15 mix-blend-soft-light"
                        style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                              backgroundSize: '150px 150px'
                        }}
                  />
            </div>
      );
};
