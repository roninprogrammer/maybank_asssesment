# 🗺️ Google Places Autocomplete Search App

A React single-page application (SPA) that leverages the Google Places Autocomplete API, Redux, and Redux-Observable to provide an intuitive place search experience. Built with Ant Design for a clean UI and scalable folder structure.

---

## ✨ Features

-  Google Places **Autocomplete**
-  Display results on **Google Maps**
-  State management with **Redux Toolkit**
-  Async actions using **Redux-Observable (RxJS)**
-  **Search history** stored in Redux
-  Unit test scaffolding for reducers and epics
-  High-order layout wrapper with Ant Design
-  Fully **mockable** for fallback or test mode

---

##  Tech Stack

- React 18+
- Redux Toolkit
- Redux-Observable
- RxJS
- Ant Design
- Google Maps JavaScript SDK
- Axios

---

##  Getting Started

### 1. Clone this Repo

```bash
git clone https://github.com/your-username/google-places-redux-app.git
cd google-places-redux-app
```


### 2. Install Dependencies
```bash
npm install
```

### 3. Add Google Maps Script
Open public/index.html and insert this before </body>:
```bash
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&libraries=places"></script>
```

Replace YOUR_GOOGLE_API_KEY with your actual API key.
If not set, the app will fallback to mock data.


### 4. Start the App
```bash
npm start
```

Visit: http://localhost:3000

##  Running Tests (Optional)
Scaffolding is prepared for unit tests using Jest:
```bash
npm run test
```

These should include test cases for reducer initial state, actions, and epic side-effects using Jest & RxJS marbles.

Test files:

src/redux/__tests__/searchSlice.test.js

src/redux/__tests__/searchEpics.test.js

## Project Structure
```bash
src/
├── api/
│   └── googlePlacesApi.js
├── components/
│   ├── PlaceSearch.js
│   ├── SearchHistoryList.js
│   ├── MapContainer.js
│   └── withLayout.js
├── redux/
│   ├── store.js
│   ├── slices/
│   │   └── searchSlice.js
│   ├── epics/
│   │   └── searchEpics.js
│   └── __tests__/
│       ├── searchSlice.test.js
│       └── searchEpics.test.js
├── App.js
└── index.js
```



### Notes

The autocomplete input includes a loading spinner and error toast (Ant Design).

The app supports debounced search using RxJS operators.

Search history persists in Redux and is displayed in a list.


## Author
Vicknesh Balasubramaniam
https://github.com/roninprogrammer