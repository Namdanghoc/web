const gif = document.getElementById('gif');
const question = document.getElementById('question');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const sound1 = document.getElementById('bg-music1');
const sound2 = document.getElementById('bg-music2');
const sound3 = document.getElementById('bg-music3');
const sound4 = document.getElementById('bg-music4');

const content = [
  { gif: 'https://i.pinimg.com/originals/7a/ef/73/7aef734a86dce4dc206976d4f0586f2c.gif', message: 'Em chắc chứ? 😢' },
  { gif: 'https://i.pinimg.com/originals/c8/07/e2/c807e26d8aed392f172f0bf441f60626.gif', message: 'Thử nghĩ lại nha 🥺' },
  { gif: 'https://i.pinimg.com/originals/0d/ac/7e/0dac7e14010362ff081e2167be218341.gif', message: 'Đừng mà, cho anh cơ hội đi 💔' },
  { gif: 'https://i.pinimg.com/originals/88/e7/86/88e786492cc527584feee199936813dd.gif', message: 'Thiệt luôn đó hả? 😭' },
  { gif: 'https://i.pinimg.com/originals/82/be/ae/82beaeb21c686871437f88bbc1593288.gif', message: 'Một lần nữa thôi, năn nỉ đó 😞' },
  { gif: 'https://i.pinimg.com/originals/97/91/de/9791de11497556c4a5e800427c48fc47.gif', message: 'Anh buồn đó nha... 😔' },
];

let clickCount = 0;

function program(delay = 200) {
  (function () {
    const _b = (s) => decodeURIComponent(escape(atob(s)));
    const _d = [
      "QuG6o24gcXV54buBbiB0aHXhu5ljIHbhu4IgRHIuR2lmdGVy",
      "VGlrdG9rOiBodHRwczovL3d3dy50aWt0b2suY29tL0Bkci5naWZ0ZXIzMDY=",
      "R2l0aHViOiBodHRwczovL2dpdGh1Yi5jb20vRHJHaWZ0ZXI="
    ];

    setTimeout(() => {
      _d.forEach(x => console.log(_b(x)));
    }, delay);
  })();
}

noBtn.addEventListener('click', () => {
  const index = clickCount % content.length;
  gif.src = content[index].gif;
  question.textContent = content[index].message;
  clickCount++;

  const growth = 1 + (clickCount * 0.2); 
  yesBtn.style.fontSize = `${growth}rem`;
  
  const scaleRatio = 1 + (clickCount * 0.3); 
  yesBtn.style.transform = `scale(${scaleRatio})`;
  yesBtn.style.zIndex = "100"; 

  if (clickCount === 3) {
    noBtn.textContent = 'Bấm Có đi 😭';
  } else if (clickCount === 7) {
    noBtn.textContent = 'Năn nỉ đó bấm Có đi 😭';
  }

  if (clickCount <= 5) {
    sound1.play(); 
  } else if (clickCount <= 8) {
    sound2.play(); 
  }else{
    sound3.play();
  }

  const emoji = document.createElement('div');
  emoji.textContent = '😭';
  emoji.classList.add('emoji-effect');

  const rect = noBtn.getBoundingClientRect();
  const scrollY = window.scrollY || window.pageYOffset;
  emoji.style.left = `${rect.left + rect.width / 2}px`;
  emoji.style.top = `${rect.top + scrollY}px`;

  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 1000);
  noBtn.classList.add('shake');
  setTimeout(() => noBtn.classList.remove('shake'), 600);

});
// 1. Lấy các phần tử HTML liên quan đến thư
const letterBtn = document.getElementById('letterBtn');
const letterModal = document.getElementById('letterModal');
const closeBtn = document.querySelector('.close-btn');

// 2. Cập nhật lại sự kiện khi bấm nút "CÓ"
yesBtn.addEventListener('click', () => {
  question.textContent = 'Anh biết mà! Anh cũng yêu em nhiều lắm ❤️';
  gif.src = 'https://i.pinimg.com/originals/7e/f6/9c/7ef69cd0a6b0b78526c8ce983b3296fc.gif';

  noBtn.style.display = 'none';
  yesBtn.style.display = 'none';

  explodeHearts();
  createFloatingImages(); 

  // HIỆN NÚT ĐỌC THƯ LÊN
  letterBtn.style.display = 'inline-block';

  sound4.currentTime = 103.5;
  sound4.play();

  program();
});

// 3. Logic Đóng / Mở Hộp Thư Bí Mật
letterBtn.addEventListener('click', () => {
  letterModal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  letterModal.classList.remove('show');
});

// Bấm ra ngoài vùng bức thư cũng tự động đóng thư lại
window.addEventListener('click', (e) => {
  if (e.target === letterModal) {
    letterModal.classList.remove('show');
  }
});

function explodeHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    const icons = ['❤️', '💖'];
    heart.textContent = icons[Math.floor(Math.random() * icons.length)];
    heart.classList.add('emoji-effect');

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = `${Math.random() * 1.5 + 1}rem`;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }

  setTimeout(explodeHearts, 500);
}

function createFloatingImages(){
    const container = document.getElementById("photo-container");

    const images = [
        "./style/images/1.jpg",
        "./style/images/2.jpg",
        "./style/images/3.jpg",
        "./style/images/4.jpg",
        "./style/images/5.jpg",
        "./style/images/6.jpg",
        "./style/images/7.jpg",
        "./style/images/8.jpg",
        "./style/images/9.jpg",
        "./style/images/10.jpg",
        "./style/images/11.jpg",
        "./style/images/12.jpg",
        "./style/images/13.jpg",
    ];

    const flowers = [
        "🌸", "🌹", "🌺", "💐", "🌼"
    ];

    // Mảng lưu trữ các tọa độ đang có ảnh hiển thị để tránh trùng lặp
    let activePositions = [];

    setInterval(() => {
        const random = Math.random();

        // --- LOGIC XỬ LÝ ẢNH CÁ NHÂN (XUẤT HIỆN KHÔNG ĐÈ NHAU) ---
        if (random < 0.6) {
            let attempts = 0;
            let posX, posY;
            let isValid = false;

            // Vòng lặp tìm vị trí trống (Tối đa 15 lần thử để tránh treo trình duyệt)
            while (!isValid && attempts < 15) {
                attempts++;
                // 1. Chia màn hình thành các khu vực ngẫu nhiên (tính theo vW và vH)
                posX = Math.floor(Math.random() * 8) * 11; // Các cột cách nhau ~11vw (0 đến 77vw)
                posY = Math.floor(Math.random() * 6) * 13; // Các hàng cách nhau ~13vh (0 đến 65vh)

                // 2. Kiểm tra VÙNG CẤM Ở GIỮA (Nơi chứa GIF, Hộp thoại và Emoji)
                // Khoảng cấm: Chiều ngang từ 25% -> 75%, Chiều cao từ 20% -> 75%
                if (posX > 20 && posX < 70 && posY > 15 && posY < 70) {
                    continue; // Nếu rơi vào giữa, bỏ qua và tìm vị trí khác
                }

                // 3. Kiểm tra xem vị trí này đã bị một bức ảnh khác chiếm chỗ chưa
                let isOverlapped = activePositions.some(pos => {
                    return Math.abs(pos.x - posX) < 12 && Math.abs(pos.y - posY) < 15;
                });

                if (!isOverlapped) {
                    isValid = true;
                }
            }

            // Nếu tìm được vị trí trống hợp lý thì tiến hành tạo ảnh
            if (isValid) {
                const img = document.createElement("img");
                img.src = images[Math.floor(Math.random() * images.length)];
                img.classList.add("floating-photo");
                img.style.left = `${posX}vw`;
                img.style.top = `${posY}vh`;

                const randomRotation = Math.random() * 24 - 12; // Xoay nhẹ từ -12 đến 12 độ
                img.style.setProperty('--rot', `${randomRotation}deg`);

                container.appendChild(img);
                
                // Lưu vị trí này vào danh sách "đang bận"
                const currentPos = { x: posX, y: posY };
                activePositions.push(currentPos);

                // Sau khi ảnh biến mất (6s), xóa vị trí này khỏi danh sách bận để chỗ cho ảnh khác
                setTimeout(() => {
                    img.remove();
                    activePositions = activePositions.filter(pos => pos !== currentPos);
                }, 6000);
            }

        // --- LOGIC XỬ LÝ HOA RƠI ---
        } else {
            const flower = document.createElement("div");
            flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
            flower.classList.add("flower");

            // Hoa rơi tự do nên chỉ cần né phần trung tâm ở góc xuất hiện ban đầu
            let flowerX = Math.random() * 90;
            if (flowerX > 30 && flowerX < 70) {
                // Đẩy hoa ra rìa nếu nó định xuất hiện ngay trên đầu hộp thoại chính
                flowerX = Math.random() > 0.5 ? Math.random() * 25 : 75 + Math.random() * 15;
            }

            flower.style.left = `${flowerX}vw`;
            flower.style.fontSize = Math.random() * 30 + 45 + "px";

            container.appendChild(flower);

            setTimeout(() => {
                flower.remove();
            }, 7000);
        }

    }, 700); // Tăng nhẹ thời gian delay lên 0.7s để màn hình thoáng và thơ mộng hơn
}