
    const textarea = document.getElementById('myTextarea');
    const charCount = document.getElementById('charCount');

    textarea.addEventListener('input', function() {
      charCount.textContent = textarea.value.length;
    });