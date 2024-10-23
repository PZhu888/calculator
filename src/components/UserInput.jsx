export default function UserInput() {
  return (
    <section id="user-input">
      <form action="">
        <div className="input-group">
          <p>
            <label>Initial Inverstment </label>
            <input type="number" required />
          </p>
          <p>
            <label htmlFor="name">Annual Inverstment</label>
            <input type="number" required />
          </p>
        </div>

        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input type="number" required />
          </p>
          <p>
            <label>Duation</label>
            <input type="number" required />
          </p>
        </div>
      </form>
    </section>
  );
}
