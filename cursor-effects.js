// Bắt sự kiện khi click chuột (PC) hoặc chạm màn hình (Điện thoại)
document.addEventListener('click', function(e) {
    const particleCount = 7; // Số lượng hạt bay ra mỗi lần bấm
    for (let i = 0; i < particleCount; i++) {
        createParticle(e.clientX, e.clientY);
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'click-particle';
    
    // Tạo góc bay ngẫu nhiên tứ tung
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 70 + 20;
    const tx = Math.cos(angle) * speed;
    const ty = Math.sin(angle) * speed;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    document.body.appendChild(particle);
    
    // Hiệu ứng bay ra rồi biến mất mượt mà
    const animation = particle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
    ], {
        duration: 600,
        easing: 'cubic-bezier(0, .9, .57, 1)'
    });
    
    animation.onfinish = function() {
        particle.remove();
    };
}