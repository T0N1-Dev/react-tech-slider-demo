 # React Tech Slider Demo

This project is a demonstration application for the npm package `react-tech-slider`, allowing users to experiment and test the component's different properties in real-time.

## 🚀 Features

- Interactive interface to modify slider properties
- Real-time preview of changes
- Customization of:
  - Border width
  - Border color
  - Background color
  - Icon width
  - Auto play
  - Pause on hover
  - Animation speed

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/T0N1-Dev/react-tech-slider-demo.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Usage

1. Navigate to the main page
2. Use the controls in the left panel to modify the slider properties
3. Look at real-time changes in the preview panel
4. Copy the generated code to implement the slider in your own project

## 🔧 Customizable Properties

- **Border Width**: Controls the slider border thickness (0-10px)
- **Border Color**: Select the border color
- **Background Color**: Define the slider background color
- **Icon Width**: Increase icon width
- **Auto Play**: Toggle automatic playback
- **Pause on Hover**: Toggle pause on hover
- **Animation Speed**: Adjust animation speed (5000-40000ms)

## 📝 Code Example

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

## 📚 Dependencies

- react-tech-slider
- next.js
- react
- tailwindcss

## 🤝 Contributions

Contributions are welcome. Please open an issue or submit a pull request for any improvements or fixes.

## 📄 License

This project is licensed under the MIT License.