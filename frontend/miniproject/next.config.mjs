import withReactSvg from 'next-react-svg';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    return config;
  }
};

export default withReactSvg({
  include: path.resolve(process.cwd(), 'src/app/chatfolder/components'),
})(nextConfig);