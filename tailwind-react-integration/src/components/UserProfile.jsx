function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-10 rounded-lg shadow-amber-100 shadow-sm">
      <img
        src="https://plus.unsplash.com/premium_photo-1669748157617-a3a83cc8ea23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D"
              alt="User"
              className="rounded-full w-36 h-36 mx-auto"
      />
      <h1 className="text-xl font-semibold text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
