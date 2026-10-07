/* "Enviar caso" form → opens WhatsApp with a ready message */
export function initCaseForm(form, phone) {
  if (!form) return;
  const err = form.querySelector('.form-error');
  const done = form.querySelector('.form-done');
  const fallback = form.querySelector('[data-wa-fallback]');
  const nameField = form.querySelector('#f-nome').closest('.field');
  const typeField = form.querySelector('.chips');

  const showError = (msg, field) => {
    err.textContent = msg;
    err.hidden = false;
    field.classList.add('is-invalid');
    const focusable = field.querySelector('input');
    if (focusable) focusable.focus();
  };

  form.addEventListener('input', (e) => {
    const f = e.target.closest('.field');
    if (f) f.classList.remove('is-invalid');
    if (!form.querySelector('.is-invalid')) err.hidden = true;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nome = (data.get('nome') || '').toString().trim();
    const tipo = (data.get('tipo') || '').toString();
    const cro = (data.get('cro') || '').toString().trim();
    const clinica = (data.get('clinica') || '').toString().trim();
    const detalhes = (data.get('detalhes') || '').toString().trim();
    const prazo = (data.get('prazo') || '').toString().trim();
    done.hidden = true;
    if (!nome) return showError('Informe seu nome para continuar.', nameField);
    if (!tipo) return showError('Escolha o tipo de trabalho.', typeField);

    let intro = `Olá, ITO! Sou ${nome}`;
    if (cro) intro += `, ${cro}`;
    if (clinica) intro += `, da ${clinica}`;
    const lines = [intro + '.', `Quero enviar um caso de ${tipo.toLowerCase() === 'outro' ? 'outro tipo de trabalho' : tipo}.`];
    if (detalhes) lines.push('', detalhes);
    if (prazo) lines.push('', `Prazo desejado: ${prazo}`);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`;
    fallback.href = url;
    window.open(url, '_blank', 'noopener');
    done.hidden = false;
  });
}
