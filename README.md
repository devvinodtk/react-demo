# React Demo App for Routing

This Project is to demo the Routing in React JS using `react-router-dom` library.

## Steps involved in setting up route.

The following steps are involved:

### Step 1: Install React Router

First, you need to install the React Router library if it's not already installed.

`npm install react-router-dom`

### Step 2: Setup Basic Routing

1. Create a Basic App Structure

`import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';` 

`<Router> ... </Router>`

`<Link>...</Link>`

The Link component replaces traditional anchor tags (<a>) and enables navigation without reloading the page.

`<Routes> ... </Routes>`

`<Route path="/" element={<Home />} />`

or

`<Route path='*' Component={NotFound} />`

Routes and Route help define different pages in your React application.

2. Create Components

`useParams` is a hook used to access dynamic parameters in the URL.

Create the components as needed.


### Step 3: Nested Routes

`Outlet` is used to render nested routes within a parent component.
