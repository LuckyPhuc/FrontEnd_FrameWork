export default function Profile(props) {
  // // handle
  // const changeValue = (event) => {
  //   setName(event.target.value);
  // };
  // const changeName = (event) => {
  //   event.preventDefault();
  //   console.log(event);
  //   //setName(event.target.value);
  // };

  return (
    <div className="Profile">
      <img src="https://i.pinimg.com/originals/2e/70/e9/2e70e928a1300df2dcff2976763e44bb.gif" />
      <h1>Tên: {props.name}</h1>
      <h2>Mssv: {props.id}</h2>
      <h2>Tuổi: {props.old}</h2>
      <h2>Lớp: {props.grade}</h2>
      {/* <form>
        <input
          onChange={changeValue}
          type="text"
          name="name"
          placeholder="Change Name"
        />
        <button type="submit" onClick={changeName}>
          ChangeName
        </button>
      </form> */}
      {/* <input
        onChange={changeValue}
        type="text"
        name="name"
        placeholder="Change Name"
      />
      <button onClick={changeName}>ChangeName</button> */}
    </div>
  );
}
