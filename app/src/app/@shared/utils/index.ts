export const hexToComponent = hex => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : { r: 0, g: 0, b: 0 };
};

export const getContrastTextColor = (backgroundColor: string) => {
    const { r: a, g: b, b: c } = hexToComponent(backgroundColor);
    return 150 < a * 0.299 + b * 0.587 + c * 0.114 ? '#000' : '#fff';
};
