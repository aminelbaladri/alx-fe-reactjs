function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl sm:p-8 max-w-xs sm:max-w-sm my-10 sm:my-20 md:p-8sm:p-4 md:max-w-sm">
        <img className="rounded-full w-36 h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out sm:w-24 sm:h-24 md:w-36 md:h-36" src="https://via.placeholder.com/150" alt="User" />
        <h1 className="text-lg sm:text-xl text-blue-800 mb-4 md:text-xl hover:text-blue-500 my-4">John Doe</h1>
        <p className="text-sm sm:text-base text-gray-600 text-center md:text-xl ">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;
  