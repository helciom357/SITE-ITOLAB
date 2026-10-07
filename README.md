# ITO Digital Dental Lab — site

Site institucional da ITO Digital Dental Lab: laboratório de prótese dentária digital na Barra da Tijuca, Rio de Janeiro, com atendimento exclusivo para dentistas.

O hero mostra a produção de uma prótese total provisória, do escaneamento até a entrega, dirigida pela rolagem:

1. **Envie o caso:** a nuvem de pontos do escaneamento intraoral se forma junto com o scanner.
2. **Alinhamento técnico:** o modelo CAD aparece, com os suportes gerados e a grade da plataforma.
3. **Produção CAD/CAM:** a impressora em resina se materializa e a plataforma desce até a cuba. A peça cresce camada por camada sob a luz UV, com as fatias na tela LCD, e sai da resina escorrendo.
4. **Entrega e suporte:** os suportes são removidos, a peça passa pela cura e ganha a caracterização da gengiva e dos dentes.

Toda a geometria (dentes, gengiva, suportes, disco de PMMA, placa e implantes) é procedural, gerada em código. O site não usa modelos 3D externos nem vídeos.

## Estrutura

```
index.html              página única
assets/css/style.css    estilos (paleta e fontes em :root)
assets/js/              JavaScript gerado pelo build (não editar à mão)
assets/fonts/           Archivo variável (OFL)
assets/img/             favicon, imagem de compartilhamento (og.jpg)
src/                    código-fonte
  main.js               animações, rolagem, seções
  config.js             WhatsApp, e-mail, Instagram, galeria
  core/smooth.js        rolagem suave
  ui/                   formulário e efeitos de cursor
  three/teeth.js        geometria procedural dental
  three/hero.js         cena da impressora (hero)
  three/lab.js          visualizador de materiais (Soluções)
vendor/                 three.js r186 e GSAP 3.15 (cópias locais)
```

## Editar e gerar

Requer [Bun](https://bun.sh).

```bash
bun run build      # gera assets/js/app.js e assets/js/chunks/
bun run dev        # build + servidor local em http://localhost:8080
```

- **Textos:** direto no `index.html`. Os textos das 4 etapas ficam em `src/main.js` (`STEPS`).
- **Contatos e galeria:** `src/config.js`. A seção de galeria só aparece quando houver fotos listadas.
- **Cores:** variáveis no topo de `assets/css/style.css`. As cores da cena 3D ficam em `src/three/shared.js` (`PALETTE`).
- **Fontes:** a Archivo é provisória. Para trocar, coloque o arquivo em `assets/fonts/` e ajuste o `@font-face` e a `--font`.
- **Logo:** no `index.html`, troque o conteúdo de `.brand` por `<img src="assets/img/logo/logo.svg" alt="ITO Digital Dental Lab" class="brand__img">`.

## Publicar

O site é estático. Depois do build, publique estes itens: `index.html`, `.htaccess` e a pasta `assets/`.

- **Hostinger:** envie esses arquivos para `public_html` pelo Gerenciador de Arquivos ou por FTP. Também dá para usar a implantação via Git do hPanel, já que o build fica commitado em `assets/js`. O `.htaccess` já configura compressão, cache e bloqueio das pastas de código. Ative o trecho de HTTPS quando o SSL estiver ativo.
- Funciona em qualquer servidor estático (GitHub Pages, Netlify etc.).

## Licenças de terceiros

- three.js: MIT (`vendor/three/LICENSE`)
- GSAP: Standard "No Charge" License (`vendor/gsap/LICENSE.txt`)
- Archivo: SIL Open Font License (`assets/fonts/OFL-Archivo.txt`)
