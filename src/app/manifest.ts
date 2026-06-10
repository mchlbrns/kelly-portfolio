import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Michael Briones Portfolio',
    short_name: 'MB Portfolio',
    description: 'AI Automation & Full-Stack Developer Michael Briones builds custom web apps and automated pipelines.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#030712',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/avatar.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
