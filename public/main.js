//I recieved help from Void, Will, Shawna, Pedro, Vikiana, Sarah, and Ty
var thumbUp = document.getElementsByClassName('fa-heart');

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const username = this.parentNode.parentNode.childNodes[1].innerText
        const event = this.parentNode.parentNode.childNodes[3].innerText
        const date = this.parentNode.parentNode.childNodes[5].innerText
        const location = this.parentNode.parentNode.childNodes[7].innerText
        const msg = this.parentNode.parentNode.childNodes[9].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[11].innerText)
        fetch('thumbUp', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'username': username,
            'event': event,
            'date': date,
            'location': location,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
