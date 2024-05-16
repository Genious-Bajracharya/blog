export default function Header() {
  return (
    <div className="relative">
      <img
        src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Hero-image"
        className="object-cover w-full h-96" // Adjust height as needed
      />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h1 className="text-4xl font-bold">Welcome to BlogzAll</h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}
