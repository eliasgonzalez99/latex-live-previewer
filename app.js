    const input = document.getElementById("latex-input");
    const preview = document.getElementById("preview");
    const charCount = document.getElementById("char-count");
    const renderStatus = document.getElementById("render-status");
    const lastUpdate = document.getElementById("last-update");
    const clearBtn = document.getElementById("clear-btn");
    const exampleBtn = document.getElementById("example-btn");
    const copyBtn = document.getElementById("copy-btn");

    let renderTimeout;

    // Función para actualizar la vista previa
    function updatePreview() {
      const content = input.value.trim();
      
      if (!content) {
        preview.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">🧠</div>
            <div>
              <h3>Vista previa de LaTeX</h3>
              <p>Escribe código LaTeX en el editor para ver el resultado aquí</p>
              <div class="examples">
                Prueba con: <code>$$E = mc^2$$</code> o <code>$$\\frac{a}{b}$$</code>
              </div>
            </div>
          </div>
        `;
        return;
      }

      renderStatus.textContent = "Renderizando...";
      preview.innerHTML = content;
      
      MathJax.typesetPromise([preview])
        .then(() => {
          renderStatus.textContent = "Listo";
          const now = new Date().toLocaleTimeString('es-ES');
          lastUpdate.textContent = `Última actualización: ${now}`;
        })
        .catch((err) => {
          console.error("Error renderizando LaTeX:", err);
          renderStatus.textContent = "Error";
        });
    }

    // Debounce para no renderizar en cada tecla
    input.addEventListener("input", () => {
      charCount.textContent = `${input.value.length} caracteres`;
      
      clearTimeout(renderTimeout);
      renderTimeout = setTimeout(updatePreview, 300);
    });

    // Botón limpiar
    clearBtn.addEventListener("click", () => {
      input.value = "";
      charCount.textContent = "0 caracteres";
      updatePreview();
    });

    // Botón ejemplo
    exampleBtn.addEventListener("click", () => {
      input.value = `# Fórmulas LaTeX de Ejemplo

## Ecuaciones famosas

$$E = mc^2$$

$$\\int_{0}^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$$

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$$

## Matrices

$$\\begin{pmatrix}
a & b \\\\
c & d
\\end{pmatrix}$$

## Ecuaciones cuadráticas

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`;
      
      charCount.textContent = `${input.value.length} caracteres`;
      updatePreview();
    });

    // Botón copiar
    copyBtn.addEventListener("click", () => {
      if (input.value) {
        navigator.clipboard.writeText(input.value).then(() => {
          const originalText = copyBtn.textContent;
          copyBtn.textContent = "¡Copiado!";
          setTimeout(() => {
            copyBtn.textContent = originalText;
          }, 2000);
        });
      }
    });

    // Atajos de teclado
    input.addEventListener("keydown", (e) => {
      // Ctrl/Cmd + Enter para actualizar inmediatamente
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        updatePreview();
      }
      
      // Ctrl/Cmd + L para limpiar
      if ((e.ctrlKey || e.metaKey) && e.key === "l") {
        e.preventDefault();
        clearBtn.click();
      }
    });

    // Mantener el foco en el textarea
    input.focus();
 