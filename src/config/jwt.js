let jwtSecret;

export const getJWTSecret = () => jwtSecret;

export const setJWTSecret = (secret) => {
  jwtSecret = secret;
};
