// ==========================================
// VOLTPRO SCRIPT.JS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // CALL BUTTON
    // ==============================

    const callBtn = document.getElementById("callBtn");
    const modal = document.getElementById("contactModal");

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

        });

    }


    // ==============================
    // CLOSE WHEN CLICKING OUTSIDE
    // ==============================

    if (modal) {

        modal.addEventListener("click", function (e) {

            if (e.target === modal) {

                modal.classList.remove("show");

            }

        });

    }


    // ==============================
    // COPY PHONE
    // ==============================

    const copyBtn = document.getElementById("copyNumber");

    if (copyBtn) {

        copyBtn.addEventListener("click", function () {

            navigator.clipboard.writeText("+359879423059");

            alert("Телефонният номер е копиран.");

        });

    }

});