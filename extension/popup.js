const urls = ["https://master.d7mpwhkjqf33j.amplifyapp.com/explore/facebook",
"https://master.d7mpwhkjqf33j.amplifyapp.com/explore/AE",
"https://master.d7mpwhkjqf33j.amplifyapp.com/explore/aaronsinc",
"https://master.d7mpwhkjqf33j.amplifyapp.com/explore/appliedoptoelect",
"https://master.d7mpwhkjqf33j.amplifyapp.com/explore/biotelemetry",
"https://master.d7mpwhkjqf33j.amplifyapp.com/explore/blackhillscorporationv",
"https://master.d7mpwhkjqf33j.amplifyapp.com/explore/aaon",
"https://master.d7mpwhkjqf33j.amplifyapp.com/explore/americanassesttrust"]

document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('button').addEventListener('click', onclick, false)
  function onclick () {
    chrome.tabs.query({currentWindow: true, active: true},
      function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, 'hi', setLink)
      })
  }
  function setLink(res){
    res.foundd.map((found, idx) => {
      if (!found) {
        return();
      }

      return(
      var a = document.createElement('a');
      a.textContent = 'Link';
      a.href = urls[idx];
      document.body.appendChild(a);
    )})

  }
}, false)
