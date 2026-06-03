const getLuminance = (color: string) => {
     const channels = color.match(/\d+(\.\d+)?/g)?.slice(0, 3).map(Number);

     if (!channels || channels.length < 3) return 255;

     const [r, g, b] = channels;
     return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const getGradientLuminance = (backgroundImage: string) => {
     const colors = [...backgroundImage.matchAll(/rgba?\([^)]+\)/g)].map(([color]) => getLuminance(color));

     if (!colors.length) return null;

     return colors.reduce((sum, luminance) => sum + luminance, 0) / colors.length;
};

export const getSurfaceLuminanceAt = (x: number, y: number) => {
     const sampleX = Math.min(window.innerWidth - 1, Math.max(0, x));
     const sampleY = Math.min(window.innerHeight - 1, Math.max(0, y));
     const elements = document.elementsFromPoint(sampleX, sampleY);

     for (const element of elements) {
          if (element.closest("header")) continue;

          const styles = window.getComputedStyle(element);
          const color = styles.backgroundColor;
          const gradientLuminance = getGradientLuminance(styles.backgroundImage);

          if (color && color !== "rgba(0, 0, 0, 0)" && color !== "transparent") {
               return getLuminance(color);
          }

          if (gradientLuminance !== null) {
               return gradientLuminance;
          }
     }

     return 255;
};
