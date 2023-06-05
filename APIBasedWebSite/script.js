async function GetQuote()
{
let result=await fetch("https://api.quotable.io/random") //will return promise 
// unless you specify method name in fetch funtion, it will always get method
console.log(result)
console.log("================================")
let data = await result.text()
console.log(data)
console.log("================================")
console.log(JSON.parse(data))
console.log("================================")
quote = JSON.parse(data)
author = quote.author
content = quote.content
let code =""
code = "<p>" + content + "</p>"
code += "<b><li>" + author + "</li></b>"
document.getElementById("quotes-for-the-day").innerHTML = code


//alternative way
/*
result.then (
    (result) => {
        result.text().then (
          (data)  => console.log(JSON.parse(data)) ,
          (error) => console.log(error)
        )
    }  ,
    (error) => console.log("Error")
) */
}
GetQuote()
setInterval(GetQuote,5000)

async function SearchAuthor()
{
   let searchStr =  document.getElementById("author").value
   let result=await fetch("https://api.quotable.io/search/authors?query="+searchStr)
   let data = await result.text()
   authordata = JSON.parse(data)
   let authors = authordata.results
   let code=""
   for(let author of authors)
   {
    code += "<div class='author-name'>" + author.name + "</div>"
   }
   document.getElementById("author-result").innerHTML = code 
}
/* result
Response {
  [Symbol(realm)]: null,    
  [Symbol(state)]: {        
    aborted: false,
    rangeRequested: false,  
    timingAllowPassed: true,
    requestIncludesCredentials: true,
    type: 'default',
    status: 200,
    timingInfo: {
      startTime: 52.9789000749588,
      redirectStartTime: 0,
      redirectEndTime: 0,
      postRedirectStartTime: 52.9789000749588,
      finalServiceWorkerStartTime: 0,
      finalNetworkResponseStartTime: 0,
      finalNetworkRequestStartTime: 0,
      endTime: 0,
      encodedBodySize: 281,
      decodedBodySize: 281,
      finalConnectionTimingInfo: null
    },
    cacheState: '',
    statusText: 'OK',
    headersList: HeadersList {
      cookies: null,
      [Symbol(headers map)]: [Map],
      [Symbol(headers map sorted)]: null
    },
    urlList: [ [URL] ],
    body: { stream: undefined }
  },
  [Symbol(headers)]: HeadersList {
    cookies: null,
    [Symbol(headers map)]: Map(12) {
      'server' => [Object],
      'connection' => [Object],
      'x-powered-by' => [Object],
      'access-control-allow-origin' => [Object],
      'ratelimit-limit' => [Object],
      'ratelimit-remaining' => [Object],
      'ratelimit-reset' => [Object],
      'content-type' => [Object],
      'content-length' => [Object],
      'etag' => [Object],
      'date' => [Object],
      'via' => [Object]
    },
    [Symbol(headers map sorted)]: null
  }
}
================================
{"_id":"tLoJe82KV","author":"Winston Churchill","content":"Now this is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning.","tags":[],"authorSlug":"winston-churchill","length":111,"dateAdded":"2022-03-12","dateModified":"2022-03-12"}
================================
{
  _id: 'tLoJe82KV',
  author: 'Winston Churchill',
  content: 'Now this is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning.',
  tags: [],
  authorSlug: 'winston-churchill',
  length: 111,
  dateAdded: '2022-03-12',
  dateModified: '2022-03-12'
}
*/


