const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteButton = document.getElementById('new-quote')
const loader = document.getElementById('loader')

function loading(){
      loader.hidden = false
      quoteContainer.hidden = true
}

function complete(){
      loader.hidden = true
      quoteContainer.hidden = false
}


//for locally stored quotes
// show new quote
function newQuote(){
      // pick a random quote from apiquotes array
      const quote = localQuotes[Math.floor(Math.random()*localQuotes.length)]

      // check if author field is blank and replace it with unknown
      if(!quote.author){
            authorText.textContent = "Unknown"
      }else{
            authorText.textContent = quote.author
      }
      // check quote length to determine styling
      if(quote.text.length>70){
            quoteText.classList.add('long-quote')
      }else{
            quoteText.classList.remove('long-quote')
      }

      quoteText.textContent = quote.text
}

function tweetQuote(){
      const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
      window.open(twitterUrl, '_blank')
}

newQuoteButton.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

// on load
newQuote()

//for an API

// let apiQuotes = []

// // show new quote
// function newQuote(){
//       // pick a random quote from apiquotes array
//       const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
//       console.log(quote)
// }

// // Get Quotes From API
// async function getQuote() {
      // loading
//       const apiUrl = 'https://type.fit/api/quotes'
//       try{
//             const response = await fetch(apiUrl)
//             apiQuotes = await response.json()
//             newQuote()
//       }catch(error){
//             //catch error here 
//       }
// }

// // on load
// getQuote()


