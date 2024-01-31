// import React, { useEffect, useState } from "react";
// import { RotatingLines } from "react-loader-spinner";

// export default function Formss2() {
//   const [Formdata, setFormdata] = useState({
//     email: "",
//     password: "",
//   });
//   const [loading, setloading] = useState(false);
//   const [Error, setError] = useState({});
//   const handelchange = (e) => {
//     console.log(e.target.value);
//     let vaalues = e.target.value;
//     const { name, value } = e.target;
//     setFormdata({ ...Formdata, [name]: value });
//     if (name === "email") {
//       console.log("this is email");
//       const r = /^[^\s@]+@([\w-]+\.)+[\w-]{2,3}$/;
//       // const r = /^[a-zA-Z]*$/;
//       if (!vaalues.match(r)) {
//         console.log("hiii this is");
//         setError({ email: "email.is not valid" });
//       } else {
//         setFormdata({ ...Formdata, [name]: value });
//         setError("");
//       }
//     }
//   };
//   useEffect(() => {
//     setloading(true);
//     setTimeout(() => {
//       setloading(false);
//     }, 2000);
//     // document.addEventListener("keyup", handelscope);
//   },[]);
// //   let handelscope = (e) => {
// //     console.log(e.key);
// //     if (e.key === "Enter") {
// //       handelsubmit();
// //     }
// //   };
//   const handelsubmit = (e) => {
//     // e.preventDefault();
//     const validation = {};
//     if (Formdata.email.length <= 0) {
//       validation.email = "the email is required";
//     }
//     if (Formdata.password.length < 3) {
//       validation.password = "the password must be more then 4 char";
//     }

//     setError(validation);

//     if (Object.keys(validation).length === 0) {
//       alert("form submited");
//     }
//   };
// const handelenter=(e)=>{
//     console.log("mmmmmm",e.key);
// }
//   return (
//     <div>
//       {loading ? 
//         <RotatingLines
//           visible={true}
//           height="96"
//           width="96"
//           color="red"
//           strokeWidth="5"
//           animationDuration="0.75"
//           ariaLabel="rotating-lines-loading"
//           wrapperStyle={{}}
//           wrapperClass=""
//         />
//       : 
//         <form onSubmit={handelsubmit}>
//           <div>
//             <label>Email</label>
//             <input
//               type="text"
//               onChange={handelchange}
//               name="email"
//               value={Formdata.email}
//             />
//           </div>
//           {Error && <span style={{ color: "red" }}>{Error.email}</span>}
//           <div>
//             <label>Password</label>
//             <input
//               type="text"
//               onChange={handelchange}
//               name="password"
//               value={Formdata.password}
//             />
//           </div>
//           {Error && <span style={{ color: "red" }}>{Error.password}</span>}
//           <div>
//             <button type="submit">submit</button>
//           </div>
//         </form>
//       }
//     </div>
//   );
// }
///////////////////////////////////////////////////////////////////////////////////////////

// again for  enter
///////////////////////////////////
import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

export default function Formss2() {
  const [Formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  // useEffect(()=>{
  //   document.addEventListener("keyup",handelscope)
  // },[])
  // const handelscope=(e)=>{
  //   console.log(e.key)
  //   debugger
  //   if (e.key==="Enter"){

  //     handelsubmit()
  //   }
  // }
      const [Error, setError] = useState();
      const [show, setshow] = useState(false)
      const [load,setlod]=useState(false)
  const handelchange = (e) => {
    console.log(e.target.value);
    let vaalues = e.target.value; 
    const { name, value } = e.target;
    setFormdata({ ...Formdata, [name]: value });
    if (name === "email") {
      console.log("this is email");
      const r = /^[^\s@]+@([\w-]+\.)+[\w-]{2,3}$/;
      // const r = /^[a-zA-Z]*$/;
      if (!vaalues.match(r)) {
        console.log("hiii this is");
        setError({ email: "email.is not valid" });
      } else {
        setFormdata({ ...Formdata, [name]: value });
        setError("");
      }
    }
  };

  const handelsubmit = (e) => {
    e.preventDefault();

    console.log("handelsubmit",e.which)
    const validation = {};
    if (Formdata.email.length === 0) {
      validation.email = "the email is required";
    }
    if (Formdata.password.length < 3) {
      validation.password = "the password must be more then 4 char";
    }
    
    setError(validation);

    if (Object.keys(validation).length === 0) {
      alert("form submited");
      setlod(true)
      setTimeout(() => {
        setlod(false)
        setshow(true)
      }, 3000);
    }
    
  };

 
  return (
    <div>
      <form>
        <div>
          <label>Email</label>
          <input
            autoFocus
            type="text"
            onChange={handelchange}
            name="email"
            value={Formdata.email}
          />
        </div>
        {Error && <span style={{ color: "red" }}>{Error.email}</span>}
        <div>
          <label>Password</label>
          <input
            type="text"
            onChange={handelchange}
            name="password"
            value={Formdata.password}
          />
        </div>
        {Error && <span style={{ color: "red" }}>{Error.password}</span>}
        <div>
          {/* <input  onClick={handelsubmit} type="submit"  >submit</input> */}
        </div>
        <button type="submit" onClick={(e) => handelsubmit(e)}>
          submit
        </button>
      </form>

      {load ? (
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      ) : (
        show && (
          <div>
            <h1>the email is : {Formdata.email}</h1>
            <h2>the password is: {Formdata.password}</h2>
          </div>
        )
      )}
    </div>
  );
}

