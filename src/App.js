import "./App.css";
import { Button } from "@material-tailwind/react";
import { Icon } from "@material-tailwind/react";
function App() {
  return (
    <div className="App font-josefin">
      <header className="bg-headerBg flex px-9 py-2 sticky top-0 left-0 w-full items-center">
        <div className="logo">  
          <img
            className="w-48 ml-6"
            src="https://www.algorismic.uz/images/algorismic-02.svg"
            alt=""
          />
        </div>
        <Button
          color="lightBlue"
          buttonType="outline"
          size="regular"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="dark"
          className="ml-5 mr-7"
        >
          <Icon name="phone" /> +998 99 888 10 88
        </Button>
        <ul className="flex flex-1 justify-end gap-12  items-center text-white text-ul">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">services</a>
          </li>
          <li>
            <a href="#">contacts</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">others</a>
          </li>
        </ul>
      </header>
      <main className="min-h-screen ">
       <div className="flex flex-wrap gap-1">
       <div className="card p-4 bg-slate-300 w-1/3 sm:w-full md:w-6/12 lg:w-4/12 group-hover:bg-slate-600:text-white  active:bg-slate-700 transition-all">
          <div className="card-header ">
            Card header
          </div>
          <div className="card-body">
            <p className="card-hover:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              vel, voluptates iure esse maxime iste asperiores fugit officia
              sapiente officiis dolor aspernatur ea blanditiis. Consectetur rem
              facilis aut tenetur? Quos!
            </p>
          </div>
        </div>
        <div className="card p-4 bg-slate-300 w-1/3 sm:w-full md:w-6/12 lg:w-4/12">
          <div className="card-header">
            Card header 2
          </div>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              vel, voluptates iure esse maxime iste asperiores fugit officia
              sapiente officiis dolor aspernatur ea blanditiis. Consectetur rem
              facilis aut tenetur? Quos!
            </p>
          </div>
        </div>
        <div className="card p-4 bg-slate-300 w-1/3 sm:w-full md:w-6/12 lg:w-4/12">
          <div className="card-header">
            Card header 3
          </div>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              vel, voluptates iure esse maxime iste asperiores fugit officia
              sapiente officiis dolor aspernatur ea blanditiis. Consectetur rem
              facilis aut tenetur? Quos!
            </p>
          </div>
        </div>
       </div>
      </main>
    </div>
  );
}

export default App;
