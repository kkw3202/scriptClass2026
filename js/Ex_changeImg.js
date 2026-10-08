// DOM 연결부
let image_main = document.querySelector('.image_main');
let image_sub = document.querySelector('.image_sub');
let show_info = document.getElementById('show_info');
let info = document.querySelector('.info');

// (더미) 데이터 선언부
let coffee_img = ['pink', 'blue', 'gray'];

// 버튼 기능
show_info.addEventListener('click', () => {
        info.classList.toggle('nowShow');
    });

// 함수
function rander() {
    for (let i = 0; i < coffee_img.length; i++) {
        let img_tag = document.createElement('img');
        img_tag.className = 'sub';
        img_tag.setAttribute('src', `/images/coffee-${coffee_img[i]}.jpg`)
        image_sub.appendChild(img_tag);
    }
}

function pop() {
    let sub = document.querySelectorAll('.sub');
    
    for (let i = 0; i < sub.length; i++) {
        sub[i].addEventListener('mouseenter', () => {
            // image_main.setAttribute('src', `/images/coffee-${coffee_img[i]}.jpg`);
            let now_src= sub[i].getAttribute('src');
            image_main.setAttribute('src', now_src);
        });
    }
}



// 랜더링
rander();
pop();