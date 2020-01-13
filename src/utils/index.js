import baseUrl from '../services/config';

export function getImageUrl(detail) {
  const imageName = detail && detail.image && detail.image.replace('uploads/', '')
  return `${baseUrl.devUrl}/${imageName}`
}
