# Proyecto de Práctica DevOps

Este es un proyecto de práctica para aprender y aplicar conceptos de DevOps. El proyecto incluye:

- Una estructura básica de archivos
- Un archivo HTML simple
- Configuración básica de Git
- Pruebas unitarias con Vitest
- CI/CD con GitHub Actions
- Despliegue automático en GitHub Pages

## Estructura del Proyecto

```
.
├── docs/
│   └── index.html
├── tests/
│   └── index.test.js
├── .github/
│   └── workflows/
│       └── test.yml
├── .gitignore
├── package.json
├── vitest.config.js
└── README.md
```

## Requisitos

- Git
- Navegador web moderno
- Node.js 18 o superior

## Pruebas

Para ejecutar las pruebas localmente:

```bash
npm install
npm test
```

## GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages. La página web está disponible en:

https://[TU-USUARIO].github.io/[NOMBRE-DEL-REPO]/

Para configurar GitHub Pages en tu repositorio:
1. Ve a la configuración del repositorio
2. Navega a la sección "Pages"
3. En "Source", selecciona la rama "main" y la carpeta "docs"
4. Guarda los cambios

## Dominio Personalizado

Si deseas usar un dominio personalizado:
1. Agrega tu dominio al archivo `CNAME`
2. Configura los registros DNS de tu dominio para apuntar a GitHub Pages
3. Habilita la opción de dominio personalizado en la configuración de GitHub Pages 