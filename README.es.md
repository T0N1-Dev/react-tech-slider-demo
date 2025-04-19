# React Tech Slider Demo

Este proyecto es una aplicación de demostración para el paquete npm `react-tech-slider`, que permite a los usuarios experimentar y probar las diferentes propiedades del componente en tiempo real.

## 🚀 Características

- Interfaz interactiva para modificar las propiedades del slider
- Vista previa en tiempo real de los cambios
- Personalización de:
  - Ancho del borde
  - Color del borde
  - Color de fondo
  - Ancho de los iconos
  - Reproducción automática
  - Pausa al pasar el mouse
  - Velocidad de animación

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/T0N1-Dev/react-tech-slider-demo.git

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## 📦 Uso

1. Navega a la página principal
2. Utiliza los controles en el panel izquierdo para modificar las propiedades del slider
3. Observa los cambios en tiempo real en el panel de vista previa
4. Copia el código generado para implementar el slider en tu propio proyecto

## 🔧 Propiedades Personalizables

- **Border Width**: Controla el grosor del borde del slider (0-10px)
- **Border Color**: Selecciona el color del borde
- **Background Color**: Define el color de fondo del slider
- **Icon Width**: Aumenta el ancho de los iconos
- **Auto Play**: Activa/desactiva la reproducción automática
- **Pause on Hover**: Activa/desactiva la pausa al pasar el mouse
- **Animation Speed**: Ajusta la velocidad de la animación (5000-40000ms)

## 📝 Código de Ejemplo

```jsx
import { Slider } from "react-tech-slider";

<Slider
  brandsList={techStack}
  borderWidth={2}
  borderColor="#7c05d8"
  backgroundColor="#00000033"
  iconWidth={6}
  isPlay={true}
  pauseOnHoverActive={true}
  durationMs={30000}
/>
```

## 📚 Dependencias

- react-tech-slider
- next.js
- react
- tailwindcss

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para cualquier mejora o corrección.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. 