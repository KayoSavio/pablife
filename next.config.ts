/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // ISSO CORRIGE O ERRO DO CREATEROOT E DUPLA RENDERIZAÇÃO
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei']
};

export default nextConfig;