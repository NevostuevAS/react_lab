import { createContext, useContext } from 'react';

export const ImageSizeContext = createContext(100);

export function useImageSize() {
  return useContext(ImageSizeContext);
}