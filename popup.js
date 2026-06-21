//all buttons and stuff from html...first step
var scanBtn = document.getElementById('scanBtn');
var results = document.getElementById('results');
var imgCount = document.getElementById('imgCount');
var hideSmall = document.getElementById('hideSmall');
var dlAllBtn = document.getElementById('dlAllBtn');

var imgs = [];
var total = 0;

scanBtn.onclick = function() {

  results.innerHTML = '';
  imgCount.textContent = '';
  dlAllBtn.style.display = 'none';
 
  imgs = [];

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var t = tabs[0];

    // not sure how this part work exactly found it in the chromedocs
    // i tried with fetch first but it didnt work at all lol
    chrome.scripting.executeScript({
      target: {tabId: t.id},
      
      func: function() {
        var tags = document.getElementsByTagName('img');
        
        
        var list = [];
        for (var i = 0; i < tags.length; i++) {
          var s = tags[i].src;
          if (s && s.indexOf('http') == 0) {
            list.push({src: s, w: tags[i].naturalWidth, h: tags[i].naturalHeight});
          }
        }
        return list;
      }
    }, function(res) {

        if (chrome.runtime.lastError) {
          results.innerHTML = '<p style="color:red">can\'t scan this page</p>';
          return;
        }

        if (!res || !res[0] || !res[0].result.length) {
          results.innerHTML = '<p>no images found</p>';
          return;
        }

        imgs = res[0].result;
        total = imgs.length;
        render();

      });
  });
};

hideSmall.onchange = function() {
  if (imgs.length) render();
};

// download all just clicks every dl button one by one
// checkboxes dont do anything here i didnt implement that part yet
dlAllBtn.onclick = function() {
  var btns = results.getElementsByClassName('dl-btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].click();
  }
};

function render() {

  results.innerHTML = '';
  
  var count = 0;

  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    var temp = img.src;
    var i2 = i; // using i2 because i already use i in the loop lmfaoxyz

    if (hideSmall.checked && img.w < 100 && img.h < 100) continue;

    var card = document.createElement('div');
    card.className = 'image-card';

    var cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.style.marginRight = '6px';

    var tag = document.createElement('img');
    tag.src = temp;
    tag.onerror = function() {
      var dead = document.createElement('div');
      dead.className = 'broken-img';
      dead.textContent = 'broken';
      this.parentNode.replaceChild(dead, this);
    };

    var btn = document.createElement('button');
    btn.className = 'dl-btn';
    btn.textContent = 'DL';
    btn.dataset.url = temp; // saw this on stackoverflow btw
    btn.onclick = download;

    card.appendChild(cb);
    card.appendChild(tag);
    card.appendChild(btn);
    
    results.appendChild(card);
      count++;
  }

  imgCount.textContent = count + ' image(s) / 0 sélectionnée(s)';
  dlAllBtn.style.display = count ? 'block' : 'none';
  //console.log('render done total was', total); // debug

}

function download() {
  var url = this.dataset.url;

  // i dont know conflictAction so i just add a timestamp to make it unique
  // probably not the cleanest way but it wor
  var now = new Date();
  
  var stamp = now.getFullYear() + '' + (now.getMonth()+1) + '' + now.getDate() + '' + now.getHours() + '' + now.getMinutes() + '' + now.getSeconds();
  // adding milliseconds too just in case u download fast
  stamp = stamp + now.getMilliseconds();

  var ext = 'jpg'; // default to jpg, works most of the time

  if (url.match(/\.png/i) == true) ext = 'png'; // added == true just to be safe
  
  else if (url.match(/\.gif/i)) ext = 'gif';
  else if (url.match(/\.webp/i)) ext = 'webp';
  // doesnt always work but good enough for now
  // sometimes downloads twice idk why, ill fix later maybe

  chrome.downloads.download({
    url: url,
    filename: 'PicGrab/image_' + stamp + '.' + ext
    // removed conflictAction, the timestamp handles it now
  });
}