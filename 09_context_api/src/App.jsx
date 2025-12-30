import Bill from "./components/Bill";
import Card from "./components/Card";
const App = () => {
  const inventory = [
    {
      id: 1,
      title: "Apple",
      price: 10,
      img: "https://plus.unsplash.com/premium_vector-1722200084794-9155e6c2a1c7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Strawberry",
      price: 15,
      img: "https://plus.unsplash.com/premium_vector-1721857143936-152fbae71cab?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Banana",
      price: 20,
      img: "https://plus.unsplash.com/premium_vector-1721988781361-710efe0b3dbd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Watermelon",
      price: 25,
      img: "https://plus.unsplash.com/premium_vector-1721988786442-95d8cbc04784?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      title: "Chocolate",
      price: 70,
      img: "https://plus.unsplash.com/premium_vector-1733297092486-e3bc899095de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      title: "Coffee Beans",
      price: 100,
      img: "https://plus.unsplash.com/premium_vector-1720833276380-436f053a77bd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="flex flex-row bg-gray-950 min-h-screen">
      <div className="w-2/3 border-r border-gray-800">
        <div className="flex flex-row flex-wrap gap-3 p-4">
          {inventory.map((item) => (
            <Card
              key={item.id} // Essential for React performance
              title={item.title}
              price={item.price}
              img={item.img}
            />
          ))}
        </div>
      </div>

      <div className="w-1/3 p-4">
        <Bill />
      </div>
    </div>
  );
};

export default App;
