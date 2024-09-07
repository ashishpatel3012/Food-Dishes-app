import { useState } from "react";
import { useEffect } from "react";

export const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState(["indian"]);
  const [inputData, setInputData] = useState("");


  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
      const data = await api.json();
      console.log(data.meals);
      setMealData(data.meals);
    };

    fetchDataFromApi();
  }, [area]);
  


  const submitHandler = async(e)=>{
        
        e.preventDefault();              
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`);
        const data = await api.json();  
        console.log(data.meals);
        setMealData(data.meals);

        setInputData(" "); g
        
      };
      submitHandler();
  
    
  
  return (
    
        <>
      <div className=" ">
        <div className="d-flex flex-row justify-content-center p-3 w-100 my-5  ">

          <form className="w-50  d-flex " onSubmit={submitHandler} >
            <input
              type="text"
              className="w-75 ps-3 rounded"
              placeholder="enter recipe name"
              onChange={(e)=>setInputData(e.target.value)}
            />
          </form>

          <div className="d-flex  column-gap-3">
            <button type="button" className="btn  btn-outline-primary" onClick={()=>setArea("Indian")}>
              Indian
            </button>
            <button type="button" className="btn btn-outline-secondary" onClick={()=>setArea("Canadian")}>
              Canadian
            </button>
            <button type="button" className="btn btn-outline-success" onClick={()=>setArea("American")}>
              American
            </button>
            <button type="button" className="btn btn-outline-danger" onClick={()=>setArea("Thai")}>
              Thai
            </button>
            <button type="button" className="btn btn-outline-warning" onClick={()=>setArea("British")}>
              British
            </button>
            <button type="button" className="btn btn-outline-info" onClick={()=>setArea("Russian")}>
              Russian
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "25px",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {mealData.map((data) => (
            <div key={data.idMeal} style={{ textAlign: "center" }}>
              <div>
                <img
                  src={data.strMealThumb}
                  alt=""
                  style={{
                    width: "230px",
                    borderRadius: "10px",
                    border: "2px solid grey",
                  }}
                />
                <p className="mt-2">{data.strMeal}</p>
              </div>
              {/* <p>{data.strMeal}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}





