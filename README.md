# FrontEnd Angular Portfolio

Aplicación web desarrollada con **Angular 22**, orientada a la gestión de proyectos y solicitudes mediante una interfaz dinámica y componentes reutilizables.

## Tecnologías utilizadas

- Angular 22
- TypeScript
- HTML5
- CSS3
- Angular Router
- Angular Signals
- HttpClient
- JSON Server (API REST simulada)

## Funcionalidades

- Visualización de proyectos disponibles.
- Consulta de información detallada de cada proyecto.
- Registro de nuevas solicitudes.
- Listado y consulta de solicitudes existentes.
- Edición de solicitudes.
- Navegación entre vistas mediante Angular Router.
- Comunicación con una API REST simulada mediante JSON Server.

## Estructura del proyecto

```text
src/app/
├── components/
│   ├── header/
│   └── footer/
├── models/
├── pages/
│   ├── home/
│   ├── proyectos-list/
│   ├── proyecto-details/
│   ├── solicitudes-list/
│   ├── solicitudes-details/
│   └── form/
└── services/
```

## Instalación y ejecución

**1. Clonar el repositorio**

```bash
git clone https://github.com/SpinaNicolas/FrontEnd-Angular-PortfFolio.git
```

**2. Instalar las dependencias**

```bash
npm install
```

**3. Iniciar JSON Server**

En una terminal:

```bash
npx json-server proyectos.json --port 3002
```

En otra terminal:

```bash
npx json-server solicitudes.json --port 3000
```

**4. Ejecutar Angular**

```bash
ng serve
```

Abrir `http://localhost:4200/` en el navegador.

## Objetivo del proyecto

Aplicar conceptos de desarrollo frontend mediante Angular, incluyendo componentes, servicios, rutas dinámicas, formularios, manejo de estado con Signals y consumo de APIs REST.

## Autor

**Nicolás Spina**

[GitHub](https://github.com/SpinaNicolas)
