// ==========================================
// VOLTPRO SCRIPT.JS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // CALL BUTTON
    // ==============================

    const callBtn = document.getElementById("callBtn");
    const modal = document.getElementById("contactModal");

const modalCallBtn = document.getElementById("modalCallBtn");
const qrSection = document.getElementById("qrSection");

    if (callBtn && modal) {

        callBtn.addEventListener("click", function (e) {

            e.preventDefault();

            const mobile =
                /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

            if (mobile) {

                window.location.href = "tel:+359879423059";

            } else {

                modal.classList.add("show");

            }

        });

    }


    // ==============================
    // CLOSE MODAL
    // ==============================

    const closeBtn = document.querySelector(".close-modal");

    if (closeBtn && modal) {

        closeBtn.addEventListener("click", function () {

            modal.classList.remove("show");
if (modalCallBtn && qrSection) {
    modalCallBtn.style.display = "";
    qrSection.style.display = "none";
}

        });

    }


    // ==============================
    // CLOSE WHEN CLICKING OUTSIDE
    // ==============================

    if (modal) {

        modal.addEventListener("click", function (e) {

            if (e.target === modal) {

                modal.classList.remove("show");
			if (modalCallBtn && qrSection) {
    modalCallBtn.style.display = "";
    qrSection.style.display = "none";
}

            }

        });

    }


    // ==============================
    // COPY PHONE
    // ==============================
if (modalCallBtn && qrSection) {

    modalCallBtn.addEventListener("click", function(e){

        if (!/Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent)) {

            e.preventDefault();

            modalCallBtn.style.display = "none";
            qrSection.style.display = "block";

        }

    });

}

    const copyBtn = document.getElementById("copyNumber");

    if (copyBtn) {

        copyBtn.addEventListener("click", function () {

            navigator.clipboard.writeText("+359879423059");

            alert("Телефонният номер е копиран.");

        });

    }

// ==============================
// HAMBURGER MENU
// ==============================

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function (e) {

        e.stopPropagation();

        menuToggle.classList.toggle("active");
        mainNav.classList.toggle("active");

    });

    document.addEventListener("click", function (e) {

        if (
            !mainNav.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {

            menuToggle.classList.remove("active");
            mainNav.classList.remove("active");

        }

    });

    mainNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            mainNav.classList.remove("active");

        });

    });

    document.addEventListener("keydown", function(e){

        if(e.key==="Escape"){

            menuToggle.classList.remove("active");
            mainNav.classList.remove("active");

        }

    });

    window.addEventListener("resize", function(){

        if(window.innerWidth>1200){

            menuToggle.classList.remove("active");
            mainNav.classList.remove("active");

        }

    });

}

// ==============================
// SCROLLED HEADER
// ==============================

const header = document.querySelector(".main-header");

if (header) {

    function updateHeader() {

        if (window.scrollY > 5) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

}

const phoneToggle = document.getElementById("phoneToggle");
const phoneDropdown = document.getElementById("phoneDropdown");

if (phoneToggle && phoneDropdown) {

    phoneToggle.addEventListener("click", () => {

        phoneDropdown.classList.toggle("show");
        phoneToggle.classList.toggle("active");

    });

    document.addEventListener("click", (e) => {

        if (!phoneToggle.contains(e.target) &&
            !phoneDropdown.contains(e.target)) {

            phoneDropdown.classList.remove("show");
            phoneToggle.classList.remove("active");

        }

    });

}

});







