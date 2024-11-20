const button = document.getElementById("start-btn");
const background = document.querySelector(".background");

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  
  const size = Math.random() * 10 + 5; // Kích thước ngẫu nhiên
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;

  sparkle.style.left = `${Math.random() * 100}vw`;
  sparkle.style.top = `${Math.random() * 100}vh`;
  sparkle.style.animationDuration = `${Math.random() * 3 + 2}s`;

  background.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 5000); // Xóa hiệu ứng sau 5s
}

button.addEventListener("click", () => {
  for (let i = 0; i < 50; i++) {
    setTimeout(createSparkle, i * 100); // Tạo từng hiệu ứng tim
  }
  alert("Cảm ơn thầy cô vì tất cả! Chúc mừng 20/11 🎉");
});
