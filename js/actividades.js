/* =========================================================
   Catálogo de actividades – Club de Los Años Dorados
   ========================================================= */

const state = {
  filter: 'all',
  search: '',
  currentActivity: null
};

/* ---------- Render de tarjetas ---------- */
function renderGrid() {
  const grid = document.getElementById('catalogGrid');
  const term = state.search.trim().toLowerCase();

  const filtradas = ACTIVIDADES.filter(a => {
    const matchCat = state.filter === 'all' || a.cat === state.filter;
    const matchTxt = !term ||
      a.titulo.toLowerCase().includes(term) ||
      a.metodo.toLowerCase().includes(term);
    return matchCat && matchTxt;
  });

  if (filtradas.length === 0) {
    grid.innerHTML = `<p class="empty-state">No se encontraron actividades con esos criterios.</p>`;
    return;
  }

  grid.innerHTML = filtradas.map(a => `
    <article class="activity-card" data-id="${a.id}" tabindex="0" role="button" aria-label="Ver actividad ${a.titulo}">
      <div class="activity-thumb">${a.icono}</div>
      <div class="activity-body">
        <span class="activity-cat">${CATEGORIAS[a.cat].emoji} ${CATEGORIAS[a.cat].nombre}</span>
        <h3 class="activity-title">${a.titulo}</h3>
        <span class="activity-num">Actividad #${a.id}</span>
      </div>
    </article>
  `).join('');

  // Eventos de apertura
  grid.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('click', () => openModal(Number(card.dataset.id)));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(Number(card.dataset.id));
      }
    });
  });
}

/* ---------- Filtros ---------- */
document.getElementById('filters').addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  state.filter = chip.dataset.filter;
  renderGrid();
});

document.getElementById('searchInput').addEventListener('input', e => {
  state.search = e.target.value;
  renderGrid();
});

/* ---------- Modal ---------- */
const backdrop = document.getElementById('modalBackdrop');

function openModal(id) {
  const a = ACTIVIDADES.find(x => x.id === id);
  if (!a) return;
  state.currentActivity = a;

  document.getElementById('modalCat').textContent =
    `${CATEGORIAS[a.cat].emoji} ${CATEGORIAS[a.cat].nombre}`;
  document.getElementById('modalTitle').textContent = a.titulo;
  document.getElementById('modalMetodo').textContent = a.metodo;
  document.getElementById('modalMateriales').textContent = a.materiales;

  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  backdrop.classList.remove('open');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  state.currentActivity = null;
}

document.getElementById('modalClose').addEventListener('click', closeModal);
backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* =========================================================
   EXPORTACIÓN
   ========================================================= */

/* ---------- Word (.doc) en tamaño Oficio vertical ---------- */
function exportWord() {
  const a = state.currentActivity;
  if (!a) return;

  // Estilos pensados para Oficio vertical (8.5 x 13 in)
  // @page size: 21.59cm 33.02cm
  const html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office"
          xmlns:w="urn:schemas-microsoft-com:office:word"
          xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <title>${a.titulo}</title>
      <style>
        @page {
          size: 21.59cm 33.02cm;   /* Oficio vertical */
          margin: 2.5cm;
        }
        body {
          font-family: 'Calibri', Arial, sans-serif;
          font-size: 12pt;
          color: #222;
          line-height: 1.5;
        }
        h1 { font-size: 20pt; color: #c85a17; margin-bottom: 4pt; }
        .sub { font-size: 10pt; color: #666; margin-bottom: 20pt; }
        h2 { font-size: 13pt; color: #a14410; margin-top: 18pt; margin-bottom: 6pt;
             border-bottom: 1px solid #eadfcd; padding-bottom: 3pt; }
        p { margin: 0 0 10pt; text-align: justify; }
        .footer { margin-top: 30pt; font-size: 9pt; color: #888;
                  border-top: 1px solid #ddd; padding-top: 8pt; }
      </style>
    </head>
    <body>
      <h1>${a.titulo}</h1>
      <div class="sub">Club de Los Años Dorados · Conjunto Residencial Los Andes I</div>
      <div class="sub"><b>Categoría:</b> ${CATEGORIAS[a.cat].nombre} &nbsp;·&nbsp; <b>Actividad N.º ${a.id}</b></div>

      <h2>¿En qué consiste?</h2>
      <p>${a.metodo}</p>

      <h2>Materiales necesarios</h2>
      <p>${a.materiales}</p>

      <div class="footer">
        Documento generado desde el catálogo digital del club · Tamaño Oficio (21.59 × 33.02 cm)
      </div>
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Actividad_${a.id}_${slugify(a.titulo)}.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/* ---------- PDF en tamaño Oficio vertical ---------- */
function exportPdf() {
  const a = state.currentActivity;
  if (!a) return;

  // Se genera vía ventana de impresión del navegador con @page size oficio.
  // El usuario elige "Guardar como PDF" en el diálogo de impresión.
  const win = window.open('', '_blank', 'width=900,height=700');
  win.document.write(`
    <html>
    <head>
      <meta charset="utf-8">
      <title>${a.titulo}</title>
      <style>
        @page {
          size: 21.59cm 33.02cm;   /* Oficio vertical */
          margin: 2.5cm;
        }
        body {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 12pt; color: #222; line-height: 1.55;
        }
        h1 { font-size: 20pt; color: #c85a17; margin: 0 0 4pt; }
        .sub { font-size: 10pt; color: #666; margin-bottom: 20pt; }
        h2 { font-size: 13pt; color: #a14410; margin-top: 18pt;
             border-bottom: 1px solid #eadfcd; padding-bottom: 3pt; }
        p { margin: 0 0 10pt; text-align: justify; }
        .footer { margin-top: 30pt; font-size: 9pt; color: #888;
                  border-top: 1px solid #ddd; padding-top: 8pt; }
        @media print {
          .no-print { display: none; }
          body { margin: 0; }
        }
        .print-bar {
          background: #c85a17; color: #fff; padding: 10px 16px;
          font-family: sans-serif; font-size: 13px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .print-bar button {
          background:#fff; color:#c85a17; border:none; padding:8px 16px;
          border-radius: 6px; cursor:pointer; font-weight:600;
        }
      </style>
    </head>
    <body>
      <div class="print-bar no-print">
        <span>Vista previa · Se abrirá el diálogo de impresión</span>
        <button onclick="window.print()">🖨️ Imprimir / Guardar como PDF</button>
      </div>
      <br>
      <h1>${a.titulo}</h1>
      <div class="sub">Club de Los Años Dorados · Conjunto Residencial Los Andes I</div>
      <div class="sub"><b>Categoría:</b> ${CATEGORIAS[a.cat].nombre} &nbsp;·&nbsp; <b>Actividad N.º ${a.id}</b></div>

      <h2>¿En qué consiste?</h2>
      <p>${a.metodo}</p>

      <h2>Materiales necesarios</h2>
      <p>${a.materiales}</p>

      <div class="footer">
        Documento generado desde el catálogo digital del club · Tamaño Oficio (21.59 × 33.02 cm)
      </div>
      <script>
        window.onload = () => { setTimeout(()=>window.print(), 300); };
      <\/script>
    </body>
    </html>
  `);
  win.document.close();
}

/* Utilidad: nombre de archivo seguro */
function slugify(texto) {
  return texto.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .substring(0, 40);
}

document.getElementById('btnWord').addEventListener('click', exportWord);
document.getElementById('btnPdf').addEventListener('click', exportPdf);

/* ---------- Inicio ---------- */
renderGrid();