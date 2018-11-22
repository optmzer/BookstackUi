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

declare interface IBook {
  id: number,
  created: Date,
  title: string,
  author: string,
  yearPublished: number,
  isbn: string,
  bookReview: number,
  coverUrl: string,
  bookTags: Array<{}>,
  listComments: Array<{}>
}

/**
 * 
 *   author: "Andrew Stellman"
 *   bookRating: 5
 *   bookReview: "C# is a general purpose, object-oriented, component-based programming language. As a general purpose language, there are a number of ways to apply C# to accomplish many different tasks."
 *   bookTags: Array [ {…}, {…} ]
 *   coverUrl: "https://books.google.co.nz/books/content?id=dewmNEwiv4sC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73hd9bSvdmdldCmKBOcF77G6fV-KKmS-48vsTZiQADaRBDjTWHn2PAjusyizNcwgW3-p4hSt6fyHbPbB_2a9SypGxXE_-rpsOb08XbgCDON0WegohIpVpFVk4DXtjV4yOyQBPGW"
 *   created: "2018-11-21T06:38:24.3972987"
 *   id: 1
 *   isbn: "9781449358846"
 *   listComments: Array [ {…}, {…} ]
 *   title: "Head First C#"
 *   yearPublished: 2013
 */