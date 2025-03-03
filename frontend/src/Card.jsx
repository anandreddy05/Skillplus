function Card({ image }) {
  return (
    <div className="h-auto w-80 flex-shrink-0 shadow-lg shadow-black/50 m-4 p-4 bg-white rounded-lg">
      
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h4 className="text-lg font-bold">Anand</h4>
          <h5 className="text-gray-600">AI Engineer at SimplePlus</h5>
        </div>
      </div>

      <p className="mt-4 text-gray-700 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorem
        voluptatibus autem odit, amet velit reiciendis labore sapiente natus
        ipsam fuga obcaecati, aperiam illum repellendus quo nulla sed, corporis
        nemo.
      </p>
    </div>
  );
}

export default Card;
