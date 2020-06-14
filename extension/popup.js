document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('button').addEventListener('click', onclick, false)
  function onclick () {
    chrome.tabs.query({currentWindow: true, active: true},
      function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, 'hi', setLink)
      })
  }
  function setLink(res){
    var a = document.createElement('a')
    a.textContent = 'Link'
    a.href = "https://master.d7mpwhkjqf33j.amplifyapp.com"
    document.body.appendChild(a)
  }
}, false)
