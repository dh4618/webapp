//const re = new RegExp('google', 'gi')
//const found = document.documentElement.innerHTML.match(re) != null
//alert(found)

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  const re = new RegExp('google', 'gi')
  const found = document.documentElement.innerHTML.match(re) != null
  sendResponse({foundd: found})
  
})
