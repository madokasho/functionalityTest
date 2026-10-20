const dialog = document.getElementById('popupText');
        document.querySelectorAll('.container div').forEach(box => {
            box.addEventListener('click', () => dialog.showModal());
            });
        document.getElementById('closeButton').addEventListener('click', () => dialog.close());