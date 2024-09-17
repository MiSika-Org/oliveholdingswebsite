/** @type {import('next').NextConfig} */
import withPlugins from "next-compose-plugins";
import withImages from "next-images";

const nextConfig = {
  images: {
    disableStaticImages: true,
  },
};

export default withPlugins([withImages], nextConfig);
