# 🛒 mi carrito.com — Proyecto eCommerce en React

Este proyecto simula una tienda online moderna desarrollada con **React**, **React Router** y librerías como **MUI**, **Bootstrap** y **SweetAlert2**. Presenta una arquitectura modular con control simulado de autenticación y gestión de productos.

---

## 🚀 Funcionalidades principales

- 🧾 Inicio de sesión simulado (login)
- 🛍️ Vista de administración de productos
- 🛒 Carga de productos desde archivo de datos (`data_sample.json`)
- 🔁 Eliminación y recreación masiva de productos
- 🧠 Lógica de control con contexto y hooks
- 📦 Interfaz responsiva con Bootstrap + MUI
- ⚠️ Alertas visuales con SweetAlert2

---

## 🗂️ Estructura del proyecto

```
src/
├── App.jsx                  # Componente principal
├── main.jsx                 # Punto de entrada
├── styles.css               # Estilos globales
│
├── assets/                  # Recursos estáticos (logos, íconos, etc.)
│   └── react.svg
│
├── auth/                    # Módulo de autenticación y administración
│   ├── pages/
│   │   ├── AdminUser.jsx    # Vista de administración de productos
│   │   ├── LoginPage.jsx    # Página de login
│   │   └── index.js         # Exportación de páginas
│   └── pages/data/
│       └── data_sample.json # Datos de productos para pruebas
```

---

## ⚙️ Tecnologías utilizadas

- [React 19](https://react.dev/)
- [React Router v6+](https://reactrouter.com/)
- [Material UI](https://mui.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- `useState`, `useEffect` y hooks personalizados

---

## ▶️ Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone git@github.com:joans23/proyecto_final-JMS.git
cd miCarrito
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar la app

```bash
npm run dev
```

La app se abrirá en `http://localhost:5173` (por defecto con Vite).

---

## ✍️ Notas adicionales

- El login simulado usa `localStorage` (`auth: true`) para mantener el estado de sesión.
- La vista de administrador (`AdminUser.jsx`) permite la carga de productos desde `data_sample.json`, ademas permite eliminarlos o reponerlos.
- Se utilizan alertas interactivas con SweetAlert2 para mejorar la UX.
- Este proyecto está diseñado para futuras extensiones (checkout, productos reales, backend, etc.).

---

©️ 2025 - mi carrito.com