export const getAssetPath = (path: string) => {
  const basePath = "/portifolio";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return process.env.NODE_ENV === "production"
    ? `${basePath}${cleanPath}`
    : cleanPath;
};
