import "./index.css"

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="username" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="full name" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="email" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="text" placeholder="password" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="Phone" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Address" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
      <button className="newUserButton">Create</button>
    </div>
  )
}
