import Image from "next/image";
import clsx from "clsx";

interface TabletFrameProps {
    src: string;
    alt: string;
    className?: string;
    imageClassName?: string;
    priority?: boolean;
    sizes?: string;
}

const TabletFrame: React.FC<TabletFrameProps> = ({
    src,
    alt,
    className,
    imageClassName,
    priority,
    sizes = "(min-width: 1024px) 430px, (min-width: 640px) 360px, 300px",
}) => {
    return (
        <div
            className={clsx(
                "relative aspect-[5/8] rounded-[2rem] border-[10px] border-gray-950 bg-gray-950 p-2 shadow-[0_28px_80px_rgba(15,23,42,0.24)]",
                className
            )}
        >
            <div className="relative h-full overflow-hidden rounded-[1.25rem] bg-white">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    sizes={sizes}
                    className={clsx("object-cover object-top", imageClassName)}
                />
            </div>
        </div>
    );
};

export default TabletFrame;
