  AV.init({
      appId: '1Ao7imckprhj98luQK1xebPA-gzGzoHsz',
      appKey: 'cY0YqjpaGxRvGE4o2Mf21Zbq',
      serverURL: 'https://1ao7imck.lc-cn-n1-shared.com',
});
var ryg = document.getElementById('ryg');
var maskreng = document.getElementById('maskreng');
function showRyg() {
  ryg.style.display = 'block';
  maskreng.style.display = 'block';
}
function hideRyg() {
  ryg.style.display = 'none';
  maskreng.style.display = 'none';
}
var ryg = document.getElementById('ryg');
var mask = document.getElementById('masklao');
function showLao() {
  ryg.style.display = 'block';
  masklao.style.display = 'block';
}
function hideLao() {
  ryg.style.display = 'none';
  masklao.style.display = 'none';
}
const nameInput = document.querySelector('.name');
const zhengwenInput = document.querySelector('.zhengwen');
const tjButton = document.querySelector('#tj');
const qxButton = document.querySelector('#qx');
const rygDiv = document.querySelector('#ryg');
const modal = document.querySelector('#modal');
const modalText = document.querySelector('#modalText');
const div2 = document.querySelector('.bg');
const newlz = document.getElementById('newlz');
const mask3 = document.getElementById('mask3');
const Input1 = document.getElementById('nameInput');
const Input2 = document.getElementById('zhengwenInput');
  Input1.addEventListener('input', function() {
    if (Input1.value.length > 10) {
      Input1.value = Input1.value.substring(0, 10); 
    }
  });
  Input2.addEventListener('input', function() {
    if (Input2.value.length > 260) {
      Input2.value = Input2.value.substring(0, 260); 
    }
  });
tjButton.addEventListener('click', () => {
  const name = nameInput.value;
  const data = zhengwenInput.value;
  if (!name.trim() || !data.trim()) {
    modalText.textContent = '昵称和内容都要填写哦';
    modal.style.display = 'block';
    return;
  }
  const PLP = AV.Object.extend('plp');
  const plp = new PLP();
  plp.set('name', name);
  plp.set('data', data);
  plp.save().then(function(response) {
    if (response && response.id) {
      hideRyg()
      nameInput.value = '';
      zhengwenInput.value = '';
      div2.classList.add('animate');
      div2.style.display = 'block';
      div2.addEventListener('animationend', () => {
        div2.style.display = 'none';
        div2.classList.remove('animate');
      });
    } else {
      modalText.textContent = '出错啦...';
      modal.style.display = 'block';
    }
  }).catch(function(error) {
    console.error('数据提交出错：', error);
    modalText.textContent = '出错啦...';
    modal.style.display = 'block';
  });
});
qxButton.addEventListener('click', () => {
  nameInput.value = '';
  zhengwenInput.value = '';
  modal.style.display = 'none';
});
const closeModalButton = document.querySelector('#closeModal');
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
document.getElementById('a1').addEventListener('click', function() {
        showRyg();
});

document.getElementById('qx').addEventListener('click', function() {
  hideRyg();
});
    var buttonA2 = document.getElementById('a2');
    var buttonDiu = document.getElementById('diu');

    var newname = document.getElementById('newname');
    var newdata = document.getElementById('newdata');
    var lao = document.querySelector('.lao');

    buttonA2.addEventListener('click', function() {
        var plpQuery = new AV.Query('plp');
        plpQuery.count().then(function(count) {
          if (count > 0) {
            var randomIndex = Math.floor(Math.random() * count);

            plpQuery.skip(randomIndex);
            plpQuery.limit(1);

            plpQuery.find().then(function(results) {
              if (results.length > 0) {
                var randomResult = results[0];
                var name = randomResult.get('name');
                var data = randomResult.get('data');
                    mask3.style.display = 'block';
                    newlz.classList.remove('newlaozi');


                newname.textContent = '你捡到了一个来自 ' + name + ' 的漂流瓶';
                newdata.textContent = data;
	setTimeout(function() {
                mask3.style.display = 'none';
                newlz.classList.add('newlaozi');
               showLao();
               lao.style.display = 'block';
                 }, 5000);
              } else {
                console.log('没有找到数据。');
              }
            });
          } else {
            console.log('没有找到数据。');
          }
        });
    });
    buttonDiu.addEventListener('click', function() {
      hideLao();
});