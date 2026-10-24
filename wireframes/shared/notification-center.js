document.addEventListener('DOMContentLoaded',function(){
  const items=Array.from(document.querySelectorAll('.notification'));
  const filters=Array.from(document.querySelectorAll('[data-notification-filter]'));
  const empty=document.getElementById('notificationEmpty');

  function applyFilter(value){
    let visible=0;
    items.forEach(function(item){
      const show=value==='all'||item.classList.contains('unread');
      item.hidden=!show;
      if(show) visible+=1;
    });
    if(empty) empty.hidden=visible!==0;
    filters.forEach(function(button){button.classList.toggle('active',button.dataset.notificationFilter===value)});
  }

  function markRead(item){
    item.classList.remove('unread');
    const button=item.querySelector('[data-mark-read]');
    if(button) button.remove();
  }

  filters.forEach(function(button){button.addEventListener('click',function(){applyFilter(button.dataset.notificationFilter)})});
  document.querySelectorAll('[data-mark-read]').forEach(function(button){button.addEventListener('click',function(){markRead(button.closest('.notification'))})});
  document.querySelectorAll('[data-notification-action]').forEach(function(link){link.addEventListener('click',function(){markRead(link.closest('.notification'))})});
  const markAll=document.getElementById('markAllRead');
  if(markAll) markAll.addEventListener('click',function(){items.forEach(markRead);applyFilter(document.querySelector('[data-notification-filter].active').dataset.notificationFilter)});
});
