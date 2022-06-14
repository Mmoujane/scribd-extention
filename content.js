chrome.runtime.onMessage.addListener(receiveedMessage);


function receiveedMessage(request, sender, sendResponse){
    if(request.message === 'clean'){
    let span = document.querySelectorAll('span');
    let pop = document.querySelectorAll('.promo');
    let img = document.querySelectorAll('img');
    pop.forEach(function(item, index){
        item.remove();
    });
    img.forEach(function(item, index){
        item.style.opacity = 1;
    });
    span.forEach(function(item, index){
        item.style.color = 'black';
        item.style.textShadow = '0px 0px 0px black';
        item.style.userSelect = 'text';
        item.removeAttribute('unselectable')
    });
    }
}
