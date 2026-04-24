import logo from "../assets/logo.png"

const DateComponent = () => {
  const today = new Date();

  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long', // "Tuesday"
    year: 'numeric', // "2026"
    month: 'long',   // "April"
    day: 'numeric',  // "14"
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>{formattedDate}</h2>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="logo">
        <img className="" src={logo} alt="" />
      </div>

      <div>
        <h2>Journalism withtout fear or favor</h2>
      </div>

      {/* Time */}
      <div className="-mt-4">
        <DateComponent />
      </div>
    </div>
  )
}

export default Header