interface ProjectImageProps {
      src: string;
      alt: string;
      className?: string;
}

const ProjectImage = ({ src, alt, className = "" }: ProjectImageProps) => {
      const filename = src.split('/').pop()?.split('.')[0] || '';

      // Define sizes based on your report
      const getSrcSet = (filename: string) => {
            if (filename.includes('novelnest')) {
                  return `/assets/novelnest-homepage-432w.webp 432w,
              /assets/novelnest-homepage-864w.webp 864w,
              /assets/novelnest-homepage-1296w.webp 1296w`;
            }
            if (filename.includes('codeguru')) {
                  return `/assets/codeguru-homepage-435w.webp 435w,
              /assets/codeguru-homepage-870w.webp 870w,
              /assets/codeguru-homepage-1305w.webp 1305w`;
            }
            return '';
      };

      const getDefaultSrc = (filename: string) => {
            if (filename.includes('novelnest')) {
                  return `/assets/novelnest-homepage-432w.webp`;
            }
            if (filename.includes('codeguru')) {
                  return `/assets/codeguru-homepage-435w.webp`;
            }
            return src;
      };

      return (
            <img
                  src={getDefaultSrc(filename)}
                  alt={alt}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${className}`}
                  srcSet={getSrcSet(filename)}
                  sizes="(max-width: 768px) 95vw, (max-width: 1024px) 45vw, 435px"
                  width={435}
                  height={192}
                  loading="lazy"
                  onError={(e) => {
                        e.currentTarget.style.display = "none"
                        e.currentTarget.parentElement!.innerHTML = `
          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-purple-600/10">
            <div class="text-center">
              <p class="text-muted-foreground text-sm">Ảnh hiện tại không khả thi!</p>
            </div>
          </div>
        `
                  }}
            />
      );
};

export default ProjectImage;
