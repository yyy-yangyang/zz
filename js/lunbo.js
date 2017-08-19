 window.onload = function(){
      var container = document.getElementById('container');
      var list = document.getElementById('list');
      var prev = document.getElementById('prev');
      var next = document.getElementById('next');
      
      function animate(offset) {
        var newLeft =parseInt(list.style.left) + offset;
        var time = 300;
        var interval = 10;
        var speed = offset/(time/interval);

        function go (){
          if ( (speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft) ) {
            list.style.left = parseInt(list.style.left) + speed + 'px';
            setTimeout(go, interval);
         }
         else{
          list.style.left = newLeft + 'px';
         if (newLeft > -1350) {
            list.style.left = -6750 + 'px';
         }
         if (newLeft < -6750) {
            list.style.left = -1350 + 'px';
         }
         }
      }
      go();
        
      }
      next.onclick = function () {
        animate(-1350);
      }
      prev.onclick = function () {
        animate(1350);
      }
   }