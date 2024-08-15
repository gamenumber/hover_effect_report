const bubbleContainer = document.getElementById('bubble-container');
const bubbleCount = 20;
const bubbles = [];

// 속도를 1.5배로 증가시킬 변수
const speedMultiplier = 1.5;

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    const size = Math.random() * 60 + 40; // 40px에서 100px 사이의 크기
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    bubble.style.left = `${Math.random() * window.innerWidth}px`;
    bubble.style.top = `${Math.random() * window.innerHeight}px`;
    
    const hue = Math.random() * 360;
    bubble.style.backgroundColor = `hsla(${hue}, 70%, 50%, 0.3)`;
    
    bubbleContainer.appendChild(bubble);
    
    return {
        element: bubble,
        x: parseFloat(bubble.style.left),
        y: parseFloat(bubble.style.top),
        speedX: (Math.random() * 2 - 1) * speedMultiplier, // 속도를 1.5배로 증가
        speedY: (Math.random() * 2 - 1) * speedMultiplier  // 속도를 1.5배로 증가
    };
}

for (let i = 0; i < bubbleCount; i++) {
    bubbles.push(createBubble());
}

function moveBubbles() {
    bubbles.forEach(bubble => {
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;
        
        // 경계에 도달했을 때 반사
        if (bubble.x <= 0 || bubble.x >= window.innerWidth - parseFloat(bubble.element.style.width)) {
            bubble.speedX *= -1;
        }
        if (bubble.y <= 0 || bubble.y >= window.innerHeight - parseFloat(bubble.element.style.height)) {
            bubble.speedY *= -1;
        }
        
        bubble.element.style.left = `${bubble.x}px`;
        bubble.element.style.top = `${bubble.y}px`;
    });
    
    requestAnimationFrame(moveBubbles);
}

moveBubbles();
