import Image from "next/image";
import clsx from "clsx";

interface PhoneFrameProps {
    src: string;
    alt: string;
    className?: string;
    imageClassName?: string;
    priority?: boolean;
    sizes?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({
    src,
    alt,
    className,
    imageClassName,
    priority,
    sizes = "(min-width: 1024px) 340px, (min-width: 640px) 290px, 250px",
}) => {
    return (
        <div
            className={clsx(
                "relative aspect-[623/1280] rounded-[2.35rem] border-[8px] border-gray-950 bg-gray-950 p-1.5 shadow-[0_24px_70px_rgba(15,23,42,0.24)]",
                className
            )}
        >
            <div className="absolute -left-[10px] top-[18%] h-14 w-1.5 rounded-l-full bg-gray-900" />
            <div className="absolute -right-[10px] top-[24%] h-20 w-1.5 rounded-r-full bg-gray-900" />
            <div className="absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-b-2xl rounded-t-full bg-gray-950" />
            <div className="relative h-full overflow-hidden rounded-[1.75rem] bg-white">
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

export default PhoneFrame;
