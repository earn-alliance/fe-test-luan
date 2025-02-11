export const tryLoadImage = async (
  imageName: string,
  extensions: string[],
): Promise<string | null> => {
  for (const ext of extensions) {
    try {
      const imagePath = `/images/${imageName}${ext}`;
      // Tentativa de carregar a imagem
      const response = await fetch(imagePath);
      if (response.ok) {
        return imagePath;
      }
    } catch (error) {
      console.error(`Failed to load image with extension ${ext}:`, error);
    }
  }
  return null; // Retorna null se nenhuma imagem for encontrada
};
