# Pasos para subir tu proyecto React a GitHub

Sigue estos pasos sencillos para publicar tu calculadora de propinas.

## 1. Crear el Repositorio

1. Ve a [GitHub](https://github.com/new).
2. Nombre del repositorio: `calculadora-propinas-react` (o el que prefieras).
3. **No** selecciones "Add a README", ni .gitignore, ni license (ya los tenemos).
4. Crea el repositorio.

## 2. Comandos en tu Terminal

Abre la terminal en la carpeta del proyecto (`calculadora_propinas`) y ejecuta:

### Paso 1: Agregar los cambios actuales (nuevo README)

```bash
git add .
git commit -m "Docs: Agregar documentación del proyecto Calculadora de Propinas"
```

### Paso 2: Vincular con GitHub

_Reemplaza `[URL_DEL_REPO]` con la URL que te dio GitHub (ej: `https://github.com/CODEATD/calculadora-propinas-react.git`)_

```bash
git remote add origin [URL_DEL_REPO]
```

### Paso 3: Subir

```bash
git branch -M main
git push -u origin main
```

---

**Nota**: Si ya tenías un `remote` configurado de otro intento, usa:
`git remote set-url origin [URL_DEL_REPO]`
