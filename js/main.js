document.addEventListener("DOMContentLoaded", () => {
  // 1. Highlight Menu Navigasi Aktif Otomatis Berdasarkan Halaman
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
    }
  });

  // 2. Handling Smooth Scroll untuk Anchor Link
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId !== "#") {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });

  // 3. Penanganan Formulir Pendaftaran Kegiatan (Validasi & Notifikasi Moderen)
  const registrationForm = document.querySelector('form[action="#"]');
  if (registrationForm) {
    registrationForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Ambil nilai input
      const inputs = registrationForm.querySelectorAll(".form-control");
      let isValid = true;

      inputs.forEach((input) => {
        if (input.hasAttribute("required") && !input.value.trim()) {
          isValid = false;
          input.style.borderColor = "#ef4444";
        } else {
          input.style.borderColor = "var(--border-color)";
        }
      });

      if (isValid) {
        alert("Terima kasih! Pendaftaran kegiatan Anda telah berhasil diproses.");
        registrationForm.reset();
      } else {
        alert("Mohon lengkapi semua kolom formulir yang wajib diisi.");
      }
    });
  }
});