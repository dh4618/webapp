//const re = new RegExp('google', 'gi')
//const found = document.documentElement.innerHTML.match(re) != null
//alert(found)

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  const regs = [new RegExp('facebook', 'gi'),
                new RegExp('american eagle outfitters', 'gi'),
                new RegExp('aaron', 'gi'),
                new RegExp('applied optoelect', 'gi'),
                new RegExp('biotelemetry', 'gi'),
                new RegExp('black hills', 'gi'),
                new RegExp('aaon', 'gi'),
                new RegExp('american assets trust', 'gi')]

  const foundd = regs.map((re, idx)=>{return(document.documentElement.innerHTML.match(re) != null)})
  sendResponse({foundd: foundd})

})
