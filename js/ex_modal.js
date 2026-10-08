// addEventLitenser()이용
        let btn_open = document.querySelector('.btn_open');
        let modal = document.querySelector('.modal');
        let overlay = document.querySelector('.overlay');
        let btn_close = document.querySelector('.btn_close')
        
        // 모달 열기
        btn_open.addEventListener('click' ,()=>active());
        // 모달 닫기
        btn_close.addEventListener('click' ,()=>active());
        // 오버레이 클릭 시 모달 닫기
        overlay.addEventListener('click', ()=>active());

        function active(){
            overlay.classList.toggle('show_overlay');
            modal.classList.toggle('show_modal');
        }