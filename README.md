## Fast React Pizza

### About:

To use the application, you need to give permission to the device location. The application uses device location by [bigdatacloud.com/reverse-geocoding](https://www.bigdatacloud.com/reverse-geocoding)

Single-page responsive web application that allows the user to purchase pizza from the menu.

Features:

- User enters name before ordering
- User can order one or more pizzas from a menu
- Menu is loaded from an API
- User can enter delivery address or choose GPS location
- User can mark order as a priority order, or do it after placing your order
- Each order has a unique ID that can be used to search and view order details

The application fetches Menu, Order, New Orders from API [https://react-fast-pizza-api.onrender.com/api/menu](https://react-fast-pizza-api.onrender.com/api/menu)

You can try here: [fast-react-pizza-com.vercel.app](https://fast-react-pizza-com.vercel.app/)

---

### Sample task, photo:

![image](https://github.com/SimAndrew/fast-react-pizza/assets/44125451/09d46a9a-47ed-40fa-9656-ac582b6797bc)
![image](https://github.com/SimAndrew/fast-react-pizza/assets/44125451/f6acfee4-a93c-457b-87e7-8eda688f365b)
![image](https://github.com/SimAndrew/fast-react-pizza/assets/44125451/2ab9220d-ca0d-4a9e-919f-b4542f8db63d)
![image](https://github.com/SimAndrew/fast-react-pizza/assets/44125451/df0d9bfa-6c6c-486b-b801-09e3a0d22cb2)
![image](https://github.com/SimAndrew/fast-react-pizza/assets/44125451/d5f11fdd-b562-46b0-86ce-6d466e6f4150)
![image](https://github.com/SimAndrew/fast-react-pizza/assets/44125451/bc12fb39-ce7f-4bf1-9085-90b720b6367e)


---

### Technologies, Libraries:

- [React JS](https://react.dev/)
- [Vite JS](https://vitejs.dev/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- Media query for mobile devices Responsive Design
- Flexbox
- CSS Grid
- [reactrouter.com](https://reactrouter.com/) Single-Page App
- [Redux](https://redux.js.org/)
- [React Redux](https://github.com/reduxjs/react-redux/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Fetches Menu from API](https://react-fast-pizza-api.onrender.com/api/menu)
- [Transform latitude/longitude coordinates into precise location bigdatacloud.com](https://www.bigdatacloud.com/reverse-geocoding)
---

### Run the app:

- Clone a project: `git clone`

```
https://github.com/SimAndrew/fast-react-pizza.git
```

- Open project code in your editor.
- Install the dependencies, enter into the terminal:

```
npm install
```

- Run the project, enter into the terminal:

```
npm run dev
```