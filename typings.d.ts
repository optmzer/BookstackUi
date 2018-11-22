/**
 * Import env variables from .env file.
 */
declare module 'dotenv';

declare module 'applicationinsights-js'
/**
 * Contains data of image search result from Pexel
 */
interface IPexelImg {
  photographer: string,
  src: string,
  url: string,
  }