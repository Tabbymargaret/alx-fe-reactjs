function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-amber-100 shadow-lg sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm">
      <img
        src="https://plus.unsplash.com/premium_photo-1669748157617-a3a83cc8ea23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D"
              alt="User"
              className="sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full w-36 h-36 mx-auto"
      />
      <h1 className="sm:text-lg md:text-xl text-xl font-semibold text-blue-800 my-4">John Doe</h1>
      <p className="sm:text-sm md:text-base text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
