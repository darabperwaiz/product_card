
# Responsive Product Cards with React and Tailwind CSS

This project demonstrates how to create responsive product cards using **React** and **Tailwind CSS**. The product cards are dynamically rendered based on a data array. The layout is fully responsive and adapts to mobile, tablet, and desktop screens.

## Features

- **Dynamic Product Cards**:
  - Product data is stored in an array and rendered dynamically using `.map()`.
- **Responsive Design**:
  - Tailwind CSS utilities (`grid`, `sm:`, `lg:`) are used to create a responsive grid layout.
- **Minimalist Styling**:
  - Clean, modern design using Tailwind's utility classes.
- **Interactive Elements**:
  - Includes a `Buy Now` button with hover and focus effects.
- **Sample Products**:
  - 6 products with placeholders for image, title, description, and price.

## Demo

| Mobile View          | Tablet View          | Desktop View          |
|----------------------|----------------------|-----------------------|
| ![Mobile Screenshot](https://github.com/user-attachments/assets/224a511f-4fd8-4632-b7c7-5bded58de2d4)
 | ![Tablet Screenshot](https://github.com/user-attachments/assets/f496c946-5957-42ed-af71-087571e85728)
 | ![Desktop Screenshot](https://github.com/user-attachments/assets/01deeed9-e5c9-44e5-9973-bdb5d3a7b60f)
 |

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/responsive-product-cards.git
   cd responsive-product-cards
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

The product data is stored in an array in the `ProductCard` component. You can customize the product list by modifying the `products` array:

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.

## Project Structure

```
src/
├── components/
│   ├── ProductCard.js   # Component for rendering product cards
├── index.js             # Entry point
├── App.js               # Main application component
└── styles/
    └── tailwind.css     # Tailwind configuration
```

## Responsive Layout

- **Mobile**: Single-column layout.
- **Tablet**: Three-column layout.
- **Desktop**: Four-column layout.

## Customization

- **Styling**:
  Modify the Tailwind classes in the `ProductCard` component to customize the design.
- **Product Data**:
  Update the `products` array to display your own product information.

---

### **Screenshots**

#### **Mobile View**
![Mobile View](https://github.com/user-attachments/assets/a7cf16cf-51d4-42ff-ab42-0483ff36bf58)

## **Desktop View**
##![Desktop View](https://github.com/user-attachments/assets/ad9047f0-b714-430b-a835-727020750a93)

---

