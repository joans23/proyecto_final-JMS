# 🛒 mi carrito.com — Proyecto eCommerce en React

Este es un proyecto de eCommerce construido con **React** y **React Router**, usando **React-Bootstrap** para el diseño UI. La aplicación simula una tienda online moderna con secciones como contacto, carrito, login y más.

---

## 🚀 Funcionalidades principales

- 🧾 Página de inicio con productos destacados
- 🛍️ Vista de productos con carrusel de imágenes
- 🛒 Carrito persistente y contador en la navbar
- 🔐 Login simulado con control de acceso
- 📦 Página de ofertas
- 📇 Secciones: "Sobre nosotros", "Contacto"
- ⚙️ Carga de datos mediante `useFetch`

---

## 🗂️ Estructura del proyecto

```
src/
├── App.jsx                    # Enrutador principal
├── main.jsx                  # Entry point de React
├── styles.css                # Estilos generales
├── assets/                   # Recursos (ej: imágenes SVG)
│
├── auth/                     # Módulo de autenticación
│   ├── pages/                # Páginas: Login, Admin, Account
│   └── routes/               # Rutas protegidas
│
├── components/               # Componentes reutilizables
│   ├── header/               # NavBar, Minicart y Sidebar
│   ├── footer/               # Footer moderno
│   └── CarouselPdp.jsx       # Carrusel de productos
│
├── hooks/
│   └── useFetch.js           # Hook personalizado para llamadas HTTP
│
├── micarrito/                # Dominio principal de la app
│   ├── layout/               # Layout global con navbar/footer
│   ├── pages/                # Home, About, Contact, Cart, etc.
│   └── routes/               # Rutas de navegación
│
└── router/
    └── AppRouter.jsx         # Composición de rutas principales
```

---

## ⚙️ Tecnologías utilizadas

- [React](https://react.dev/)
- [React Router v6](https://reactrouter.com/en/main)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Material UI](https://mui.com/material-ui/material-icons/)
- `useState`, `useEffect`, y hooks personalizados

---

## ▶️ Cómo ejecutar el proyecto

### 1. Cloná el repositorio

```bash
git clone git@github.com:joans23/proyecto_final-JMS.git
cd mi-carrito
```

### 2. Instalá las dependencias

```bash
npm install
```

### 3. Iniciá el proyecto en desarrollo

```bash
npm run dev
```

---

## ✍️ Notas adicionales

- El estado global del carrito y cantidad de ítems se maneja mediante `useState` y se pasa como props desde el layout.
- El login guarda un flag en `localStorage` (`auth: true`) para simular autenticación.
- `useFetch.js` se puede adaptar fácilmente a distintos endpoints REST.

---

©️ 2025 - mi carrito.com
