interface TechIconProps {
      tech: string;
      alt: string;
      className?: string;
}

const TechIcon = ({ tech, alt, className = "w-5 h-5" }: TechIconProps) => {
      return (
            <img
                  alt={alt}
                  className={`${className} object-contain group-hover/skill:scale-110 transition-transform duration-200`}
                  src={`/assets/${tech}-20w.webp`}
                  srcSet={`/assets/${tech}-20w.webp 1x,
               /assets/${tech}-40w.webp 2x,
               /assets/${tech}-60w.webp 3x`}
                  width={20}
                  height={20}
                  loading="lazy"
            />
      );
};

export default TechIcon;
