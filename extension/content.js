const re = new RegExp('google', 'gi')
const found = document.documentElement.innerHTML.match(re) != null
alert(found)
