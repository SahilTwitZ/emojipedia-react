![Emojipedia Screenshot](https://github.com/SahilTwitZ/emojipedia-react/blob/main/screenshot.png)

## 📋 Features

- Browse through a collection of popular emojis
- View detailed descriptions and meanings for each emoji
- Clean, card-based UI for easy reading
- Responsive design that works on desktop and mobile

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

## 📥 Installation

Follow these steps to set up the project locally:

```bash
# Clone the repository
git clone https://github.com/SahilTwitZ/emojipedia-react.git

# Navigate to the project directory
cd emojipedia-react

# Install dependencies
npm install

# Start the development server
npm start
```

The application will start running at `http://localhost:3000`

## 🧩 How It Works

The application displays emoji data from an emojipedia dataset. Each emoji entry contains properties like `id`, `emoji`, `name`, and `meaning`. These properties are rendered in a user-friendly card interface.

## 🔄 Adding New Emojis

To add new emojis to the collection, add entries to your emoji data array:

```javascript
{
  id: [next_id],
  emoji: "🌊",
  name: "Water Wave",
  meaning: "A blue wave of water, curling as if breaking onto a shore. Represents the ocean, surfing, or beach activities."
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

- **Sahil** - [SahilTwitZ](https://github.com/SahilTwitZ)

## 🙏 Acknowledgments

- Inspiration from emoji dictionaries and encyclopedias
- Thanks to all contributors who have helped improve this project
