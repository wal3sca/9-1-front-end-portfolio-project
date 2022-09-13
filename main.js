const URL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

// fetches URL
fetch(URL)
// convert response to JSON
.then(res => res.json())
// log data to tell user that you're able to grab data
.then(resJson=>console.log(resJson))
// look for errors
.catch((err) => console.log(err))